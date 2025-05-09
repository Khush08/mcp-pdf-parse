import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { z } from 'zod';
import { parsePDFText } from './parsePDFText.js';

// Create server instance
const server = new McpServer({
    name: 'mcp-pdf-parse',
    version: '1.0.0',
    capabilities: {
        resources: {},
        tools: {},
    },
});

server.tool(
    'parse-pdf',
    'Parses text from a PDF url',
    {
        url: z.string(),
    },
    async ({ url }) => {
        try {
            const data = await parsePDFText(url);

            return {
                content: [
                    {
                        type: 'text',
                        text: JSON.stringify(data),
                    },
                ],
                isError: false,
            };
        } catch (error) {
            return {
                content: [
                    {
                        type: 'text',
                        text: `Error parsing PDF ${url}: ${error}`,
                    },
                ],
                isError: true,
            };
        }
    },
);

async function main() {
    const transport = new StdioServerTransport();
    await server.connect(transport);
}

main().catch((error) => {
    console.error('Fatal error in main():', error);
    process.exit(1);
});

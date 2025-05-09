# mcp-pdf-parse

A Model Context Protocol (MCP) server for parsing text from PDF URLs. This tool extracts text content from PDFs accessible via URLs and returns the extracted content as a string.

## Features

- Extracts text from PDF files available at specified URLs.

## Installation

### Option 1: Install from npm

```bash
npm install -g mcp-pdf-parse
```

You can also run it directly without installation using npx:

```bash
npx mcp-pdf-parse
```

### Option 2: Clone the repository

1. Install dependencies:

```bash
npm install
```

2. Build the server:

```bash
npm run build
```

## Usage

To use this tool with Claude, you need to add it to your MCP settings configuration file.

For Claude Desktop App
Add the following to your Claude Desktop configuration file (located at %APPDATA%\Claude\claude_desktop_config.json on Windows or ~/Library/Application Support/Claude/claude_desktop_config.json on macOS):

If installed globally via npm:

```json
{
    "mcpServers": {
        "mcp-pdf-parse": {
            "command": "mcp-pdf-parse"
        }
    }
}
```

Using npx (without installation):

```json
{
    "mcpServers": {
        "mcp-pdf-parse": {
            "command": "npx",
            "args": ["-y", "mcp-pdf-parse"]
        }
    }
}
```

If installed from source:

```json
{
    "mcpServers": {
        "mcp-pdf-parse": {
            "command": "node",
            "args": ["path/to/mcp-pdf-parse/build/index.js"]
        }
    }
}
```

## License

MIT

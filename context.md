# DevDico Project Context

## Overview
DevDico is an interactive "Keyword Map" designed to help developers visualize and learn programming language keywords, functions, and concepts. Think of it as a reinvented, visual version of W3Schools.

## Architecture
The project uses a modular data-driven approach to keep the frontend lightweight and the data maintainable.

- **Frontend**: A single HTML file (`public/index.html`) using Tailwind CSS for styling and D3.js for the force-directed graph visualization.
- **Data Layer**: TypeScript-based dictionaries located in `src/data/`. Each language has its own file to reduce load and improve organization.
- **Build Process**: TypeScript is compiled to JavaScript via `tsc`, and the resulting bundle is imported as an ES module in the browser.

## Data Model
Data is structured using the `Node` and `LanguageData` interfaces in `src/types.ts`:
- **Nodes**:
    - `root`: The main language node.
    - `cat`: Category nodes (e.g., "Control Flow", "Types").
    - `key`: Specific keyword/function nodes.
- **Properties**:
    - `desc`: A concise explanation of the keyword.
    - `params`: The function signature or parameters.
    - `example`: A real-world code snippet.
    - `tip`: A "Pro Tip" for practical application.

## Development Workflow
1. **Adding a Language**:
    - Create a new file in `src/data/<language>.ts`.
    - Define a `LanguageData` object.
    - Export the object and add it to the registry in `src/data/index.ts`.
2. **Building**:
    - Run `npm run build` to compile the TypeScript data into `dist/index.js`.
3. **Running**:
    - Serve the `public/` folder using a local web server.

## Key Features
- **Interactive Graph**: Nodes can be clicked to see detailed information.
- **Path Highlighting**: Hovering over a node traces its path back to the language root.
- **Search**: Filter nodes and links by keyword or description.
- **Theming**: Supports Light and Dark modes.
- **Pro Tips**: High-value practical advice for each keyword.

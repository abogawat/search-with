# Search with...

Search with... is a browser extension that allows users to easily search text from any page across multiple search engines. Users can open the extension with a keyboard shortcut (Alt+S by default) and then choose their preferred search engine with a single key press.

## Features
- Supports multiple search engines: Google, Bing, DuckDuckGo, Perplexity, and IMDB
- Quick keyboard navigation: select a search engine with a single key press (e.g., G for Google, B for Bing, etc.)
- Simple popup UI with buttons for each search engine, plus corresponding keyboard shortcuts for easy access
- Easily configurable and extensible to add more search engines

## Installation
1. Clone the repository:
  ```
  bash
  Copy code
  git clone https://github.com/yourusername/search-with-extension.git
  ```
2. Load the extension in Chrome:
  - Go to chrome://extensions/
  - Enable "Developer mode" (toggle in the top right corner)
  - Click "Load unpacked" and select the extension directory
3. Use the extension:
  - Press Alt+S (default shortcut) to open the extension popup
  - Select a search engine by clicking on it or pressing the corresponding key (e.g., G for Google)

## Usage
1. On any webpage, place your cursor in a search field containing the text you want to search for, or ensure there’s visible text in a search bar (even if not focused).
2. Activate the extension using Alt+S.
3. Choose a search engine by pressing the key associated with that engine:
  - G - Google
  - B - Bing
  - D - DuckDuckGo
  - P - Perplexity
  - I - IMDB

The extension will open a new tab with the selected search engine and the term pre-filled in the search field.

## Development
This project uses:
- JavaScript for core functionality
- HTML/CSS for the popup layout and styling
- Chrome Extension API to interact with browser tabs and content

## Adding More Search Engines
To add more search engines, edit popup.html to add new buttons and shortcuts and update popup.js to add URLs for each new engine.

## Files
- manifest.json: Extension metadata and permissions.
- popup.html: The HTML layout for the extension popup.
- popup.css: Styles for the popup layout.
- popup.js: JavaScript for handling search actions and keyboard shortcuts.
- content.js: Script for capturing search text from webpage search fields.
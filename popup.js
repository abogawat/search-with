// Add event listener for each button click
document.querySelectorAll(".search-button").forEach(button => {
  button.addEventListener("click", () => {
    const searchEngine = button.getAttribute("data-engine");
    initiateSearch(searchEngine);
  });
});

// Add event listener for keyboard shortcuts
document.addEventListener("keypress", (event) => {
  const key = event.key.toLowerCase(); // Get the key in lowercase
  const button = document.querySelector(`.search-button[data-key="${key}"]`);
  if (button) {
    const searchEngine = button.getAttribute("data-engine");
    initiateSearch(searchEngine);
  }
});

// Function to send message to content script and perform search
function initiateSearch(engine) {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { message: "get_search_text" }, (response) => {
      const searchText = response && response.searchText ? response.searchText : "";
      if (searchText) {
        const searchUrl = getSearchUrl(engine, searchText);
        chrome.tabs.create({ url: searchUrl });
      } else {
        alert("No text found in any search field.");
      }
    });
  });
}

// Helper function to get search URL based on the chosen engine
function getSearchUrl(engine, query) {
  const encodedQuery = encodeURIComponent(query);
  switch (engine) {
    case "google": return `https://www.google.com/search?q=${encodedQuery}`;
    case "youtube": return `https://www.youtube.com/results?search_query=${encodedQuery}`;
    case "perplexity": return `https://www.perplexity.ai/search?q=${encodedQuery}`;
    case "reddit": return `https://www.reddit.com/search/?q=${encodedQuery}`;
    case "amazon": return `https://www.amazon.in/s?k=${encodedQuery}`;
    case "imdb": return `https://www.imdb.com/find?q=${encodedQuery}`;
    case "github": return `https://github.com/search?q=${encodedQuery}`;
    default: return `https://www.google.com/search?q=${encodedQuery}`;
  }
}

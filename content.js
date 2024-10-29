chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.message === "get_search_text") {
    let searchText = "";

    // Look for common search fields across the page
    const searchFields = document.querySelectorAll('input[type="text"], input[type="search"], textarea');
    
    for (const field of searchFields) {
      if (field.value.trim()) { // Check if the field contains any text
        searchText = field.value.trim();
        break; // Stop after finding the first non-empty search field
      }
    }

    // Send back the found search text, or an empty string if nothing was found
    sendResponse({ searchText });
  }
});

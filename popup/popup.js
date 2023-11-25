document.addEventListener("DOMContentLoaded", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(
      tabs[0].id,
      { action: "getSelectedText" },
      function (response) {
        if (chrome.runtime.lastError) {
          console.log(chrome.runtime);
          return;
        }

        if (response && response.selectedText) {
          console.log("Selected Text:", response.selectedText);

          // Perform a Google search
          const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(
            response.selectedText
          )}`;
          chrome.tabs.create({ url: googleSearchUrl });
        } else {
          console.log("No text selected.");
        }
      }
    );
  });
});

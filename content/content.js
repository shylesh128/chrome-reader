// State variable to manage popup visibility
let popupState = false;

console.log(document);

document.addEventListener("mouseup", function (event) {
  const selectedText = window.getSelection().toString().trim();

  if (selectedText && !popupState) {
    // Create a custom popup
    const popupContainer = createPopupContainer();
    const searchButton = createButton("Search", () =>
      openGoogleSearch(selectedText)
    );
    const readButton = createButton("Read", () =>
      readSelectedText(selectedText)
    );
    const closeButton = createButton("Close", () => closePopup(popupContainer));

    appendElements(popupContainer, searchButton, readButton, closeButton);
    document.body.appendChild(popupContainer);

    // Prevent text selection when clicking inside the popup
    popupContainer.addEventListener("mousedown", function (e) {
      e.preventDefault();
    });

    // Close popup if clicking outside the selected text
    document.addEventListener("mousedown", function (e) {
      if (!popupContainer.contains(e.target) && e.target !== closeButton) {
        closePopup(popupContainer);
      }
    });

    popupState = true;
  }
});

function createPopupContainer() {
  const popupContainer = document.createElement("div");
  popupContainer.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px; /* Adjust the value as needed */
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2); /* Adjust the values as needed */
    z-index: 1000;
  `;
  return popupContainer;
}

function createButton(text, onClick) {
  const button = document.createElement("button");
  button.textContent = text;
  button.addEventListener("click", onClick);
  return button;
}

function appendElements(parent, ...children) {
  children.forEach((child) => parent.appendChild(child));
}

function openGoogleSearch(query) {
  const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(
    query
  )}`;
  window.open(searchUrl, "GoogleSearchWindow", "width=800,height=600");
}

function readSelectedText(text) {
  const synthesis = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance(text);
  synthesis.speak(utterance);
}

function closePopup(popupContainer) {
  popupState = false;
  popupContainer.remove();
}

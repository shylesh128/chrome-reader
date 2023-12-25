# Popup Text Selection Tool
This JavaScript project provides a simple and customizable popup that appears when a user selects text on a webpage. The popup offers options to perform a Google search on the selected text, read the text using text-to-speech, and close the popup.

## How It Works
The project utilizes event listeners to detect when the user selects text (mouseup event). If text is selected and the popup is not already open, a custom popup is created and appended to the document. The popup contains buttons for searching the selected text on Google, reading the text aloud, and closing the popup.

## Usage
To use this tool, include the provided JavaScript code in your HTML file or integrate it into your web application. The popup is triggered when the user selects text on the webpage.

## Customization
Popup Style: The appearance of the popup can be customized by modifying the createPopupContainer function. Adjust the CSS properties to change the position, background color, border, border radius, and box shadow of the popup.

Button Text: Customize the text on the buttons by modifying the createButton function. Update the textContent property to change the button labels.

## Dependencies
This project relies on standard JavaScript and does not require any external libraries. It uses the window.speechSynthesis API for text-to-speech functionality.

## Demo
For a live demonstration, open the Demo Page and try selecting text on the page.

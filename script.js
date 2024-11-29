// Function to make text bold
function boldText() {
  document.execCommand("bold");
}

// Function to make text italic
function italicText() {
  document.execCommand("italic");
}

// Function to underline text
function underlineText() {
  document.execCommand("underline");
}

// Function to align text left
function alignLeft() {
  document.execCommand("justifyLeft");
}

// Function to center text
function alignCenter() {
  document.execCommand("justifyCenter");
}

// Function to align text right
function alignRight() {
  document.execCommand("justifyRight");
}

// Function to create a list
function createList() {
  document.execCommand('insertUnorderedList')
}

//Function to clear text formatting
function clearFormatting() {
    document.execCommand('removeFormat')
}

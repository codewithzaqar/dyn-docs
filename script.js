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
  document.execCommand("insertUnorderedList");
}

// Function to clear text formatting
function clearFormatting() {
  document.execCommand("removeFormat");
}

// Function to change font size
function changeFontSize() {
  const fontSize = document.getElementById("font-size").value;
  document.execCommand("fontSize", false, fontSize);
}

// Function to change font family
function changeFontFamily() {
  const fontFamily = document.getElementById("font-family").value;
  document.execCommand("fontName", false, fontFamily);
}

// Function to change font color
function changeFontColor() {
  const color = document.getElementById("font-color").value;
  document.execCommand("foreColor", false, color);
}

// Function to change background color
function changeBackgroundColor() {
    const bgColor = document.getElementById('background-color').value
    document.execCommand('backColor', false, bgColor)
}
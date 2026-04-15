const editor = document.getElementById("editor");
const preview = document.getElementById("preview");

// default text
editor.value = `Welcome 👋

## This is your Markdown Previewer

- Type on the left
- See preview on the right

**Bold text**
*Italic text*
`;

// Load saved text
window.onload = () => {
  const saved = localStorage.getItem("markdown");
  if (saved) {
    editor.value = saved;
    updatePreview();
  }
};

// Save on input
editor.addEventListener("input", () => {
  localStorage.setItem("markdown", editor.value);
});

function updatePreview() {
  const markdownText = editor.value;
  preview.innerHTML = marked.parse(markdownText);
}

function formatText(type) {
  let text = editor.value;

  if (type === "bold") {
    editor.value += `\n**bold text**`;
  } else if (type === "italic") {
    editor.value += `\n*italic text*`;
  } else if (type === "h1") {
    editor.value += `\n# Heading`;
  } else if (type === "code") {
    editor.value += `\n\`\`\`\ncode here\n\`\`\``;
  }

  updatePreview();
}


// update in real-time
editor.addEventListener("input", updatePreview);

// initial render
updatePreview();
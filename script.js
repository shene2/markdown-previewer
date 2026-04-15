const editor = document.getElementById("editor");
const preview = document.getElementById("preview");

// default text
editor.value = `# Welcome 👋

## This is your Markdown Previewer

- Type on the left
- See preview on the right

**Bold text**
*Italic text*
`;

function updatePreview() {
  const markdownText = editor.value;
  preview.innerHTML = marked.parse(markdownText);
}

// update in real-time
editor.addEventListener("input", updatePreview);

// initial render
updatePreview();
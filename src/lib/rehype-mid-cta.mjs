function textOf(node) {
  if (!node) return "";
  if (node.type === "text") return node.value || "";
  if (Array.isArray(node.children)) return node.children.map(textOf).join("");
  return "";
}

function ctaNode(text) {
  return {
    type: "element",
    tagName: "aside",
    properties: { className: ["mid-cta"] },
    children: [
      {
        type: "element",
        tagName: "p",
        properties: {},
        children: [{ type: "text", value: text }],
      },
      {
        type: "element",
        tagName: "a",
        properties: {
          className: ["btn", "btn-primary"],
          href: "https://cal.com/summit-ledger-books/consultation",
        },
        children: [{ type: "text", value: "Book a Free Call" }],
      },
    ],
  };
}

/** Insert a call-to-action after the section that starts with a given H2. */
export function rehypeMidCta() {
  return (tree, file) => {
    const mid = file.data.astro?.frontmatter?.midCta;
    const after = typeof mid?.after === "string" ? mid.after.trim() : "";
    const text = typeof mid?.text === "string" ? mid.text.trim() : "";
    if (!after || !text) return;

    const visit = (node) => {
      if (!node || !Array.isArray(node.children)) return false;
      const children = node.children;
      for (let i = 0; i < children.length; i++) {
        const child = children[i];
        if (child.type === "element" && child.tagName === "h2" && textOf(child).trim() === after) {
          let insertAt = children.length;
          for (let j = i + 1; j < children.length; j++) {
            const next = children[j];
            if (next.type === "element" && next.tagName === "h2") {
              insertAt = j;
              break;
            }
          }
          children.splice(insertAt, 0, ctaNode(text));
          return true;
        }
        if (visit(child)) return true;
      }
      return false;
    };

    visit(tree);
  };
}

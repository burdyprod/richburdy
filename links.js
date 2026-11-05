// Update these details and links to make this page yours.
const profileLinks = [
  {
    title: "burdyprod@gmail.com",
    description: "EMAIL · BEST WAY TO REACH ME",
    url: "mailto:burdyprod@gmail.com",
    featured: true,
  },
  {
    title: "YouTube",
    description: "Watch",
    url: "https://www.youtube.com/@richburdy",
  },
  {
    title: "Instagram",
    description: "Follow",
    url: "https://instagram.com/444camel666",
  },
];

const linkList = document.querySelector("#link-list");

for (const link of profileLinks) {
  const anchor = document.createElement("a");
  anchor.className = `link-card${link.featured ? " link-card-featured" : ""}`;
  anchor.href = link.url;
  if (!link.url.startsWith("mailto:")) {
    anchor.target = "_blank";
    anchor.rel = "noopener noreferrer";
  }
  anchor.innerHTML = `
    <span class="link-copy">
      <span class="link-title">${link.title}</span>
      <span class="link-description">${link.description}</span>
    </span>
    <span class="link-arrow" aria-hidden="true">↗</span>
  `;
  linkList.append(anchor);
}

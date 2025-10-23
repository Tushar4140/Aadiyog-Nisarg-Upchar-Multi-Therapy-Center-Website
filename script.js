// 🍃 Floating Leaf Animation
const leafEmoji = "🍃";
for (let i = 0; i < 12; i++) {
  const leaf = document.createElement("div");
  leaf.textContent = leafEmoji;
  leaf.style.position = "fixed";
  leaf.style.left = Math.random() * 100 + "vw";
  leaf.style.top = -10 + "px";
  leaf.style.fontSize = Math.random() * 20 + 20 + "px";
  leaf.style.opacity = 0.5;
  leaf.style.animation = `fall ${4 + Math.random() * 6}s linear infinite`;
  leaf.style.animationDelay = Math.random() * 5 + "s";
  document.body.appendChild(leaf);
}

const style = document.createElement("style");
style.innerHTML = `
  @keyframes fall {
    0% { transform: translateY(0) rotate(0deg); }
    100% { transform: translateY(110vh) rotate(360deg); }
  }
`;
document.head.appendChild(style);

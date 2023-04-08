export function setGreenBackground() {
    document.body.style.backgroundColor = "#1D2B53";
    const numStars = 4000;
    const starSize = 2;
    const starColor = "#fff";
    const starContainer = document.getElementById("star-container");
    for (let i = 0; i < numStars; i++) {
      const star = document.createElement("div");
      star.classList.add("star");
      star.style.width = `${starSize}px`;
      star.style.height = `${starSize}px`;
      star.style.backgroundColor = starColor;
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${(Math.random() * 100)}%`;
      starContainer.appendChild(star);
    }
}
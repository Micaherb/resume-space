export function setBackground() {
  //Create star container
  const container = document.getElementById("content");
  const starContainer = document.createElement("div");
  starContainer.classList.add('star-container');
  starContainer.id = "star-container";
  container.appendChild(starContainer);
  //Star vars
  document.body.style.backgroundColor = "#1D2B53";
  const numStars = 4000;
  const starSize = 2;
  const starColor = "#fff";
  //const starContainer = document.getElementById("star-container");
  //Create stars
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

//If/when more gets added to background, split into more files
export function animateStars() {
  const target = document.getElementById('star-container');
  setInterval(() => {
      target.style.top = -window.scrollY/10+'px';
  }, 10);
}

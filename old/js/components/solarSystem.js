export function animatePlanets() {
    //Create planets
    const container = document.getElementById("content");
    const earth = document.createElement("div");
    earth.classList.add('earth');
    container.appendChild(earth);
    const moon = document.createElement("div");
    moon.classList.add('moon');
    container.appendChild(moon);
    moon.style.transform = `translate(-700px, 700px)`;
    let rotation = 0;
    setInterval(() => {
        rotation += .04;
        //Earth
        earth.style.transform = `rotate(${rotation}deg)`;
        //Moon
        moon.style.rotate = rotation+'deg';
    }, 10);
}
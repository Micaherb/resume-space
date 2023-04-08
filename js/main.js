import { setBackground, animateStars } from './components/background.js';
import { animatePlanets } from './components/solarSystem.js';
import { animateShip } from './components/ship.js'

function main() {
    //Static Elements
    setBackground();
    const text = document.createElement('p');
    text.classList.add('text');
    text.textContent = 'Hello, World!';
    document.getElementById('content').appendChild(text);
    //Dynamic Elements
    document.addEventListener('DOMContentLoaded', () => {
        animatePlanets();
        animateStars();
        animateShip();
    });
}
main();
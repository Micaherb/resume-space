import { setGreenBackground } from './background.js';

function rotateCircle() {
    const circle = document.getElementById('circle');
    let rotation = 0;
    setInterval(() => {
        rotation += .04;
        circle.style.transform = `rotate(${rotation}deg)`;
    }, 10);
}

function translateTarget() {
    const target = document.getElementById('target');
    const scrollY = window.scrollY;
    setInterval(() => {
        const scrollY = window.scrollY;
        if(scrollY < 500) {
            target.style.right = '85px';
        } else if(scrollY < 2150)  {
            target.style.right = scrollY-415 + 'px';
        } else {
            target.style.right = '1735px';
        }
    }, 10); //probably can reduce res here
}

function paralaxStars() {
    const target = document.getElementById('star-container');
    setInterval(() => {
        target.style.top = -window.scrollY/10+'px';
    }, 10); //probably can reduce res here
}

function main() {
    setGreenBackground();
    const myContent = document.createElement('p');
    myContent.textContent = 'Hello, World!';
    myContent.textCo
    document.getElementById('my-content').appendChild(myContent);
    document.addEventListener('DOMContentLoaded', () => {
        rotateCircle();
        translateTarget();
        paralaxStars();
    });
}
main();
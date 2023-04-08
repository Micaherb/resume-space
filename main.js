import { setGreenBackground } from './background.js';
import { Kinematic } from './kinematic.js';
import { Orientation, Position } from './steering.js'

function rotateCircle() {
    const circle = document.getElementById('circle');
    const moon = document.getElementById('moon');
    moon.style.transform = `translate(-700px, 700px)`;
    let rotation = 0;
    setInterval(() => {
        rotation += .04;
        //Earth
        circle.style.transform = `rotate(${rotation}deg)`;
        //Moon
        moon.style.rotate = rotation+'deg';
    }, 10);
}

function paralaxStars() {
    const target = document.getElementById('star-container');
    setInterval(() => {
        target.style.top = -window.scrollY/10+'px';
    }, 10); //probably can reduce res here
}

function getTarget() {
    let scrollY = window.scrollY;
    let loc = [0,0];
    if(scrollY < 500) {
        loc[0] = 85;
    } else if(scrollY < 2150)  {
        loc[0] = scrollY-415;
    } else {
        loc[0] = 1735;
    }
    loc[1] = 520 + window.scrollY;
    loc = [loc[0] - 10, loc[1] - 45];
    return loc;
}

function moveShip() {
    const ship = document.getElementById('ship');
    const kine_ship = new Kinematic(ship);
    setInterval(() => {
        ///Get target
        let target = getTarget();
        //Get rot
        let rot = 0
        let dir = [kine_ship.pos[0] - target[0], kine_ship.pos[1] - target[1]];
        if(dir[0] != 0) {
            rot = 180 + (Math.atan2(dir[0], dir[1])*57.29578);
        } else {
            if(dir[1] < 0) {
                rot = 0;
            } else if(dir[1] > 0) {
                rot = 180;
            }
        }
        
        //Set values
        kine_ship.addVelocity(Position(target, kine_ship));
        kine_ship.addRotation(Orientation(rot, kine_ship));
        kine_ship.update(.01);
    }, 10);
}

function main() {
    setGreenBackground();
    const myContent = document.createElement('p');
    myContent.textContent = 'Hello, World!';
    document.getElementById('my-content').appendChild(myContent);
    document.addEventListener('DOMContentLoaded', () => {
        rotateCircle();
        paralaxStars();
        moveShip();
    });
}
main();
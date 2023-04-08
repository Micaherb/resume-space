import { Kinematic } from '../models/kinematic.js';
import { orientation, position } from '../utilities/steering.js';

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

export function animateShip() {
    //Create ship
    const container = document.getElementById("content");
    const ship = document.createElement("div");
    ship.classList.add('ship');
    container.appendChild(ship);
    const kine_ship = new Kinematic(ship);
    //Move ship
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
        kine_ship.addVelocity(position(target, kine_ship));
        kine_ship.addRotation(orientation(rot, kine_ship));
        kine_ship.update(.01);
    }, 10);
}
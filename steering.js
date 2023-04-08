import { Kinematic } from './kinematic.js';

function dist_form(d) {return Math.sqrt((d[0]*d[0])+(d[1]*d[1]));}

function normalize(d) {
    let len = dist_form(d);
    let r = [0,0];
    if(len != 0) {
        r = [d[0]/len, d[1]/len];
    }
    return r;
}

function mapToRange(t) {
    let r = t%360;
    if(Math.abs(r) <= 180) {
        return r;
    } else if(r > 180) {
        return r - 360;
    } else {
        return 360 + r;
    }
}

export function Position(t, k) {
    //Tune params
    let radDec = 200;
    let maxVelocity = 400;
    let radSat = 15;
    let timeToTargetVelocity = 15;
    let maxAcceleration = 150;
    //Run alg
    let direction = [t[0] - k.pos[0], t[1] - k.pos[1]];
    let distance = dist_form(direction);
    let goalSpeed = distance/radDec * maxVelocity; //within radDec, not radSat
    if(distance < radSat){
        goalSpeed = 0;
    } else if (distance > radDec) { 
        goalSpeed = maxVelocity;
    }
    let ndir = normalize(direction);
    let goalVelocity = [ndir[0]*goalSpeed, ndir[1]*goalSpeed];
    let acc = [goalVelocity[0] - k.vel[0], goalVelocity[1] - k.vel[1]]; //how much more v we need
    acc = [acc[0]/timeToTargetVelocity, acc[1]/timeToTargetVelocity];
    if (dist_form(acc) > maxAcceleration) {
        acc = normalize(acc) * maxAcceleration;
    }
    return acc;
}

export function Orientation(r, k) {
    //Tune Params
    let radDec = 30;
    let maxRotation = 150;
    let radSat = 1;
    let timeToTargetRotation = 2;
    let maxAcceleration = 60;
    //Run alg
    let rotation = r - k.ori;
    rotation = mapToRange(rotation);
    let rotationSize = Math.abs(rotation);
    let goalRotation = rotationSize/radDec * maxRotation; //within radDec, not radSat
    if (rotationSize < radSat) { //within radSat
        goalRotation = 0;
    } else if (rotationSize > radDec) { //without radDec
        goalRotation = maxRotation;
    }
    if(rotationSize != 0) {
        goalRotation *= rotation/rotationSize;
    }
    let rot = goalRotation - k.rot;
    rot /= timeToTargetRotation;
    if (rot > maxAcceleration) {
        rot = maxAcceleration;
    }
    return rot;
}
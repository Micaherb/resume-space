export class Kinematic {
    constructor(element) {
        this.pos = [75, 475],
        this.ori = 0;
        this.vel = [0, 0];
        this.rot = 0;
        this.element = element;
    }

    // Setter for the velocity property
    addVelocity(vel) {
        this.vel = [this.vel[0] + vel[0], this.vel[1] + vel[1]];
    }
  
    // Setter for the rotation property
    addRotation(rot) {
        this.rot = this.rot + rot;
    }
  
    // Method to update the state of the object based on time elapsed
    update(deltaTime) {
        this.pos = [(this.vel[0]*deltaTime) + this.pos[0], (this.vel[1]*deltaTime) + this.pos[1]];
        this.ori = (this.rot*deltaTime) + this.ori;
        this.element.style.transform = `rotate(${this.ori}deg)`;
        this.element.style.right = this.pos[0]+'px';
        this.element.style.top = this.pos[1]+'px';
    }
  }
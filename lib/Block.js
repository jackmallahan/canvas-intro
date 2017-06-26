// Block.js
class Block {
  constructor (x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.goingRight = true;
    this.goingLeft = false;
    this.goingDown = true;
    this.goingUp = false;
  }

  draw (context) {
    context.fillStyle = this.color;
    context.fillRect(this.x, this.y, this.width, this.height);  // x, y, width, height
  }

  move ( direction ) {
    if (this.goingRight === true) {
      this.x += direction.x
    } else if (this.goingLeft === true) {
      this.x -= direction.x
    } else if (this.goingDown === true) {
      this.y += direction.y
    } else if (this.goingUp === false) {
      this.y -= direction.y
    }
  }

  changeXDirection () {
    if (this.goingRight === true) {
      this.goingRight = false;
      this.goingLeft = true;
    }else if(this.goingRight === false){
      this.goingRight = true;
      this.goingLeft = false;
    }
  }

  changeYDirection () {
    if (this.goingDown === true) {
      this.goingDown = false;
      this.goingUp = true;
    }else if(this.goingUp === false){
      this.goingDown = true;
      this.goingUp = false;
    }
  }
}


module.exports = Block;

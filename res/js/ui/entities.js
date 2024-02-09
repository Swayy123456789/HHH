export class Enemy {

static entitiesData;

  constructor(name, hp, dmg, imagePath, width, height, velocity, type) {
    this.name = name;
    this.hp = hp;
    this.dmg = dmg;

    this.img = new Image();
   this.imagePath = imagePath
    this.img.src = this.imagePath;
    this.position = {
      x: 0,
      y: 0,
    };
    if (type === "ground") {
      this.position.y = 450;
    }
    this.ratio = 1;
    this.size = {
      width: width * this.ratio,
      height: width * this.ratio,
    };
    this.velocity = {
      x: velocity,
     
        };
    this.type = type;
  } 

  draw(ctx) {
  
   ctx.drawImage(
     this.img,
     this.position.x,
     this.position.y,
     this.size.width,
     this.size.height
   );
 }

 

  update() {
this.move();
  }

  move() {
this.position.x+= this.velocity.x;
if(this.position.x >= 550) {
   this.velocity.x *= -1;
}
if (this.position.x <= 0) {
   this.velocity.x *= -1;
}
  }
}

//const myEnemy = new Enemy("Enemy 1", 100, 12);


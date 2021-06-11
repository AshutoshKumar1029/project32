class makeBody{
    constructor(x, y, radius) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0,
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.width = width;
      this.height = height;
      this.polygon_image = loadImage("image/image.png")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.polygon_image,0,0,40,40);
      pop();
    }
  };
  
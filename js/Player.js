class Player {
        constructor(x, y, width, height) {
            var options = {
                'restitution':0.8,
                'friction':1.0,
                'density':1.0,
                'isStatic':true
            }
            this.body = Bodies.rectangle(x, y, width, height, options);
            this.width = width;
            this.height = height;
            this.animation = loadAnimation("img/PC1.png","img/PC2.png","img/PC3.png","img/PC4.png",
            "img/PC5.png","img/PC6.png","img/PC7.png","img/PC8.png");
            this.image = loadImage("img/PC1.png");
            World.add(world, this.body);
          }
          display(){
            var angle = this.body.angle;
            push();
            translate(this.body.position.x, this.body.position.y);
            image(this.image,0,0);
            rotate(angle);
            pop();
        }
}
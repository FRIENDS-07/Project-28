class Boy{

    constructor(x,y){

        var options = {
            isStatic : true,
            restitution : 0,
            friction : 1,
            density : 1.2
        }

        this.body = Bodies.rectangle(x,y,100,100,options);
        this.image = loadImage("pluckingMangoes/boy.png");
        this.width = 200;
        this.height = 220;
        World.add(world,this.body);

    }

    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        image(this.image,0,0,200,220); 
        pop();
    }

}
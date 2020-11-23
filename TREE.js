class Tree{

    constructor(){

        var options = {
            isStatic : true,
            restitution : 0,
            friction : 1,
            density : 1.2
        }

        this.body = Bodies.rectangle(650,350,20,20,options);
        this.width = 20;
        this.height = 20;
        this.image = loadImage("pluckingMangoes/tree.png");
        World.add(world,this.body);

    }

    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        image(this.image,0,0,400,400); 
        pop();
    }

}
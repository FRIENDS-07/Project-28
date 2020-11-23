class Chain{

    constructor(bodya,pointb){

        var options = {
            bodyA : bodya,
            pointB : pointb,
            stiffness : 0.1,
            length : 30
        }

        this.pointB = pointb;

        this.body = Constraint.create(options);
        World.add(world,this.body);

    }

    fly(){
        this.body.bodyA = null;
    }

    attach(body){
        this.body.bodyA = body;
    }

    display(){

        if(this.body.bodyA){

            stroke("red");
            strokeWeight(5);
            line(this.body.bodyA.position.x,this.body.bodyA.position.y,this.pointB.x,this.pointB.y);

        }
    }

}
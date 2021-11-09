class Snowflake{
    constructor(x,y){
        var options = {
            restitution: 0.1,
            friction: 0.5
        }
        this.r = 50;
        this.body = Bodies.circle(x, y, this.r, options);
        World.add(world,this.body);
    }
       

display() {
    

    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    noStroke();
    image(snowflakeImg,0,0,this.r,this.r);

    pop();
}

}
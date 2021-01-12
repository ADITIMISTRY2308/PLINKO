class Ground{
    constructor(x,y,height,width) {
var options = {
    isStatic : true
}
this.body = bodies.rectangle(x,y,width,height,options);
this.width=width
this.height=height
world.add(world,this.body);
    }
    display(){

    }
};

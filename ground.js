class Ground{
    constructor(x,y,w,h,body){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;

        var ground_Options = {
            isStatic: true
        }

        this.body = Matter.Bodies.rectangle(this.x,this.y,this.w,this.h,ground_Options);
        World.add(world,this.body);
    }

    display(){
        
        push();
        fill("white")
        rect(this.position.x,this.position.y,this.w,this.h);
        pop();
    }
}
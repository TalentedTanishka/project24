class Dustbin
{
    constructor(x,y,width,height)
    {
        var options ={
            isStatic : true
        }
         this.body = Bodies.rectangle(x,y,width,height,options)
         this.width = width
         this.height = height
         this.image = loadImage("sprites/dustbingreen.png")
        World.add(world,this.body)
        
    }

     display()
     {
    var pos = this.body.position
    push();
     rectMode(CENTER)  
       fill("white")
        rect(pos.x , pos.y , this.width , this.height)
        imageMode(CENTER);
        image(this.image ,690,550,225,230)
    pop()
     }


}
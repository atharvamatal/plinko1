var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight=300;
var score =0;
var scoreHelp1, scoreHelp2 ,scoreHelp3,scoreHelp4,scoreHelp5;
var scoreHelp6, scoreHelp7 ,scoreHelp8,scoreHelp9,scoreHelp10,sorceHelp11;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

//making divisions to ball to count the points.
   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
     
   }

//make obstacles
    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 text("Score : "+score,20,30);
  Engine.update(engine);
 
  scoreHelp1=rect(0,500,12,5);
  scoreHelp2=rect(80,500,12,5);
  scoreHelp3=rect(160,500,12,5);
  scoreHelp4=rect(240,500,12,5)
  scoreHelp5=rect(320,500,12,5)
  scoreHelp6=rect(400,500,12,5)
  scoreHelp7=rect(480,500,12,5)
  scoreHelp8=rect(560,500,12,5)
  scoreHelp9=rect(640,500,12,5)
  scoreHelp10=rect(720,500,12,5)
  scoreHelp4=rect(800,500,12,5)

  
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   //textSize(24)
  // stroke("white")
   //text("100",10,600);
   //textSize(24)
   //stroke("white")
   //text("200",100,600)
   //textSize(24)
   ///stroke("white")
   ///text("300",190,600)
  // textSize(24)
  // stroke("white")
  // text("400",270,600)
  // textSize(24)
  // stroke("white")
  // text("500",350,600)
  // textSize(24)
  // stroke("white")
  // text("600",430,600)
  // textSize(24)
  //// stroke("white")
  // text("700",510,600)
  // textSize(24)
  // stroke("white")
  // text("800",590,600)
  // textSize(24)
  // stroke("white")
  // text("900",660,600)
  // textSize(24)
  // stroke("white")
  // text("1000",740,600)

  //if(this.body.x<250&&this.body.y<30){
  //  Score=Score+100
 // }
  
}
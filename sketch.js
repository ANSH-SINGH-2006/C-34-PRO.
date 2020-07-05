var abc=[];
var currentPath=[];
var b1

function setup(){
    
    canvas=createCanvas(800,800);
    b1=createButton('Yellow');
    b2=createButton('red');
    b3=createButton('pink');
    b4=createButton('green');
    b5=createButton('blue');
    b6=createButton('Broad');
    b7=createButton('clear');


    //database=firebase.database();
    canvas.mousePressed(startPath);
    
    //canvas.mouseReleased(endPath)
    
}

function startPath(){

    currentPath=[];
    abc.push(currentPath);
}



function draw(){

    background(0);
    if(mouseIsPressed){
        var pos={
            x:mouseX,
            y:mouseY
        }
        currentPath.push(pos);
    }
    b1.mousePressed(function(){
        stroke(255,204,0);
     strokeWeight(4)
     noFill();
    })

    b2.mousePressed(function(){
        stroke('red');
     strokeWeight(4)
     noFill();
    })

    b3.mousePressed(function(){
        stroke('#fae');
     strokeWeight(4)
     noFill();
    })

    b4.mousePressed(function(){
        stroke(0,255,0);
     strokeWeight(4)
     noFill();
    })

    b5.mousePressed(function(){
        stroke(0, 0, 255);
     strokeWeight(4)
     noFill();
    })

    b7.mousePressed(function(){
        abc=[]
        currentPath=[]
    })

    b6.mousePressed(function(){
        
     strokeWeight(25)
     noFill();
    })
    
    
    for(var i=0;i<abc.length;i++){
        var path=abc[i];
        beginShape();
        for(var k=0;k<path.length;k++){

        vertex(path[k].x,path[k].y);
    }
    endShape();
    };

    
    drawSprites();
}

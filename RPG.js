var mapArray, ctx, currentImgMainX, currentImgMainY;
var imgGrass, imgMain,imgTarget, imgPudding;
var currentPuddingX1,currentPuddingY1;
var currentPuddingX2,currentPuddingY2;
var currentPuddingX3,currentPuddingY3;

function refreshPage(){
    window.location.reload();
} 
$(document).ready(function(){ 
    mapArray = [1,1,1,1,1,0,0,0,0,
				1,0,0,0,1,0,0,0,0,
				1,0,3,0,1,0,1,1,1,
				1,0,3,3,1,0,1,2,1,
				1,1,1,0,1,1,1,2,1,
				0,1,1,0,0,0,0,2,1,
				0,1,0,0,0,1,0,0,1,
				0,1,0,0,0,1,1,1,1,
				0,1,1,1,1,1,0,0,0];
    ctx = $("#myCanvas")[0].getContext("2d");
    
    imgMain = new Image();
    imgMain.src = "images/cow.png";
    currentImgMainX = 180;
    currentImgMainY = 120;
    
    imgMain.onload=function()
    {
        ctx.drawImage(imgMain,33,0,30,32,currentImgMainX,currentImgMainY,60,60);
    };
    
    imgGrass = new Image();
    imgGrass.src = "images/grass.png";
	imgTarget = new Image();
    imgTarget.src = "images/material.png";
    imgPudding = new Image();
    imgPudding.src = "images/material.png";
    imgGrass.onload=function(){
		imgTarget.onload=function(){
			imgPudding.onload=function(){
            for(var x in mapArray)
            {
                if(mapArray[x]==1)
                {
                    ctx.drawImage(imgGrass,152,151,33,33,x%9*60,Math.floor(x/9)*60,60,60);
                }
				/*else if(mapArray[x]==2)
                {
                  ctx.drawImage(imgTarget,256,189,33,32,x%9*60,Math.floor(x/9)*60,60,60) ;    
                }*/
                else if(mapArray[x]==3)
                {
                  ctx.drawImage(imgPudding,0,98,33,30,x%9*60,Math.floor(x/9)*60,60,60) ;    
                }
            }
        };
    };
	};
	currentPuddingX1 = 120;
	currentPuddingY1 = 120;
	currentPuddingX2 = 120;
	currentPuddingY2 = 180;
	currentPuddingX3 = 180;
	currentPuddingY3 = 180;
	
});
$(document).keydown(function(event){ 
    var targetImgMainX, targetImgMainY, targetBlock,cutImagePositionX,cutImagePositionY;
	var cowX,cowY;
	var targetPuddingX1 = currentPuddingX1;
	var targetPuddingY1 = currentPuddingY1;
	var targetPuddingX2 = currentPuddingX2;
	var targetPuddingY2 = currentPuddingY2;
	var targetPuddingX3 = currentPuddingX3;
	var targetPuddingY3 = currentPuddingY3;
	var puddingBlock1, puddingBlock2, puddingBlock3;
	var orIpuddingBlock1;
	var orIpuddingBlock2;
	var orIpuddingBlock3;
	var goal = [34, 43, 52];
	
    event.preventDefault();
    switch(event.which){
	
        case 37://left
            targetImgMainX = currentImgMainX-60;
            targetImgMainY = currentImgMainY;
			
			if((targetImgMainX == currentPuddingX1) && (targetImgMainY == currentPuddingY1)){
				targetPuddingX1 = currentPuddingX1-60;
				targetPuddingY1 = currentPuddingY1;
			}
			
			else if((targetImgMainX == currentPuddingX2) && (targetImgMainY == currentPuddingY2)){
				targetPuddingX2 = currentPuddingX2-60;
				targetPuddingY2 = currentPuddingY2;
			}
			
			else if((targetImgMainX == currentPuddingX3) && (targetImgMainY == currentPuddingY3)){
				targetPuddingX3 = currentPuddingX3-60;
				targetPuddingY3 = currentPuddingY3;
			}
			
            cutImagePositionX = 32.2;
			cutImagePositionY = 35;
			cowX = 31.7;
			cowY = 30;
            break;
        case 38://up
            targetImgMainX = currentImgMainX;
            targetImgMainY = currentImgMainY-60;
			
			if((targetImgMainX == currentPuddingX1) && (targetImgMainY == currentPuddingY1)){
				targetPuddingX1 = currentPuddingX1;
				targetPuddingY1 = currentPuddingY1-60;
			}
			
			else if((targetImgMainX == currentPuddingX2) && (targetImgMainY == currentPuddingY2)){
				targetPuddingX2 = currentPuddingX2;
				targetPuddingY2 = currentPuddingY2-60;
			}
			
			else if((targetImgMainX == currentPuddingX3) && (targetImgMainY == currentPuddingY3)){
				targetPuddingX3 = currentPuddingX3;
				targetPuddingY3 = currentPuddingY3-60;
			}
			
            cutImagePositionX = 30;
			cutImagePositionY = 97;
			cowX = 30;
			cowY = 32;
            break;
        case 39://right
            targetImgMainX = currentImgMainX+60;
            targetImgMainY = currentImgMainY;
			
			if((targetImgMainX == currentPuddingX1) && (targetImgMainY == currentPuddingY1)){
				targetPuddingX1 = currentPuddingX1+60;
				targetPuddingY1 = currentPuddingY1;
			}
			
			else if((targetImgMainX == currentPuddingX2) && (targetImgMainY == currentPuddingY2)){
				targetPuddingX2 = currentPuddingX2+60;
				targetPuddingY2 = currentPuddingY2;
			}
			
			else if((targetImgMainX == currentPuddingX3) && (targetImgMainY == currentPuddingY3)){
				targetPuddingX3 = currentPuddingX3+60;
				targetPuddingY3 = currentPuddingY3;
			}
			
            cutImagePositionX = 32;
			cutImagePositionY = 66;
			cowX = 31.7;
			cowY = 30;
            break;
        case 40://down
            targetImgMainX = currentImgMainX;
            targetImgMainY = currentImgMainY+60;
			
			if((targetImgMainX == currentPuddingX1) && (targetImgMainY == currentPuddingY1)){
				targetPuddingX1 = currentPuddingX1;
				targetPuddingY1 = currentPuddingY1+60;
			}
			
			else if((targetImgMainX == currentPuddingX2) && (targetImgMainY == currentPuddingY2)){
				targetPuddingX2 = currentPuddingX2;
				targetPuddingY2 = currentPuddingY2+60;
			}
			
			else if((targetImgMainX == currentPuddingX3) && (targetImgMainY == currentPuddingY3)){
				targetPuddingX3 = currentPuddingX3;
				targetPuddingY3 = currentPuddingY3+60;
			}
			
            cutImagePositionX = 30;
			cutImagePositionY = 0;
			cowX = 30;
			cowY = 32;
            break;
        default:
            return;
    }
    
    if(targetImgMainX<=480 && targetImgMainX>=0 && targetImgMainY<=480 && targetImgMainY>=0){
		
        targetBlock = targetImgMainX/60 + targetImgMainY/60*9;
		
		if(targetPuddingX1<=480 && targetPuddingX1>=0 && targetPuddingY1<=480 && targetPuddingY1>=0){
			puddingBlock1 = targetPuddingX1/60 + targetPuddingY1/60*9;
		}
		else{
			puddingBlock1 = -1;
		}
		
		if(targetPuddingX2<=480 && targetPuddingX2>=0 && targetPuddingY2<=480 && targetPuddingY2>=0){
			puddingBlock2 = targetPuddingX2/60 + targetPuddingY2/60*9;
		}
		else{
			puddingBlock2 = -1;
		}
		
		if(targetPuddingX3<=480 && targetPuddingX3>=0 && targetPuddingY3<=480 && targetPuddingY3>=0){
			puddingBlock3 = targetPuddingX3/60 + targetPuddingY3/60*9;
		}
		else{
			puddingBlock3 = -1;
		}
		
    }
    else{
        targetBlock=-1;
    }
	
    	
	orIpuddingBlock1 = currentPuddingX1/60 + currentPuddingY1/60*9;
	orIpuddingBlock2 = currentPuddingX2/60 + currentPuddingY2/60*9;
	orIpuddingBlock3 = currentPuddingX3/60 + currentPuddingY3/60*9;
		
	
    ctx.clearRect(currentImgMainX, currentImgMainY,60,60);
	ctx.clearRect(currentPuddingX1, currentPuddingY1,60,60);
	ctx.clearRect(currentPuddingX2, currentPuddingY2,60,60);
	ctx.clearRect(currentPuddingX3, currentPuddingY3,60,60);
	
	
	
    if(targetBlock==-1||mapArray[targetBlock]==1)
        {
            
        }
	else if(mapArray[targetBlock]==3){
		
			
		if(puddingBlock1==-1|| mapArray[puddingBlock1]==1 || mapArray[puddingBlock1]==3)
        {
            
        }
		else{
			currentImgMainX = targetImgMainX;
			currentImgMainY = targetImgMainY;
			currentPuddingX1 = targetPuddingX1;
			currentPuddingY1 = targetPuddingY1;
			mapArray[orIpuddingBlock1] = 0;
			mapArray[puddingBlock1] = 3;
		}
		
		if(puddingBlock2==-1||mapArray[puddingBlock2]==1 || mapArray[puddingBlock2]==3)
        {
            
        }
		else{
			currentImgMainX = targetImgMainX;
			currentImgMainY = targetImgMainY;
			currentPuddingX2 = targetPuddingX2;
			currentPuddingY2 = targetPuddingY2;
			mapArray[orIpuddingBlock2] = 0;
			mapArray[puddingBlock2] = 3;
		}
		
		if(puddingBlock3==-1||mapArray[puddingBlock3]==1 || mapArray[puddingBlock3]==3)
        {
            
        }
		else{
			currentImgMainX = targetImgMainX;
			currentImgMainY = targetImgMainY;
			currentPuddingX3 = targetPuddingX3;
			currentPuddingY3 = targetPuddingY3;
			mapArray[orIpuddingBlock3] = 0;
			mapArray[puddingBlock3] = 3;
		}
	}
	
    else
        {
            currentImgMainX = targetImgMainX;
            currentImgMainY = targetImgMainY;
        }
		
	ctx.drawImage(imgMain,cutImagePositionX,cutImagePositionY,cowX,cowY,currentImgMainX,currentImgMainY,60,60);
	ctx.drawImage(imgPudding,0,98,33,30,currentPuddingX1,currentPuddingY1,60,60);
	ctx.drawImage(imgPudding,0,98,33,30,currentPuddingX2,currentPuddingY2,60,60);
    ctx.drawImage(imgPudding,0,98,33,30,currentPuddingX3,currentPuddingY3,60,60);
    
	var temp = 1;
	for(var i = 0; i < 3; i++){
		if(mapArray[goal[i]] != 3){
			temp = 0;
		}
	}
	
	if(temp == 1){
		$("#talkBox").text("Good job!! You get 300₩.");
	}
 
});
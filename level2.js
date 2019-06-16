var mapArray, ctx, currentImgMainX, currentImgMainY;
var imgGrass, imgMain,imgTarget, imgPudding;
var currentPuddingX1,currentPuddingY1;
var currentPuddingX2,currentPuddingY2;
var currentPuddingX3,currentPuddingY3;

function refreshPage(){
    window.location.reload();
} 
$(document).ready(function(){ 
    mapArray = [1,1,1,1,1,1,1,1,0,0,0,0,0,
				1,0,0,0,0,0,2,1,1,0,0,0,0,
				1,0,0,0,0,1,2,0,1,0,0,0,0,
				1,0,3,3,0,1,2,0,1,0,0,0,0,
				1,0,0,0,0,1,2,3,1,0,0,0,0,
				1,1,1,3,1,1,3,0,1,1,1,1,1,
				1,0,2,0,0,0,0,0,3,0,0,0,1,
				1,2,2,1,0,3,0,3,3,0,0,0,1,
				1,2,2,1,1,1,1,0,1,1,1,0,1,
				1,0,2,0,0,0,0,3,0,0,0,0,1,
				1,0,0,1,1,1,1,1,1,1,1,1,1,				
				1,1,1,0,0,0,0,0,0,0,0,0,0,
				0,0,0,0,0,0,0,0,0,0,0,0,0];
    ctx = $("#myCanvas")[0].getContext("2d");
    
    imgMain = new Image();
    imgMain.src = "images/cow.png";
    currentImgMainX = 60;
    currentImgMainY = 60;
    
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
                    ctx.drawImage(imgGrass,152,151,33,33,x%13*60,Math.floor(x/13)*60,60,60);
                }
		
                else if(mapArray[x]==3)
                {
                  ctx.drawImage(imgPudding,319,0,33,30,x%13*60,Math.floor(x/13)*60,60,60) ;    
                }
            }
        };
    };
	};
	currentPuddingX1 = 120;
	currentPuddingY1 = 180;
	currentPuddingX2 = 180;
	currentPuddingY2 = 180;
	currentPuddingX3 = 420;
	currentPuddingY3 = 240;
	currentPuddingX4 = 180;
	currentPuddingY4 = 300;
	currentPuddingX5 = 360;
	currentPuddingY5 = 300;
	currentPuddingX6 = 480;
	currentPuddingY6 = 360;
	currentPuddingX7 = 300;
	currentPuddingY7 = 420;
	currentPuddingX8 = 420;
	currentPuddingY8 = 420;
	currentPuddingX9 = 480;
	currentPuddingY9 = 420;
	currentPuddingX10 = 420;
	currentPuddingY10 = 540;
	
	
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
	var targetPuddingX4 = currentPuddingX4;
	var targetPuddingY4 = currentPuddingY4;
	var targetPuddingX5 = currentPuddingX5;
	var targetPuddingY5 = currentPuddingY5;
	var targetPuddingX6 = currentPuddingX6;
	var targetPuddingY6 = currentPuddingY6;
	var targetPuddingX7 = currentPuddingX7;
	var targetPuddingY7 = currentPuddingY7;
	var targetPuddingX8 = currentPuddingX8;
	var targetPuddingY8 = currentPuddingY8;
	var targetPuddingX9 = currentPuddingX9;
	var targetPuddingY9 = currentPuddingY9;
	var targetPuddingX10 = currentPuddingX10;
	var targetPuddingY10 = currentPuddingY10;

	var puddingBlock1, puddingBlock2, puddingBlock3,
		puddingBlock4, puddingBlock5, puddingBlock6,
		puddingBlock7, puddingBlock8, puddingBlock9,puddingBlock10;
		
	var orIpuddingBlock1;
	var orIpuddingBlock2;
	var orIpuddingBlock3;
	var orIpuddingBlock4;
	var orIpuddingBlock5;
	var orIpuddingBlock6;
	var orIpuddingBlock7;
	var orIpuddingBlock8;
	var orIpuddingBlock9;
	var orIpuddingBlock10;
	
	var goal = [19,32,45,58,80,92,93,105,106,119];
	
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
			
			else if((targetImgMainX == currentPuddingX4) && (targetImgMainY == currentPuddingY4)){
				targetPuddingX4 = currentPuddingX4-60;
				targetPuddingY4 = currentPuddingY4;
			}
			
			else if((targetImgMainX == currentPuddingX5) && (targetImgMainY == currentPuddingY5)){
				targetPuddingX5 = currentPuddingX5-60;
				targetPuddingY5 = currentPuddingY5;
			}
			else if((targetImgMainX == currentPuddingX6) && (targetImgMainY == currentPuddingY6)){
				targetPuddingX6 = currentPuddingX6-60;
				targetPuddingY6 = currentPuddingY6;
			}
			
			else if((targetImgMainX == currentPuddingX7) && (targetImgMainY == currentPuddingY7)){
				targetPuddingX7 = currentPuddingX7-60;
				targetPuddingY7 = currentPuddingY7;
			}
			else if((targetImgMainX == currentPuddingX8) && (targetImgMainY == currentPuddingY8)){
				targetPuddingX8 = currentPuddingX8-60;
				targetPuddingY8 = currentPuddingY8;
			}
			
			else if((targetImgMainX == currentPuddingX9) && (targetImgMainY == currentPuddingY9)){
				targetPuddingX9 = currentPuddingX9-60;
				targetPuddingY9 = currentPuddingY9;
			}
			else if((targetImgMainX == currentPuddingX10) && (targetImgMainY == currentPuddingY10)){
				targetPuddingX10 = currentPuddingX10-60;
				targetPuddingY10 = currentPuddingY10;
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
			
			else if((targetImgMainX == currentPuddingX4) && (targetImgMainY == currentPuddingY4)){
				targetPuddingX4 = currentPuddingX4;
				targetPuddingY4 = currentPuddingY4-60;
			}
			
			else if((targetImgMainX == currentPuddingX5) && (targetImgMainY == currentPuddingY5)){
				targetPuddingX5 = currentPuddingX5;
				targetPuddingY5 = currentPuddingY5-60;
			}
			else if((targetImgMainX == currentPuddingX6) && (targetImgMainY == currentPuddingY6)){
				targetPuddingX6 = currentPuddingX6;
				targetPuddingY6 = currentPuddingY6-60;
			}
			
			else if((targetImgMainX == currentPuddingX7) && (targetImgMainY == currentPuddingY7)){
				targetPuddingX7 = currentPuddingX7;
				targetPuddingY7 = currentPuddingY7-60;
			}
			else if((targetImgMainX == currentPuddingX8) && (targetImgMainY == currentPuddingY8)){
				targetPuddingX8 = currentPuddingX8;
				targetPuddingY8 = currentPuddingY8-60;
			}
			
			else if((targetImgMainX == currentPuddingX9) && (targetImgMainY == currentPuddingY9)){
				targetPuddingX9 = currentPuddingX9;
				targetPuddingY9 = currentPuddingY9-60;
			}
			else if((targetImgMainX == currentPuddingX10) && (targetImgMainY == currentPuddingY10)){
				targetPuddingX10 = currentPuddingX10;
				targetPuddingY10 = currentPuddingY10-60;
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
			
			else if((targetImgMainX == currentPuddingX4) && (targetImgMainY == currentPuddingY4)){
				targetPuddingX4 = currentPuddingX4+60;
				targetPuddingY4 = currentPuddingY4;
			}
			
			else if((targetImgMainX == currentPuddingX5) && (targetImgMainY == currentPuddingY5)){
				targetPuddingX5 = currentPuddingX5+60;
				targetPuddingY5 = currentPuddingY5;
			}
			else if((targetImgMainX == currentPuddingX6) && (targetImgMainY == currentPuddingY6)){
				targetPuddingX6 = currentPuddingX6+60;
				targetPuddingY6 = currentPuddingY6;
			}
			
			else if((targetImgMainX == currentPuddingX7) && (targetImgMainY == currentPuddingY7)){
				targetPuddingX7 = currentPuddingX7+60;
				targetPuddingY7 = currentPuddingY7;
			}
			else if((targetImgMainX == currentPuddingX8) && (targetImgMainY == currentPuddingY8)){
				targetPuddingX8 = currentPuddingX8+60;
				targetPuddingY8 = currentPuddingY8;
			}
			
			else if((targetImgMainX == currentPuddingX9) && (targetImgMainY == currentPuddingY9)){
				targetPuddingX9 = currentPuddingX9+60;
				targetPuddingY9 = currentPuddingY9;
			}
			else if((targetImgMainX == currentPuddingX10) && (targetImgMainY == currentPuddingY10)){
				targetPuddingX10 = currentPuddingX10+60;
				targetPuddingY10 = currentPuddingY10;
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
			
			else if((targetImgMainX == currentPuddingX4) && (targetImgMainY == currentPuddingY4)){
				targetPuddingX4 = currentPuddingX4;
				targetPuddingY4 = currentPuddingY4+60;
			}
			
			else if((targetImgMainX == currentPuddingX5) && (targetImgMainY == currentPuddingY5)){
				targetPuddingX5 = currentPuddingX5;
				targetPuddingY5 = currentPuddingY5+60;
			}
			else if((targetImgMainX == currentPuddingX6) && (targetImgMainY == currentPuddingY6)){
				targetPuddingX6 = currentPuddingX6;
				targetPuddingY6 = currentPuddingY6+60;
			}
			
			else if((targetImgMainX == currentPuddingX7) && (targetImgMainY == currentPuddingY7)){
				targetPuddingX7 = currentPuddingX7;
				targetPuddingY7 = currentPuddingY7+60;
			}
			else if((targetImgMainX == currentPuddingX8) && (targetImgMainY == currentPuddingY8)){
				targetPuddingX8 = currentPuddingX8;
				targetPuddingY8 = currentPuddingY8+60;
			}
			
			else if((targetImgMainX == currentPuddingX9) && (targetImgMainY == currentPuddingY9)){
				targetPuddingX9 = currentPuddingX9;
				targetPuddingY9 = currentPuddingY9+60;
			}
			else if((targetImgMainX == currentPuddingX10) && (targetImgMainY == currentPuddingY10)){
				targetPuddingX10 = currentPuddingX10;
				targetPuddingY10 = currentPuddingY10+60;
			}
            cutImagePositionX = 30;
			cutImagePositionY = 0;
			cowX = 30;
			cowY = 32;
            break;
        default:
            return;
    }
    
    if(targetImgMainX<=780 && targetImgMainX>=0 && targetImgMainY<=720 && targetImgMainY>=0){
		
        targetBlock = targetImgMainX/60 + targetImgMainY/60*13;
		
		if(targetPuddingX1<=780 && targetPuddingX1>=0 && targetPuddingY1<=720 && targetPuddingY1>=0){
			puddingBlock1 = targetPuddingX1/60 + targetPuddingY1/60*13;
		}
		else{
			puddingBlock1 = -1;
		}
		
		if(targetPuddingX2<=780 && targetPuddingX2>=0 && targetPuddingY2<=720 && targetPuddingY2>=0){
			puddingBlock2 = targetPuddingX2/60 + targetPuddingY2/60*13;
		}
		else{
			puddingBlock2 = -1;
		}
		
		if(targetPuddingX3<=780 && targetPuddingX3>=0 && targetPuddingY3<=720 && targetPuddingY3>=0){
			puddingBlock3 = targetPuddingX3/60 + targetPuddingY3/60*13;
		}
		else{
			puddingBlock3 = -1;
		}
		
		if(targetPuddingX4<=780 && targetPuddingX4>=0 && targetPuddingY4<=720 && targetPuddingY4>=0){
			puddingBlock4 = targetPuddingX4/60 + targetPuddingY4/60*13;
		}
		else{
			puddingBlock4 = -1;
		}
		
		if(targetPuddingX5<=780 && targetPuddingX5>=0 && targetPuddingY5<=720 && targetPuddingY5>=0){
			puddingBlock5 = targetPuddingX5/60 + targetPuddingY5/60*13;
		}
		else{
			puddingBlock5 = -1;
		}
		
		if(targetPuddingX6<=780 && targetPuddingX6>=0 && targetPuddingY6<=720 && targetPuddingY6>=0){
			puddingBlock6 = targetPuddingX6/60 + targetPuddingY6/60*13;
		}
		else{
			puddingBlock6 = -1;
		}
		
		if(targetPuddingX7<=780 && targetPuddingX7>=0 && targetPuddingY7<=720 && targetPuddingY7>=0){
			puddingBlock7 = targetPuddingX7/60 + targetPuddingY7/60*13;
		}
		else{
			puddingBlock7 = -1;
		}
		
		if(targetPuddingX8<=780 && targetPuddingX8>=0 && targetPuddingY8<=720 && targetPuddingY8>=0){
			puddingBlock8 = targetPuddingX8/60 + targetPuddingY8/60*13;
		}
		else{
			puddingBlock8 = -1;
		}
		
		if(targetPuddingX9<=780 && targetPuddingX9>=0 && targetPuddingY9<=720 && targetPuddingY9>=0){
			puddingBlock9 = targetPuddingX9/60 + targetPuddingY9/60*13;
		}
		else{
			puddingBlock9 = -1;
		}
		
		if(targetPuddingX10<=780 && targetPuddingX10>=0 && targetPuddingY10<=720 && targetPuddingY10>=0){
			puddingBlock10 = targetPuddingX10/60 + targetPuddingY10/60*13;
		}
		else{
			puddingBlock10 = -1;
		}
		
    }
    else{
        targetBlock=-1;
    }
	
    	
	orIpuddingBlock1 = currentPuddingX1/60 + currentPuddingY1/60*13;
	orIpuddingBlock2 = currentPuddingX2/60 + currentPuddingY2/60*13;
	orIpuddingBlock3 = currentPuddingX3/60 + currentPuddingY3/60*13;
	orIpuddingBlock4 = currentPuddingX4/60 + currentPuddingY4/60*13;
	orIpuddingBlock5 = currentPuddingX5/60 + currentPuddingY5/60*13;
	orIpuddingBlock6 = currentPuddingX6/60 + currentPuddingY6/60*13;
	orIpuddingBlock7 = currentPuddingX7/60 + currentPuddingY7/60*13;
	orIpuddingBlock8 = currentPuddingX8/60 + currentPuddingY8/60*13;
	orIpuddingBlock9 = currentPuddingX9/60 + currentPuddingY9/60*13;
	orIpuddingBlock10 = currentPuddingX10/60 + currentPuddingY10/60*13;
	
		
	
    ctx.clearRect(currentImgMainX, currentImgMainY,60,60);
	ctx.clearRect(currentPuddingX1, currentPuddingY1,60,60);
	ctx.clearRect(currentPuddingX2, currentPuddingY2,60,60);
	ctx.clearRect(currentPuddingX3, currentPuddingY3,60,60);
	ctx.clearRect(currentPuddingX4, currentPuddingY4,60,60);
	ctx.clearRect(currentPuddingX5, currentPuddingY5,60,60);
	ctx.clearRect(currentPuddingX6, currentPuddingY6,60,60);
	ctx.clearRect(currentPuddingX7, currentPuddingY7,60,60);
	ctx.clearRect(currentPuddingX8, currentPuddingY8,60,60);
	ctx.clearRect(currentPuddingX9, currentPuddingY9,60,60);
	ctx.clearRect(currentPuddingX10, currentPuddingY10,60,60);

	
	
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
		
		if(puddingBlock4==-1|| mapArray[puddingBlock4]==1 || mapArray[puddingBlock4]==3)
        {
            
        }
		else{
			currentImgMainX = targetImgMainX;
			currentImgMainY = targetImgMainY;
			currentPuddingX4 = targetPuddingX4;
			currentPuddingY4 = targetPuddingY4;
			mapArray[orIpuddingBlock4] = 0;
			mapArray[puddingBlock4] = 3;
		}
		
		if(puddingBlock5==-1||mapArray[puddingBlock5]==1 || mapArray[puddingBlock5]==3)
        {
            
        }
		else{
			currentImgMainX = targetImgMainX;
			currentImgMainY = targetImgMainY;
			currentPuddingX5 = targetPuddingX5;
			currentPuddingY5 = targetPuddingY5;
			mapArray[orIpuddingBlock5] = 0;
			mapArray[puddingBlock5] = 3;
		}
		
		if(puddingBlock6==-1||mapArray[puddingBlock6]==1 || mapArray[puddingBlock6]==3)
        {
            
        }
		else{
			currentImgMainX = targetImgMainX;
			currentImgMainY = targetImgMainY;
			currentPuddingX6 = targetPuddingX6;
			currentPuddingY6 = targetPuddingY6;
			mapArray[orIpuddingBlock6] = 0;
			mapArray[puddingBlock6] = 3;
		}
		
		if(puddingBlock7==-1|| mapArray[puddingBlock7]==1 || mapArray[puddingBlock7]==3)
        {
            
        }
		else{
			currentImgMainX = targetImgMainX;
			currentImgMainY = targetImgMainY;
			currentPuddingX7 = targetPuddingX7;
			currentPuddingY7 = targetPuddingY7;
			mapArray[orIpuddingBlock7] = 0;
			mapArray[puddingBlock7] = 3;
		}
		
		if(puddingBlock8==-1||mapArray[puddingBlock8]==1 || mapArray[puddingBlock8]==3)
        {
            
        }
		else{
			currentImgMainX = targetImgMainX;
			currentImgMainY = targetImgMainY;
			currentPuddingX8 = targetPuddingX8;
			currentPuddingY8 = targetPuddingY8;
			mapArray[orIpuddingBlock8] = 0;
			mapArray[puddingBlock8] = 3;
		}
		
		if(puddingBlock9==-1||mapArray[puddingBlock9]==1 || mapArray[puddingBlock9]==3)
        {
            
        }
		else{
			currentImgMainX = targetImgMainX;
			currentImgMainY = targetImgMainY;
			currentPuddingX9 = targetPuddingX9;
			currentPuddingY9 = targetPuddingY9;
			mapArray[orIpuddingBlock9] = 0;
			mapArray[puddingBlock9] = 3;
		}
		
		if(puddingBlock10==-1||mapArray[puddingBlock10]==1 || mapArray[puddingBlock10]==3)
        {
            
        }
		else{
			currentImgMainX = targetImgMainX;
			currentImgMainY = targetImgMainY;
			currentPuddingX10 = targetPuddingX10;
			currentPuddingY10 = targetPuddingY10;
			mapArray[orIpuddingBlock10] = 0;
			mapArray[puddingBlock10] = 3;
		}
	}
	
    else
        {
            currentImgMainX = targetImgMainX;
            currentImgMainY = targetImgMainY;
        }
		
	ctx.drawImage(imgMain,cutImagePositionX,cutImagePositionY,cowX,cowY,currentImgMainX,currentImgMainY,60,60);
	ctx.drawImage(imgPudding,319,0,33,30,currentPuddingX1,currentPuddingY1,60,60);
	ctx.drawImage(imgPudding,319,0,33,30,currentPuddingX2,currentPuddingY2,60,60);
    ctx.drawImage(imgPudding,319,0,33,30,currentPuddingX3,currentPuddingY3,60,60);
	ctx.drawImage(imgPudding,319,0,33,30,currentPuddingX4,currentPuddingY4,60,60);
	ctx.drawImage(imgPudding,319,0,33,30,currentPuddingX5,currentPuddingY5,60,60);
    ctx.drawImage(imgPudding,319,0,33,30,currentPuddingX6,currentPuddingY6,60,60);
	ctx.drawImage(imgPudding,319,0,33,30,currentPuddingX7,currentPuddingY7,60,60);
	ctx.drawImage(imgPudding,319,0,33,30,currentPuddingX8,currentPuddingY8,60,60);
    ctx.drawImage(imgPudding,319,0,33,30,currentPuddingX9,currentPuddingY9,60,60);
	ctx.drawImage(imgPudding,319,0,33,30,currentPuddingX10,currentPuddingY10,60,60);
	
    
	var temp = 1;
	for(var i = 0; i < 10; i++){
		if(mapArray[goal[i]] != 3){
			temp = 0;
		}
	}
	
	if(temp == 1){
		$("#talkBox").text("Nice shot!! You get 500₩.");
	}
 
});
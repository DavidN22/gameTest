const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const wid = canvas.width = 1000;
const hi = canvas.height = 700;
let x = 0;
  
var player = new Image();
player.src = 'pngegg.png'; 
const width = 250;
const hight = 250;

let frameX=0;
let frameY=0;
let gameFrame = 0;
const stagger = 233;
let wPos = -40;
let hPos = 400;
animate();

function animate (){

ctx.clearRect(0,0,wid,hi);

ctx.drawImage(player,frameX*width,frameY *hight,width,hight,wPos , hPos , width, hight);
if (gameFrame%stagger == 0){
   if (frameX<3){
   
frameX++;
   }
   else frameX=0; 
}

gameFrame++;
window.requestAnimationFrame(animate);

}








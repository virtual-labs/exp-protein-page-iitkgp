/* Lab name: Experimental Biochemistry
Exp name: Protein analysis of Polyacrylamide gel electrophoresis (PAGE)
File name: main.js
Developer: Prakriti Dhang */


function start(){
document.getElementById("gelprep").disabled=false;
document.getElementById("start").disabled=true;
}

function restartexp(){
    location.reload();
}

function gel_resolve(){
    document.getElementById("sampleprep").disabled=false;
}


function stacking_gel(){
    document.getElementById("addbuffer").disabled=false;
}



function addbuffer(){
  document.getElementById("proteinsample").disabled=false;
 /**side 1 */
 canvaside1 = document.getElementById("canvasbufferfill");
 ctxs1 = canvaside1.getContext("2d");
 var posY = 150;
 var speed = 1;

 function drawLine() {

   ctxs1.strokeStyle = '#E4FBFF  ';
   ctxs1.globalAlpha = 0.03;
   ctxs1.lineWidth = 600;
   ctxs1.beginPath();
   ctxs1.moveTo(0, posY); /*  0-130*/
   ctxs1.lineTo(0, 150);
   ctxs1.stroke();
 }

 function moveLine() {
   posY += speed;

   if (posY < 0 || posY > canvaside1.height) {
     speed = speed * -1;
   }
 }

 function loop() {
   // clear old frame;
   // ctx.clearRect(0,0,canvas.width, canvas.height);
   moveLine();
   drawLine();
   cancelani = requestAnimationFrame(loop);
 }
 requestAnimationFrame(loop);

}

function protein_sample(){
    document.getElementById("gelrun").disabled=false;
}



function start_ele(){
    document.getElementById("staingel").disabled=false;
    document.getElementById("cvt").style.display="block";
    document.getElementById("crun").style.display="block";
}

function txtvolt(){
    document.getElementById("cvp").style.display="block";
}
 function txtvoltp(){
    document.getElementById("cvn").style.display="block";

 }
function txtvoltd(){

}

function runningel(){

  if(volt == null){
alert("Enter volt between 80 and 120");
  }
  else if( volt >=80 || volt<=120){
    rungelsample();
  }
  else{
    alert("Enter volt between 80 and 120");
  }
}

function staining(){
    document.getElementById("viewsample").disabled=false;
}

function view_sample_UVlight(){

    window.scrollBy(0,500);
   // document.getElementById("output").style.display="block";
    canvasuv1 = document.getElementById("myCanvasuv1");
  ctxuv1 = canvasuv1.getContext("2d");
  const gradient = ctxuv1.createLinearGradient(0, 0, canvasuv1.width, 0);

  // Add color stops to the gradient
  gradient.addColorStop(0, 'white');     // Start color (position 0)
  gradient.addColorStop(0.8, '#F6FFBE');  // Middle color (position 0.5)
  gradient.addColorStop(1, '#F6FFBE   ');      // End color (position 1)


  ctxuv1.strokeStyle = gradient;
  

    ctxuv1.lineWidth = 300;
    ctxuv1.beginPath();
    ctxuv1.moveTo(120, 0); /*  0-180*/
    ctxuv1.lineTo(0, 0);
    ctxuv1.stroke();


    canvasuv2 = document.getElementById("myCanvasuv2");
  ctxuv2 = canvasuv2.getContext("2d");
  const gradient2 = ctxuv1.createLinearGradient(0, 0, canvasuv2.width, 0);

  // Add color stops to the gradient
  gradient2.addColorStop(0, 'white');     // Start color (position 0)
  gradient2.addColorStop(0.8, '#F6FFBE ');  // Middle color (position 0.5)
  gradient2.addColorStop(1, '#F6FFBE   ');      // End color (position 1)


  ctxuv2.strokeStyle = gradient2;

 
    ctxuv2.lineWidth = 300;
    ctxuv2.beginPath();
    ctxuv2.moveTo(120, 0); /*  0-180*/
    ctxuv2.lineTo(0, 0);
    ctxuv2.stroke();

}
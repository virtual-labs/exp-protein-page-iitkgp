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


var imgtopsetup = null;
function start_ele(){
    document.getElementById("staingel").disabled=false;
    document.getElementById("cvt").style.display="block";
    document.getElementById("crun").style.display="block";
    var topsetup = document.getElementById("topsetup");
 
  var topsetupt =120; //initial  position
  clearInterval(imgtopsetup);
  //clearInterval(imgtbdown);
  imgtopsetup = setInterval(frame, 10); /* frame is 10 denotes the speed of the movement*/

  function frame() {
    if (topsetupt == 141) {

      clearInterval(imgtopsetup);
     
    
      //imgtbdown = setInterval(frame, 20);
     

    } else {

      topsetupt++;
      topsetup.style.top = topsetupt + '%';

    }
  }

}

function txtvolt(){
    document.getElementById("cvp").style.display="block";
    const canvas = document.getElementById('textvoltimer');
  var volt = 0;
  // Check if the browser supports the canvas element

  // Get the 2D drawing context
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // Set font properties
  ctx.font = 'bold 80px Arial'; // You can adjust the font weight, size and family

  // Set text properties
  ctx.fillStyle = 'black'; // Text color
  ctx.textAlign = 'center'; // Text alignment (centered horizontally)
  ctx.textBaseline = 'middle'; // Text baseline (centered vertically)

  // Define the text to be displayed
  const text = volt;

  // Get the position to place the text (in this case, centered on the canvas)
  const x = canvas.width / 2;
  const y = canvas.height / 2;

  // Draw the text on the canvas
  ctx.fillText(text, x, y);
}

var volt = 10;
 function txtvoltp(){
    document.getElementById("cvn").style.display="block";
    const canvas = document.getElementById('textvoltimer');


  // Get the 2D drawing context
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // Set font properties
  ctx.font = 'bold 80px Arial'; // You can adjust the font weight, size and family

  // Set text properties
  ctx.fillStyle = 'black'; // Text color
  ctx.textAlign = 'center'; // Text alignment (centered horizontally)
  ctx.textBaseline = 'middle'; // Text baseline (centered vertically)

  // Define the text to be displayed
  const text = volt;


  // Get the position to place the text (in this case, centered on the canvas)
  const x = canvas.width / 2;
  const y = canvas.height / 2;

  // Draw the text on the canvas
  ctx.fillText(text, x, y);

  volt = volt + 10;

 }
function txtvoltd(){
  const canvas = document.getElementById('textvoltimer');


  // Get the 2D drawing context
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // Set font properties
  ctx.font = 'bold 80px Arial'; // You can adjust the font weight, size and family

  // Set text properties
  ctx.fillStyle = 'black'; // Text color
  ctx.textAlign = 'center'; // Text alignment (centered horizontally)
  ctx.textBaseline = 'middle'; // Text baseline (centered vertically)
  volt = volt - 10;
  // Define the text to be displayed
  const text = volt;


  // Get the position to place the text (in this case, centered on the canvas)
  const x = canvas.width / 2;
  const y = canvas.height / 2;

  // Draw the text on the canvas
  ctx.fillText(text, x, y);
}

function runningel(){

  if(volt == null){
alert("Enter volt between 80 and 120");
  }
  else if( volt <80 || volt > 120){
    alert("Enter volt between 80 and 120");
  }
  else{
    
    rungelsample();
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
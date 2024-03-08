/* Lab name: Experimental Biochemistry
Exp name: Protein analysis of Polyacrylamide gel electrophoresis (PAGE)
File name: main.js
Developer: Prakriti Dhang */


function start() {
  document.getElementById("gelprep").disabled = false;
  document.getElementById("start").disabled = true;
  document.getElementById('loadsamplea').style.pointerEvents = "none";
  document.getElementById('loadsampleb').style.pointerEvents = "none";
  document.getElementById('loadsamplec').style.pointerEvents = "none";
  document.getElementById('loadsampled').style.pointerEvents = "none";
}

function restartexp() {
  location.reload();
}

function gel_resolve() {
  document.getElementById("sampleprep").disabled = false;
  document.getElementById("gelprep").disabled = true;
  document.getElementById("resolve").style.display = "block";
  window.scrollBy(0, 700);
  /**side 1 */
  canvasider = document.getElementById("resolve");
  ctxsr = canvasider.getContext("2d");
  var posYr = 150;
  var speedr = 1;

  function drawLiner() {

    ctxsr.strokeStyle = '#D2FCFF  ';
    ctxsr.globalAlpha = 0.03;
    ctxsr.lineWidth = 600;
    ctxsr.beginPath();
    ctxsr.moveTo(0, posYr); /*  0-130*/
    ctxsr.lineTo(0, 150);
    ctxsr.stroke();
  }

  function moveLiner() {
    posYr += speedr;

    if (posYr < 0 || posYr > canvasider.height) {
      speedr = speedr * -1;
    }
  }

  function loopr() {
    // clear old frame;
    // ctx.clearRect(0,0,canvas.width, canvas.height);
    moveLiner();
    drawLiner();
    cancelani = requestAnimationFrame(loopr);
  }
  requestAnimationFrame(loopr);


}


function stacking_gel() {
  document.getElementById("sampleprep").disabled = true;
  document.getElementById("stacking").style.display = "block";
  document.getElementById("placecomb").disabled = false;
  // document.getElementById("comb").style.display="block";
  window.scrollBy(0, 500);
  /**side 1 */
  canvasides = document.getElementById("stacking");
  ctxss = canvasides.getContext("2d");
  var posYs = 150;
  var speeds = 1;

  function drawLines() {

    ctxss.strokeStyle = '#D1F7FF ';
    ctxss.globalAlpha = 0.03;
    ctxss.lineWidth = 600;
    ctxss.beginPath();
    ctxss.moveTo(0, posYs); /*  0-130*/
    ctxss.lineTo(0, 150);
    ctxss.stroke();
  }

  function moveLines() {
    posYs += speeds;

    if (posYs < 0 || posYs > canvasides.height) {
      speeds = speeds * -1;
    }
  }

  function loops() {
    // clear old frame;
    // ctx.clearRect(0,0,canvas.width, canvas.height);
    moveLines();
    drawLines();
    cancelani = requestAnimationFrame(loops);
  }
  requestAnimationFrame(loops);

}
var imgcomb = null;
function placecomb() {
  window.scrollBy(0, 500);
  document.getElementById("placecomb").disabled = true;
  document.getElementById("comb").style.display = "block";
  var combimg = document.getElementById("comb");
  //var orgleft = 60; 
  var orgtop = -10;//initial position
  clearInterval(imgcomb);
  imgcomb = setInterval(frame1, 100);
  function frame1() {
    if (orgtop == 6) {
      clearInterval(imgcomb);
      document.getElementById("case").setAttribute("onclick", "movecase()");
      //
    } else {
      orgtop++;
      combimg.style.top = orgtop + '%';



    }





  }
}

//function movecase(){

/* drag green case */
const draggable = document.getElementById('case');
const droppable = document.getElementById('droppable');

// Event listeners for drag and drop
draggable.addEventListener('dragstart', handleDragStart);
draggable.addEventListener('touchstart', handleTouchStart);
droppable.addEventListener('dragover', handleDragOver);
droppable.addEventListener('drop', handleDrop);

draggable.addEventListener('touchstart', handleTouchStart);
draggable.addEventListener('touchmove', handleTouchMove);
draggable.addEventListener('touchend', handleTouchEnd);



// Drag start handler
function handleDragStart(event) {
  // Set the drag data (image URL in this case)
  event.dataTransfer.setData('text/plain', event.target.src);
}

// Drag over handler to allow the drop
function handleDragOver(event) {
  event.preventDefault();
}

// Drop handler
function handleDrop(event) {
  event.preventDefault();

  // Get the dragged data (image URL)
  const imageUrl = event.dataTransfer.getData('text/plain');

  // Create an image element
  const droppedImage = new Image();
  droppedImage.src = imageUrl;
  droppedImage.style.width = droppable.clientWidth + 'px'; // Set the width as desired
  droppedImage.style.height = droppable.clientHeight + 'px';
  // Append the image to the droppable element
  droppable.innerHTML = '';
  droppable.appendChild(droppedImage);
  document.getElementById("combin").style.display = "block";
  document.getElementById('case').style.display = "none";
  //document.getElementById("combin").setAttribute("onclick", "removecomb()");
  document.getElementById('resolve').style.display = "none";
  document.getElementById('stacking').style.display = "none";
  document.getElementById('comb').style.display = "none";
  document.getElementById("removecomb").disabled = false;

}

/****************** Touch screen***************** */



let offsetX, offsetY;

function handleTouchStart(event) {
  event.preventDefault();
  //event.dataTransfer.setData('text/plain', event.target.src);
  offsetX = event.touches[0].clientX - draggable.getBoundingClientRect().left;
  offsetY = event.touches[0].clientY - draggable.getBoundingClientRect().top;
}
function handleTouchMove(event) {
  event.preventDefault();
  const x = event.touches[0].clientX - offsetX;
  const y = event.touches[0].clientY - offsetY;
  draggable.style.left = `${x}px`;
  draggable.style.top = `${y}px`;
  document.getElementById('resolve').style.display = "none";
  document.getElementById('stacking').style.display = "none";
  document.getElementById('comb').style.display = "none";
}

// Touch end handler
function handleTouchEnd(event) {
  event.preventDefault();
  document.getElementById("combin").style.display = "block";
  document.getElementById('case').style.display = "block";
  //document.getElementById("combin").setAttribute("onclick", "removecomb()");

  document.getElementById("removecomb").disabled = false;
  droppable.innerHTML = '';
}


/*let startX, startY, offsetX, offsetY, isDragging = false;
 
draggable.addEventListener('touchstart', handleTouchStart);
draggable.addEventListener('touchmove', handleTouchMove);
draggable.addEventListener('touchend', handleTouchEnd);

function handleTouchStart(event) {
  isDragging = true;
  startX = event.touches[0].clientX;
  startY = event.touches[0].clientY;
  offsetX = parseFloat(getComputedStyle(event.target).left);
  offsetY = parseFloat(getComputedStyle(event.target).top);
}

function handleTouchMove(event) {
  if (isDragging) {
    const currentX = event.touches[0].clientX;
    const currentY = event.touches[0].clientY;
    const deltaX = currentX - startX;
    const deltaY = currentY - startY;
    
    draggable.style.left = offsetX + deltaX + 'px';
    draggable.style.top = offsetY + deltaY + 'px';
  }
}

function handleTouchEnd(event) {
  if (isDragging) {
    isDragging = false;

    // Check if the draggable is inside the drop zone
    const rect1 = draggable.getBoundingClientRect();
    const rect2 = droppable.getBoundingClientRect();

    if (
      rect1.left >= rect2.left &&
      rect1.right <= rect2.right &&
      rect1.top >= rect2.top &&
      rect1.bottom <= rect2.bottom
    ) {
      // Log a message to the console
      console.log('Dropped into the drop zone!');
    }
  }
}*/



/* drag green case ended*/

//}
var imgcombin = null;
function removecomb() {
  window.scrollBy(0, 800);
  var combimgin = document.getElementById("combin");
  var orgtop = 195; //initial position
  clearInterval(imgcombin);
  imgcombin = setInterval(frame1, 100);
  function frame1() {
    if (orgtop == 180) {
      clearInterval(imgcombin);
      document.getElementById("sampleload1").style.display = "block";
      document.getElementById("sampleload2").style.display = "block";
      document.getElementById("sampleload3").style.display = "block";
      document.getElementById("sampleload4").style.display = "block";
      document.getElementById("combin").style.display = "none";
      document.getElementById("prepproteinsample").disabled = false;
      document.getElementById("removecomb").disabled = true;
      //document.getElementById("case").setAttribute("onclick", "movecase()");
      //
    } else {
      orgtop--;
      combimgin.style.top = orgtop + '%';
      document.getElementById("sampleload1").style.display = "block";
      document.getElementById("sampleload2").style.display = "block";
      document.getElementById("sampleload3").style.display = "block";
      document.getElementById("sampleload4").style.display = "block";


    }





  }
}

function preprotein_sample() {
  document.getElementById("prepproteinsample").disabled = true;

  document.getElementById("check1").disabled = false;
  document.getElementById("check2").disabled = false;
  document.getElementById("check3").disabled = false;
  document.getElementById("spinsample").disabled = false;
}



function spin_sample() {
  var checkBox1 = document.getElementById("check1");
  var checkBox2 = document.getElementById("check2");
  var checkBox3 = document.getElementById("check3");
  if ((checkBox1.checked == true) && (checkBox2.checked == true) && (checkBox3.checked == true)) {
    document.getElementById("tubesabcd").style.display = "block";
    document.getElementById("addbuffer").disabled = false;
    document.getElementById("spinsample").disabled = true;
    document.getElementById("bme").style.display = "none";

    window.scrollBy(0, 700);
  }

  else {
    $('#alertModal').modal('show');
    $('.modal-body').text('Check all the checkboxes');

    //alert("Check all the checkboxes");
  }
}

function addbuffer() {
  window.scrollBy(0, 600);
  document.getElementById("buffer").style.display = "block";
  document.getElementById("buffer").setAttribute("onclick", "addbuffertoelec()");

}
function addbuffertoelec() {
  document.getElementById("addbuffer").disabled = true;
  document.getElementById("sampleload").disabled = false;
  document.getElementById('loadsamplea').style.pointerEvents = "auto";
  document.getElementById("canvasbufferfill").style.display = "block";
  document.getElementById("canvasbufferfill").style.zIndex = 10;
  window.scrollBy(0, 500);
  /**side 1 */
  canvaside1 = document.getElementById("canvasbufferfill");
  ctxs1 = canvaside1.getContext("2d");
  var posY = 150;
  var speed = 1;

  function drawLine() {

    ctxs1.strokeStyle = '#DDE9FF ';
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



var canvassdrop1, ctxdrop1;
function sample_loadA() {
  window.scrollBy(0, 600);
  document.getElementById('loadsampleb').style.pointerEvents = "auto";
  canvassdrop1 = document.getElementById('sampleload1');
  ctxsdrop1 = canvassdrop1.getContext('2d');
  document.getElementById("peptitea").style.display = "block";
  document.getElementById("peptiteb").style.display = "none";
  document.getElementById("peptitec").style.display = "none";
  document.getElementById("peptited").style.display = "none";
  document.getElementById("peptitea").setAttribute("onclick", "p1()");
}

function p1() {
  clearp1 = setInterval(changep1, 200);
  document.getElementById("peptitea").removeAttribute("onclick", "p1()");
}

function changep1() {
  clearInterval(clearp1);
  document.getElementById("peptitea").style.display = "none";
  document.getElementById("peptitea1").style.display = "block";
  clearmpcnge1 = setInterval(changemp1, 300);

  function changemp1() {
    document.getElementById("peptitea").style.display = "block";
    document.getElementById("peptitea1").style.display = "none";
    clearmovep1 = setInterval(movep1, 300);
  }
}

function movep1() {
  clearInterval(clearmpcnge1);
  clearInterval(clearmovep1);
  document.getElementById("peptitea").style.top = 120 + "%";
  document.getElementById("peptitea").style.left = 9.5 + "%";
  document.getElementById("peptitea1").style.top = 120 + "%";
  document.getElementById("peptitea1").style.left = 9.5 + "%";
  document.getElementById("peptitea").setAttribute("onclick", "p11()");
}

function p11() {

  clearp11 = setInterval(changep11, 200);
  document.getElementById("peptitea").removeAttribute("onclick", "p11()");
}

function changep11() {

  clearInterval(clearp11);
  document.getElementById("peptitea").style.display = "none";
  document.getElementById("peptitea1").style.display = "block";
  clearmpcnge11 = setInterval(changemp11, 300);

  function changemp11() {
    canvassdrop1 = document.getElementById('sampleload1');
    ctxdrop1 = canvassdrop1.getContext('2d');
    document.getElementById("peptitea").style.display = "block";
    document.getElementById("peptitea1").style.display = "none";
    canvassdrop1.style.backgroundColor = '#B2C9FF';
    clearInterval(clearmpcnge11);
  }
}



 /*******************  sample load B ********************** */

var canvassdrop2,ctxsdrop2;
function sample_loadB() {
  //clearInterval(clearmpcnge1s);
  window.scrollBy(0, 600);
  document.getElementById('loadsamplec').style.pointerEvents = "auto";
  document.getElementById("peptitea").style.display = "none";
 canvassdrop2 = document.getElementById('sampleload2');
  ctxsdrop2 = canvassdrop2.getContext('2d');
  document.getElementById("peptiteb").style.display = "block";

  document.getElementById("peptitec").style.display = "none";
  document.getElementById("peptited").style.display = "none";
  document.getElementById("peptiteb").setAttribute("onclick", "p2()");
}

function p2() {
  clearp2 = setInterval(changep2, 200);
  document.getElementById("peptiteb").removeAttribute("onclick", "p2()");
}

function changep2() {
  clearInterval(clearp2);
  document.getElementById("peptiteb").style.display = "none";
  document.getElementById("peptiteb1").style.display = "block";
  clearmpcnge2 = setInterval(changemp2, 300);

  function changemp2() {
    document.getElementById("peptiteb").style.display = "block";
    document.getElementById("peptiteb1").style.display = "none";
    clearmovep2 = setInterval(movep2, 300);
  }
}

function movep2() {
  clearInterval(clearmpcnge2);
  clearInterval(clearmovep2);
  document.getElementById("peptiteb").style.top = 120 + "%";
  document.getElementById("peptiteb").style.left = 12.5 + "%";
  document.getElementById("peptiteb1").style.top = 120 + "%";
  document.getElementById("peptiteb1").style.left = 12.5 + "%";
  document.getElementById("peptiteb").setAttribute("onclick", "p22()");
}

function p22() {

  clearp22 = setInterval(changep22, 200);
  document.getElementById("peptiteb").removeAttribute("onclick", "p22()");
}

function changep22() {

  clearInterval(clearp22);
  document.getElementById("peptiteb").style.display = "none";
  document.getElementById("peptiteb1").style.display = "block";
  clearmpcnge22 = setInterval(changemp22, 300);

  function changemp22() {
    canvassdrop2 = document.getElementById('sampleload2');
    ctxsdrop2 = canvassdrop2.getContext('2d');
    document.getElementById("peptiteb").style.display = "block";
    document.getElementById("peptiteb1").style.display = "none";
    canvassdrop2.style.backgroundColor = '#B2C9FF';
    clearInterval(clearmpcnge22);
  }
}




/*******************  sample load C ********************** */
var canvassdrop3, ctxdrop3;
function sample_loadC() {
  //clearInterval(clearmpcnge2s);
  window.scrollBy(0, 600);
  document.getElementById('loadsampled').style.pointerEvents = "auto";
  document.getElementById("peptiteb").style.display = "none";
  canvassdrop3 = document.getElementById('sampleload3');
  ctxsdrop3 = canvassdrop3.getContext('2d');
  document.getElementById("peptitec").style.display = "block";
  document.getElementById("peptiteb").style.display = "none";
  document.getElementById("peptitea").style.display = "none";
  document.getElementById("peptited").style.display = "none";
  document.getElementById("peptitec").setAttribute("onclick", "p3()");
}

function p3() {
  clearp3 = setInterval(changep3, 200);
  document.getElementById("peptitec").removeAttribute("onclick", "p3()");
}

function changep3() {
  clearInterval(clearp3);
  document.getElementById("peptitec").style.display = "none";
  document.getElementById("peptitec1").style.display = "block";
  clearmpcnge3= setInterval(changemp3, 300);

  function changemp3() {
    document.getElementById("peptitec").style.display = "block";
    document.getElementById("peptitec1").style.display = "none";
    clearmovep3 = setInterval(movep3, 300);
  }
}

function movep3() {
  clearInterval(clearmpcnge3);
  clearInterval(clearmovep3);
  document.getElementById("peptitec").style.top = 120 + "%";
  document.getElementById("peptitec").style.left = 15.5 + "%";
  document.getElementById("peptitec1").style.top = 120 + "%";
  document.getElementById("peptitec1").style.left = 15.5 + "%";
  document.getElementById("peptitec").setAttribute("onclick", "p33()");
}

function p33() {

  clearp33 = setInterval(changep33, 200);
  document.getElementById("peptitec").removeAttribute("onclick", "p33()");
}

function changep33() {

  clearInterval(clearp33);
  document.getElementById("peptitec").style.display = "none";
  document.getElementById("peptitec1").style.display = "block";
  clearmpcnge33 = setInterval(changemp33, 300);

  function changemp33() {
    canvassdrop3 = document.getElementById('sampleload3');
    ctxdrop3 = canvassdrop3.getContext('2d');
    document.getElementById("peptitec").style.display = "block";
    document.getElementById("peptitec1").style.display = "none";
    canvassdrop3.style.backgroundColor = '#B2C9FF';
    clearInterval(clearmpcnge33);
  }
}




/*******************  sample load D ********************** */
var canvassdrop4, ctxdrop4;
function sample_loadD() {
  //clearInterval(clearmpcnge3s);
  window.scrollBy(0, 600);
  document.getElementById("gelrun").disabled = false;

  document.getElementById("peptitec").style.display = "none";
  canvassdrop4 = document.getElementById('sampleload4');
  ctxsdrop4 = canvassdrop4.getContext('2d');
  document.getElementById("peptited").style.display = "block";
  document.getElementById("peptiteb").style.display = "none";
  document.getElementById("peptitec").style.display = "none";
  document.getElementById("peptitea").style.display = "none";
  document.getElementById("peptited").setAttribute("onclick", "p4()");
  }
  
  function p4() {
    clearp4 = setInterval(changep4, 200);
    document.getElementById("peptited").removeAttribute("onclick", "p4()");
  }
  
  function changep4() {
    clearInterval(clearp4);
    document.getElementById("peptited").style.display = "none";
    document.getElementById("peptited1").style.display = "block";
    clearmpcnge4 = setInterval(changemp4, 300);
  
    function changemp4() {
      document.getElementById("peptited").style.display = "block";
      document.getElementById("peptited1").style.display = "none";
      clearmovep4 = setInterval(movep4, 300);
    }
  }
  
  function movep4() {
    clearInterval(clearmpcnge4);
    clearInterval(clearmovep4);
    document.getElementById("peptited").style.top = 120 + "%";
    document.getElementById("peptited").style.left = 18.5 + "%";
    document.getElementById("peptited1").style.top = 120 + "%";
    document.getElementById("peptited1").style.left = 18.5 + "%";
    document.getElementById("peptited").setAttribute("onclick", "p44()");
  }
  
  function p44() {
  
    clearp44 = setInterval(changep44, 200);
    document.getElementById("peptited").removeAttribute("onclick", "p44()");
  }
  
  function changep44() {
  
    clearInterval(clearp44);
    document.getElementById("peptited").style.display = "none";
    document.getElementById("peptited1").style.display = "block";
    clearmpcnge44 = setInterval(changemp44, 300);
  
    function changemp44() {
      canvassdrop4 = document.getElementById('sampleload4');
      ctxdrop4 = canvassdrop4.getContext('2d');
      document.getElementById("peptited").style.display = "block";
      document.getElementById("peptited1").style.display = "none";
      canvassdrop4.style.backgroundColor = '#B2C9FF';
      clearInterval(clearmpcnge44);
    }
  }
  





function start_ele() {

  document.getElementById("sampleload").disabled = true;

  document.getElementById("topsetup").setAttribute("onclick", "closetopcover()");
  document.getElementById("peptitea").style.display = "none";
  document.getElementById("peptiteb").style.display = "none";
  document.getElementById("peptitec").style.display = "none";
  document.getElementById("peptited").style.display = "none";
  //clearInterval(clearmpcnge4);


}

var imgtopsetup = null;
function closetopcover() {
  document.getElementById("cvt").style.display = "block";
  document.getElementById("crun").style.display = "block";
  var topsetup = document.getElementById("topsetup");
  var topsetupt = 120; //initial  position
  clearInterval(imgtopsetup);
  //clearInterval(imgtbdown);
  imgtopsetup = setInterval(frame, 10); /* frame is 10 denotes the speed of the movement*/

  function frame() {
    if (topsetupt == 141) {

      clearInterval(imgtopsetup);
      document.getElementById("topsetup").removeAttribute("onclick", "closetopcover()");

      //imgtbdown = setInterval(frame, 20);


    } else {

      topsetupt++;
      topsetup.style.top = topsetupt + '%';

    }
  }

}

function txtvolt() {
  document.getElementById("topsetup").removeAttribute("onclick");
  document.getElementById("cvp").style.display = "block";
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

var volt = 0;
function txtvoltp() {
  document.getElementById("cvn").style.display = "block";
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
  volt = volt + 10;
  // Define the text to be displayed
  const text = volt;


  // Get the position to place the text (in this case, centered on the canvas)
  const x = canvas.width / 2;
  const y = canvas.height / 2;

  // Draw the text on the canvas
  ctx.fillText(text, x, y);



}
function txtvoltd() {
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

function runningel() {

  if (volt == null) {
    //  alert("Enter volt between 80 and 120");
    $('#alertModal').modal('show');
    $('.modal-body').text('Give input voltage between 80 and 120');
  }
  else if (volt < 80 || volt > 120) {
    $('#alertModal').modal('show');
    $('.modal-body').text('Give input voltage between 80 and 120');
  }
  else {

    rungelsample();
    document.getElementById("cstop").style.display = "block";
  }
}


var imgtopsetup1 = null;
function puttopup() {


  var topsetup1 = document.getElementById("topsetup");


  var topsetupt1 = 141; //initial  position
  clearInterval(imgtopsetup1);
  //clearInterval(imgtbdown);
  imgtopsetup1 = setInterval(frame, 15); /* frame is 10 denotes the speed of the movement*/

  function frame() {
    if (topsetupt1 == 120) {

      clearInterval(imgtopsetup1);
      document.getElementById("staingel").disabled = false;
      document.getElementById("topsetup").removeAttribute("onclick", "puttopup()");
      document.getElementById("checks1").disabled = false;
      document.getElementById("checks2").disabled = false;
      document.getElementById("checks3").disabled = false;
      document.getElementById("checks4").disabled = false;
      //imgtbdown = setInterval(frame, 20);
      //  document.getElementById("cd1").style.top= 130 + '%';
      //document.getElementById("cd2").style.top= 130 + '%';
      //  var cd1s= document.getElementById("cd1");
      //  var cd2s= document.getElementById("cd2");
      //  cd1s.style.top = 130 + '%';
      // cd2s.style.top = 130 + '%';


    } else {

      topsetupt1--;
      topsetup1.style.top = topsetupt1 + '%';

    }
  }



}





function staining() {
  if ((document.getElementById("checks1").checked) && (document.getElementById("checks2").checked) && (document.getElementById("checks3").checked) && (document.getElementById("checks4").checked)) {

    window.scrollBy(0, 800);
    // Start the rotation animation
    document.getElementById("gel").style.display = "block";

    var btnstaintext = document.getElementById("staingel");
    if (btnstaintext.innerHTML === "Start Staining") {
      btnstaintext.innerHTML = "Stop Staining";
      document.getElementById("sample1").style.display = "none";
      document.getElementById("sample2").style.display = "none";
      document.getElementById("sample3").style.display = "none";
      document.getElementById("sample4").style.display = "none";
      document.getElementById("sampleload1").style.display = "none";
      document.getElementById("sampleload2").style.display = "none";
      document.getElementById("sampleload3").style.display = "none";
      document.getElementById("sampleload4").style.display = "none";
      rotateElementst()

      rotateElementb();
      //tubeimg.addEventListener('click', tubeinsert);
    } else {
      btnstaintext.innerHTML = "Start Staining";
      document.getElementById("dstaingel").disabled = false;
      document.getElementById("checks1").checked = false;
      document.getElementById("checks2").checked = false;
      document.getElementById("checks3").checked = false;
      document.getElementById("checks4").checked = false;
      document.getElementById("staingel").disabled = true;
      //document.getElementById("checks4").disabled=true;
      cancelAnimationFrame(animationIst);
      cancelAnimationFrame(animationIstb);

    }
  }

  else {
    // alert("Select all the component for staining the gel");
    $('#alertModal').modal('show');
    $('.modal-body').text('Select all the components for staining the gel');
  }

}



function dstaining() {

  if ((document.getElementById("checks1").checked) && (document.getElementById("checks2").checked) && (document.getElementById("checks3").checked) && (document.getElementById("checks4").checked == false)) {
    window.scrollBy(0, 800);
    document.getElementById("staingel").disabled = true;
    var btnstaintext = document.getElementById("dstaingel");
    if (btnstaintext.innerHTML === "Start De-staining") {
      btnstaintext.innerHTML = "Stop De-staining";
      document.getElementById("sample1").style.display = "none";
      document.getElementById("sample2").style.display = "none";
      document.getElementById("sample3").style.display = "none";
      document.getElementById("sample4").style.display = "none";
      document.getElementById("sampleload1").style.display = "none";
      document.getElementById("sampleload2").style.display = "none";
      document.getElementById("sampleload3").style.display = "none";
      document.getElementById("sampleload4").style.display = "none";

      rotateElement();
      rotateElementbd();
      //tubeimg.addEventListener('click', tubeinsert);
    } else {
      btnstaintext.innerHTML = "Start De-staining";
      document.getElementById("viewsample").disabled = false;

      cancelAnimationFrame(animationIdst1);
      cancelAnimationFrame(animationIdstbd);

    }
  }
  else if ((document.getElementById("checks1").checked) && (document.getElementById("checks2").checked) && (document.getElementById("checks3").checked) && (document.getElementById("checks4").checked)) {
    $('#alertModal').modal('show');
    $('.modal-body').text('De-select Coomassie Brilliant blue (1gm) component');

  }
  else {
    $('#alertModal').modal('show');
    $('.modal-body').text('Select correct components for de-staining the gel');
  }

}

function view_sample_UVlight() {
  document.getElementById("ladder").style.display = "block";
  document.getElementById("rotatingElementst").style.display = "none";
  document.getElementById("rotatingElementbowl").style.display = "none";
  document.getElementById("rotatingElementdst").style.display = "none";
  document.getElementById("rotatingElementbowld").style.display = "none";
  document.getElementById("staining").style.display = "none";
  document.getElementById("staingel").disabled = true;
  document.getElementById("dstaingel").disabled = true;
  document.getElementById("output").style.display = "block";
  document.getElementById("gel").style.display = "none";

  window.scrollBy(0, 700);
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
//var imgobj1 = null;
function rungelsample() {

  /*
  document.getElementById("sampleload1").style.display="block";
  var canvassd1 = document.getElementById("sampleload1");
  var orgtop = 197; 
  clearInterval(imgobj1);
  imgobj1 = setInterval(frame1, 100); 
  function frame1() {
    if (orgtop == 260) { 
      clearInterval(imgobj1); 
      //
    } else {
      orgtop++; 
      canvassd1.style.top = orgtop + '%'; 
     
  
       
    }
  }*/


  /** Sample 1 */

  canvass11 = document.getElementById("sample1");
  ctxgs11 = canvass11.getContext("2d");
  var posY = 0;
  var speed = 0.2;



  function drawLine() {
    const gradient = ctxgs11.createLinearGradient(0, 0, 0, canvass11.height);

    // Add color stops to the gradient
    gradient.addColorStop(0, '#B2C9FF  ');     // Start color (position 0)
    gradient.addColorStop(0.9, '#B2C9FF ');  // Middle color (position 0.8)
    gradient.addColorStop(1, '#B2C9FF ');      // End color (position 1)

    // Set the stroke style to the gradient
    ctxgs11.strokeStyle = gradient;

    // ctxgs1.strokeStyle = '#7FA9FF';
    //ctxs1.fillStyle = gr;
    //ctxs1.fillRect(10,10,150,80);
    ctxgs11.lineWidth = 600;
    ctxgs11.beginPath();
    ctxgs11.moveTo(0, posY);
    ctxgs11.lineTo(0, 0);
    ctxgs11.stroke();
  }

  function moveLine() {
    posY += speed;

    if (posY < 0 || posY > canvass11.height) {
      speed = speed * -1;
    }
  }

  function loop() {
    // clear old frame;
    // ctx.clearRect(0,0,canvas.width, canvas.height);
    moveLine();
    drawLine();
    cancelani1 = requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);





  /*sample 2 */

  canvass21 = document.getElementById("sample2");
  ctxgs21 = canvass21.getContext("2d");
  var posY2 = 0;
  var speed2 = 0.2;



  function drawLine2() {
    const gradient2 = ctxgs21.createLinearGradient(0, 0, 0, canvass21.height);

    // Add color stops to the gradient
    gradient2.addColorStop(0, '#B2C9FF  ');     // Start color (position 0) //#EBFCFF
    gradient2.addColorStop(0.9, '#B2C9FF ');  // Middle color (position 0.8) //#E8F8FF
    gradient2.addColorStop(1, '#B2C9FF ');      // End color (position 1) //#7FA9FF

    // Set the stroke style to the gradient
    ctxgs21.strokeStyle = gradient2;

    // ctxgs1.strokeStyle = '#7FA9FF';
    //ctxs1.fillStyle = gr;
    //ctxs1.fillRect(10,10,150,80);
    ctxgs21.lineWidth = 600;
    ctxgs21.beginPath();
    ctxgs21.moveTo(0, posY2); /*  */
    ctxgs21.lineTo(0, 0);
    ctxgs21.stroke();
  }

  function moveLine2() {
    posY2 += speed2;

    if (posY2 < 0 || posY2 > canvass21.height) {
      speed2 = speed2 * -1;
    }
  }

  function loop2() {
    // clear old frame;
    // ctx.clearRect(0,0,canvas.width, canvas.height);
    moveLine2();
    drawLine2();
    cancelani2 = requestAnimationFrame(loop2);
  }
  requestAnimationFrame(loop2);


  /*sample 3 */

  canvass31 = document.getElementById("sample3");
  ctxgs31 = canvass31.getContext("2d");
  var posY3 = 0;
  var speed3 = 0.2;



  function drawLine3() {
    const gradient3 = ctxgs31.createLinearGradient(0, 0, 0, canvass31.height);

    // Add color stops to the gradient
    gradient3.addColorStop(0, '#B2C9FF  ');     // Start color (position 0)
    gradient3.addColorStop(0.9, '#B2C9FF ');  // Middle color (position 0.8)
    gradient3.addColorStop(1, '#B2C9FF ');      // End color (position 1)

    // Set the stroke style to the gradient
    ctxgs31.strokeStyle = gradient3;

    // ctxgs1.strokeStyle = '#7FA9FF';
    //ctxs1.fillStyle = gr;
    //ctxs1.fillRect(10,10,150,80);
    ctxgs31.lineWidth = 600;
    ctxgs31.beginPath();
    ctxgs31.moveTo(0, posY3); /*  */
    ctxgs31.lineTo(0, 0);
    ctxgs31.stroke();
  }

  function moveLine3() {
    posY3 += speed3;

    if (posY3 < 0 || posY3 > canvass31.height) {
      speed3 = speed3 * -1;
    }
  }

  function loop3() {
    // clear old frame;
    // ctx.clearRect(0,0,canvas.width, canvas.height);
    moveLine3();
    drawLine3();
    cancelani3 = requestAnimationFrame(loop3);
  }
  requestAnimationFrame(loop3);

  /*sample 4 */

  canvass41 = document.getElementById("sample4");
  ctxgs41 = canvass41.getContext("2d");
  var posY4 = 0;
  var speed4 = 0.2;



  function drawLine4() {
    const gradient4 = ctxgs41.createLinearGradient(0, 0, 0, canvass41.height);

    // Add color stops to the gradient
    gradient4.addColorStop(0, '#B2C9FF ');     // Start color (position 0)
    gradient4.addColorStop(0.9, '#B2C9FF ');  // Middle color (position 0.8)
    gradient4.addColorStop(1, '#B2C9FF ');      // End color (position 1)

    // Set the stroke style to the gradient
    ctxgs41.strokeStyle = gradient4;

    // ctxgs1.strokeStyle = '#7FA9FF';
    //ctxs1.fillStyle = gr;
    //ctxs1.fillRect(10,10,150,80);
    ctxgs41.lineWidth = 600;
    ctxgs41.beginPath();
    ctxgs41.moveTo(0, posY4); /*  */
    ctxgs41.lineTo(0, 0);
    ctxgs41.stroke();
  }

  function moveLine4() {
    posY4 += speed4;

    if (posY4 < 0 || posY4 > canvass41.height) {
      speed4 = speed4 * -1;
    }
  }

  function loop4() {
    // clear old frame;
    // ctx.clearRect(0,0,canvas.width, canvas.height);
    moveLine4();
    drawLine4();
    cancelani4 = requestAnimationFrame(loop4);
  }
  requestAnimationFrame(loop4);



}
var animationIst, animationIstb, animationIdst1, animationIdstbd;


const rotatingElementst = document.getElementById('rotatingElementst');
let rotationst = 10; // Initial rotation value
let rotateClockwisest = true; // Initial direction

function rotateElementst() {
  rotatingElementst.style.transform = `rotate(${rotationst}deg)`;

  // Update rotation based on direction
  if (rotateClockwisest) {
    rotationst -= 0.2;
    if (rotationst <= -10) {
      rotateClockwisest = false;
    }
  } else {
    rotationst += 0.2;
    if (rotationst >= 10) {
      rotateClockwisest = true;
    }
  }

  animationIst = requestAnimationFrame(rotateElementst);
}


const rotatingElement = document.getElementById('rotatingElementdst');
let rotation = 10; // Initial rotation value
let rotateClockwise = true; // Initial direction

function rotateElement() {
  rotatingElement.style.transform = `rotate(${rotation}deg)`;
  document.getElementById('rotatingElementdst').style.display = "block";
  document.getElementById('rotatingElementst').style.display = "none";

  // Update rotation based on direction
  if (rotateClockwise) {
    rotation -= 0.2;
    if (rotation <= -10) {
      rotateClockwise = false;
    }
  } else {
    rotation += 0.2;
    if (rotation >= 10) {
      rotateClockwise = true;
    }
  }

  animationIdst1 = requestAnimationFrame(rotateElement);
}


const rotatingElementb = document.getElementById('rotatingElementbowl');
let rotationb = 10; // Initial rotation value
let rotateClockwiseb = true; // Initial direction

function rotateElementb() {
  rotatingElementb.style.transform = `rotate(${rotationb}deg)`;

  // Update rotation based on direction
  if (rotateClockwiseb) {
    rotationb -= 0.2;
    if (rotationb <= -10) {
      rotateClockwiseb = false;
    }
  } else {
    rotationb += 0.2;
    if (rotationb >= 10) {
      rotateClockwiseb = true;
    }
  }

  animationIstb = requestAnimationFrame(rotateElementb);
}

const rotatingElementbd = document.getElementById('rotatingElementbowld');
let rotationbd = 10; // Initial rotation value
let rotateClockwisebd = true; // Initial direction

function rotateElementbd() {
  rotatingElementbd.style.transform = `rotate(${rotationbd}deg)`;
  document.getElementById('rotatingElementbowl').style.display = "none";
  document.getElementById('rotatingElementbowld').style.display = "block";
  // Update rotation based on direction
  if (rotateClockwisebd) {
    rotationbd -= 0.2;
    if (rotationbd <= -10) {
      rotateClockwisebd = false;
    }
  } else {
    rotationbd += 0.2;
    if (rotationbd >= 10) {
      rotateClockwisebd = true;
    }
  }

  animationIdstbd = requestAnimationFrame(rotateElementbd);
}


function cancelmsg() {
  document.getElementById("alertModal").style.display = "none";
  document.getElementById("alertModal").classList.remove("show");
}
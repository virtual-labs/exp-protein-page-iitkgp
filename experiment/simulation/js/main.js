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
  window.scrollBy(0, 600);
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
  var orgtop =-10;//initial position
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
  window.scrollBy(0, 700);
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

/*function check1(){
  var checkBox1 = document.getElementById("check1");

  if (checkBox1.checked == true){
    //image display block
 document.getElementById("folded").style.display="block";
  document.getElementById("bme").style.display="none";
   document.getElementById("heatd").style.display="none";
   document.getElementById("check2").checked=false;
    document.getElementById("check3").checked=false;
    //window.scrollBy(0,700);
  } else {
    // image display "none";
   
    document.getElementById("folded").style.display="none";
  
  }
}

function check2(){
  var checkBox2 = document.getElementById("check2");

  if (checkBox2.checked == true){
    //image display block
    document.getElementById("heatd").style.display="block";
    document.getElementById("folded").style.display="none";
    document.getElementById("bme").style.display="none";
    document.getElementById("check1").checked=false;
    document.getElementById("check3").checked=false;
    //window.scrollBy(0,700);
  } else {
    // image display "none";
   
    document.getElementById("heatd").style.display="none";
  }
}

function check3(){
  var checkBox3 = document.getElementById("check3");

  if (checkBox3.checked == true){
    //image display block
    document.getElementById("bme").style.display="block";
    document.getElementById("folded").style.display="none";
    document.getElementById("heatd").style.display="none";
    document.getElementById("check2").checked=false;
    document.getElementById("check1").checked=false;
    document.getElementById("spinsample").disabled = false;
    //window.scrollBy(0,700);
  } else {
    // image display "none";
    
    document.getElementById("bme").style.display="none";
    
  }
}*/

function spin_sample() {
  var checkBox1 = document.getElementById("check1");
  var checkBox2 = document.getElementById("check2");
  var checkBox3 = document.getElementById("check3");
  if ((checkBox1.checked == true) && (checkBox2.checked == true) && (checkBox3.checked == true)) {
    document.getElementById("tubesabcd").style.display = "block";
    document.getElementById("addbuffer").disabled = false;
    document.getElementById("spinsample").disabled = true;
    document.getElementById("bme").style.display = "none";
    document.getElementById("check3").checked = false;
    window.scrollBy(0,700);
  }

  else {
alert("Check all the checkboxes");
  }
}

function addbuffer() {
  window.scrollBy(0,700);
  document.getElementById("buffer").style.display = "block";
  document.getElementById("buffer").setAttribute("onclick", "addbuffertoelec()");

}
function addbuffertoelec() {
  document.getElementById("addbuffer").disabled = true;
  document.getElementById("sampleload").disabled = false;
  document.getElementById('loadsamplea').style.pointerEvents = "auto";
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




function sample_loadA() {
  window.scrollBy(0,800);
  document.getElementById('loadsampleb').style.pointerEvents = "auto";
  const canvassdrop1 = document.getElementById('sampleload1');
  const ctxsdrop1 = canvassdrop1.getContext('2d');
  document.getElementById("peptitea").style.display = "block";
  document.getElementById("peptiteb").style.display = "none";
  document.getElementById("peptitec").style.display = "none";
  document.getElementById("peptited").style.display = "none";
  const imagepp = document.getElementById('peptitea');

  let isDragging = false;

  // Function to handle mouse/touch down event
  function handleMouseDown(event) {


    isDragging = true;
    imagepp.style.cursor = 'grabbing';
    /*  imageppb.style.cursor = 'grabbing';
     imageppc.style.cursor = 'grabbing';
     imageppd.style.cursor = 'grabbing'; */

    // Calculate the offset of the mouse/touch position relative to the image
    const offsetX = event.clientX - imagepp.getBoundingClientRect().left;
    const offsetY = event.clientY - imagepp.getBoundingClientRect().top;


    // Function to handle mouse/touch move event
    function handleMouseMove(event) {

      if (isDragging) {
        // Update the position of the image based on mouse/touch position

        imagepp.style.left = event.clientX - offsetX + 'px';
        imagepp.style.top = event.clientY - offsetY + 'px';



        const imageRect = imagepp.getBoundingClientRect();
        const canvasRect = canvassdrop1.getBoundingClientRect();
        /*  const canvasRect2 = canvassdrop2.getBoundingClientRect();
         const canvasRect3 = canvassdrop3.getBoundingClientRect();
         const canvasRect4 = canvassdrop4.getBoundingClientRect(); */

        if (imageRect.left + imageRect.width >= canvasRect.left && imageRect.top + imageRect.height >= canvasRect.top && imageRect.left <= canvasRect.left + canvasRect.width && imageRect.top <= canvasRect.top + canvasRect.height) {
          // Change the canvas color when the image touches it
          canvassdrop1.style.backgroundColor = '#B2C9FF'; //#7FA9FF

        }


        /* else {
          document.getElementById("gelrun").disabled = true;
          // Reset the canvas color if the image is outside the canvas
         canvassdrop1.style.backgroundColor = 'white';
         
        }  */
      }
    }

    // Function to handle mouse/touch up event
    function handleMouseUp() {

      isDragging = false;
      imagepp.style.cursor = 'grabbing';
      // Remove the event listeners when dragging is complete
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      //  imagepp.removeEventListener('touchmove', handleMouseMove);
      //  imagepp.removeEventListener('touchend', handleMouseUp);

    }

    // Add event listeners for mouse/touch move and up events
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    //  imagepp.addEventListener('touchmove', handleMouseMove);
    // imagepp.addEventListener('touchend', handleMouseUp);
  }

  // Function to change the color when clicked/touched
  function changeColor() {
    imagepp.style.filter = 'hue-rotate(20deg)'; // Change color (90 degrees in hue rotation)
  }

  // Add event listeners for mouse/touch down and click/touch events
  imagepp.addEventListener('mousedown', handleMouseDown);
  // imagepp.addEventListener('touchstart', handleMouseDown);
  imagepp.addEventListener('click', changeColor);
  imagepp.addEventListener('touchend', changeColor);

  /*****************************  Touch  *************************************/
  function handleTouchStart(event) {
    console.log('Touchstart event triggered');
    const touch = event.touches[0];
    const boundingRect = imagepp.getBoundingClientRect();

    isDragging = true;

    // Store the initial touch coordinates as properties on the image element
    imagepp.initialTouchX = touch.clientX;
    imagepp.initialTouchY = touch.clientY;

    // Calculate the offset of the touch point relative to the image
    imagepp.offsetX = touch.clientX - boundingRect.left;
    imagepp.offsetY = touch.clientY - boundingRect.top;

    // Add a touchmove and touchend event listener
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', handleTouchEnd);
  }

  function handleTouchMove(event) {
    console.log('Touchmove event triggered');
    const touch = event.touches[0];

    if (isDragging) {
      // Use the stored initial touch coordinates to calculate the image position
      const imageX = touch.clientX - imagepp.offsetX;
      const imageY = touch.clientY - imagepp.offsetY;

      // Update the position of the image based on touch position
      imagepp.style.left = imageX + 'px';
      imagepp.style.top = imageY + 'px';

      const imageRect = imagepp.getBoundingClientRect();
      const canvasRect = canvassdrop1.getBoundingClientRect();


      if (imageRect.left + imageRect.width >= canvasRect.left && imageRect.top + imageRect.height >= canvasRect.top && imageRect.left <= canvasRect.left + canvasRect.width && imageRect.top <= canvasRect.top + canvasRect.height) {
        // Change the canvas color when the image touches it
        canvassdrop1.style.backgroundColor = '#B2C9FF';

      }
    }
  }

  function handleTouchEnd() {
    console.log('Touchend event triggered');
    isDragging = false;

    // Remove the touchmove and touchend event listeners when dragging is complete
    window.removeEventListener('touchmove', handleTouchMove);
    window.removeEventListener('touchend', handleTouchEnd);
  }

  imagepp.addEventListener('touchstart', handleTouchStart);

}
function sample_loadB() {
  window.scrollBy(0,800);
  document.getElementById('loadsamplec').style.pointerEvents = "auto";
  document.getElementById("peptitea").style.display = "none";
  const canvassdrop2 = document.getElementById('sampleload2');
  const ctxsdrop2 = canvassdrop2.getContext('2d');
  document.getElementById("peptiteb").style.display = "block";
  document.getElementById("peptitea").style.display = "none";
  document.getElementById("peptitec").style.display = "none";
  document.getElementById("peptited").style.display = "none";
  const imagepp2 = document.getElementById('peptiteb');

  let isDragging2 = false;

  // Function to handle mouse/touch down event
  function handleMouseDown(event) {
    isDragging2 = true;
    imagepp2.style.cursor = 'grabbing';


    // Calculate the offset of the mouse/touch position relative to the image
    let offsetX = event.clientX - imagepp2.getBoundingClientRect().left;
    let offsetY = event.clientY - imagepp2.getBoundingClientRect().top;

    // Function to handle mouse/touch move event
    function handleMouseMove(event) {
      if (isDragging2) {
        // Update the position of the image based on mouse/touch position
        imagepp2.style.left = event.clientX - offsetX + 'px';
        imagepp2.style.top = event.clientY - offsetY + 'px';


        const imageRect = imagepp2.getBoundingClientRect();
        const canvasRect = canvassdrop2.getBoundingClientRect();


        if (imageRect.left + imageRect.width >= canvasRect.left && imageRect.top + imageRect.height >= canvasRect.top && imageRect.left <= canvasRect.left + canvasRect.width && imageRect.top <= canvasRect.top + canvasRect.height) {
          // Change the canvas color when the image touches it
          canvassdrop2.style.backgroundColor = '#B2C9FF';

        }


        /* else {
          document.getElementById("gelrun").disabled = true;
          // Reset the canvas color if the image is outside the canvas
         canvassdrop1.style.backgroundColor = 'white';
         
        }  */
      }
    }

    // Function to handle mouse/touch up event
    function handleMouseUp() {
      isDragging2 = false;
      imagepp2.style.cursor = 'grabbing';
      // Remove the event listeners when dragging is complete
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      //  imagepp2.removeEventListener('touchmove', handleMouseMove);
      //  imagepp2.removeEventListener('touchend', handleMouseUp);

    }

    // Add event listeners for mouse/touch move and up events
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    // imagepp2.addEventListener('touchmove', handleMouseMove);
    // imagepp2.addEventListener('touchend', handleMouseUp);
  }

  // Function to change the color when clicked/touched
  function changeColor() {
    imagepp2.style.filter = 'hue-rotate(20deg)'; // Change color  (90 degrees in hue rotation)
  }

  // Add event listeners for mouse/touch down and click/touch events
  imagepp2.addEventListener('mousedown', handleMouseDown);
  // imagepp2.addEventListener('touchstart', handleMouseDown);
  imagepp2.addEventListener('click', changeColor);
  // imagepp2.addEventListener('touchend', changeColor);


  /********************************* Touch sample b***************************************** */

  function handleTouchStart(event) {
    console.log('Touchstart event triggered');
    const touch = event.touches[0];
    const boundingRect = imagepp2.getBoundingClientRect();

    isDragging2 = true;

    // Store the initial touch coordinates as properties on the image element
    imagepp2.initialTouchX = touch.clientX;
    imagepp2.initialTouchY = touch.clientY;

    // Calculate the offset of the touch point relative to the image
    imagepp2.offsetX = touch.clientX - boundingRect.left;
    imagepp2.offsetY = touch.clientY - boundingRect.top;

    // Add a touchmove and touchend event listener
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', handleTouchEnd);
  }

  function handleTouchMove(event) {
    console.log('Touchmove event triggered');
    const touch = event.touches[0];

    if (isDragging2) {
      // Use the stored initial touch coordinates to calculate the image position
      const imageX = touch.clientX - imagepp2.offsetX;
      const imageY = touch.clientY - imagepp2.offsetY;

      // Update the position of the image based on touch position
      imagepp2.style.left = imageX + 'px';
      imagepp2.style.top = imageY + 'px';

      const imageRect = imagepp2.getBoundingClientRect();
      const canvasRect = canvassdrop2.getBoundingClientRect();


      if (imageRect.left + imageRect.width >= canvasRect.left && imageRect.top + imageRect.height >= canvasRect.top && imageRect.left <= canvasRect.left + canvasRect.width && imageRect.top <= canvasRect.top + canvasRect.height) {
        // Change the canvas color when the image touches it
        canvassdrop2.style.backgroundColor = '#B2C9FF';

      }
    }
  }

  function handleTouchEnd() {
    console.log('Touchend event triggered');
    isDragging2 = false;

    // Remove the touchmove and touchend event listeners when dragging is complete
    window.removeEventListener('touchmove', handleTouchMove);
    window.removeEventListener('touchend', handleTouchEnd);
  }

  imagepp2.addEventListener('touchstart', handleTouchStart);

}


function sample_loadC() {
  window.scrollBy(0,800);
  document.getElementById('loadsampled').style.pointerEvents = "auto";
  document.getElementById("peptiteb").style.display = "none";
  const canvassdrop3 = document.getElementById('sampleload3');
  const ctxsdrop3 = canvassdrop3.getContext('2d');
  document.getElementById("peptitec").style.display = "block";
  document.getElementById("peptiteb").style.display = "none";
  document.getElementById("peptitea").style.display = "none";
  document.getElementById("peptited").style.display = "none";
  const imagepp3 = document.getElementById('peptitec');

  let isDragging3 = false;

  // Function to handle mouse/touch down event
  function handleMouseDown(event) {
    isDragging3 = true;
    imagepp3.style.cursor = 'grabbing';
    /*  imageppb.style.cursor = 'grabbing';
     imageppc.style.cursor = 'grabbing';
     imageppd.style.cursor = 'grabbing'; */

    // Calculate the offset of the mouse/touch position relative to the image
    const offsetX = event.clientX - imagepp3.getBoundingClientRect().left;
    const offsetY = event.clientY - imagepp3.getBoundingClientRect().top;


    // Function to handle mouse/touch move event
    function handleMouseMove(event) {

      if (isDragging3) {
        // Update the position of the image based on mouse/touch position
        imagepp3.style.left = event.clientX - offsetX + 'px';
        imagepp3.style.top = event.clientY - offsetY + 'px';



        const imageRect = imagepp3.getBoundingClientRect();
        const canvasRect = canvassdrop3.getBoundingClientRect();
        /*  const canvasRect2 = canvassdrop2.getBoundingClientRect();
         const canvasRect3 = canvassdrop3.getBoundingClientRect();
         const canvasRect4 = canvassdrop4.getBoundingClientRect(); */

        if (imageRect.left + imageRect.width >= canvasRect.left && imageRect.top + imageRect.height >= canvasRect.top && imageRect.left <= canvasRect.left + canvasRect.width && imageRect.top <= canvasRect.top + canvasRect.height) {
          // Change the canvas color when the image touches it
          canvassdrop3.style.backgroundColor = '#B2C9FF';

        }


        /* else {
          document.getElementById("gelrun").disabled = true;
          // Reset the canvas color if the image is outside the canvas
         canvassdrop1.style.backgroundColor = 'white';
         
        }  */
      }
    }

    // Function to handle mouse/touch up event
    function handleMouseUp() {
      isDragging3 = false;
      imagepp3.style.cursor = 'grabbing';
      // Remove the event listeners when dragging is complete
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      // imagepp3.removeEventListener('touchmove', handleMouseMove);
      // imagepp3.removeEventListener('touchend', handleMouseUp);

    }

    // Add event listeners for mouse/touch move and up events
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    //  imagepp3.addEventListener('touchmove', handleMouseMove);
    //  imagepp3.addEventListener('touchend', handleMouseUp);
  }

  // Function to change the color when clicked/touched
  function changeColor() {
    imagepp3.style.filter = 'hue-rotate(20deg)'; // Change color (90 degrees in hue rotation)
  }

  // Add event listeners for mouse/touch down and click/touch events
  imagepp3.addEventListener('mousedown', handleMouseDown);
  //imagepp3.addEventListener('touchstart', handleMouseDown);
  imagepp3.addEventListener('click', changeColor);
  imagepp3.addEventListener('touchend', changeColor);


  /********************************************* Touch sample c***************************************************** */

  function handleTouchStart(event) {
    console.log('Touchstart event triggered');
    const touch = event.touches[0];
    const boundingRect = imagepp3.getBoundingClientRect();

    isDragging3 = true;

    // Store the initial touch coordinates as properties on the image element
    imagepp3.initialTouchX = touch.clientX;
    imagepp3.initialTouchY = touch.clientY;

    // Calculate the offset of the touch point relative to the image
    imagepp3.offsetX = touch.clientX - boundingRect.left;
    imagepp3.offsetY = touch.clientY - boundingRect.top;

    // Add a touchmove and touchend event listener
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', handleTouchEnd);
  }

  function handleTouchMove(event) {
    console.log('Touchmove event triggered');
    const touch = event.touches[0];

    if (isDragging3) {
      // Use the stored initial touch coordinates to calculate the image position
      const imageX = touch.clientX - imagepp3.offsetX;
      const imageY = touch.clientY - imagepp3.offsetY;

      // Update the position of the image based on touch position
      imagepp3.style.left = imageX + 'px';
      imagepp3.style.top = imageY + 'px';

      const imageRect = imagepp3.getBoundingClientRect();
      const canvasRect = canvassdrop3.getBoundingClientRect();


      if (imageRect.left + imageRect.width >= canvasRect.left && imageRect.top + imageRect.height >= canvasRect.top && imageRect.left <= canvasRect.left + canvasRect.width && imageRect.top <= canvasRect.top + canvasRect.height) {
        // Change the canvas color when the image touches it
        canvassdrop3.style.backgroundColor = '#B2C9FF';

      }
    }
  }

  function handleTouchEnd() {
    console.log('Touchend event triggered');
    isDragging3 = false;

    // Remove the touchmove and touchend event listeners when dragging is complete
    window.removeEventListener('touchmove', handleTouchMove);
    window.removeEventListener('touchend', handleTouchEnd);
  }

  imagepp3.addEventListener('touchstart', handleTouchStart);



}

function sample_loadD() {
  window.scrollBy(0,800);
  document.getElementById("gelrun").disabled = false;

  document.getElementById("peptitec").style.display = "none";
  const canvassdrop4 = document.getElementById('sampleload4');
  const ctxsdrop4 = canvassdrop4.getContext('2d');
  document.getElementById("peptited").style.display = "block";
  document.getElementById("peptiteb").style.display = "none";
  document.getElementById("peptitec").style.display = "none";
  document.getElementById("peptitea").style.display = "none";
  const imagepp4 = document.getElementById('peptited');

  let isDragging4 = false;

  // Function to handle mouse/touch down event
  function handleMouseDown(event) {
    isDragging4 = true;
    imagepp4.style.cursor = 'grabbing';
    /*  imageppb.style.cursor = 'grabbing';
     imageppc.style.cursor = 'grabbing';
     imageppd.style.cursor = 'grabbing'; */

    // Calculate the offset of the mouse/touch position relative to the image
    const offsetX = event.clientX - imagepp4.getBoundingClientRect().left;
    const offsetY = event.clientY - imagepp4.getBoundingClientRect().top;


    // Function to handle mouse/touch move event
    function handleMouseMove(event) {
      if (isDragging4) {
        // Update the position of the image based on mouse/touch position
        imagepp4.style.left = event.clientX - offsetX + 'px';
        imagepp4.style.top = event.clientY - offsetY + 'px';



        const imageRect = imagepp4.getBoundingClientRect();
        const canvasRect = canvassdrop4.getBoundingClientRect();
        /*  const canvasRect2 = canvassdrop2.getBoundingClientRect();
         const canvasRect3 = canvassdrop3.getBoundingClientRect();
         const canvasRect4 = canvassdrop4.getBoundingClientRect(); */

        if (imageRect.left + imageRect.width >= canvasRect.left && imageRect.top + imageRect.height >= canvasRect.top && imageRect.left <= canvasRect.left + canvasRect.width && imageRect.top <= canvasRect.top + canvasRect.height) {
          // Change the canvas color when the image touches it
          canvassdrop4.style.backgroundColor = '#B2C9FF';

        }


        /* else {
          document.getElementById("gelrun").disabled = true;
          // Reset the canvas color if the image is outside the canvas
         canvassdrop1.style.backgroundColor = 'white';
         
        }  */
      }
    }

    // Function to handle mouse/touch up event
    function handleMouseUp() {
      isDragging4 = false;
      imagepp4.style.cursor = 'grabbing';
      // Remove the event listeners when dragging is complete
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      //  imagepp4.removeEventListener('touchmove', handleMouseMove);
      // imagepp4.removeEventListener('touchend', handleMouseUp);

    }

    // Add event listeners for mouse/touch move and up events
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    //  imagepp4.addEventListener('touchmove', handleMouseMove);
    // imagepp4.addEventListener('touchend', handleMouseUp);
  }

  // Function to change the color when clicked/touched
  function changeColor() {
    imagepp4.style.filter = 'hue-rotate(20deg)'; // Change color (90 degrees in hue rotation)
  }

  // Add event listeners for mouse/touch down and click/touch events
  imagepp4.addEventListener('mousedown', handleMouseDown);
  //  imagepp4.addEventListener('touchstart', handleMouseDown);
  imagepp4.addEventListener('click', changeColor);
  imagepp4.addEventListener('touchend', changeColor);

  /********************************************** Touch sample d ******************************************* */

  function handleTouchStart(event) {
    console.log('Touchstart event triggered');
    const touch = event.touches[0];
    const boundingRect = imagepp4.getBoundingClientRect();

    isDragging4 = true;

    // Store the initial touch coordinates as properties on the image element
    imagepp4.initialTouchX = touch.clientX;
    imagepp4.initialTouchY = touch.clientY;

    // Calculate the offset of the touch point relative to the image
    imagepp4.offsetX = touch.clientX - boundingRect.left;
    imagepp4.offsetY = touch.clientY - boundingRect.top;

    // Add a touchmove and touchend event listener
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', handleTouchEnd);
  }

  function handleTouchMove(event) {
    console.log('Touchmove event triggered');
    const touch = event.touches[0];

    if (isDragging4) {
      // Use the stored initial touch coordinates to calculate the image position
      const imageX = touch.clientX - imagepp4.offsetX;
      const imageY = touch.clientY - imagepp4.offsetY;

      // Update the position of the image based on touch position
      imagepp4.style.left = imageX + 'px';
      imagepp4.style.top = imageY + 'px';

      const imageRect = imagepp4.getBoundingClientRect();
      const canvasRect = canvassdrop4.getBoundingClientRect();


      if (imageRect.left + imageRect.width >= canvasRect.left && imageRect.top + imageRect.height >= canvasRect.top && imageRect.left <= canvasRect.left + canvasRect.width && imageRect.top <= canvasRect.top + canvasRect.height) {
        // Change the canvas color when the image touches it
        canvassdrop4.style.backgroundColor = '#B2C9FF';

      }
    }
  }

  function handleTouchEnd() {
    console.log('Touchend event triggered');
    isDragging4 = false;

    // Remove the touchmove and touchend event listeners when dragging is complete
    window.removeEventListener('touchmove', handleTouchMove);
    window.removeEventListener('touchend', handleTouchEnd);
  }

  imagepp4.addEventListener('touchstart', handleTouchStart);

}



function start_ele() {

  document.getElementById("sampleload").disabled = true;

  document.getElementById("topsetup").setAttribute("onclick", "closetopcover()");
  document.getElementById("peptitea").style.display = "none";
  document.getElementById("peptiteb").style.display = "none";
  document.getElementById("peptitec").style.display = "none";
  document.getElementById("peptited").style.display = "none";


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
    alert("Enter volt between 80 and 120");
  }
  else if (volt < 80 || volt > 120) {
    alert("Enter volt between 80 and 120");
  }
  else {

    rungelsample();
    document.getElementById("cstop").style.display = "block";
  }
}


var imgtopsetup1=null;
  function puttopup(){


    var topsetup1 = document.getElementById("topsetup");
  

    var topsetupt1 = 141; //initial  position
    clearInterval(imgtopsetup1);
    //clearInterval(imgtbdown);
    imgtopsetup1 = setInterval(frame, 15); /* frame is 10 denotes the speed of the movement*/
  
    function frame() {
      if (topsetupt1 == 120) {
  
        clearInterval(imgtopsetup1);
        document.getElementById("staingel").disabled=false;
        document.getElementById("topsetup").removeAttribute("onclick","puttopup()");
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

    window.scrollBy(0,800);
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
    alert("Select all the component for staining the gel");
  }

}



function dstaining() {

  if ((document.getElementById("checks1").checked) && (document.getElementById("checks2").checked) && (document.getElementById("checks3").checked) && (document.getElementById("checks4").checked == false)) {
    window.scrollBy(0,800);
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
    alert("De-select Coomassie Brilliant blue (1gm) component");
  }
  else {
    alert("Select correct components for de-staining the gel");
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
    cancelani = requestAnimationFrame(loop);
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
    cancelani = requestAnimationFrame(loop2);
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
    cancelani = requestAnimationFrame(loop3);
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
    cancelani = requestAnimationFrame(loop4);
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



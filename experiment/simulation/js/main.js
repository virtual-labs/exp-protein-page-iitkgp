/* Lab name: Experimental Biochemistry
Exp name: Protein analysis of Polyacrylamide gel electrophoresis (PAGE)
File name: main.js
Developer: Prakriti Dhang */


function start() {
  document.getElementById("gelprep").disabled = false;
  document.getElementById("start").disabled = true;
  document.getElementById('loadsamplea').style.pointerEvents="none";
  document.getElementById('loadsampleb').style.pointerEvents="none";
  document.getElementById('loadsamplec').style.pointerEvents="none";
  document.getElementById('loadsampled').style.pointerEvents="none";
}

function restartexp() {
  location.reload();
}

function gel_resolve() {
  document.getElementById("sampleprep").disabled = false;
  document.getElementById("gelprep").disabled = true;
}


function stacking_gel() {
  document.getElementById("sampleprep").disabled = true;
  document.getElementById("prepproteinsample").disabled = false;

}
function preprotein_sample() {
  document.getElementById("prepproteinsample").disabled = true;
  document.getElementById("tubesabcd").style.display = "block";
  document.getElementById("addbuffer").disabled = false;
}


function addbuffer() {
  document.getElementById("buffer").style.display="block";
  document.getElementById("buffer").setAttribute("onclick", "addbuffertoelec()");

}
 function addbuffertoelec(){
  document.getElementById("addbuffer").disabled = true;
  document.getElementById("sampleload").disabled = false;
  document.getElementById('loadsamplea').style.pointerEvents="auto";
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
  document.getElementById('loadsampleb').style.pointerEvents="auto";
  const canvassdrop1 = document.getElementById('sampleload1');
  const ctxsdrop1 = canvassdrop1.getContext('2d');
  document.getElementById("peptitea").style.display = "block";
  const imagepp = document.getElementById('peptitea');

  let isDragging = false;

  // Function to handle mouse/touch down event
  function handleMouseDown(event) {
    console.log('Touchstart event triggered');
    event.preventDefault();
    isDragging = true;
    imagepp.style.cursor = 'grabbing';
    /*  imageppb.style.cursor = 'grabbing';
     imageppc.style.cursor = 'grabbing';
     imageppd.style.cursor = 'grabbing'; */

    // Calculate the offset of the mouse/touch position relative to the image
    let offsetX = event.clientX - imagepp.getBoundingClientRect().left;
    let offsetY = event.clientY - imagepp.getBoundingClientRect().top;


    // Function to handle mouse/touch move event
    function handleMouseMove(event) {
      console.log('Touchmove event triggered');
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
          canvassdrop1.style.backgroundColor = '#7FA9FF';

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
      console.log('Touchend event triggered');
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
          canvassdrop1.style.backgroundColor = '#7FA9FF';

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
  document.getElementById('loadsamplec').style.pointerEvents="auto";
  document.getElementById("peptitea").style.display = "none";
  const canvassdrop2 = document.getElementById('sampleload2');
  const ctxsdrop2 = canvassdrop2.getContext('2d');
  document.getElementById("peptiteb").style.display = "block";
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
          canvassdrop2.style.backgroundColor = '#7FA9FF';

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
        canvassdrop2.style.backgroundColor = '#7FA9FF';

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
  document.getElementById('loadsampled').style.pointerEvents="auto";
  document.getElementById("peptiteb").style.display = "none";
  const canvassdrop3 = document.getElementById('sampleload3');
  const ctxsdrop3 = canvassdrop3.getContext('2d');
  document.getElementById("peptitec").style.display = "block";
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
          canvassdrop3.style.backgroundColor = '#7FA9FF';

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
          canvassdrop3.style.backgroundColor = '#7FA9FF';

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
  document.getElementById("gelrun").disabled = false;
 
  document.getElementById("peptitec").style.display = "none";
  const canvassdrop4 = document.getElementById('sampleload4');
  const ctxsdrop4 = canvassdrop4.getContext('2d');
  document.getElementById("peptited").style.display = "block";
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
          canvassdrop4.style.backgroundColor = '#7FA9FF';

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
          canvassdrop4.style.backgroundColor = '#7FA9FF';

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
function closetopcover(){
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

function staining() {

  // Start the rotation animation


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

    rotateElement();
    rotateElementb();
    //tubeimg.addEventListener('click', tubeinsert);
  } else {
    btnstaintext.innerHTML = "Start Staining";
    document.getElementById("viewsample").disabled = false;
    cancelAnimationFrame(animationId);
    cancelAnimationFrame(animationId1);
   
  }


}

function view_sample_UVlight() {
  document.getElementById("ladder").style.display = "block";
  document.getElementById("rotatingElement").style.display = "none";
  document.getElementById("rotatingElementbowl").style.display = "none";
  document.getElementById("staining").style.display = "none";
  document.getElementById("staingel").disabled=true;
  document.getElementById("output").style.display="block";

  window.scrollBy(0, 500);
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

function rungelsample() {
  /** Sample 1 */
  canvass11 = document.getElementById("sample1");
  ctxgs11 = canvass11.getContext("2d");
  var posY = 0;
  var speed = 0.2;



  function drawLine() {
    const gradient = ctxgs11.createLinearGradient(0, 0, 0, canvass11.height);

    // Add color stops to the gradient
    gradient.addColorStop(0, '#EBFCFF ');     // Start color (position 0)
    gradient.addColorStop(0.9, '#E8F8FF');  // Middle color (position 0.8)
    gradient.addColorStop(1, '#7FA9FF');      // End color (position 1)

    // Set the stroke style to the gradient
    ctxgs11.strokeStyle = gradient;

    // ctxgs1.strokeStyle = '#7FA9FF';
    //ctxs1.fillStyle = gr;
    //ctxs1.fillRect(10,10,150,80);
    ctxgs11.lineWidth = 600;
    ctxgs11.beginPath();
    ctxgs11.moveTo(0, posY); /*  */
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
    gradient2.addColorStop(0, '#EBFCFF ');     // Start color (position 0)
    gradient2.addColorStop(0.9, '#E8F8FF');  // Middle color (position 0.8)
    gradient2.addColorStop(1, '#7FA9FF');      // End color (position 1)

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
    gradient3.addColorStop(0, '#EBFCFF ');     // Start color (position 0)
    gradient3.addColorStop(0.9, '#E8F8FF');  // Middle color (position 0.8)
    gradient3.addColorStop(1, '#7FA9FF');      // End color (position 1)

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
    gradient4.addColorStop(0, '#EBFCFF ');     // Start color (position 0)
    gradient4.addColorStop(0.9, '#E8F8FF');  // Middle color (position 0.8)
    gradient4.addColorStop(1, '#7FA9FF');      // End color (position 1)

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
var animationId1, animationId;

const rotatingElement = document.getElementById('rotatingElement');
let rotation = 10; // Initial rotation value
let rotateClockwise = true; // Initial direction

function rotateElement() {
  rotatingElement.style.transform = `rotate(${rotation}deg)`;

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

  animationId = requestAnimationFrame(rotateElement);
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

  animationId1 = requestAnimationFrame(rotateElementb);
}

/* // To stop the animation
function stopAnimation() {
  cancelAnimationFrame(animationId);
}

// Example: Stop the animation when a button is clicked
document.getElementById('stopButton').addEventListener('click', stopAnimation); */
function sample_loadA(){

    document.getElementById('loadsampleb').style.pointerEvents="auto";
   
      const canvassdrop1 = document.getElementById('sampleload1');
      const ctxsdrop1 = canvassdrop1.getContext('2d');
      document.getElementById("peptitea").style.display = "block";
      const imagepp = document.getElementById('peptitea');
    
      //let isDragging2 = false;
    
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
              canvassdrop.style.backgroundColor = '#7FA9FF';
    
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


function sample_loadB(){
    document.getElementById('loadsamplec').style.pointerEvents="auto";
  document.getElementById("peptitea").style.display = "none";
    const canvassdrop2 = document.getElementById('sampleload2');
    const ctxsdrop2 = canvassdrop2.getContext('2d');
    document.getElementById("peptiteb").style.display = "block";
    const imagepp2 = document.getElementById('peptiteb');
  
    //let isDragging2 = false;
  
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


function sample_loadC(){
    

document.getElementById('loadsampled').style.pointerEvents="auto";
   document.getElementById("peptiteb").style.display = "none";
      const canvassdrop3 = document.getElementById('sampleload3');
      const ctxsdrop3 = canvassdrop3.getContext('2d');
      document.getElementById("peptitec").style.display = "block";
      const imagepp3 = document.getElementById('peptitec');
    
      //let isDragging2 = false;
    
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
        isDragging = false;
    
        // Remove the touchmove and touchend event listeners when dragging is complete
        window.removeEventListener('touchmove', handleTouchMove);
        window.removeEventListener('touchend', handleTouchEnd);
    }
    
    imagepp3.addEventListener('touchstart', handleTouchStart);


}


function sample_loadD(){
    document.getElementById("gelrun").disabled = false;
   document.getElementById("peptitec").style.display = "none";
      const canvassdrop4 = document.getElementById('sampleload4');
      const ctxsdrop4 = canvassdrop4.getContext('2d');
      document.getElementById("peptited").style.display = "block";
      const imagepp4 = document.getElementById('peptited');
    
      //let isDragging2 = false;
    
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
        isDragging = false;
    
        // Remove the touchmove and touchend event listeners when dragging is complete
        window.removeEventListener('touchmove', handleTouchMove);
        window.removeEventListener('touchend', handleTouchEnd);
    }
    
    imagepp4.addEventListener('touchstart', handleTouchStart);
}

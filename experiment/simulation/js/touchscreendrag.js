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
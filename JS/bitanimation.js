// BIT ANIMATION FALLING IN BACKGROUND 
function generateBit() {
    const bit = document.createElement('div');
    bit.className = 'bit';
    bit.textContent = Math.random() > 0.5 ? '1' : '0'; // Randomly choose between 1 and 0
    bit.style.left = `${Math.floor(Math.random() * window.innerWidth)}px`; // Random horizontal position
    bit.style.top = `0px`;
    document.getElementById('bitsContainer').appendChild(bit);
  
    // Animate the bit falling
    const interval = setInterval(() => {
      let currentTop = parseInt(bit.style.top, 10);
      bit.style.top = `${currentTop + 3}px`; // Move down by 3px each frame
  
      if (currentTop > window.innerHeight) {
        clearInterval(interval); // Stop the animation
        bit.remove(); // Remove the bit from the DOM
      }
    }, 10); // Update every 10 milliseconds
  }
  
  setInterval(generateBit, 50); // Generate a new bit every 100 milliseconds
  

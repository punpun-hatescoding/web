// Get the wrapper element using its ID from the HTML
const wrapper = document.getElementById('flashlight-wrapper');

/**
 * Updates the CSS variables for the radial gradient based on the mouse position.
 * @param {MouseEvent} event - The mousemove event object.*/
function updateFlashlight(event) {
    // 1. Get the current cursor coordinates relative to the viewport
    const clientX = event.clientX; 
    const clientY = event.clientY;

    // 2. Set the CSS variables (defined in :root) to the cursor's coordinates.
    // We add 'px' because CSS properties require a unit.
    wrapper.style.setProperty('--mouse-x', clientX + 'px');
    wrapper.style.setProperty('--mouse-y', clientY + 'px');
}

// 3. Attach the function to the 'mousemove' event on the entire document.
// This tells the browser to run updateFlashlight every time the mouse moves.
document.addEventListener('mousemove', updateFlashlight);
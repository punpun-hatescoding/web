
    // --- 1. FLASHLIGHT LOGIC (Corrected for Multiple Frames) ---
    
    // Use querySelectorAll to find ALL elements with the class, not just one ID
    const wrappers = document.querySelectorAll('.flashlight-wrapper');

    function updateFlashlight(event) {
        const clientX = event.clientX; 
        const clientY = event.clientY;

        // Loop through EVERY wrapper and update the variable for each one
        wrappers.forEach(function(wrapper) {
            wrapper.style.setProperty('--mouse-x', clientX + 'px');
            wrapper.style.setProperty('--mouse-y', clientY + 'px');
        });
    }

    document.addEventListener('mousemove', updateFlashlight);


    // --- 2. SCENE SWAP LOGIC (Correct) ---
    
    function triggerSceneSwap() {
        console.log("Scene Swap Triggered!"); 

        const sceneA = document.getElementById('scene-a');
        const sceneB = document.getElementById('scene-b');

        // Toggle the hidden class
        sceneA.classList.add('hidden');
        sceneB.classList.remove('hidden');
    }
    const curtain = document.getElementById('animated-curtain');
    // -- -- Scene Swap for Frame 2 ---//
    function triggerSceneSwap2() {
        console.log("Scene Swap 2 Triggered!"); 

        const scene2A = document.getElementById('scene2a');
        const scene2B = document.getElementById('scene2b');

        // Toggle the hidden class
        scene2A.classList.add('hidden2');
        scene2B.classList.remove('hidden2');
    }
    // --- 3. BACKGROUND MUSIC LOGIC (Correct) ---
   function triggerMusic() {
    // 1. First, get the element reference
    const bgMusic = document.getElementById('bg-music');
    
    // 2. Then, set the volume (0.0 to 1.0)
    bgMusic.volume = 0.3; 

    const musicBox = document.getElementById('music-box');

    // 3. Now the rest of your logic will work because 'bgMusic' is an element
    if (bgMusic.paused) {
        bgMusic.play();
        musicBox.classList.remove('paused');
        console.log("Music Playing - Vol 0.4");
    } 
    else {
        bgMusic.pause();
        musicBox.classList.add('paused');
        console.log("Music Paused");
    }
}

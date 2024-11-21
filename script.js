const video = document.getElementById("video");
        const overlay = document.getElementById("overlay");
        const scare = document.getElementById("scare");
        const acceptButton = document.getElementById("accept-button");
        const declineButton = document.getElementById("decline-button");

        function startVideo() {
            overlay.style.display = 'none';  // Oculta el overlay
            scare.style.display = 'block';   // Muestra el video
            video.play();                    // Reproduce el video
        }

        acceptButton.addEventListener("click", startVideo);
        declineButton.addEventListener("click", startVideo);
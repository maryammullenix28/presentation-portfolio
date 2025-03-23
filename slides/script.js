document.addEventListener("DOMContentLoaded", function() {
    const slider = document.getElementById('yearSlider');
    const currentYearSpan = document.getElementById('currentYear');
    const mapImage = document.getElementById('mapImage');

    // Function to update the image and add fade effect
    function updateImage(year) {
        currentYearSpan.textContent = year;

        // Fade out the current image
        mapImage.classList.remove('show');

        // Wait for the fade-out transition to complete
        setTimeout(() => {
            // Update the image source
            mapImage.src = `images/map_${year}.png`;

            // Fade in the new image
            mapImage.classList.add('show');
        }, 500);
    }

    // Initial image show
    mapImage.classList.add('show');

    // Event listener for slider change
    slider.addEventListener('input', function() {
        const year = slider.value;
        updateImage(year);
    });
});

document.addEventListener('keydown', function(event) {
    const currentSlide = document.body.getAttribute('data-slide');
    console.log('Key Pressed:', event.key);
    console.log('Current Slide:', currentSlide);

    if (event.key === 'ArrowRight') {
        switch (currentSlide) {
            case 'slide1':
                window.location.href = 'slides/slide2.html';
                break;
            case 'slide2':
                window.location.href = 'slide3.html';
                break;
            case 'slide3':
                window.location.href = 'slide4.html';
                break;
            case 'slide4':
                window.location.href = 'slide5.html';
                break;
            case 'slide5':
                window.location.href = 'slide6.html';
                break;
            case 'slide6':
                window.location.href = 'slide7.html';
                break;
            case 'slide7':
                window.location.href = 'slide8.html';
                break;
            case 'slide8':
                window.location.href = 'slide9.html';
                break;
            case 'slide9':
                window.location.href = 'slide10.html';
                break;
            case 'slide10':
                window.location.href = 'slide11.html';
                break;
            case 'slide11':
                window.location.href = 'slide12.html';
                break;
            case 'slide12':
                window.location.href = 'slide13.html';
                break;
            case 'slide13':
                window.location.href = 'slide14.html';
                break;
            case 'slide14':
                window.location.href = 'slide15.html';
                break;
            case 'slide15':
                window.location.href = 'slide16.html';
                break;
            // case 'slide16':
            //     window.location.href = 'slide17.html';
            //     break;
            // case 'slide17':
            //     window.location.href = 'slide18.html';
            //     break;
            // case 'slide18':
            //     window.location.href = 'slide19.html';
            //     break;
            // case 'slide19':
            //     window.location.href = 'slide20.html';
            //     break;
            // case 'slide20':
            //     window.location.href = 'slide21.html';
            //     break;
        }
    } else if (event.key === 'ArrowLeft') {
        switch (currentSlide) {
            case 'slide2':
                window.location.href = '../slide1.html';
                break;
            case 'slide3':
                window.location.href = 'slide2.html';
                break;
            case 'slide4':
                window.location.href = 'slide3.html';
                break;
            case 'slide5':
                window.location.href = 'slide4.html';
                break;
            case 'slide6':
                window.location.href = 'slide5.html';
                break;
            case 'slide7':
                window.location.href = 'slide6.html';
                break;
            case 'slide8':
                window.location.href = 'slide7.html';
                break;
            case 'slide9':
                window.location.href = 'slide8.html';
                break;
            case 'slide10':
                window.location.href = 'slide9.html';
                break;
            case 'slide11':
                window.location.href = 'slide10.html';
                break;
            case 'slide12':
                window.location.href = 'slide11.html';
                break;
            case 'slide13':
                window.location.href = 'slide12.html';
                break;
            case 'slide14':
                window.location.href = 'slide13.html';
                break;
            case 'slide15':
                window.location.href = 'slide14.html';
                break;
            case 'slide16':
                window.location.href = 'slide15.html';
                break;
            // case 'slide17':
            //     window.location.href = 'slide16.html';
            //     break;
            // case 'slide18':
            //     window.location.href = 'slide17.html';
            //     break;
            // case 'slide19':
            //     window.location.href = 'slide18.html';
            //     break;
            // case 'slide20':
            //     window.location.href = 'slide19.html';
            //     break;
            // case 'slide21':
            //     window.location.href = 'slide20.html';
            //     break;
        }
    }
});




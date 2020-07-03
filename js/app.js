// Change subpages
$(document).ready(function () {
    // Play video start
    $('#video, #overlay').fadeIn('slow');
    $('#video-container').html('<iframe width=300 height=315 src=https://www.youtube.com/embed/KEgxcv-NAzY frameborder=0 allowfullscreen></iframe>');

    // Open subpage
    var trigger = $('#content .tabs a'),
        tabs_content = $('#tabs-content')
    tabs_content.load('subpages/description.html');

    trigger.on('click', function () {
        var $this = $(this),
            target = $this.data('target');
        console.log('subpages/' + target + '.html')
        tabs_content.load('subpages/' + target + '.html');
        return false;
    })
});

// Close video
$(document).on('touchend, mouseup', function (e) {
    if (!$('#video').is(e.target)) {
        $('#video, #overlay').fadeOut('slow');
        $('#video-container').html('');
    }

    foo();


});

function foo() {
    setTimeout(function () {
        console.log("aaa");
    }, 3000);
}


// Gallery
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
}
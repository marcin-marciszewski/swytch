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

$(document).on('touchend, mouseup', function (e) {
    const mainContent = document.querySelector('.main_content');
    const pluses = document.querySelectorAll('.fa-plus');

    // Close start video
    if (!$('#video').is(e.target)) {
        $('#video, #overlay').fadeOut('slow');
        $('#video-container').html('');
    }

    // Show main content
    mainContent.classList.remove("hidden");

    // Animate pluses in the features list
    let seconds = 4000;
    for (let i = 0; i < pluses.length; i++) {
        setTimeout(function () {
            pluses[i].classList.add("animate__animated", "animate__rotateIn");
        }, seconds);

        seconds += 500;
    }

    // Count down the price

    setTimeout(function () {
        updatePrice();
    }, 1000);
});

// Price counter
const updatePrice = () => {
    const counter = document.getElementById('price');
    const discount = document.querySelector('.discount');
    const speed = 2000;

    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;

    const decrement = target / speed;

    if (count > target) {
        counter.innerText = Math.floor(count - decrement);
        setTimeout(updatePrice, 1);
    } else {
        count.innerText = target;

    }

    if (count === target) {
        discount.classList.remove("hidden");
        discount.classList.add("animate__animated", "animate__heartBeat");
    }
};



// Preorder button
const btn = document.querySelector('.btn');

// Open checkout
btn.addEventListener('click', (e) => {
    document.querySelector('#checkout__offer').style.display = 'none';
    document.querySelector('.wrapper').style.display = 'block';
    e.preventDefault();
})
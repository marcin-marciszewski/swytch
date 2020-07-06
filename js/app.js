// Change subpages
$(document).ready(function () {
    if ($(window).width() < 376 && $(window).height() < 668) {
        console.log("object")
        document.querySelector('#checkout').style.marginTop = "550px";
    }
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

        tabs_content.load('subpages/' + target + '.html');

        if ($(window).width() < 376 && $(window).height() < 813 && target === "gallery") {
            document.querySelector('#checkout').style.marginTop = "-150px";
        }

        if ($(window).width() < 376 && $(window).height() < 813 && target === "mission") {
            document.querySelector('#checkout').style.marginTop = "350px";
        }

        if ($(window).width() < 376 && $(window).height() < 813 && target === "description") {
            document.querySelector('#checkout').style.marginTop = "450px";
        }

        if ($(window).width() < 376 && $(window).height() < 668 && target === "gallery") {
            document.querySelector('#checkout').style.marginTop = "-100px";
        }

        if ($(window).width() < 376 && $(window).height() < 668 && target === "mission") {
            document.querySelector('#checkout').style.marginTop = "350px";
            document.querySelector('.tabs').style.marginBottom = "40px";
        }

        if ($(window).width() < 376 && $(window).height() < 668 && target === "description") {
            document.querySelector('#checkout').style.marginTop = "550px";
        }

        return false;


    })
});

$(document).on('touchend, mouseup', function (e) {
    document.querySelector('#start-container').style.display = 'none';
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
    let seconds = 3000;
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

// Open checkout
const btn = document.querySelector('.btn');
btn.addEventListener('click', (e) => {
    document.querySelector('#checkout__offer').style.display = 'none';
    document.querySelector('.wrapper').style.display = 'block';
    e.preventDefault();
});

// Order confirmation
const btnPay = document.querySelector('.btn-pay');
btnPay.addEventListener('click', (e) => {
    document.querySelector('#checkout__offer').style.display = 'block';
    document.querySelector('.wrapper').style.display = 'none';
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'We have got your order',
        showConfirmButton: false,
        timer: 2000
    })
    e.preventDefault();
});

if ($("#description").is(":visible") == true) {
    alert("Div is visible!!");
}
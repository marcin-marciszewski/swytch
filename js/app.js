// Change subpages
$(document).ready(function () {

    $('#video, #overlay').fadeIn('slow');
    $('#video-container').html('<iframe width=300 height=315 src=https://www.youtube.com/embed/KEgxcv-NAzY frameborder=0 allowfullscreen></iframe>');
    var trigger = $('#content .tabs a'),
        tabs_content = $('#tabs-content')
    tabs_content.load('subpages/video.html');

    trigger.on('click', function () {
        var $this = $(this),
            target = $this.data('target');
        console.log('subpages/' + target + '.html')
        tabs_content.load('subpages/' + target + '.html');
        return false;
    })
});


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
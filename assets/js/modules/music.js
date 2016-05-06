// var songToggles = document.querySelectorAll('.play-toggle');
// var pauseButtons = document.querySelectorAll('.pause-song');
// for (var i = 0; i < songToggles.length; i++) {
//     songToggles[i].addEventListener('click', toggleSong, false);
// }

// function toggleSong(evt) {
//      var hitButton = evt.target;
//     if (playingSong === false) {
//         hitButton.classList.toggle('playing');
//         hitButton.nextElementSibling.nextElementSibling.play();
//         playingSong = true;
//     }
//     console.log(playingSong);
// }

// function pauseSong(evt) {
//      var hitButton = evt.target;
//     if (playingSong === true) {
//         hitButton.nextElementSibling.pause();
//         hitButton.classList.toggle('active');
//         hitButton.previousElementSibling.classList.toggle('active');
//         playingSong = false;
//     } else {
//         hitButton.nextElementSibling.play();
//         hitButton.classList.toggle('active');
//         hitButton.previousElementSibling.classList.toggle('active');
//         playingSong = true;
//     }
//     console.log(playingSong);
// }
// var playingSong = false;
// var playToggles = document.querySelectorAll('.play-toggle');
// for (var i = 0; i < playToggles.length; i++) {
//     playToggles[i].addEventListener('click', toggleSong, false);
// }

// function toggleSong(evt) {
//     evt.preventDefault();
//     if (playingSong === false) {
//         evt.target.parentElement.nextElementSibling.nextElementSibling.play();
//         evt.target.innerHTML = "Pause";
//         playingSong = true;
//     } else if (playingSong === true) {
//         evt.target.parentElement.nextElementSibling.nextElementSibling.pause();
//         evt.target.innerHTML = "Play";
//         playingSong = false;
//     }
// }
// var playButtons = document.querySelectorAll('.audio-play-button');
// for (var i = 0; i < playButtons.length; i++) {
//     playButtons[i].addEventListener('click', playSong, false);
// }

// function play(argument) {
//     // body...
// }
//
// var flip = false,
//     pause = "M11,10 L18,13.74 18,22.28 11,26 M18,13.74 L26,18 26,18 18,22.28",
//     play = "M11,10 L17,10 17,26 11,26 M20,10 L26,10 26,26 20,26",
//     $animation = $('#animation'),
//     songPlaying = false;

// $(".audio-play-button").on('click', function(evt) {
//     var theAudio = $(this).next().next();
//     $(this).toggleClass('toggled');
//     flip = !flip;
//     console.log(theAudio);
//     $animation.attr({
//         "from": flip ? pause : play,
//         "to": flip ? play : pause
//     }).get(0).beginElement();
//     if (songPlaying === false) {
//         theAudio[0].play();
//         songPlaying = true;
//     } else if (songPlaying === true) {
//         theAudio[0].pause();
//         songPlaying = false;
//     }
// });
$(function() {

    /**
     * Store the transition end event names for convenience.
     */
    var transitionEnd = 'transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd';

    /**
     * Trigger the play button states upon clicking.
     */
    $('.song-button').click(function(e) {

        e.preventDefault();
        console.log($(this).parent().next());

        if ($(this).hasClass('stop')) {
            $(this).parent().next()[0].pause();
            $(this).removeClass('stop')
                .addClass('to-play');
        } else if (!$(this).hasClass('to-play')) {
            $(this).parent().next()[0].play();
            $(this).addClass('stop');
        }
    });

    /**
     * Remove the 'to-play' class upon transition end.
     */
    $(document).on(transitionEnd, '.to-play', function() {

        $(this).removeClass('to-play');

    });

});

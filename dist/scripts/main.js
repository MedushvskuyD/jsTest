'use strict';

$(document).ready(function() {
  $('#homeBtn').on('click', () => {
    $('.home__text-block').fadeIn('slow');

    setTimeout(() => {
      $('html, body').animate({ scrollTop: $('.casino').offset().top }, 1000);
    }, 3000);
  });

  const machine1 = $('#machine1').slotMachine({
    active: 0,
    delay: 666,
  });

  const machine2 = $('#machine2').slotMachine({
    active: 1,
    delay: 666,
  });

  const machine3 = $('#machine3').slotMachine({
    active: 2,
    delay: 666,
  });
  let counter = 3;

  $('#casinoBtn').on('click', () => {
    if (counter === 1) {
      machine1.randomize = () => 4;

      setTimeout(() => {
        machine2.randomize = () => 4;
      }, 500);

      setTimeout(() => {
        machine3.randomize = () => 4;
      }, 1000);

      $('#casinoBtn').prop('disabled', true);

      setTimeout(() => {
        $('#grats').fadeIn('slow');
      }, 700);
    }
    machine1.shuffle();

    setTimeout(() => {
      machine2.shuffle();
    }, 500);

    setTimeout(() => {
      machine3.shuffle();
    }, 1000);
    counter--;
  });
});

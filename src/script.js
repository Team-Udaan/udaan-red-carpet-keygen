$(document).ready(function () {

  var $pin = $('#pin'),
    $enroll = $('#enroll');

  $enroll.on('input', function () {
    if (!this.value) {
      $pin.text('xxxx');
      return;
    }
    $pin.text(hash(this.value));
  });

});
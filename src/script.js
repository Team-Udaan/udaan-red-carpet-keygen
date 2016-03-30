$(document).ready(function () {

  $('#enroll').on('input', function () {
    $('#pin').text(
      this.value ?
        hash(this.value) :
        'xxxx'
    );
  });

});
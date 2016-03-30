$(document).ready(function () {

  function sanitize(string) {
    return string.replace(/[\D]/g, '').substr(0, 12);
  }

  $('#enroll').on('input', function () {
    this.value = sanitize(this.value);
    $('#pin').text(
      this.value ?
        hash(this.value) :
        'xxxx'
    );
  });

});
function ContactForm() {
};

ContactForm.prototype.initialize = function() {
  $("tr").hide();
  this.bindEvents();
};

ContactForm.prototype.bindEvents = function() {
  var _this = this;
  $('.key').on('click', function() {
    $("tr").hide();
    $('.number-display').val($('.number-display').val() + parseInt($(this).text().charAt(0)));
    _this.chars = $(this).find('span').text();
    _this.displayContacts();
  });
  $('.clear-key').on('click', function() {
    $('.number-display').val('');
    $("tr").hide();
  });
};

ContactForm.prototype.displayContacts = function() {
  var textfield = $('.number-display').val();
  if (textfield.length > 1) {
    $('tbody tr').each(function() {
      if ($(this).children().eq(2).text().indexOf(textfield) > -1) {
        $(this).show();
      }
      $('.number-display').val()
    })
  }
  str = this.chars.replace(/ /g,'');
  for (var i = 0, len = str.length; i < len; i++) {
    $('tbody tr').each(function() {
      $(this).find('td').each(function() {
        if ($(this).text().startsWith(str[i])) {
          $(this).parent().show();
        }
      })
    })
  }
};

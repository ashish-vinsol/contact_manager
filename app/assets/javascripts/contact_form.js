REGEX = {}
REGEX[1] = /[.]/
REGEX[2] = /[a-c]/i
REGEX[3] = /[d-f]/i
REGEX[4] = /[g-i]/i
REGEX[5] = /[j-l]/i
REGEX[6] = /[m-o]/i
REGEX[7] = /[p-s]/i
REGEX[8] = /[t-v]/i
REGEX[9] = /[w-z]/i

function ContactForm() {
};

ContactForm.prototype.initialize = function() {
  this.chars = [];
  $("tr").hide();
  this.bindEvents();
};

ContactForm.prototype.bindEvents = function() {
  var _this = this;
  $('.key').on('click', function() {
    $("tr").hide();
    $('.number-display').val($('.number-display').val() + parseInt($(this).text().charAt(0)));
    _this.chars.push(parseInt($(this).text().charAt(0)));
    _this.displayContacts();
  });
  $('.clear-key').on('click', function() {
    $('.number-display').val('');
    _this.chars = [];
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
  var str = this.chars;
  var _this = this;
  $('tbody tr').each(function() {
    $(this).find('td').each(function() {
      _this.temp = ""
      for (var i = 0, len = str.length; i < len; i++) {
        if (($(this).text().match(REGEX[str[i]]))) {
          debugger
          if (_this.temp) {
            _this.temp += $(this).text().charAt($(this).text().indexOf(_this.temp[_this.temp.length-1])+1).match(REGEX[str[i]]) } else {
            _this.temp += $(this).text().match(REGEX[str[i]]);
            }
        }
        if ((($(this).text().indexOf(_this.temp) > -1)) && (_this.temp.length == str.length)) {
          $(this).parent().show();
        }
      }
    });
  });
};


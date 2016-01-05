var cur_time = 0;
var last_time = 0;
var diff_time = 0;
var total_time = 0;
var typing_speed = 0;
var typing_accuracy = 0;
var GAWIT_COUNT = [
  1, 1, 1, 1, 1, 1, 1, 1, 1, 2,
  2, 2, 1, 1, 2, 2, 2, 1, 1, 2,
  1
];
var GGEUT_COUNT = [
  0, 1, 1, 2, 1, 2, 2, 1, 1, 2,
  2, 2, 2, 2, 2, 2, 1, 1, 2, 1,
  1, 1, 1, 1, 1, 1, 1, 1
];
var csv = [];
var DEFAULT_TYPE = "word";
var show_type = DEFAULT_TYPE;


function charCounter(charCode) {
	if (charCode < 0xAC00 || 0xD7A3 < charCode) {
		return 1;
	}
	charCode -= 0xAC00;
	return 1 + GAWIT_COUNT[Math.floor(charCode / 28 % 21)] + GGEUT_COUNT[charCode % 28];
}

function lineCounter(line) {
	var sum = 0;
	for ( var index in line) {
		sum += charCounter(line.charCodeAt(index));
	}
	return sum;
}

function displayResult() {
	if (total_time < 10 ) {return;}
	var example_show = $("#example_show").text();
	var example_count = lineCounter(example_show);
  var input_show = $("#input_show").val();
  var input_count = lineCounter(input_show);
  var big_show = example_count > input_count ? example_show : input_show;
  var big_count = example_count > input_count ? example_count : input_count;
	typing_speed = Math.round(big_count * 60000 / total_time);
	$("#typing_speed").text(typing_speed);
	last_time = 0;
  total_time = 0;

  input_show = $("#input_show").val().split('');
	var typing_match = 0;
	for ( var index in big_show) {
		if (example_show.charAt(index) == input_show[index]) {
			typing_match += charCounter(big_show.charCodeAt(index));
		}
	}
	typing_accuracy = Math.round(typing_match * 100 / big_count);
	$("#typing_accuracy").text(typing_accuracy);
}

function processData(allText) {
  var allTextLines = allText.split(/\r\n|\n/);
  var headers = allTextLines[0];
  var lines = [];

  for (var i=1; i<allTextLines.length; i++) {
    var data = allTextLines[i];
    if (data != '') {
      var tarr = [];
      tarr[headers] = data;
      lines.push(tarr);
    }
  }
  csv = lines;
  //return lines;
}

function getResponse() {
  var done =false;
  var the_url = "";
  if (show_type == "word") {
    the_url = "/한국어+학습용+어휘+목록.csv";
  } else {
    the_url = "/한국어+학습용+문장+목록.csv";
  }

  $.ajax({
    async: false,
    url: the_url,
    type: "GET",
    dataType: "text",
    success: function (data) {
      //var html = jQuery('<div>').html(result);
      processData(data);
      done = true;
      //alert("success");
    },
    error: function(xhr, ajaxOptions, thrownError) {
      alert("Status: " + xhr.status + "     Error: " + thrownError);
      done = true;
    }
  });

  //A loop to check done if ajax call is done.
  while (!done) {
    setTimeout(function(){ }, 25); // take a sleep.
  }
}

function resetButton() {
  $("input[type='radio'][value=" + show_type + "]")
                    .parent().removeClass('active');
  show_type = DEFAULT_TYPE;
  $("input[type='radio'][value=" + show_type + "]")
                    .parent().addClass('active');
}

function resetShow() {
  var show = " ";
  if (csv.length) {
    var index = Math.floor(Math.random() * csv.length);
    if (show_type == "word") {
      show = csv[index].단어;
      show = show.replace(/(\d+)/g,"");
    } else {
      show = csv[index].문장;
    }
  }

  $("#example_show").html(show);
  $("#input_show").val('');

  $(".show_type .btn").on("click", function () {
    var value = $(this).children().val();
    if (show_type != value) {
      show_type = value;
      csv = [];
      getResponse();
      resetShow();
    }
  });
}

 //show_type = $(":radio[id='show_type']:checked").val();

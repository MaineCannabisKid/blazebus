// console.log("Connected");

// Fade Options
// Duration: ms
var fadeOptions = {
  duration:175,
  easing:"linear"
};

// Clear all Pop-Ups
function clearPop() {
	$('#welcome').slideUp(250, "linear");
	$('#discord').slideUp(250, "linear");
	$('#past-donations').slideUp(250, "linear");
	$('#staff').slideUp(250, "linear");
}

// Retract Hamburger Menu
function retractMenu() {
	$('#bs-example-navbar-collapse-1').removeClass("in");
}


// Welcome Pop Up
$('.navbar-brand').on("click", function() {
	if($('#welcome').css("display") === "none") {
		clearPop();
		retractMenu();
	}
	$('#welcome').slideToggle("slow", "linear");
});

// Discord Pop Up
$('#discord-link').on("click", function() {
	if($('#discord').css("display") === "none") {
		clearPop();
		retractMenu();
	}
	$('#discord').slideToggle("slow", "linear");
});

// Rules Pop Up
$('#rules').on("click", function() {
	window.open("modules/discordRules.php", "_blank", "height=650px,width=768px");
});

// Past Donations Pop Up
$('#past-donations-link').on("click", function() {
	if($('#past-donations').css("display") === "none") {
		clearPop();
		retractMenu();
	}
	$('#past-donations').slideToggle("slow", "linear");
});

// Staff Pop Up
$('#staff-link').on("click", function() {
	if($('#staff').css("display") === "none") {
		clearPop();
		retractMenu();
	}
	$('#staff').slideToggle("slow", "linear");
});

// Alert Pop-Ups
$('.alert').delay(17500).fadeOut(2500);


// https://developers.google.com/youtube/iframe_api_reference

// global variable for the player
var player;

// this function gets called when API is ready to use
function onYouTubePlayerAPIReady() {
	// create the global player from the specific iframe (#video)
	player = new YT.Player('video', {
		events: {
			// call this function when player is ready to use
			'onReady': onPlayerReady
		}
	});
}

function onPlayerReady(event) {
  
  // bind events
  var playButton = document.getElementById("play-button");
  playButton.addEventListener("click", function() {
  	clearPop();
  	retractMenu();
    player.playVideo();
  });
  
  var pauseButton = document.getElementById("pause-button");
  pauseButton.addEventListener("click", function() {
  	clearPop();
  	retractMenu();
    player.pauseVideo();
  });

  var playButtonBottom = document.getElementById("play-button-bottom");
  playButtonBottom.addEventListener("click", function() {
  	clearPop();
  	retractMenu();
    player.playVideo();
  });

  var pauseButtonBottom = document.getElementById("pause-button-bottom");
  pauseButtonBottom.addEventListener("click", function() {
  	clearPop();
  	retractMenu();
    player.pauseVideo();
  });

  
}

// Inject YouTube API script
var tag = document.createElement('script');
tag.src = "//www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
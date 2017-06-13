<?php
$server = $_SERVER['SERVER_NAME'];
// If Site is NOT Live
$youtube = 'https://www.youtube.com/embed/live_stream?channel=UCMkBFD0YPtrcoB_tni5uOLQ&autoplay=false&controls=0&enablejsapi=1&rel=0';
$title = 'Localhost/BlazeBus';

// If Site is Live
if($server !== "localhost") {
	$youtube = "https://www.youtube.com/embed/live_stream?channel=UCMkBFD0YPtrcoB_tni5uOLQ&autoplay=true&controls=0&enablejsapi=1&rel=0";
	$title = "Home - BlazeBus";
}
?>
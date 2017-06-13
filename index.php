<?php
	// Load Config File
	include('config.php');



?>
<!DOCTYPE html>
<html>
<head>
	<title><?php echo $title; ?></title>
	<!-- Load Headers -->
	<?php include('modules/header.php'); ?>
	<!-- Page Specific CSS -->
	<link rel="stylesheet" type="text/css" href="css/index.css">
</head>
<body>
	

	<!-- Navbar -->
	<?php include('modules/navbar.php'); ?>

	<!-- Under Construction Bar -->
	<?php include('modules/underConstruction.php'); ?>

	<!-- Stream -->
	<?php include('modules/stream.php'); ?>
	
	<!-- Welcome Pop-up -->
	<!-- On Click of Navbar Brand -->
	<?php include('modules/welcome.php'); ?>

	<!-- Discord Pop-up -->
	<?php include('modules/discord.php'); ?>

	<!-- Past Donations Pop-up -->
	<?php include('modules/pastDonations.php'); ?>

	<!-- Staff List Pop-Up -->
	<?php include('modules/staff.php'); ?>

<!-- Global Javascript -->
<script type="text/javascript" src="js/global.js"></script>
</body>
</html>
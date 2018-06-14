<?php
	header("Content-type","text/html;charset=utf-8");
	$username = $_POST['username'];
	$userpass = $_POST['userpass'];
	$rows="";
	$conn = mysql_connect("localhost","root","root");

	mysql_select_db("tproject",$conn);
	$sqlstr = "select * from users where username='".$username."'and userpass='".$userpass."'"; 

	$result = mysql_query($sqlstr,$conn);

	if(mysql_num_rows($result)>0){
		$rows = 1;
	}else{
		$rows = 0;
	}


	mysql_close($conn);

	echo $rows;
?>


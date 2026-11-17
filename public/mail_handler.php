<?php
    $from = $_POST['email'];// this is your Email address
    $to = "adhousecalicut@gmail.com";
    $first_name = $_POST['name'];
    $mobile = $_POST['mobile'];
    $service = $_POST['service'];
    $notes = $_POST['notes'];

    $file = $_FILES['file']['tmp_name'];
    $file_name = $_FILES['file']['name'];
    
    $subject = "Hello, Contact Form";
    $message = "Hi ".$email." Contact Form."."\n"."Name: ".$first_name."\n"."Phone: ".$mobile."\n"."Service: ".$service."\n"."Notes: ".$notes;

    $headers = "From:" . $from;
    $result = mail($to,$subject,$message,$headers);
	echo $result;
	//if($result)
  
    // Redirect to index.html
    header("Location: thankyou.html");
    exit(); // Make sure to call exit or die to prevent further execution
?>
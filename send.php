Your email has been sent.

<?php
	
	$to 			= "cssmfc@bitrix24.com";
	$subject 		= "Contact from App";
	$body 			= "A new message was sent from App";
	$headers 		= 'From: App Desk <cssmfc@bitrix24.com>' . "\r\n" .
    				'Reply-To: cssmfc@bitrix24.com' . "\r\n" .
    				'X-Mailer: PHP/' . phpversion();
	mail($to, $subject, $body, $headers);
?>
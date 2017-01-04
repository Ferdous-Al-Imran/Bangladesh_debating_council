<?php
if($_REQUEST['first_name'] == '' || $_REQUEST['contact_email'] == '' ||  $_REQUEST['message'] == ''):
  return "error";
endif;
if (filter_var($_REQUEST['contact_email'], FILTER_VALIDATE_EMAIL)):
  $subject = 'Email from BDC'; // Subject of your email

  // Receiver email address
  $to = 'imran05252000@gmail.com';  //Changeable

  // prepare header
  $header = 'From: '. $_REQUEST['first_name'] . " " .$_REQUEST['last_name'] . ' <'. $_REQUEST['contact_email'] .'>'. "\r\n";
  $header .= 'Reply-To:  '. $_REQUEST['first_name'] . " " .$_REQUEST['last_name'] . ' <'. $_REQUEST['contact_email'] .'>'. "\r\n";
  // $header .= 'Cc:  ' . 'example@domain.com' . "\r\n";
  // $header .= 'Bcc:  ' . 'example@domain.com' . "\r\n";
  $header .= 'X-Mailer: PHP/' . phpversion();


  $message .= 'Name: ' . $_REQUEST['first_name'] . " " .$_REQUEST['last_name'] . "\n";
  $message .= 'Email: ' . $_REQUEST['contact_email'] . "\n";
  $message .= 'Message: '. $_REQUEST['message'];

  // Send contact information
  $mail = mail( $to, $message, $header );

  echo 'sent';
  else:
    return "error";
  endif; 

?>          > 
<?php 



<?
	if(isset ($_POST['title'])) {$title=$_POST['title'];}
	if(isset ($_POST['name'])) {$name=$_POST['name'];}
	if(isset ($_POST['phone'])) {$phonenum=$_POST['phone'];}
	if(isset ($_POST['addr'])) {$addr=$_POST['addr'];}

	$to = "mashtalir_sasha@ukr.net"; // Замениь на емаил клиента

	$message = "Форма: $title <br><br>";
	if ( $name || $phonenum || $addr ) {
		$message .= ""
			. ( $name ?" Имя:  $name <br>" : "")
			. ( $phonenum ?" Телефон:  $phonenum <br>" : "")
			. ( $addr  ? " Адрес: $addr <br>" : "");
	}

	foreach ( $_POST as $key => $value ) {
		if ( $value != "" && $key != "title" && $key != "name" && $key != "phone" && $key != "addr" && $key != "goal" ) {
			$message .= "<br>" ."
				$value";
		}
	}

	$headers = "MIME-Version: 1.0\r\n";
	$headers .= "Content-type: text/html; charset=UTF-8\r\n";
	$headers .= "From: no-reply@fenix.com"; // Заменить домен на домен клиента

	if (!$title && !$phonenum) {
	} else {
		mail($to,"New lead(fenix.com)",$message,$headers); // Заменить домен на домен клиента
	}
?>
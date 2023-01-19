<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'phpmailer/src/Exception.php';
    require 'phpmailer/src/.PHPMailerphp';

    $mail = new PHPMailer(true);
    $mail->CharSet = "UTF-8";
    $mail->setLanguage('ru', "phpmailer/language/");
    $mail->IsHTML(true);

    $mail->setFrom("chistohin1@mail.ru", "DimaView");
    $mail->addAddress('chistohin1@mail.ru');
    $mail->Subject = "Письмо по работе!";

    $body = '<h1>Стороннее письмо!</h1>';

    if(trim(!empty($_POST['name']))){
        $body.='<p><strong>Имя:</strong>'.$_POST['name']."</p>";
    }
    if(trim(!empty($_POST['email']))){
        $body.='<p><strong>E-mail:</strong>'.$_POST['email']."</p>";
    }
    if(trim(!empty($_POST['text']))){
        $body.='<p><strong>Сообщение:</strong>'.$_POST['text']."</p>";
    }

    if(!$mail->send()){
        $message = "Ошибка в php";
    } else{
        $message = 'Данные отправлены!';
    }

    $response = ['message'=> $message];

    header('Content-type: application/json');
    echo json_encode($response);
?>
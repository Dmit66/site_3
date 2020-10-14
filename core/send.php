<?php
header("Content-Type: text/html; charset=utf-8");

if(isset($_POST['name'])) {
	
$email = "Ваша почта"; #Email, на него придут письма
$title = "Заказ на Ваш товар"; #Заголовок письма

$text = "
Информация о покупателе:

Имя: ".$_POST['name']."
Телефон: ".$_POST['phone']."
Модель: ".$_POST['comment']."
Заявка пришла с сайта:" . $_SERVER['HTTP_REFERER'] ."
Время заказа: ".date("Y-m-d H:i:s");

if(mail($email, $title, $text)) {
	header('Location: good.html');
} else {
	echo "Ошибка. Возможно функция mail отключена. Обратитесь к хостинг-провайдеру или возьмите консультацию на сайте, где купили шаблон";
}
} else {
	echo "Ошибка";
}
?>
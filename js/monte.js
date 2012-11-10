function integMonte(obj) 
{
	var a =  eval(obj.inputa.value) //нижний предел интегрирования
	var b = eval(obj.inputb.value) //верхний предел интегрирования
	var n = obj.inputn.value //число испытаний
	var fs = obj.funcMonte.value //подынтегральная функция
	var eps= obj.inputeps.value //число знаков после запятой
	var s = 0 //здесь будет накапливаться сумма
    var k = Number(b-a) //длина участка интегрирования
    if (k <= 0) //проверка положительной длины участка
    {
    	alert("Длина участка должна быть положительна!")
    	return false
    }
    else
    {
    	for (i=1; i<=n; i++)
   		{
    		var x = Number(Math.random() * (b - a ) + a) //случайная величина из [a,b]
    		s = Number(s + eval(fs)) //накопление суммы
    	}
    	var integral = Number((1/n)*k*s) //подсчёт интеграла
    	obj.result.value=(integral).toFixed(eps) //округление
    }
}

function checkForm(f) 
{
  var errMSG = ""; 
  // цикл ниже перебирает все элементы в объекте f, 
  // переданном в качестве параметра
  // функции, в данном случае - наша форма.            
  for (var i = 0; i<f.elements.length; i++) 
    // если текущий элемент имеет атрибут required
    // т.е. обязательный для заполнения
    if (null!=f.elements[i].getAttribute("required")) 
       // проверяем, заполнен ли он в форме
        if (isEmpty(f.elements[i].value)) // пустой
            errMSG += " " + f.elements[i].title + "\n"; // формируем сообщение
                                                       // об ошибке, перечисляя 
                                                       // незаполненные поля
        // если сообщение об ошибке не пусто,
        // выводим его, и возвращаем false     
        if ("" != errMSG) {
            alert("Не заполнены обязательные поля:\n" + errMSG);
            return false;
        }
        return f
}

function isEmpty(str) {
   for (var i = 0; i < str.length; i++)
      if (" " != str.charAt(i))
          return false;
      return true;
}

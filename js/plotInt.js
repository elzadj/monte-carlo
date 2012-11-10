$(function () {	
	var options = {
		lines: { show: true },
    	zoom: { interactive: true }, // приближение/отдаление мышью
    	pan: { interactive: true } // перетаскивание мышью
    }

	var data = []; // пустой график
	var placeholder = $("#placeholder"); 
	$.plot(placeholder, data, options); // чертим поле графика

 $("input.plotInt").click(function () { // событие произойдёт по
    var button = $(this); // нажатию на кнопку
    data = []; // очищаем поле графика, если
    $.plot(placeholder, data, options); // там уже что-то начерчено
	var a = Number(eval(formMonte.inputa.value)) //нижний предел интегрирования
	var b = Number(eval(formMonte.inputb.value)) //верхний предел интегрирования
	var fs= formMonte.funcMonte.value //подынтегральная функция
   
    var d1 = []; // график подынтегральной функции
    for (var i = a-2; i < b+2; i += 0.05)
    {
    	x = i
    	d1.push([i, eval(fs)]);
    }
    	
    x = a
 	var d2 = [[a, 0], [a, eval(fs)]]; // левая граница интегрирования
 	x = b
 	var d3 = [[b, 0], [b, eval(fs)]]; // правая граница интегрирования
 	data = [
 	{
    	color: "#1e90ff",
    	label: "y = " + formMonte.funcMonte.value,
    	data: d1,
    	lines: { show: true, fill: true }
    },
    {
    	color: "#000000",
    	label: "a, b",
    	data: d2,
    	lines: { show: true }
    },
    {
    	color: "#000000",
    	data: d3,
    	lines: { show: true }
    } 
    ],
       $.plot(placeholder, data, options); // чертим график с новыми данными
       });
});
$(document).ready(function(){
	var ulAll = $('.ul_all'),
		ulActive = $('.ul_active'),
		ulDone = $('.ul_done'),
		linkAll = $('.tabs__tab_all'),
		linkActive = $('.tabs__tab_active'),
		linkDone = $('.tabs__tab_done'),
		linkClear = $('.tabs__tab_clear');
	
	// переключение по табам	
	linkDone.on('click', function(){
		ulAll.hide();
		ulActive.hide();
		ulDone.show();
		linkAll.removeClass('tabs__tab_chosen');
		linkActive.removeClass('tabs__tab_chosen');
		$(this).addClass('tabs__tab_chosen');
	});
	linkAll.on('click', function(){
		$('.ul').show();
		linkActive.removeClass('tabs__tab_chosen');
		linkDone.removeClass('tabs__tab_chosen');
		$(this).addClass('tabs__tab_chosen');
	});
	linkActive.on('click', function(){
		ulAll.hide();
		ulDone.hide();
		ulActive.show();
		linkAll.removeClass('tabs__tab_chosen');
		linkDone.removeClass('tabs__tab_chosen');
		$(this).addClass('tabs__tab_chosen');
	});
	linkClear.on('click', function(){
		$('.ul_done li').remove();
		
	});
	
	// создание задачи
$('.form__input').bind("enterKey",toinputSubmit);
$('.form__input').keyup(function(e){
    if(e.keyCode == 13)
    {
        $(this).trigger("enterKey");
    }
});

	function toinputSubmit() {
		var input = $('.form__input').val();
		if (!input) $('.form__input').addClass('form__input_empty').attr('placeholder', 'вы ничего не ввели');
		else {
			$('.form__input').removeClass('form__input_empty').attr('placeholder', '');
			inputSubmit();
			
		}
		$('.li-close').on('click', liClose);
		$('.tabs__span').text("Осталось задач: " + $('.ul_active li').length);
		$('.ul_active .li-check').on('click', check);
		
	}
	
		
	// добавление задачи
	function inputSubmit() {
		var input = $('.form__input').val();
		$('.form__input').val('');
    var listItem = $('<li class="li li_active"><a class="li-check" href="#"></a><span>' + input +'</span><a href="#" class="li-close">x</a></li>');
    listItem.on('dblclick', function(){
			console.log(2);
		});
		$('.ul_active').append(listItem);
		
	}
	
	// "выполнение" задачи
	function check(e) {
		e.preventDefault;
		$(this).parent().removeClass('li_active').addClass('li_done');
		var listDone = $(this).parent().detach();
		ulDone.append(listDone);
		$('.tabs__span').text("Осталось задач: " + $('.ul_active li').length);
		$('.ul_done .li-check').on('click', checkBack);	
			
	}
	
	// возвращаем задачу из завершенных в открытые
	function checkBack() {
		var doneList = $(this).parent().removeClass('li_done').addClass('li_active').detach();
		ulActive.append(doneList);
		$('.tabs__span').text("Осталось задач: " + $('.ul_active li').length);
	}
	
	function changeLi(e) {
		e.stopPropagation();
		console.log(2);
	}
	
	function liClose(e) {
		e.preventDefault;
		$(this).parent().remove();
		$('.tabs__span').text("Осталось задач: " + $('.ul_active li').length);
	}
	
	
	
	
});
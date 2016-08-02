$(document).ready(function(){
	var formAll = $('.ul_all'),
		formActive = $('.ul_active'),
		formDone = $('.ul_done'),
		linkAll = $('.tabs__tab_all'),
		linkActive = $('.tabs__tab_active'),
		linkDone = $('.tabs__tab_done');
	
	// переключение по табам	
	linkDone.on('click', function(){
		formAll.hide();
		formActive.hide();
		formDone.show();
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
		formAll.hide();
		formDone.hide();
		formActive.show();
		linkAll.removeClass('tabs__tab_chosen');
		linkDone.removeClass('tabs__tab_chosen');
		$(this).addClass('tabs__tab_chosen');
	});

	$('.form').on('submit', inputSubmit)	
	
	function inputSubmit(e) {
		e.preventDefault;
		var input = $('.form__input').val();
		$('.form__input').val('');
		$('.ul_active').append("<li class='form__list form__list_active'><a class='form__list-check' href='#'></a><span>" + input +"</span></li>");
		$('.tabs__span').text("Осталось задач: " + $('.ul_active li').length);
		$('.ul_active .form__list-check').on('click', check);
	}
	
	function check(e) {
		e.preventDefault;
			$(this).parent().removeClass('form__list_active').addClass('form__list_done');
			var listDone = $(this).parent().detach();
			formDone.append(listDone);
			$('.tabs__span').text("Осталось задач: " + $('.ul_active li').length);
			$('.ul_done .form__list-check').on('click', checkBack);	
			
	}
	
	
	function checkBack() {
				var doneList = $(this).parent().removeClass('form__list_done').addClass('ul_active').detach();
				formActive.append(doneList);
				$('.tabs__span').text("Осталось задач: " + $('.ul_active li').length);
			}
	
	
	
	
	
	
	
	
	
	
});
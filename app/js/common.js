$(function() {

	// Скролинг по якорям
	$('.anchor').bind("click", function(e){
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top-106 // отступ от меню
		}, 500);
	e.preventDefault();
	});

	// Меню при скроле
	$(window).scroll(function(){
		var topline = $(window).scrollTop();
		if ( topline > 650 ) {
			$(".posf").addClass('show');
		} else {
			$(".posf").removeClass('show');
		};
	});

	// Клик по гамбургеру на моб версии
	$('.mob-mnu__humb').click(function() {
		$('.mob-mnu-list').toggleClass('show');
	});
	$('.mob-mnu__li').click(function() {
		$('.mob-mnu-list').removeClass('show');
	});

	// Формирование полей и заголовков формы в мод окне
	$('.modal').click(function(){
		var ttl = $(this).data('title');
		var subTtl = $(this).data('subtitle');
		var text = $(this).data('text');
		var btn = $(this).data('btn');
		var goal = $(this).data('goal');
		var subject = $(this).data('subject');
		$('.ttl').html(ttl);
		$('.subTtl').html(subTtl);
		$('.text').html(text);
		$('.btn').html(btn);
		$('.goal').val(goal);
		$('.subject').val(subject);
	});

	// Отправка формы
	$('[data-ajax="true"]').submit(function() {
		var data = $(this).serialize();
		var goalId = $(this).find('input[ name="goal"]').val();
		data += '&ajax-request=true';
		$.ajax({
			type: 'POST',
			url: 'mail.php',
			dataType: 'json',
			data: data,
			success: (function() {
				$.fancybox.close();
				$.fancybox.open('<div class="thn"><h3>Заявка отправлена!</h3><p>С Вами свяжутся в ближайшее время.</p></div>');
				//gtag('event','submit',{'event_category':'submit','event_action':goalId});
				//fbq('track', 'Lead');
			})()
		});
		return false;
	});

	// Инит фансибокса
	$('.fancybox, .modal').fancybox({
		margin: 0,
		padding: 0
	});

	//Якорь наверх
	$("[href='#top']").click(function(e){
		$('html, body').stop().animate({
			scrollTop: $('#top').offset().top
		}, 300);
		e.preventDefault();
	});

	var stepHeight1 = $('.step1').outerHeight();
	$('.step-height').css('height', stepHeight1);
	$('.step1 .step__patern').css('height', stepHeight1);
	$('.step1 .step__patern').css('width', stepHeight1);
	$('.step1 .step__patern').css('margin-left', -stepHeight1/2);
	$('.step1 .step__patern').css('margin-top', -stepHeight1/2);

	var stepHeight2 = $('.step2').outerHeight();
	$('.step2 .step__patern').css('height', stepHeight2);
	$('.step2 .step__patern').css('width', stepHeight2);
	$('.step2 .step__patern').css('margin-left', -stepHeight2/2);
	$('.step2 .step__patern').css('margin-top', -stepHeight2/2);

	var stepHeight3 = $('.step3').outerHeight();
	$('.step3 .step__patern').css('height', stepHeight3);
	$('.step3 .step__patern').css('width', stepHeight3);
	$('.step3 .step__patern').css('margin-left', -stepHeight3/2);
	$('.step3 .step__patern').css('margin-top', -stepHeight3/2);

	var stepHeight4 = $('.step4').outerHeight();
	$('.step4 .step__patern').css('height', stepHeight4);
	$('.step4 .step__patern').css('width', stepHeight4);
	$('.step4 .step__patern').css('margin-left', -stepHeight4/2);
	$('.step4 .step__patern').css('margin-top', -stepHeight4/2);

});

$(window).on('load', function() {

	var mh = 0;
	$(".packages").each(function () {
		var h_block = $(".package.active").outerHeight();
		mh = h_block;
		$(".package-height").height(mh);
	});

	$('.package2').click(function() {
		$(this).addClass('active').css({'left':'0', 'opacity':'1'}).siblings().removeClass('active');
		$('.package1').css('left', '-100%');
		$('.package3').css('left', '70%');
		$('.package4').css('left', '120%');
		var mh = $(this).outerHeight();
		$(".package-height").height(mh);
	});

	$('.package3').click(function() {
		$(this).addClass('active').css('left','0').siblings().removeClass('active');
		$('.package2').css('left', '-100%');
		$('.package4').css('left', '70%');
		var mh = $(this).outerHeight();
		$(".package-height").height(mh);
	});

	$('.package4').click(function() {
		$(this).addClass('active').css('left','0').siblings().removeClass('active');
		$('.package3').css('left', '-100%');
		var mh = $(this).outerHeight();
		$(".package-height").height(mh);
	});

});

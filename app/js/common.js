$(function() {

	// Меню при скроле
	$(window).scroll(function(){
		var topline = $(window).scrollTop();
		if ( topline > 650 ) {
			$(".nav-fixed").addClass('show');
		} else {
			$(".nav-fixed").removeClass('show');
		};
	});

	// Отправка формы
	$('form').submit(function() {
		var data = $(this).serialize();
		var goalId = $(this).find('input[ name="goal"]').val();
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

	// Автовисота шагов формы
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

	$('.step1 .step-next').click(function() {
		$('.step1').css({'left':'-200%', 'opacity':'0.5', 'z-index':'-1'});
		$('.step2').css({'left':'0', 'opacity':'1', 'z-index':'1'});
		$('.step3').css({'left':'45%','top':'0', 'opacity':'0.5', 'z-index':'-1'});
		$('.step4').css({'left':'95%','top':'-20%', 'opacity':'0.5', 'z-index':'-1'});
		var stepHeight1 = $('.step2').outerHeight();
		$('.step-height').css('height', stepHeight1);
		$('.step-numb').removeClass('active');
		$('.step-numb.numb2').addClass('active');
	});

	$('.step2 .step-next').click(function() {
		$('.step2').css({'left':'-200%', 'opacity':'0.5', 'z-index':'-1'});
		$('.step3').css({'left':'0', 'opacity':'1', 'z-index':'1'});
		$('.step4').css({'left':'45%','top':'0', 'z-index':'-1'});
		$('.step1').css({'left':'-200%', 'opacity':'0.5', 'z-index':'-1'});
		var stepHeight1 = $('.step3').outerHeight();
		$('.step-height').css('height', stepHeight1);
		$('.step-numb').removeClass('active');
		$('.step-numb.numb3').addClass('active');
	});

	$('.step3 .step-next').click(function() {
		$('.step2').css({'left':'-200%', 'opacity':'0.5', 'z-index':'-1'});
		$('.step3').css({'left':'-200%', 'opacity':'0.5', 'z-index':'-1'});
		$('.step4').css({'left':'0','top':'0', 'opacity':'1', 'z-index':'1'});
		$('.step1').css({'left':'-200%', 'opacity':'0.5', 'z-index':'-1'});
		var stepHeight1 = $('.step4').outerHeight();
		$('.step-height').css('height', stepHeight1);
		$('.step-numb').removeClass('active');
		$('.step-numb.numb4').addClass('active');
	});

	$('.step-numb.numb1').click(function() {
		$('.step-numb').removeClass('active');
		$(this).addClass('active');
		$('.step1').css({'left':'', 'top':'', 'opacity':'', 'z-index':'1'});
		$('.step2').css({'left':'', 'top':'', 'opacity':'0.5', 'z-index':'-1'});
		$('.step3').css({'left':'', 'top':'', 'opacity':'0.5', 'z-index':'-1'});
		$('.step4').css({'left':'', 'top':'', 'opacity':'0.5', 'z-index':'-1'});
		var stepHeight1 = $('.step1').outerHeight();
		$('.step-height').css('height', stepHeight1);
		$('.step-numb').removeClass('active');
		$('.step-numb.numb1').addClass('active');
	});

	$('.step-numb.numb2').click(function() {
		$('.step-numb').removeClass('active');
		$(this).addClass('active');
		$('.step1').css({'left':'-100%', 'opacity':'0.5', 'z-index':'-1'});
		$('.step2').css({'left':'0', 'opacity':'1', 'z-index':'1'});
		$('.step3').css({'left':'45%','top':'-0', 'opacity':'0.5', 'z-index':'-1'});
		$('.step4').css({'left':'95%','top':'-20%', 'opacity':'0.5', 'z-index':'-1'});
		var stepHeight1 = $('.step2').outerHeight();
		$('.step-height').css('height', stepHeight1);
	});

	$('.step-numb.numb3').click(function() {
		$('.step-numb').removeClass('active');
		$(this).addClass('active');
		$('.step2').css({'left':'-100%','top':'0', 'opacity':'0.5', 'z-index':'-1'});
		$('.step3').css({'left':'0','top':'0', 'opacity':'1', 'z-index':'1'});
		$('.step4').css({'left':'45%','top':'0', 'opacity':'0.5', 'z-index':'-1'});
		$('.step1').css({'left':'-100%','top':'0', 'opacity':'0.5', 'z-index':'-1'});
		var stepHeight1 = $('.step3').outerHeight();
		$('.step-height').css('height', stepHeight1);
	});

	$('.step-numb.numb4').click(function() {
		$('.step-numb').removeClass('active');
		$(this).addClass('active');
		$('.step2').css({'left':'-100%','top':'0', 'opacity':'0.5', 'z-index':'-1'});
		$('.step3').css({'left':'-100%','top':'0', 'opacity':'0.5', 'z-index':'-1'});
		$('.step4').css({'left':'0','top':'0', 'opacity':'1', 'z-index':'1'});
		$('.step1').css({'left':'-100%','top':'0', 'opacity':'0.5', 'z-index':'-1'});
		var stepHeight1 = $('.step4').outerHeight();
		$('.step-height').css('height', stepHeight1);
	});

	// Слайдер пакетов
	$('.package-numb.numb1').click(function() {
		$('.package-numb').removeClass('active');
		$(this).addClass('active');
		$('.package1').addClass('active').css('left', '').siblings().removeClass('active');
		$('.package2').css({'left':'', 'opacity':''});
		$('.package3').css({'left':'', 'opacity':''});
		$('.package4').css({'left':'', 'opacity':''});
		var mh = $('.package1').outerHeight();
		$(".package-height").height(mh);
	});

	$('.package2').click(function() {
		$(this).addClass('active').css({'left':'0', 'opacity':'1'}).siblings().removeClass('active');
		$('.package1').css('left', '-100%');
		$('.package3').css('left', '78%');
		$('.package4').css('left', '120%');
		var mh = $(this).outerHeight();
		$(".package-height").height(mh);
		$('.package-numb').removeClass('active');
		$('.package-numb.numb2').addClass('active');
	});

	$('.package-numb.numb2').click(function() {
		$('.package-numb').removeClass('active');
		$(this).addClass('active');
		$('.package2').addClass('active').css({'left':'0', 'opacity':'1'}).siblings().removeClass('active');
		$('.package1').css('left', '-100%');
		$('.package3').css('left', '78%');
		$('.package4').css('left', '120%');
		var mh = $('.package2').outerHeight();
		$(".package-height").height(mh);
	});

	$('.package3').click(function() {
		$(this).addClass('active').css('left','0').siblings().removeClass('active');
		$('.package2').css('left', '-100%');
		$('.package4').css('left', '78%');
		var mh = $(this).outerHeight();
		$(".package-height").height(mh);
		$('.package-numb').removeClass('active');
		$('.package-numb.numb3').addClass('active');
	});

	$('.package-numb.numb3').click(function() {
		$('.package-numb').removeClass('active');
		$(this).addClass('active');
		$('.package3').addClass('active').css('left','0').siblings().removeClass('active');
		$('.package2').css('left', '-100%');
		$('.package4').css('left', '78%');
		$('.package1').css('left', '-200%');
		var mh = $('.package3').outerHeight();
		$(".package-height").height(mh);
	});

	$('.package4').click(function() {
		$(this).addClass('active').css('left','0').siblings().removeClass('active');
		$('.package3').css('left', '-100%');
		var mh = $(this).outerHeight();
		$(".package-height").height(mh);
		$('.package-numb').removeClass('active');
		$('.package-numb.numb4').addClass('active');
	});

	$('.package-numb.numb4').click(function() {
		$('.package-numb').removeClass('active');
		$(this).addClass('active');
		$('.package4').addClass('active').css('left','0').siblings().removeClass('active');
		$('.package3').css('left', '-100%');
		$('.package2').css('left', '-150%');
		$('.package1').css('left', '-200%');
		var mh = $('.package4').outerHeight();
		$(".package-height").height(mh);
	});
	
});

$(window).on('load', function() {
	var mh = 0;
	$(".packages").each(function () {
		var h_block = $(".package.active").outerHeight();
		mh = h_block;
		$(".package-height").height(mh);
	});
});

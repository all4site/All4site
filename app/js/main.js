  $(document).ready(function(){
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
    $(".button-collapse").sideNav();
  });

$(document).ready(function(){
	$(window).scroll(function(){
		var top = ($(document).scrollTop());
		if (top >= 300) {
			$('.circlebottom').css('opacity','1');
		}
		else{
			$('.circlebottom').css('opacity','0');
		}
	});
	
});


// Плавная прокрутка
  $(document).ready(function() {
    $('a[data-target="menu"]').click(function() {
        var target = $(this).attr('href');
        $('a').removeClass('active');
        $(this).addClass('active');
        $('html, body').animate({ scrollTop: $(target).offset().top}, 700);
    });
  });

// Почта заказ
$(document).ready(function() {
	//E-mail Ajax Send
	$("#order1, #order2, #order3, #order4").submit(function() { //Change
		var th = $(this);
		var win = window.open('http://all4site.com.ua/waight.html');
		$.ajax({
			type: "POST",
			url: "mail/mail.php", //Change
			data: th.serialize()
		}).done(function() {
			win;
			setTimeout(function() {
				// Done Functions
				win.close();
				location.reload();
				th.trigger("reset");
			}, 5000);
		});
		return false;
	});
});

// Обратная связь
$(document).ready(function() {
	//E-mail Ajax Send
	$("#test").submit(function() { //Change
		var th = $(this);
		var win = window.open('http://all4site.com.ua/collback.html');
		$.ajax({
			type: "POST",
			url: "mail/mail.php", //Change
			data: th.serialize()
		}).done(function() {
			win;
			setTimeout(function() {
				// Done Functions
				win.close();
				th.trigger("reset");
			}, 5000);
		});
		return false;
	});
});

// Сделать сайт это просто
$(document).ready(function(){
	var boxred = $('.box:nth-of-type(1)');
	var	boxyellow = $('.box:nth-of-type(2)');
	var boxgreen = $('.box:nth-of-type(3)');

	boxyellow.mouseover(function(){
		boxred.css("background","#E7E453");
	});
	boxyellow.mouseout(function(){
		boxred.removeAttr("style");

	});
	boxgreen.mouseover(function(){
		boxred.css("background","#A4B650");
		boxyellow.css("background","#A4B650");
	});
	boxgreen.mouseout(function(){
		boxred.removeAttr("style");
		boxyellow.removeAttr("style");
	});
})
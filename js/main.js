
$(document).ready(function(){

	//$('.gallery').hide();
	//$('.gallery').fadeIn(1500);
	//$('.bood').hide();
	

	$('.img1').hide();
	$('.img2').hide();
	$('.img3').hide();
	$('.img4').hide();




	$('.heads2-logo').click(function(){
		$('.img1').toggle('show');
		$('.img2').hide('slow');
		$('.img3').hide('slow');
		$('.img4').hide('slow');
	});

	$('.heads2-graph').click(function(){
		$('.img2').toggle('show');
		$('.img1').hide('slow');
		$('.img3').hide('slow');
		$('.img4').hide('slow');
	});

	$('.heads2-shirt').click(function(){
		$('.img4').toggle('show');
		$('.img3').hide('slow');
		$('.img2').hide('slow');
		$('.img1').hide('slow');
	});

	$('.heads2-web').click(function(){
		$('.img3').toggle('show');
		$('.img2').hide('slow');
		$('.img1').hide('slow');
		$('.img4').hide('slow');
	});




});




/*
copied from codecademy as reference on jquery

function main(){
$('.skillset').hide();
  $('.skillset').fadeIn(1000);
$('.projects').hide();
  $('.projects-button').on('click', function(){
    //$(this).next().toggle();
    $(this).next().slideToggle(400);
    $(this).toggleClass('active');
    $(this).text('Projects Viewed');
  });
 
}

$(document).ready(main);
*/
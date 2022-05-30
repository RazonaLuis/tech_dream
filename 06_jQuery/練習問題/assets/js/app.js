$(function(){
  // Q1
  $('#q1-btn').on('click',function () {
    $(this).addClass('large-btn');
  })
  // Q2
  $('#q2-btn').on('mouseover',function () {
    $(this).css('opacity',0.5);
  });

  // Q3
  // $('#q3-btn').on('mouseover',function () {
  //   $(this).css('opacity',0.5);
  // });
  // $('#q3-btn').on('mouseleave',function () {
  //   $(this).css('opacity',1);
  // });
  $('#q3-btn').hover(
    function () {
      $(this).css('opacity',0.5);
    },function () {
      $(this).css('opacity',1);
    }
  )
  
  // Q4
  $('#q4-btn').on('click',function () {
    $('#q4-text').text('好きなものに変える');
  });

  // Q5
  $('#q5-btn').on('click',function () {
    let li = $('<li>');
    li.text('ブドウ');
    li.addClass('grape');
    $('.apple').before(li);
  });

  // Q6
  $('#q6-btn').on('click',function () {
    // let span = $('<span>');
    // span.text('追加');
    // span.addClass('red');
    // $('.q6-text').append(span);
    $('.q6-text').append('<span class="red">追加</span>');
  });

  // Q7
  $('#q7-btn').on('click',function () {
    $(this).toggleClass('on');
  });

  // Q8
  $('#q8-btn').on('click',function () {
    // $('#q8-btn ~ dd').slideToggle();
    $(this).siblings().slideToggle();
  });

  // Q9
  $('#q9-btn').on('click',function () {
    $('body, html').animate({scrollTop: 0},500);
  });

  // Q10
  $('.q10-show-btn').on('click',function () {
    // $('.q10-target').animate({opacity:1},500);
    $('.q10-target').fadeIn();
  });
  $('.q10-hide-btn').on('click',function () {
    // $('.q10-target').animate({opacity:0},500);
    $('.q10-target').fadeOut();
  });

  // Q11
 
  $(window).on('scroll',function () {
    let position = $('#q11').offset().top;
    let windowTop = $(window).scrollTop();
    let wh = $(window).height();
    console.log(position);
    console.log(windowTop + wh);
    if (windowTop + wh > position) {
      $('.q11-target').removeClass('hide');
    }else{
      $('.q11-target').addClass('hide');
    }
  });

  // Q12
  $('#q12-btn').on('click',function () {
    $('.q12-target').toggleClass('hide');
  })










})


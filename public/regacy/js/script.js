//グローバルメニュー
function toggleNav() {
var body = document.body;
var hamburger = document.getElementById('js-hamburger');
var blackBg = document.getElementById('js-black-bg');
var pageInlink1 = document.getElementById('page_inlink1');
var pageInlink2 = document.getElementById('page_inlink2');

hamburger.addEventListener('click', function() {
	body.classList.toggle('nav-open');
});
blackBg.addEventListener('click', function() {
	body.classList.remove('nav-open');
});

}
toggleNav();

//TOP戻り
$(document).ready(function() {
var pagetop = $('.pagetop');
$(window).scroll(function () {
if ($(this).scrollTop() > 100) {
pagetop.fadeIn();
} else {
pagetop.fadeOut();
}
});
pagetop.click(function () {
$('body, html').animate({ scrollTop: 0 }, 500);
return false;
});
});

//loding_anime
$(function(){
setTimeout(function(){
$('.loading').fadeOut();
},2000);//約4秒数後
});
//初回のみ設定
var webStorage = function(){
	var $loading = $('.loading');

	if(sessionStorage.getItem('access')){
	  $loading.removeClass('is-active');
	} else {
	  $loading.addClass('is-active');
	  sessionStorage.setItem('access', 0);
	}
  }
  webStorage();

//ウィンドウの高さを取得する
var window_h = $(window).height();

//スクロールイベント
$(window).on("scroll", function() {

  //.slideConts スクロールの位置を取得する
  var scroll_top = $(window).scrollTop();

  $(".slideConts").each(function() {
    //各box要素のtopの位置を取得する
    var elem_pos = $(this).offset().top;

    //どのタイミングでフェードインさせるか
    if (scroll_top >= elem_pos - window_h + 300) {
      $(this).addClass("fadein");//特定の位置を超えたらクラスを追加
    } else {
      $(this).removeClass("fadein"); //そうでない場合はクラスを削除
    }
  });

  //.slideboxスクロールの位置を取得する
  var scroll_top = $(window).scrollTop();

  $(".slidebox").each(function() {
    //各box要素のtopの位置を取得する
    var elem_pos = $(this).offset().top;

    //どのタイミングでフェードインさせるか
    if (scroll_top >= elem_pos - window_h + 300) {
      $(this).addClass("fadein");//特定の位置を超えたらクラスを追加
    } else {
      $(this).removeClass("fadein"); //そうでない場合はクラスを削除
    }
  });
});

//.box_n 要素を順番に時間差で表示
$(function(){
	$('.box_n').css("opacity","0");
	$(window).scroll(function (){
	$('.box_n').each(function(){

		var elemPos = $(this).offset().top;      /*画面上部からの距離*/
		var scroll = $(window).scrollTop();      /*スクロールした量*/
		var windowHeight = $(window).height();       /*画面の高さ*/

	/*発動条件：画面の高さが1/4までスクロールしたら順番に表示*/
	if (scroll > elemPos - windowHeight + windowHeight/4){
	$(function(){
	$('.box_n')
		.each(function(i){
			$(this).delay(500*i).animate({opacity:1}, 1000);0
		});
		});
		}
	});
	});
});
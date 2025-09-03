$(function () {
  /*=================================================
  ハンバーガーメニュー
  ===================================================*/
  $('.hamburger').on('click', function() {
    $('header').toggleClass('open');
  });

  $('#mask').on('click', function() {
    $('header').removeClass('open');
  });

    $('#nav a').on('click', function() {
    $('header').removeClass('open');
  });

$(function () {
  /*=================================================
  スムーススクロール
  ===================================================*/
  // ページ内のリンクをクリックした時に動作する
  $('a[href^="#"]').click(function () {
    // クリックしたaタグのリンクを取得
    let href = $(this).attr("href");
    // ジャンプ先のid名をセット hrefの中身が#もしくは空欄なら,htmlタグをセット
    let target = $(href == "#" || href == "" ? "html" : href);
    // ページトップからジャンプ先の要素までの距離を取得
    let position = target.offset().top;
    // animateでスムーススクロールを行う   ページトップからpositionだけスクロールする
    // 600はスクロール速度で単位はミリ秒  swingはイージングのひとつ
    $("html, body").animate({ scrollTop: position }, 600, "swing");
    // urlが変化しないようにfalseを返す
    return false;
  });
});

// faq.ac
$(function () {
  $('.ac-child').css("display", "none");
  $('.ac-parent').on('click', function () {
    $(this).next().slideToggle();
  })
});

// fadein
$(window).scroll(function () {
  // fadeinクラスに対して順に処理を行う
  $(".fadein").each(function () {
    // スクロールした距離
    let scroll = $(window).scrollTop();
    // fadeinクラスの要素までの距離
    let target = $(this).offset().top;
    // 画面の高さ
    let windowHeight = $(window).height();
    // fadeinクラスの要素が画面下にきてから200px通過した
    // したタイミングで要素を表示
    if (scroll > target - windowHeight + 200) {
      $(this).css("opacity", "1");
      $(this).css("transform", "translateY(0)");
    }
  });
});

// menu.slick
$(".slide-items").slick({
  autoplay: true, // 自動再生
  autoplaySpeed: 4000, // 再生速度（ミリ秒設定） 1000ミリ秒=1秒
  infinite: true, // 無限スライド
  arrows: true, // 矢印
  autoplay: true, // 自動再生
  arrows: true, // 矢印
  dots: true, // インジケーター
    adaptiveHeight: true,
    prevArrow: '<img src="../img/矢印ボタン　左2.png" class="slide-arrow prev-arrow">',
    nextArrow: '<img src="../img/矢印ボタン　右2.png" class="slide-arrow next-arrow">',

});
});
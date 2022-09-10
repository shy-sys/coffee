'use strict';

{
$(function(){
/*=================================================
スムーススクロール
===================================================*/
// ページ内のリンクをクリックした時に動作する
$(`a[href^= "#"]`).click(function () {

// リンクを取得する
    let href = $(this).attr('href');

// ジャンプ先のid名をセット
    let target = $(href == "#" || href == "" ? 'href' : href);

// トップからジャンプ先の要素までの距離を取得する
    let position = target.offset().top;

 // animateでスムーススクロールを行う。 600はスクロール速度で単位はミリ秒
    $("html, body").animate({scrollTop: position}, 600, "swing");
    return false;
});
})
}
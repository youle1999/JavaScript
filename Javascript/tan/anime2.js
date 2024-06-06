document.addEventListener('DOMContentLoaded', () => {
    anime.timeline({loop: false}) // アニメーションのタイムラインを作成、ループは無し
    .add({
        targets: '#animatedText', // アニメーションの対象となるidが'animatedText'の要素
        opacity: [0, 1], // 透明度を0から1にアニメーション
        translateY: [50, 0], // Y軸方向に50pxから0pxへ移動
        easing: 'easeOutExpo', // イージング関数でアニメーションの速度を調整
        duration: 2000, // アニメーションの継続時間は2000ミリ秒（2秒）
    })
    .add({
        targets: '#animatedText',
        scale: [1, 2.5], // テキストを1倍から1.5倍に拡大
        easing: 'easeOutExpo',
        duration: 1000 // こちらは1000ミリ秒（1秒）で実行
    });
});

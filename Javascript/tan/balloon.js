document.addEventListener('DOMContentLoaded', () => {
    const gameContainer = document.getElementById('gameContainer'); // ゲームコンテナを取得

    // バルーンを生成する関数
    function createBalloon() {
        const balloon = document.createElement('div'); // div要素を作成
        balloon.className = 'balloon'; // 作成したdivに'balloon'クラスを設定
        balloon.style.left = Math.random() * (gameContainer.offsetWidth - 50) + 'px'; // ランダムな左位置
        // Math.random() 0以上1未満の乱数を生成し、それにコンテナの幅からバルーンの幅を引いたものを乗算
        // gameContainer.offsetWidth は、ゲームコンテナの幅
        // - 50 はバルーンの幅を意味し、バルーンがコンテナの端に隠れることを防ぐためです。
        balloon.style.top = gameContainer.offsetHeight + 'px'; // 初期状態はコンテナの下部

        gameContainer.appendChild(balloon); // コンテナにバルーンを追加

        // バルーンを動かすためのタイマー
        let interval = setInterval(() => {
            if (parseInt(balloon.style.top) <= -70) { // バルーンが画面上端に達したか
                clearInterval(interval); // タイマーを停止し関連づけを解除
                gameContainer.removeChild(balloon); // バルーンをDOMから削除
            } else {
                balloon.style.top = parseInt(balloon.style.top) - 2 + 'px'; // 上に2pxずつ移動
            }
        }, 20);
        // バルーンをクリックした際のイベントハンドラ
        balloon.addEventListener('click', () => {
            clearInterval(interval); // タイマーを停止
            gameContainer.removeChild(balloon); // バルーンをDOMから削除
    });
}
// 800ミリ秒ごとに新しいバルーンを生成する
setInterval(createBalloon, 800);
});

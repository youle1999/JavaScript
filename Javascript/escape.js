// canvas要素を取得し、2D描画コンテキストを取得する
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// プレイヤーの初期設定
let player = {
    x: 50,     // プレイヤーの初期X座標
    y: 50,     // プレイヤーの初期Y座標
    width: 30, // プレイヤーの幅
    height: 30,// プレイヤーの高さ
    dx: 5,     // プレイヤーが左右に移動する距離
    dy: 5      // プレイヤーが上下に移動する距離
};

// プレイヤーを描画する関数
function drawPlayer() {
    ctx.fillStyle = 'blue'; // プレイヤーの色を設定
    ctx.fillRect(player.x, player.y, player.width, player.height); // プレイヤーを描画
}

// キャンバスをクリアする関数
function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // キャンバス全体をクリア
}


// プレイヤーを描画する関数
function drawPlayer() {
    ctx.fillStyle = 'blue'; // プレイヤーの色を設定
    ctx.fillRect(player.x, player.y, player.width, player.height); // プレイヤーを描画
}

// キャンバスをクリアする関数
function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // キャンバスの内容をクリア
}

// キャンバスを更新する関数
function updateCanvas() {
    clearCanvas(); // キャンバスをクリア
    drawPlayer();  // プレイヤーを描画

    // ウェブブラウザが利用できる場合は3回/秒の速度でリフレッシュ
    requestAnimationFrame(updateCanvas);
}

// キーボードイベントに応じてプレイヤーが動く
function movePlayer(event) {
    switch (event.keyCode) {
        case 37: // 左矢印
            if (player.x - player.dx >= 0) { // プレイヤーの左端がキャンバスの左端より内側にある場合
                player.x -= player.dx; // プレイヤーを左に移動
            }
            break;
        case 39: // 右矢印
            if (player.x + player.width + player.dx <= canvas.width) { // プレイヤーの右端がキャンバスの右端より内側にある場合
                player.x += player.dx; // プレイヤーを右に移動
            }
            break;
        // 他のキーイベントを追加可能
    }
}

function movePlayer(event) {
    switch (event.keyCode) {
        case 37: // 左矢印
            if (player.x - player.dx >= 0) { // プレイヤーの左端がキャンバスの左端より内側にある場合
                player.x -= player.dx; // プレイヤーを左に移動
            }
            break;
        case 39: // 右矢印
            if (player.x + player.width + player.dx < canvas.width) { // プレイヤーの右端がキャンバスの右端より内側にある場合
                player.x += player.dx; // プレイヤーを右に移動
            }
            break;
        case 38: // 上矢印
            if (player.y - player.dy >= 0) { // プレイヤーの上端がキャンバスの上端より内側にある場合
                player.y -= player.dy; // プレイヤーを上に移動
            }
            break;
        case 40: // 下矢印
            if (player.y + player.height + player.dy < canvas.height) { // プレイヤーの下端がキャンバスの下端より内側にある場合
                player.y += player.dy; // プレイヤーを下に移動
            }
            break;
    }
}

// 何かキーが押されたとき
document.addEventListener('keydown', movePlayer);

// ゲームのアニメーション更新開始
setTimeout(function () {
    requestAnimationFrame(updateCanvas);
}, 1000);


// ゲームオーバーを描画する関数
function gameOver() {
    ctx.fillStyle = 'black';
    ctx.font = '24px Arial';
    // どのように文字を配置できるのか
    ctx.fillText('Game Over', canvas.width / 2 - 70, canvas.height / 2);
}

// 衝突判定関数
function checkCollision() {
    if (player.x < obstacle.x + obstacle.width &&
        player.x + player.width > obstacle.x &&
        player.y < obstacle.y + obstacle.height &&
        player.y + player.height > obstacle.y) {
        return true;
    }
    return false;
}

// キャンバスを更新する関数
function updateCanvas() {
    if (checkCollision()) {
        gameOver();
        return; // 衝突した場合、ゲームは停止する
    }

    clearCanvas();
    drawPlayer();
    drawObstacle(); // 障害物の描画

    requestAnimationFrame(updateCanvas);
}

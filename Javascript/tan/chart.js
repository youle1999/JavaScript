// キャンバス要素を取得し、描画用のコンテキスト'2d'を取得しています
const ctx = document.getElementById('myChart').getContext('2d');

// 新しいチャートを生成
const myChart = new Chart(ctx, {
    type: 'bar', // チャートのタイプは'bar'（棒グラフ）に設定
    data: { // チャートのデータの設定
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'], // 各バーに表示されるラベル
        datasets: [{
            label: '# of Votes', // データセットのラベル
            data: [12, 19, 3, 5, 2, 3], // 各ラベルに対するデータ
            backgroundColor: [ // バーの背景色
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [ // バーの枠線の色
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1 // バーの枠線の幅
        }]
    },
    options: { // チャートのオプション
        scales: { // スケールのオプション
            y: { // Y軸のオプション
                beginAtZero: true // Y軸の開始値を0に設定
            }
        }
    }
    });
    
    // チャートをアニメーションさせる関数
    function animate() {
        requestAnimationFrame(animate); // チャート更新のためのアニメーションフレームを要求
        myChart.update(); // チャートを更新
    }
    
    animate(); // アニメーションを実行
    


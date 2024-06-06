// 数値の生成
let number = Math.floor(Math.random() * 10) + 1;
console.log(`生成された数値: ${number}`);

// if文
if (number % 2 === 0) {
    console.log(`${number} は偶数です。`);
} else {
    console.log(`${number} は奇数です。`);
}

// for文
let sum = 0;
for (let i = 1; i <= number; i++) {
    sum += i;
}
console.log(`1から${number}までの合計: ${sum}`);

// 関数
function calculateSum(upToNumber) {
    let total = 0;
    for (let i = 1; i <= upToNumber; i++) {
        total += i;
    }
    return total;
}

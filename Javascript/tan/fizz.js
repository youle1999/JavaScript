// 1から100までの数を繰り返しチェックし、特定のルールに基づいて結果を出力します。
for (let i = 1; i <= 100; i++) {
    // 現在の数 (i) が3で割り切れるかつ5で割り切れる場合は 'FizzBuzz' を出力します。
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
    }
    // 現在の数 (i) が3で割り切れる場合は 'Fizz' を出力します。
    else if (i % 3 === 0) {
        console.log('Fizz');
    }
    // 現在の数 (i) が5で割り切れる場合は 'Buzz' を出力します。
    else if (i % 5 === 0) {
        console.log('Buzz');
    }
    // それ以外の場合は、数値 i そのものを出力します。
    else {
        console.log(i);
    }
}

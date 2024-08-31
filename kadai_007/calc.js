// nに1以上の整数を代入　()内は　0~n-1　の整数だが、その値に+1で1以上の整数になる
// 1~100の整数がランダムに選ばれる
let n = 100;
let num =  Math.floor(Math.random() * n) + 1;

// 変数num値が3と5の倍数である場合、「3と5の倍数です」と表示
if (num % 3 === 0 && num % 5 === 0) {
    console.log('3と5の倍数です');
}

// 変数num値が3の倍数である場合、「3の倍数です」と表示 
else if (num % 3 === 0) {
    console.log('3の倍数です');
}

// 変数num値が5の倍数である場合、「5の倍数です」と表示
else if (num % 5 === 0) {
    console.log('5の倍数です');
}

// それ以外の時は、変数numの値を出力する
else {
    console.log(num);
}
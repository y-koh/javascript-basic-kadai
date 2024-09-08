// ボタン要素を取得
const btn = document.getElementById('btn');

// テキスト要素を取得
const text = document.getElementById('text');

// ボタンにクリックイベントリスナーを追加
btn.addEventListener('click', () => {
    // クリックされたら2秒後にテキストを変更
    setTimeout(() => {
        text.textContent = 'ボタンをクリックしました';
    }, 2000);
});
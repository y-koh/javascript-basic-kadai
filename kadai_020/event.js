
// ボタン要素を取得
const btn = document.getElementById('btn');

// テキスト要素を取得
const text = document.getElementById('text');

// ボタンにクリックイベントリスナーを追加
btn.addEventListener('click', () => {
    // クリックされたらテキストを変更
    text.textContent = 'ボタンがクリックされました！';
});
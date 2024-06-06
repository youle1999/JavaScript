// メッセージを送信する関数
function sendMessage() {
  // ユーザーの入力を取得
  let input = document.getElementById("user-input").value;
  // 入力が空だった場合は何もしない
  if (input.trim() === "") return;

  // チャットボックスを取得
  let chatBox = document.getElementById("chat-box");

  // ユーザーのメッセージを作成し、チャットボックスに追加
  let userMessage = document.createElement("div");
  userMessage.className = "message";
  userMessage.textContent = "あなた: " + input;
  chatBox.appendChild(userMessage);

  // チャットボットからの応答を生成
  let botMessage = document.createElement("div");
  botMessage.className = "message";
  botMessage.textContent = "ボット: " + getBotResponse(input);
  chatBox.appendChild(botMessage);

  // 入力フィールドをクリア
  document.getElementById("user-input").value = "";
  // チャットボックスをスクロールして最新のメッセージが見えるようにする
  // scrollTopが0なら1番上
  chatBox.scrollTop = chatBox.scrollHeight;
}

// ユーザーの入力に基づいてボットの応答を決定する関数
function getBotResponse(input) {
  if (input.includes("こんにちは")) {
      return "こんにちは！何か質問はありますか？";
  } else if (input.includes("ありがとう")) {
      return "どういたしまして！他に質問はありますか？";
  } else {
      // 一致するキーワードがない場合は、分からないと答える
      return "よくわかりません。他のキーワードを試してみてください。";
  }
}

// エンターキーでメッセージを送信する関数
function handleKeyPress(event) {
  if (event.key === "Enter") {
    sendMessage();
  }
}

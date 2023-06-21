npm install ws

const WebSocket = require('ws');

// 웹소켓 서버 생성
const wss = new WebSocket.Server({ port: 8080 });

// 연결된 클라이언트들을 저장할 배열
const clients = [];

// 새로운 클라이언트 연결 시 호출되는 이벤트 핸들러
wss.on('connection', (ws) => {
  console.log('클라이언트가 연결되었습니다.');

  // 새로운 클라이언트를 배열에 추가
  clients.push(ws);

  // 클라이언트로부터 메시지를 수신할 때 호출되는 이벤트 핸들러
  ws.on('message', (message) => {
    console.log(`클라이언트로부터 메시지 수신: ${message}`);

    // 연결된 모든 클라이언트에게 메시지 전송
    clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });

  // 클라이언트와의 연결이 끊어졌을 때 호출되는 이벤트 핸들러
  ws.on('close', () => {
    console.log('클라이언트와의 연결이 끊어졌습니다.');
    
    // 배열에서 해당 클라이언트 제거
    clients.splice(clients.indexOf(ws), 1);
  });
});


<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>채팅</title>
</head>
<body>
  <input type="text" id="message-input">
  <button id="send-button">보내기</button>
  <ul id="messages"></ul>

  <script>
    const socket = new WebSocket('ws://localhost:8080');

    socket.addEventListener('open', (event) => {
      console.log('서버에 연결되었습니다.');
    });

    socket.addEventListener('message', (event) => {
      console.log(`서버로부터 메시지 수신: ${event.data}`);

      const messages = document.getElementById('messages');
      const li = document.createElement('li');
      li.textContent = event.data;
      messages.appendChild(li);
    });

    const sendButton = document.getElementById('send-button');
    sendButton.addEventListener('click', (event) => {
      const messageInput = document.getElementById('message-input');
      const message = messageInput.value;
      socket.send(message);
      messageInput.value = '';
    });
  </script>
</body>
</html>

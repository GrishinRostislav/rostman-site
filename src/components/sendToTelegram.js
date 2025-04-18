// src/utils/sendToTelegram.js
const TELEGRAM_BOT_TOKEN = '7726126506:AAGeU4FxG4qGZRcvznCu6Zh_iGvmBdAJrN4';
const CHAT_ID = '449007126'; // получим в следующем шаге

export async function sendToTelegram(message) {
  const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

  await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text: message,
    }),
  });
}

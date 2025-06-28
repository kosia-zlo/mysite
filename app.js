// Пример контента для каждой страницы
const pages = {
  "/": `
    <h1>Privado</h1>
    <p>Быстро. Безопасно. Анонимно.</p>
    <p><a href="/download" data-link>Попробовать через Telegram</a></p>
  `,
  "/features": `
    <h2>Почему выбирают Privado?</h2>
    <ul>
      <li>Шифрование данных</li>
      <li>Поддержка мобильных устройств</li>
      <li>Настройка для роутера</li>
    </ul>
  `,
  "/pricing": `
    <h2>Тарифные планы</h2>
    <h3>Начальный — 99 ₽ / месяц</h3>
    <ul>
      <li>1 страна</li>
      <li>Ограниченная скорость</li>
      <li>Поддержка мобильных устройств</li>
    </ul>
    <h3>Стандарт — 299 ₽ / месяц</h3>
    <ul>
      <li>5 стран</li>
      <li>Высокая скорость</li>
      <li>Настройка для роутера</li>
    </ul>
    <h3>Профессиональный — 499 ₽ / месяц</h3>
    <ul>
      <li>Все страны</li>
      <li>Безлимитная скорость</li>
      <li>Персональная поддержка</li>
    </ul>
  `,
  "/download": `
    <h2>Подключитесь к Privado</h2>
    <p>Privado доступен на всех платформах: Windows, macOS, Android, iOS</p>
    <h3>Подключиться через Telegram</h3>
    <img src="https://quickchart.io/qr?text=https://t.me/ghostvpn_bot&size=200" alt="QR-код для Telegram">
    <p><a href=" https://t.me/ghostvpn_bot " target="_blank">👉 Перейти к боту</a></p>
  `
};

// Функция отрисовки текущей страницы
function navigate() {
  const path = window.location.pathname || "/";
  const pageContent = pages[path] || "<h2>Страница не найдена</h2>";
  document.getElementById("app").innerHTML = pageContent;
}

// Обработка кликов по ссылкам
document.addEventListener("click", (e) => {
  if (e.target.matches("[data-link]")) {
    e.preventDefault();
    const href = new URL(e.target.href).pathname;
    window.history.pushState(null, "", href);
    navigate();
  }
});

// Обработка кнопок "назад/вперёд"
window.addEventListener("popstate", navigate);

// Инициальная загрузка
navigate();

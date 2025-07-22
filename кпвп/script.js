const episodes = [
  { number: 1, title: "Пробуждение воды" },
  { number: 2, title: "Сила водной стихии" },
  { number: 3, title: "Водяная атака" },
  { number: 4, title: "Битва в тумане" },
  { number: 5, title: "Глубины океана" }
];

function loadEpisodeList() {
  const list = document.getElementById("episodes");
  episodes.forEach(ep => {
    const li = document.createElement("li");
    li.textContent = `Эпизод ${ep.number}: ${ep.title}`;
    li.onclick = () => goToEpisode(ep.number);
    list.appendChild(li);
  });
}

function goToEpisode(number) {
  // В реальном проекте здесь была бы навигация
  alert(`Перейти к эпизоду ${number} (например: episode${number}.html)`);
}

window.onload = loadEpisodeList;

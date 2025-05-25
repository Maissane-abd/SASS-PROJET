const toggle = document.getElementById("darkToggle");
const questions = document.querySelectorAll('.faq__question');
const modal = document.getElementById('anime-modal');
const modalContent = document.querySelector('.modal__content');


toggle.addEventListener("click", () => {
  document.documentElement.classList.toggle("light");

  const isDark = document.documentElement.classList.contains("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

window.addEventListener("DOMContentLoaded", () => {
  const theme = localStorage.getItem("theme");
  if (theme === "dark") {
    document.documentElement.classList.add("dark");
  }
});

questions.forEach((btn) => {
  btn.addEventListener('click', () => {
    const answer = btn.nextElementSibling;
    const icon = btn.querySelector('.faq__icon');

    document.querySelectorAll('.faq__answer').forEach((el) => {
      if (el !== answer) el.classList.remove('active');
    });

    document.querySelectorAll('.faq__icon').forEach((i) => {
      if (i !== icon) i.classList.remove('active-icon');
    });

    answer.classList.toggle('active');
    icon.classList.toggle('active-icon');
  });
});

document.querySelectorAll('.popular__card').forEach(card => {
  const button = card.querySelector('.popular__image');
  button.addEventListener('click', (e) => {
    e.preventDefault();
    const title = card.querySelector('.popular__name').innerText;
    
    const fakeSummaries = {
      "Dragon Ball": "Goku, un jeune garçon doté d'une force surhumaine, part à l'aventure.",
      "One Piece": "Luffy rêve de devenir le Roi des Pirates et cherche le trésor One Piece.",
      "The Unaware": "Un thriller psychologique dans un monde dystopique.",
      "Fire Force": "Des pompiers aux pouvoirs spéciaux luttent contre des combustions humaines.",
      "The Apothecary Diaries": "Une servante rusée utilise son talent d'herboriste pour résoudre des mystères."
    };

    const fakeRatings = {
      "Dragon Ball": "⭐ 8.4/10",
      "One Piece": "⭐ 9.1/10",
      "The Unaware": "⭐ 7.6/10",
      "Fire Force": "⭐ 8.0/10",
      "The Apothecary Diaries": "⭐ 8.9/10"
    };

    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-summary').innerText = fakeSummaries[title] || "Résumé indisponible.";
    document.getElementById('modal-rating').innerText = fakeRatings[title] || "";

    document.getElementById('anime-modal').style.display = 'block';
  });
});

// Fermer en cliquant sur le bouton ✖
document.querySelector('.modal__close').addEventListener('click', () => {
  modal.style.display = 'none';
});

// Fermer en cliquant en dehors du contenu
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

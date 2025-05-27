// Récupère le bouton de bascule du mode clair/sombre
const toggle = document.getElementById("darkToggle");

// Récupère toutes les questions de la FAQ
const questions = document.querySelectorAll('.faq__question');

// Récupère la modale et son contenu
const modal = document.getElementById('anime-modal');
const modalContent = document.querySelector('.modal__content');

// Événement au clic sur le bouton de thème (mode clair/sombre)
toggle.addEventListener("click", () => {
  // Ajoute ou enlève la classe 'light' sur le document
  document.documentElement.classList.toggle("light");
  const isDark = document.documentElement.classList.contains("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

// Ajoute un événement à chaque question de la FAQ
questions.forEach((btn) => {
  btn.addEventListener('click', () => {
    const answer = btn.nextElementSibling;         // Réponse associée
    const icon = btn.querySelector('.faq__icon');  // Icône dans la question

    // Ferme toutes les autres réponses actives
    document.querySelectorAll('.faq__answer').forEach((el) => {
      if (el !== answer) el.classList.remove('active');
    });

    // Désactive toutes les autres icônes actives
    document.querySelectorAll('.faq__icon').forEach((i) => {
      if (i !== icon) i.classList.remove('active-icon');
    });

    // Active/désactive la réponse et l'icône de la question cliquée
    answer.classList.toggle('active');
    icon.classList.toggle('active-icon');
  });
});

// Pour chaque carte d'anime
document.querySelectorAll('.list__card').forEach(card => {
  const button = card.querySelector('.list__image');
  button.addEventListener('click', (e) => {
    e.preventDefault();
    // Récupère le titre de l'anime
    const title = card.querySelector('.list__name').innerText;
    
    // Résumés fictifs d'animes
    const fakeSummaries = {
      "Dragon Ball": "Goku, un jeune garçon doté d'une force surhumaine, part à l'aventure.",
      "One Piece": "Luffy rêve de devenir le Roi des Pirates et cherche le trésor One Piece.",
      "The Unaware": "Un thriller psychologique dans un monde dystopique.",
      "Fire Force": "Des pompiers aux pouvoirs spéciaux luttent contre des combustions humaines.",
      "The Apothecary Diaries": "Une servante rusée utilise son talent d'herboriste pour résoudre des mystères."
    };

    // Notes fictives
    const fakeRatings = {
      "Dragon Ball": "⭐ 8.4/10",
      "One Piece": "⭐ 9.1/10",
      "The Unaware": "⭐ 7.6/10",
      "Fire Force": "⭐ 8.0/10",
      "The Apothecary Diaries": "⭐ 8.9/10"
    };

    // Injecte les infos dans la modale
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-summary').innerText = fakeSummaries[title] || "Résumé indisponible.";
    document.getElementById('modal-rating').innerText = fakeRatings[title] || "";

    // Affiche la modale
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

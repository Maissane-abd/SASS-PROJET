const toggle = document.getElementById("darkToggle");
toggle.addEventListener("click", () => {
  document.documentElement.classList.toggle("light");
  // Enregistre le choix
  const isDark = document.documentElement.classList.contains("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

// Au chargement de la page, applique le thème sauvegardé
window.addEventListener("DOMContentLoaded", () => {
  const theme = localStorage.getItem("theme");
  if (theme === "dark") {
    document.documentElement.classList.add("dark");
  }
});

const toggle = document.getElementById("darkToggle");
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

const questions = document.querySelectorAll('.faq__question');

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



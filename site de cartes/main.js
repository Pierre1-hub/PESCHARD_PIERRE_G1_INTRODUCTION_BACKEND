const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
let changeCouleur = document.getElementById("change_couleur"); // cela cherche le premier élément avec l'id change_couleur

changeCouleur.addEventListener("click", function () {
  // ça lance la fonction quand on appuie dessus

  let elements = [
    document.getElementById("header"),
    document.getElementById("title"),
    document.getElementById("title2"),
    document.getElementById("title3"),
    document.getElementById("fond"),
    document.getElementById("text"), // on récupère tout les élément qui doit changer dans un seul tableau
    document.getElementById("text2"),
    document.getElementById("text3"),
    document.getElementById("change_couleur"),
    document.getElementById("section"),
    document.getElementById("footer"),
  ];

  elements.forEach(function (color) {
    color.classList.toggle("mode-sombre"); // on applique la class mode-sombre à chaque élément
  });
});
let menuButton = document.getElementById("menu");
let menuPanel = document.getElementById("menu-panel");

menuButton.addEventListener("click", () => {
  menuPanel.classList.add("visible"); // On ouvre

  setTimeout(() => {
    menuPanel.classList.remove("visible"); // On ferme après 4s
  }, 4000);
});

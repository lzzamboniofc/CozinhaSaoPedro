const menuData = {
  almoco: [
    {
      name: "Feijoada da Fafá",
      desc: "Receita da casa preparada com a identidade da Fafá e acompanhamentos selecionados.",
      tag: "Sábados",
    },
    {
      name: "Spaghetti à Carbonara",
      desc: "Um clássico italiano preparado com a identidade da nossa cozinha.",
      tag: "Massa",
    },
    {
      name: "Fettuccine ao Mare",
      desc: "Massa e sabores do mar em uma combinação delicada e marcante.",
      tag: "Mar",
    },
    {
      name: "Sugestão do Chef",
      desc: "Uma criação que muda conforme a estação e os melhores ingredientes do dia.",
      tag: "Do dia",
    },
  ],
  entradas: [
    {
      name: "Entradas da estação",
      desc: "Ingredientes frescos em pequenas criações para abrir o apetite.",
      tag: "Compartilhar",
    },
    {
      name: "Petiscos da cozinha",
      desc: "Sabores brasileiros revisitados para dividir à mesa.",
      tag: "Da casa",
    },
    {
      name: "Opção vegetariana",
      desc: "Vegetais, texturas e temperos tratados como protagonistas.",
      tag: "Vegetariano",
    },
    {
      name: "Seleção especial",
      desc: "Consulte a equipe sobre as sugestões disponíveis no dia.",
      tag: "Do dia",
    },
  ],
  happy: [
    {
      name: "Drinks autorais",
      desc: "Misturas da casa, clássicos e criações para acompanhar o pôr do sol.",
      tag: "Bar",
    },
    {
      name: "Taças & garrafas",
      desc: "Uma seleção de vinhos pensada para harmonizar com o menu.",
      tag: "Vinhos",
    },
    {
      name: "Petiscos para dividir",
      desc: "Porções e pequenas receitas para prolongar a conversa.",
      tag: "Compartilhar",
    },
    {
      name: "Noites especiais",
      desc: "Música e menus especiais em datas selecionadas.",
      tag: "Programação",
    },
  ],
  doces: [
    {
      name: "Tortinha de maçã",
      desc: "Sobremesa acolhedora servida com contraste de temperatura e textura.",
      tag: "Clássico",
    },
    {
      name: "Chocolate",
      desc: "Camadas de intensidade, cremosidade e crocância.",
      tag: "Sobremesa",
    },
    {
      name: "Fruta da estação",
      desc: "Leve, fresca e escolhida conforme a melhor oferta do dia.",
      tag: "Fresco",
    },
    {
      name: "Sugestão da casa",
      desc: "Pergunte à equipe pela sobremesa especial disponível.",
      tag: "Do dia",
    },
  ],
};
const menuItems = document.querySelector("#menuItems");
function renderMenu(category) {
  menuItems.innerHTML = menuData[category]
    .map(
      (item) =>
        `<div class="col-md-6"><article class="menu-item"><span class="category">${item.tag}</span><h3>${item.name}</h3><p>${item.desc}</p></article></div>`,
    )
    .join("");
}
document.querySelectorAll(".menu-tab").forEach((tab) =>
  tab.addEventListener("click", () => {
    document
      .querySelectorAll(".menu-tab")
      .forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
    renderMenu(tab.dataset.category);
  }),
);
renderMenu("almoco");
const navbar = document.querySelector(".navbar");
addEventListener(
  "scroll",
  () => navbar.classList.toggle("scrolled", scrollY > 45),
  { passive: true },
);
document.querySelectorAll(".navbar .nav-link").forEach((link) =>
  link.addEventListener("click", () => {
    const open = document.querySelector(".navbar-collapse.show");
    if (open) bootstrap.Collapse.getOrCreateInstance(open).hide();
  }),
);
const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) =>
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      }),
    { threshold: 0.12 },
  );
  revealItems.forEach((el) => observer.observe(el));
} else {
  revealItems.forEach((el) => el.classList.add("visible"));
}
const track = document.querySelector("#galleryTrack");
document
  .querySelector("#galleryNext")
  .addEventListener("click", () =>
    track.scrollBy({ left: track.clientWidth * 0.7, behavior: "smooth" }),
  );
document
  .querySelector("#galleryPrev")
  .addEventListener("click", () =>
    track.scrollBy({ left: -track.clientWidth * 0.7, behavior: "smooth" }),
  );
document.querySelector("#currentYear").textContent = new Date().getFullYear();

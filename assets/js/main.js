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
const menuTabs = [...document.querySelectorAll(".menu-tab")];

function activateMenuTab(tab) {
  menuTabs.forEach((item) => {
    const isActive = item === tab;
    item.classList.toggle("active", isActive);
    item.setAttribute("aria-selected", String(isActive));
    item.tabIndex = isActive ? 0 : -1;
  });
  menuItems.setAttribute("aria-labelledby", tab.id);
  renderMenu(tab.dataset.category);
}

menuTabs.forEach((tab, index) => {
  tab.addEventListener("click", () => activateMenuTab(tab));
  tab.addEventListener("keydown", (event) => {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    const nextIndex = event.key === "Home"
      ? 0
      : event.key === "End"
        ? menuTabs.length - 1
        : (index + (event.key === "ArrowRight" ? 1 : -1) + menuTabs.length) % menuTabs.length;
    menuTabs[nextIndex].focus();
    activateMenuTab(menuTabs[nextIndex]);
  });
});
renderMenu("almoco");
const navbar = document.querySelector(".navbar");
addEventListener(
  "scroll",
  () => navbar.classList.toggle("scrolled", scrollY > 45),
  { passive: true },
);
const navLinks = [...document.querySelectorAll(".navbar .nav-link[href^='#']")];
navLinks.forEach((link) =>
  link.addEventListener("click", () => {
    const open = document.querySelector(".navbar-collapse.show");
    if (open && window.bootstrap) window.bootstrap.Collapse.getOrCreateInstance(open).hide();
  }),
);

const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

if ("IntersectionObserver" in window) {
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      navLinks.forEach((link) => {
        const active = link.getAttribute("href") === `#${visible.target.id}`;
        link.classList.toggle("active", active);
        if (active) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
    },
    { rootMargin: "-30% 0px -55%", threshold: [0, 0.2, 0.5] },
  );
  sections.forEach((section) => sectionObserver.observe(section));
}
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
const galleryItems = [...track.querySelectorAll("figure")];

function galleryGutter() {
  return Number.parseFloat(getComputedStyle(track).scrollPaddingInlineStart) || 0;
}

function currentGalleryIndex() {
  const target = track.scrollLeft + galleryGutter();
  return galleryItems.reduce((closest, item, index) =>
    Math.abs(item.offsetLeft - target) < Math.abs(galleryItems[closest].offsetLeft - target)
      ? index
      : closest, 0);
}

function goToGalleryItem(direction) {
  const nextIndex = Math.min(
    galleryItems.length - 1,
    Math.max(0, currentGalleryIndex() + direction),
  );
  track.scrollTo({
    left: galleryItems[nextIndex].offsetLeft - galleryGutter(),
    behavior: "smooth",
  });
}

document.querySelector("#galleryNext").addEventListener("click", () => goToGalleryItem(1));
document.querySelector("#galleryPrev").addEventListener("click", () => goToGalleryItem(-1));
document.querySelector("#currentYear").textContent = new Date().getFullYear();

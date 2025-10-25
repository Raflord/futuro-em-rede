// implementacao de SPA e navegacao basico
const route = (event) => {
  event.preventDefault();
  const href = event.currentTarget.href;
  window.history.pushState({}, "", href);
  handleLocation();
};

// templates a serem apresentados em cada rota
const routes = {
  "/": "./../pages/templates/home.html",
  "/projetos": "./../pages/templates/projetos.html",
  "/cadastro": "./../pages/templates/cadastro.html",
  "/contato": "./../pages/templates/home.html",
  "/politica": "./../pages/templates/politica.html",
};

const handleLocation = async () => {
  const path = window.location.pathname;
  const route = routes[path];
  const html = await fetch(route).then((data) => data.text());
  document.getElementById("app").innerHTML = html;
  window.scrollTo(0, 0);
  if (path == "/cadastro") {
    Validation.init();
  }
  if (path == "/contato") {
    window.scrollTo(0, 99999);
  }
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();

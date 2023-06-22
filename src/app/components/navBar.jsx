export default function NavBar() {
  return (
    <>
      <nav id="nav-bar" class="links w-full">
        <a className="nav-imagem">
          <img id="logo" alt="logo da pizzaria" src="/logoPizzaria.png" />
        </a>
        <a className="links nav-cardapio">
          <i className="fa-solid fa-calendar-minus"></i>Cardápio
        </a>
        <a className="links nav-monte-sua-pizza">
          <i className="fa-solid fa-pizza-slice"></i>Monte sua pizza
        </a>
        <a className="links nav-login">
          <i className="fa-solid fa-user"></i>Cadastro
        </a>
      </nav>
    </>
  );
}

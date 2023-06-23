/* import {Link} from "next/link"

export default function NavBar() {
  return (
    <>
      <nav id="nav-bar" class="links w-full">
        <Link className="nav-imagem" src="@/app/">
          <img id="logo" alt="logo da pizzaria" src="/logoPizzaria.png" />
        </Link>
        <Link className="links nav-cardapio" src="@/app/">
          <i className="fa-solid fa-calendar-minus"></i>Cardápio
        </Link>
        <a className="links nav-monte-sua-pizza" src="@/app/monte-sua-pizza">
          <i className="fa-solid fa-pizza-slice"></i>Monte sua pizza
        </a>
        <Link className="links nav-login" src="@/app/cadastro">
          <i className="fa-solid fa-user"></i>Cadastro
        </Link>
      </nav>
    </>
  );
} */

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

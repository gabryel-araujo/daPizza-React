/* 
import {Link} from "next/link"

export default function NavBar() {
  return (
    <>
      <nav id="nav-bar" class="links w-full">
        <Link className="nav-imagem" src="@/app/">
          <img id="logo" alt="logo da pizzaria" src="/logoPizzaria.png" />
        </Link>
        <Link className="links nav-cardapio" src="@/app/">
          <FontAwesomeIcon icon={faCalendarMinus} /> Cardápio
        </Link>
        <Link className="links nav-monte-sua-pizza" src="@/app/monte-sua-pizza">
          <FontAwesomeIcon icon={faPizzaSlice} /> Monte sua pizza
        </Link>
        <Link className="links nav-login" src="@/app/cadastro">
          <FontAwesomeIcon icon={faUser} /> Cadastro
        </Link>
      </nav>
    </>
  );
} */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarMinus, faPizzaSlice, faUser } from '@fortawesome/free-solid-svg-icons';

export default function NavBar() {
  return (
    <>
      <nav id="nav-bar" class="links w-full">
        <a className="nav-imagem">
          <img id="logo" alt="logo da pizzaria" src="/logoPizzaria.png" />
        </a>
        <a className="links nav-cardapio">
          <FontAwesomeIcon icon={faCalendarMinus} /> Cardápio
        </a>
        <a className="links nav-monte-sua-pizza">
          <FontAwesomeIcon icon={faPizzaSlice} /> Monte sua pizza
        </a>
        <a className="links nav-login">
          <FontAwesomeIcon icon={faUser} /> Cadastro
        </a>
      </nav>
    </>
  );
}

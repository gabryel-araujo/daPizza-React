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
          <i><FontAwesomeIcon icon={faCalendarMinus} /> Cardápio</i>
        </Link>
        <Link className="links nav-monte-sua-pizza" src="@/app/monte-sua-pizza">
          <i><FontAwesomeIcon icon={faPizzaSlice} /> Monte sua pizza</i>
        </Link>
        <Link className="links nav-login" src="@/app/cadastro">
          <i><FontAwesomeIcon icon={faUser} /> Cadastro</i>
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
          <i><FontAwesomeIcon icon={faCalendarMinus} /> Cardápio</i>
        </a>
        <a className="links nav-monte-sua-pizza">
          <i><FontAwesomeIcon icon={faPizzaSlice} /> Monte sua pizza</i>
        </a>
        <a className="links nav-login">
          <i><FontAwesomeIcon icon={faUser} /> Cadastro</i>
        </a>
      </nav>
    </>
  );
}

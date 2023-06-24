import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarMinus, faPizzaSlice, faUser } from '@fortawesome/free-solid-svg-icons';

export default function NavBar() {
  return (
    <nav id="nav-bar" className="links w-full">
      <Link legacyBehavior href="/">
        <a className="nav-imagem">
          <img id="logo" alt="logo da pizzaria" src="/logoPizzaria.png" />
        </a>
      </Link>
      <Link legacyBehavior href="/">
        <a className="links nav-cardapio">
          <i><FontAwesomeIcon icon={faCalendarMinus} /> Cardápio</i>
        </a>
      </Link>
      <Link legacyBehavior href="/monte-sua-pizza">
        <a className="links nav-monte-sua-pizza">
          <i><FontAwesomeIcon icon={faPizzaSlice} /> Monte sua pizza</i>
        </a>
      </Link>
      <Link legacyBehavior href="/cadastro">
        <a className="links nav-login">
          <i><FontAwesomeIcon icon={faUser} /> Cadastro</i>
        </a>
      </Link>
    </nav>
  );
}


/* import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
 */
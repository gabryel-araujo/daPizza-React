// import Image from "next/image";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { pizza_premium, pizza_tradicional, pizza_doce } from "./pizzas";

const Premium = pizza_premium.map((pizza, index) => {
  return (
    <div key={index}>
      <div className="pizza flex justify-center items-center flex-col">
        <img
          id="${pizza.id}"
          className="img-pizzas"
          src={pizza.image}
          alt={pizza.name}
        ></img>
        <div className="descricao-sabor">
          <h3>{pizza.name}</h3>
          <p className="descricao-pizza">{pizza.description}</p>
          <p>
            <i>Massa Premium</i>
          </p>
          <p>Pizza grande - 30cm</p>
          <button className="add-carrinho">
            Adicionar ao carrinho
            <i className="fa fa-solid fa-cart-shopping"></i>
          </button>
        </div>
      </div>
    </div>
  );
});

const Tradicionais = pizza_tradicional.map((pizza, index) => {
  return (
    <div key={index}>
      <div className="pizza flex justify-center items-center flex-col">
        <img
          id="${pizza.id}"
          className="img-pizzas"
          src={pizza.image}
          alt={pizza.name}
        ></img>
        <div className="descricao-sabor">
          <h3>{pizza.name}</h3>
          <p className="descricao-pizza">{pizza.description}</p>
          <p>
            <i>Massa Tradicional</i>
          </p>
          <p>Pizza grande - 30cm</p>
          <button className="add-carrinho">
            Adicionar ao carrinho
            <i className="fa fa-solid fa-cart-shopping"></i>
          </button>
        </div>
      </div>
    </div>
  );
});

const Doces = pizza_doce.map((pizza, index) => {
  return (
    <div key={index}>
      <div className="pizza flex justify-center items-center flex-col">
        <img
          id="${pizza.id}"
          className="img-pizzas"
          src={pizza.image}
          alt={pizza.name}
        ></img>
        <div className="descricao-sabor">
          <h3>{pizza.name}</h3>
          <p className="descricao-pizza">{pizza.description}</p>
          <p>
            <i>Massa Tradicional</i>
          </p>
          <p>Pizza grande - 30cm</p>
          <button className="add-carrinho">
            Adicionar ao carrinho
            <i className="fa fa-solid fa-cart-shopping"></i>
          </button>
        </div>
      </div>
    </div>
  );
});

export default function Home() {
  return (
    <>
      <NavBar />
      <div id="apresentacao">
        <div id="firstScreen" className="firstScreen alinhamento">
          <img src="/logoPizzaria.png" id="logo-central" />
        </div>
      </div>
      <h1 className="text-slate-300 titulos">Premium</h1>
      <div id="premium" className="grid grid-cols-3 gap-56">
        {Premium}
      </div>
      <h1 className="text-slate-300 titulos">Tradicionais</h1>
      <div id="tradicional" className="grid grid-cols-3 gap-56">
        {Tradicionais}
      </div>
      <h1 className="text-slate-300 titulos">Doces</h1>
      <div id="doce" className="grid grid-cols-3 gap-56">
        {Doces}
      </div>
      <Footer />
    </>
  );
}

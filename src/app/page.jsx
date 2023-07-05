// import Image from "next/image";
"use client";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { useRef } from "react";
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
          <h3 className="lorem">{pizza.name}</h3>
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
          <h3 className="lorem">{pizza.name}</h3>
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
          <h3 className="lorem">{pizza.name}</h3>
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
  const premiumRef = useRef(null);
  const tradicionalRef = useRef(null);
  const doceRef = useRef(null);

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
      <div className="alinhamento">
        <h1 className="titulos" id="about-us">
          Quem somos nós?
        </h1>
        <p className="lorem" id="descricao-pizzaria">
          Há mais de 5 anos no mercado, nos tornamos referência quando o assunto
          <br />
          é qualidade, preço acessível e acima de tudo confiança. Nosso time de
          <br />
          profissionais são treinados e capacitados para lhe oferecer a melhor
          <br />
          experiência que você já teve em um atendimento. Venha nos conhecer!
        </p>
      </div>
      <div id="about">
        <img src="/pizza.png" alt="imagem de pizza" id="pizza-1" />
        <div id="div-video" className="alinhamento">
          <h1 id="titulo-apresentacao">Conheça o nosso preparo</h1>
          <iframe
            id="video"
            width={560}
            height={315}
            src="https://www.youtube.com/embed/T3AHBe0I0yc"
            title="YouTube video player"
            frameBorder={0}
            allow="accelerometer; autoplay; 
          clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen=""
          ></iframe>
        </div>
      </div>
      <div className="localizacao-mapa">
        <h2 className="titulos" id="localizacao">
          Nossa Localização
        </h2>
        <iframe
          id="mapa"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63342.6764697195!2d-34.939388268750044!3d-7.135564299999973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ace810852ae4f1%3A0xaf5445223401f2bb!2sIFPB%20-%20Campus%20Jo%C3%A3o%20Pessoa!5e0!3m2!1sen!2sbr!4v1666495722215!5m2!1sen!2sbr"
          width={600}
          height={450}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <Footer />
    </>
  );
}

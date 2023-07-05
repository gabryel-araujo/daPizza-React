"use client";
import { useState, useRef } from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function Home() {
  const [tamanhoPizza, setTamanhoPizza] = useState("");
  const [tipoMassa, setTipoMassa] = useState("");
  const [tipoQueijo, setTipoQueijo] = useState("");
  const [selecionarQuantidade, setSelecionarQuantidade] = useState(0);
  const [recheio1, setRecheio1] = useState(0);
  const [recheio2, setRecheio2] = useState(0);
  const [recheio3, setRecheio3] = useState(0);
  const [tipoBorda, setTipoBorda] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [imagem, setImagem] = useState("");

  const umSaborRef = useRef(null);
  const doisSaboresRef = useRef(null);
  const tresSaboresRef = useRef(null);
  const selectRef = useRef(null);

  const tamanhoPreco = {
    Pequena: 15,
    Média: 20,
    Grande: 25,
    Família: 30,
  };
  const tipoPreco = {
    Tradicional: 5,
    Integral: 7,
    Siciliana: 8,
    Napolitana: 9,
  };
  const queijoPreco = {
    Mussarela: 5,
    Parmessão: 7,
    Provolone: 8,
    Cheddar: 9,
  };
  const recheioPreco = {
    Calabresa: 5,
    Bacon: 7,
    Ovo: 9,
    Manjericão: 12,
  };
  const tipoBordaPreco = {
    Chocolate: 15,
    Catupiry: 17,
    Cheddar: 18,
    "Sem Borda": 0,
  };

  function mostrarSabores() {
    selectRef.current.value == 0
      ? (umSaborRef.current.classList.add("hidden"),
        doisSaboresRef.current.classList.add("hidden"),
        tresSaboresRef.current.classList.add("hidden"))
      : selectRef.current.value == 1
      ? (umSaborRef.current.classList.remove("hidden"),
        doisSaboresRef.current.classList.add("hidden"),
        tresSaboresRef.current.classList.add("hidden"),
        setSelecionarQuantidade(1))
      : selectRef.current.value == 2
      ? (umSaborRef.current.classList.remove("hidden"),
        doisSaboresRef.current.classList.remove("hidden"),
        tresSaboresRef.current.classList.add("hidden"),
        setSelecionarQuantidade(2))
      : selectRef.current.value == 3
      ? (umSaborRef.current.classList.remove("hidden"),
        doisSaboresRef.current.classList.remove("hidden"),
        tresSaboresRef.current.classList.remove("hidden"),
        setSelecionarQuantidade(3))
      : "";
  }

  const prices = () => {
    let texto;
    let img = (
      <img
        className="w-2/5 h-2/5 rounded-lg"
        src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMTlmYWVmZTU0ZDVmYzBlYzI3ZmNjMzU1NzQyOTlhYjEzOTYyZjkxZSZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/3o6Yg24rybQMeZQuxq/giphy.gif"
      />
    );

    const preco1 = tamanhoPreco[tamanhoPizza];
    const preco2 = tipoPreco[tipoMassa];
    const preco3 = queijoPreco[tipoQueijo];
    const preco4 = recheioPreco[recheio1];
    const preco41 = recheioPreco[recheio2];
    const preco42 = recheioPreco[recheio3];
    const preco5 = tipoBordaPreco[tipoBorda];

    if (selecionarQuantidade === 0) {
      alert("Selecione uma opção da quantidade de recheios");
      return;
    }

    if (selecionarQuantidade === 1) {
      const ValorTotal = preco1 + preco2 + preco3 + preco4 + preco5;
      texto = `Tamanho ${tamanhoPizza}, Massa ${tipoMassa}, com queijo ${tipoQueijo}. <br> Recheio: ${recheio1} e borda recheada de ${tipoBorda}.<br> Total: R$${ValorTotal},00`;
    } else if (selecionarQuantidade === 2) {
      const ValorTotal = preco1 + preco2 + preco3 + preco4 + preco41 + preco5;
      texto = `Tamanho ${tamanhoPizza}, Massa ${tipoMassa}, com queijo ${tipoQueijo}. <br> Recheio: ${recheio1} e ${recheio2} com borda recheada de ${tipoBorda}.<br> Total: R$${ValorTotal}`;
    } else if (selecionarQuantidade === 3) {
      const ValorTotal =
        preco1 + preco2 + preco3 + preco4 + preco41 + preco42 + preco5;
      texto = `Tamanho ${tamanhoPizza}, Massa ${tipoMassa}, com queijo ${tipoQueijo}. <br> Recheio: ${recheio1}, ${recheio2} e ${recheio3} com borda recheada de ${tipoBorda}.<br> Total: R$${ValorTotal}`;
    }

    setMensagem(texto);
    setImagem(img);
  };

  return (
    <>
      <NavBar />
      <main className="bodyCadastro flex justify-center items-center">
        <div className="alinhar caixa-de-texto container">
          <div className="div1">
            <h1 className="titulos">Monte Sua Pizza</h1>
            <h2 className="text-2xl">Escolha um tamanho:</h2>
            <form id="formTamanho">
              <select
                name="tamanho"
                id="tamanho"
                className="color"
                onChange={(e) => setTamanhoPizza(e.target.value)}
                value={tamanhoPizza}
              >
                <option value="">Selecione...</option>
                <option value="Pequena">Pequena</option>
                <option value="Média">Média</option>
                <option value="Grande">Grande</option>
                <option value="Família">Família</option>
              </select>
            </form>
            <h2 className="text-2xl">Escolha um tipo de Massa:</h2>
            <form id="my-form2">
              <select
                name="massa"
                id="massa"
                className="color"
                onChange={(e) => {
                  setTipoMassa(e.target.value);
                }}
                value={tipoMassa}
              >
                <option value="">Selecione...</option>
                <option value="Tradicional">Tradicional</option>
                <option value="Integral">Integral</option>
                <option value="Siciliana">Siciliana</option>
                <option value="Napolitana">Napolitana</option>
              </select>
            </form>
            <h2 className="text-2xl">Escolha um tipo de queijo:</h2>
            <form id="my-form3">
              <select
                name="queijo"
                id="queijo"
                className="color"
                onChange={(e) => setTipoQueijo(e.target.value)}
                value={tipoQueijo}
              >
                <option value="">Selecione...</option>
                <option value="Mussarela">Mussarela</option>
                <option value="Parmessão">Parmessão</option>
                <option value="Provolone">Provolone</option>
                <option value="Cheddar">Cheddar</option>
              </select>
            </form>
            <h2 className="text-2xl">
              Escolha se deseja um, dois ou três recheios:
            </h2>
            <form id="my-formn">
              <select
                name="recheio"
                id="recheio"
                className="color"
                onChange={() => {
                  mostrarSabores();
                  console.log(selectRef.current.value);
                }}
                value={selecionarQuantidade}
                ref={selectRef}
              >
                <option value="0">Selecione...</option>
                <option value="1">Um recheio</option>
                <option value="2">Dois recheios</option>
                <option value="3">Três recheios</option>
              </select>
            </form>
            <div id="divSabor1" className="hidden" ref={umSaborRef}>
              <h2 className="text-2xl">Escolha o primeiro recheio:</h2>
              <select
                name="recheio1"
                id="recheio1"
                className="color"
                onChange={(e) => setRecheio1(e.target.value)}
                value={recheio1}
              >
                <option value="">Selecione...</option>
                <option value="Calabresa">Calabresa</option>
                <option value="Bacon">Bacon</option>
                <option value="Ovo">Ovo</option>
                <option value="Manjericão">Manjericão</option>
              </select>
            </div>
            <div id="divSabor2" className="hidden" ref={doisSaboresRef}>
              <h2 className="text-2xl">Escolha o segundo recheio:</h2>
              <select
                name="recheio2"
                id="recheio2"
                className="color"
                onChange={(e) => setRecheio2(e.target.value)}
                value={recheio2}
              >
                <option value="">Selecione...</option>
                <option value="Bacon">Bacon</option>
                <option value="Ovo">Ovo</option>
                <option value="Manjericão">Manjericão</option>
                <option value="Calabresa">Calabresa</option>
              </select>
            </div>
            <div id="divSabor3" className="hidden" ref={tresSaboresRef}>
              <h2 className="text-2xl">Escolha o terceiro recheio:</h2>
              <select
                name="recheio3"
                id="recheio3"
                className="color"
                onChange={(e) => setRecheio3(e.target.value)}
                value={recheio3}
              >
                <option value="">Selecione...</option>
                <option value="Ovo">Ovo</option>
                <option value="Manjericão">Manjericão</option>
                <option value="Calabresa">Calabresa</option>
                <option value="Bacon">Bacon</option>
              </select>
            </div>
            {/* Fim do espaço dos recheios */}
            <h2 className="text-2xl">Escolha uma borda recheada:</h2>
            <form id="my-form5">
              <select
                name="borda"
                id="borda"
                className="color"
                onChange={(e) => setTipoBorda(e.target.value)}
                value={tipoBorda}
              >
                <option value="">Selecione...</option>
                <option value="Chocolate">Chocolate</option>
                <option value="Catupiry">Catupiry</option>
                <option value="Cheddar">Cheddar</option>
                <option value="Sem Borda">Sem Borda</option>
              </select>
            </form>
            <button
              className="inline-block rounded bg-neutral-800 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-50 shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] transition duration-150 ease-in-out hover:bg-neutral-800 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:bg-neutral-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] dark:bg-neutral-900 dark:shadow-[0_4px_9px_-4px_#030202] dark:hover:bg-neutral-900 dark:hover:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)] dark:focus:bg-neutral-900 dark:focus:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)] dark:active:bg-neutral-900 dark:active:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)] text-2xl"
              onClick={prices}
            >
              Exibir preços
            </button>
          </div>
          <div className="div2 flex flex-col justify-center items-center">
            <div
              className="msg text-2xl"
              dangerouslySetInnerHTML={{ __html: mensagem }}
            ></div>
            {imagem}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

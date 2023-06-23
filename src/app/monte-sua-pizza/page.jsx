'use client';
import { useState } from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function Home() {
  const [tamanhoPizza, setTamanhoPizza] = useState("");
  const [tipoMassa, setTipoMassa] = useState("");
  const [tipoQueijo, setTipoQueijo] = useState("");
  const [selecionarQuantidade, setSelecionarQuantidade] = useState(0);
  const [recheio1, setRecheio1] = useState("");
  const [recheio2, setRecheio2] = useState("");
  const [recheio3, setRecheio3] = useState("");
  const [tipoBorda, setTipoBorda] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [imagem, setImagem] = useState("");

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

  const montarPizza = () => {
    if (selecionarQuantidade === 0) {
      alert("Selecione uma opção");
      setRecheio1("");
      setRecheio2("");
      setRecheio3("");
    } else if (selecionarQuantidade === 1) {
      setRecheio2("");
      setRecheio3("");
    } else if (selecionarQuantidade === 2) {
      setRecheio3("");
    }
  };

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
      const ValorTotal = preco1 + preco2 + preco3 + preco4 + preco41 + preco42 + preco5;
      texto = `Tamanho ${tamanhoPizza}, Massa ${tipoMassa}, com queijo ${tipoQueijo}. <br> Recheio: ${recheio1}, ${recheio2} e ${recheio3} com borda recheada de ${tipoBorda}.<br> Total: R$${ValorTotal}`;
    }

    setMensagem(texto);
    setImagem(img);
  };

  return (
    <>
      <NavBar />
      <main className="bodyCadastro">
        <div className="alinhar caixa-de-texto container">
          <div className="div1">
            <h1 className="titulos">Monte Sua Pizza</h1>
            <h2>Escolha um tamanho:</h2>
            <form id="formTamanho">
              <select
                name="tamanho"
                id="tamanho"
                className="color"
                onChange={(e) => setTamanhoPizza(e.target.value)}
                value={tamanhoPizza}
              >
                <option value="Pequena">Pequena</option>
                <option value="Média">Média</option>
                <option value="Grande">Grande</option>
                <option value="Família">Família</option>
              </select>
            </form>
            <h2>Escolha um tipo de Massa:</h2>
            <form id="my-form2">
              <select
                name="massa"
                id="massa"
                className="color"
                onChange={(e) => setTipoMassa(e.target.value)}
                value={tipoMassa}
              >
                <option value="Tradicional">Tradicional</option>
                <option value="Integral">Integral</option>
                <option value="Siciliana">Siciliana</option>
                <option value="Napolitana">Napolitana</option>
              </select>
            </form>
            <h2>Escolha um tipo de queijo:</h2>
            <form id="my-form3">
              <select
                name="queijo"
                id="queijo"
                className="color"
                onChange={(e) => setTipoQueijo(e.target.value)}
                value={tipoQueijo}
              >
                <option value="Mussarela">Mussarela</option>
                <option value="Parmessão">Parmessão</option>
                <option value="Provolone">Provolone</option>
                <option value="Cheddar">Cheddar</option>
              </select>
            </form>
            <h2>Escolha se deseja um, dois ou três recheios:</h2>
            <form id="my-formn">
              <select
                name="recheio"
                id="recheio"
                className="color"
                onChange={(e) => setSelecionarQuantidade(Number(e.target.value))}
                value={selecionarQuantidade}
              >
                <option value={0}>Nenhum recheio</option>
                <option value={1}>Um recheio</option>
                <option value={2}>Dois recheios</option>
                <option value={3}>Três recheios</option>
              </select>
            </form>
            <div id="divSabor1" className={selecionarQuantidade === 1 ? "" : "hidden"}>
              <h2>Escolha o primeiro recheio:</h2>
              <select
                name="recheio1"
                id="recheio1"
                className="color"
                onChange={(e) => setRecheio1(e.target.value)}
                value={recheio1}
              >
                <option value="Calabresa">Calabresa</option>
                <option value="Bacon">Bacon</option>
                <option value="Ovo">Ovo</option>
                <option value="Manjericão">Manjericão</option>
              </select>
            </div>
            <div id="divSabor2" className={selecionarQuantidade === 2 ? "" : "hidden"}>
              <h2>Escolha o segundo recheio:</h2>
              <select
                name="recheio2"
                id="recheio2"
                className="color"
                onChange={(e) => setRecheio2(e.target.value)}
                value={recheio2}
              >
                <option value="Bacon">Bacon</option>
                <option value="Ovo">Ovo</option>
                <option value="Manjericão">Manjericão</option>
                <option value="Calabresa">Calabresa</option>
              </select>
            </div>
            <div id="divSabor3" className={selecionarQuantidade === 3 ? "" : "hidden"}>
              <h2>Escolha o terceiro recheio:</h2>
              <select
                name="recheio3"
                id="recheio3"
                className="color"
                onChange={(e) => setRecheio3(e.target.value)}
                value={recheio3}
              >
                <option value="Ovo">Ovo</option>
                <option value="Manjericão">Manjericão</option>
                <option value="Calabresa">Calabresa</option>
                <option value="Bacon">Bacon</option>
              </select>
            </div>
            {/* Fim do espaço dos recheios */}
            <h2>Escolha uma borda recheada:</h2>
            <form id="my-form5">
              <select
                name="borda"
                id="borda"
                className="color"
                onChange={(e) => setTipoBorda(e.target.value)}
                value={tipoBorda}
              >
                <option value="Chocolate">Chocolate</option>
                <option value="Catupiry">Catupiry</option>
                <option value="Cheddar">Cheddar</option>
                <option value="Sem Borda">Sem Borda</option>
              </select>
            </form>
            <button className="botao" onClick={montarPizza}>
              Montar minha Pizza
            </button>
            <button className="botao" onClick={prices}>
              Exibir preços
            </button>
          </div>
          <div className="div2">
            <div
              className="msg"
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

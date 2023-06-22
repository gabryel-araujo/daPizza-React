import { NavBar } from "../components/navBar";
import { Footer } from "../components/Footer";

import { useState } from "react";
import Swal from "sweetalert2";

export default function Home() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [address, setAddress] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [city, setCity] = useState("");
  const [additional, setAdditional] = useState("");
  const [houseNumber, setHouseNumber] = useState("");
  const [zipCode, setZipCode] = useState("");

  const validateUsername = () => {
    return username.length < 3;
  };

  const validateEmail = () => {
    return email.includes("@") && email.includes(".com");
  };

  const validatePassword = () => {
    return password.length < 6 || password.length === 0;
  };

  const validatePasswordConfirm = () => {
    return passwordConfirm.length < 6 || passwordConfirm.length === 0;
  };

  const getZipcode = async () => {
    const url = `https://viacep.com.br/ws/${zipCode}/json`;
    const response = await fetch(url);
    const data = await response.json();

    setAddress(data.logradouro);
    setNeighborhood(data.bairro);
    setCity(data.localidade);
  };

  const isOnStorage = () => {
    const storedEmail = localStorage.getItem(email);
    return storedEmail !== null;
  };

  const validateUser = () => {
    if (
      username === "" ||
      email === "" ||
      password === "" ||
      passwordConfirm === "" ||
      password !== passwordConfirm ||
      zipCode === "" ||
      password.length < 6
    ) {
      Swal.fire("Error", "A senha deve conter no mínimo 6 caracteres", "error");
      return false;
    }
    return true;
  };

  const registerUser = () => {
    const storageExists = isOnStorage();
    if (validateUser() && !storageExists) {
      localStorage.setItem(
        email,
        JSON.stringify({
          name: username,
          email: email,
          password: password,
          address: address,
          additional: additional,
          number: houseNumber,
          neighborhood: neighborhood,
          city: city,
          zipcode: zipCode,
        })
      );
      Swal.fire("Tudo certo!", "Cadastro realizado com sucesso", "success");
    } else if (username === "") {
      document.getElementById("fullName").focus();
    } else if (email === "") {
      document.getElementById("email").focus();
    } else if (password === "") {
      document.getElementById("password").focus();
    } else if (passwordConfirm === "") {
      document.getElementById("passwordConfirm").focus();
    } else if (zipCode === "") {
      document.getElementById("zipCode").focus();
    }
  };

  return (
    <>
      <NavBar />
      <main>
        <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center bodyCadastro">
          <div className="container max-w-screen-lg mx-auto mt-20">
            <div className="flex justify-center items-center flex-col">
              <h2 className="font-semibold text-gray-600 titulos mb-5 mt-20">
                Faça seu cadastro
              </h2>
              <div className="bg-white rounded-[12px] drop-shadow-xl p-4 px-4 md:p-8 mb-6 wheat">
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-2">
                  <div className="lg:col-span-2">
                    <form onSubmit={registerUser}>
                      <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-4">
                        <div className="md:col-span-5">
                          <label htmlFor="fullName" className="text-2xl">
                            Nome Completo:
                          </label>
                          <input
                            type="text"
                            id="fullName"
                            className="h-14 border mt-1 rounded px-4 w-full bg-zinc-300 text-xl"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                          />
                        </div>
                        <div className="md:col-span-5">
                          <label htmlFor="email" className="text-2xl">
                            Email:
                          </label>
                          <input
                            type="text"
                            id="email"
                            className="h-14 border mt-1 rounded px-4 w-full bg-zinc-300 text-xl"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                        <div className="md:col-span-5">
                          <label htmlFor="password" className="text-2xl">
                            Senha:
                          </label>
                          <input
                            type="password"
                            id="password"
                            className="h-14 border mt-1 rounded px-4 w-full bg-zinc-300 text-xl"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </div>
                        <div className="md:col-span-5">
                          <label htmlFor="passwordConfirm" className="text-2xl">
                            Confirmar Senha:
                          </label>
                          <input
                            type="password"
                            id="passwordConfirm"
                            className="h-14 border mt-1 rounded px-4 w-full bg-zinc-300 text-xl"
                            value={passwordConfirm}
                            onChange={(e) => setPasswordConfirm(e.target.value)}
                          />
                        </div>
                        <div className="md:col-span-5">
                          <label htmlFor="zipCode" className="text-2xl">
                            CEP:
                          </label>
                          <input
                            type="text"
                            id="zipCode"
                            className="h-14 border mt-1 rounded px-4 w-full bg-zinc-300 text-xl"
                            value={zipCode}
                            onChange={(e) => setZipCode(e.target.value)}
                          />
                        </div>
                        <div className="md:col-span-5">
                          <label htmlFor="address" className="text-2xl">
                            Endereço:
                          </label>
                          <input
                            type="text"
                            id="address"
                            className="h-14 border mt-1 rounded px-4 w-full bg-zinc-300 text-xl"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                          />
                        </div>
                        <div className="md:col-span-5">
                          <label htmlFor="additional" className="text-2xl">
                            Complemento:
                          </label>
                          <input
                            type="text"
                            id="additional"
                            className="h-14 border mt-1 rounded px-4 w-full bg-zinc-300 text-xl"
                            value={additional}
                            onChange={(e) => setAdditional(e.target.value)}
                          />
                        </div>
                        <div className="md:col-span-5">
                          <label htmlFor="houseNumber" className="text-2xl">
                            Número:
                          </label>
                          <input
                            type="text"
                            id="houseNumber"
                            className="h-14 border mt-1 rounded px-4 w-full bg-zinc-300 text-xl"
                            value={houseNumber}
                            onChange={(e) => setHouseNumber(e.target.value)}
                          />
                        </div>
                        <div className="md:col-span-5">
                          <label htmlFor="neighborhood" className="text-2xl">
                            Bairro:
                          </label>
                          <input
                            type="text"
                            id="neighborhood"
                            className="h-14 border mt-1 rounded px-4 w-full bg-zinc-300 text-xl"
                            value={neighborhood}
                            onChange={(e) => setNeighborhood(e.target.value)}
                          />
                        </div>
                        <div className="md:col-span-5">
                          <label htmlFor="city" className="text-2xl">
                            Cidade:
                          </label>
                          <input
                            type="text"
                            id="city"
                            className="h-14 border mt-1 rounded px-4 w-full bg-zinc-300 text-xl"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="mt-6">
                        <button
                          type="submit"
                          className="py-3 bg-blue-500 hover:bg-blue-600 focus:ring-blue-400 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-md"
                        >
                          Cadastrar
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

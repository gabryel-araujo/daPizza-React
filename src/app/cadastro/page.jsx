"use client";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

import React, { useState, useRef } from "react";
import Swal from "sweetalert2";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://xdreraabimpjfynehnjv.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhkcmVyYWFiaW1wamZ5bmVobmp2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODgyMzg4MDgsImV4cCI6MjAwMzgxNDgwOH0.7-T77r4Hsi09R9wI_HmicnSGQy7gKDziWm-ETu3Pd-g";
const supabase = createClient(supabaseUrl, supabaseKey);

export default function Home() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [address, setAddress] = useState("");
  const [additional, setAdditional] = useState("");
  const [houseNumber, setHouseNumber] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [city, setCity] = useState("");

  const fullNameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const passwordConfirmRef = useRef(null);
  const zipCodeRef = useRef(null);
  const addressRef = useRef(null);
  const additionalRef = useRef(null);
  const houseNumberRef = useRef(null);
  const neighborhoodRef = useRef(null);
  const cityRef = useRef(null);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  setInterval(() => {
    setFullName(fullNameRef.current.value);
    setEmail(emailRef.current.value);
    setPassword(passwordRef.current.value);
    setPasswordConfirm(passwordConfirmRef.current.value);
    setZipCode(zipCodeRef.current.value);
    setAddress(addressRef.current.value);
    setAdditional(additionalRef.current.value);
    setHouseNumber(houseNumberRef.current.value);
    setNeighborhood(neighborhoodRef.current.value);
    setCity(cityRef.current.value);
  }, 500);

  function clearForm() {
    fullNameRef.current.value = "";
    emailRef.current.value = "";
    passwordRef.current.value = "";
    passwordConfirmRef.current.value = "";
    zipCodeRef.current.value = "";
    addressRef.current.value = "";
    additionalRef.current.value = "";
    houseNumberRef.current.value = "";
    neighborhoodRef.current.value = "";
    cityRef.current.value = "";
  }

  const getZipCode = async (code) => {
    const url = `https://viacep.com.br/ws/${code}/json`;
    const response = await fetch(url);
    const data = await response.json();

    setAddress(data.logradouro);
    setNeighborhood(data.bairro);
    setCity(data.localidade);
  };

  const validateUser = () => {
    if (
      fullName === "" ||
      email === "" ||
      password === "" ||
      passwordConfirm === "" ||
      password !== passwordConfirm ||
      zipCode === "" ||
      password.length < 6 ||
      !emailRegex.test(email)
    ) {
      Swal.fire("Dados inválidos", "Verifique as informações", "error");
      return false;
    }
    registerUser();
    setTimeout(() => {
      clearForm();
    }, 1000);
  };

  const registerUser = async () => {
    const { data, error } = await supabase.from("cliente").insert([
      {
        nome: fullName,
        email: email,
        senha: password,
        confirmaSenha: passwordConfirm,
        cep: zipCode,
        endereço: address,
        complemento: additional,
        numero: houseNumber,
        bairro: neighborhood,
        cidade: city,
      },
    ]);
    Swal.fire("Tudo certo!", "Cadastro realizado com sucesso", "success");
  };

  return (
    <>
      <NavBar />
      <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center bodyCadastro">
        <div className="container max-w-screen-lg mx-auto mt-20 justify-center items-center">
          <div className="flex justify-center items-center flex-col">
            <h2 className="font-semibold text-gray-600 titulos mb-5 mt-20">
              Faça seu cadastro
            </h2>
            <div className="bg-white rounded-[12px] drop-shadow-xl p-4 px-4 md:p-8 mb-6 wheat">
              <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-2">
                <div className="lg:col-span-2">
                  <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-4">
                    <div className="md:col-span-5">
                      <label htmlFor="full_name" className="text-2xl">
                        Nome Completo:
                      </label>
                      <input
                        type="text"
                        name="full_name"
                        id="fullName"
                        className="h-14 border mt-1 rounded px-4 w-full bg-zinc-300 text-xl"
                        ref={fullNameRef}
                      />
                    </div>
                    <div className="md:col-span-5">
                      <label htmlFor="email" className="text-2xl">
                        Email:
                      </label>
                      <input
                        type="text"
                        name="email"
                        id="email"
                        className="h-14 border mt-1 rounded px-4 w-full bg-zinc-300 text-xl"
                        ref={emailRef}
                        placeholder="email@dominio.com"
                      />
                    </div>
                    <div className="md:col-span-3">
                      <label htmlFor="password" className="text-2xl">
                        Senha
                      </label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        className="h-14 border mt-1 rounded px-4 w-full bg-zinc-300 text-xl"
                        ref={passwordRef}
                        placeholder="Insira sua senha"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label htmlFor="passwordConfirm" className="text-2xl">
                        Repita a senha
                      </label>
                      <input
                        type="password"
                        name="passwordConfirm"
                        id="passwordConfirm"
                        className="h-14 border mt-1 rounded px-4 w-full bg-zinc-300 text-xl"
                        ref={passwordConfirmRef}
                        placeholder="Insira sua senha"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label htmlFor="zipcode" className="text-2xl">
                        CEP
                      </label>
                      <input
                        type="text"
                        name="zipcode"
                        id="zipCode"
                        className="transition-all flex items-center h-14 border mt-1 rounded px-4 w-full bg-zinc-300 text-xl"
                        placeholder="50000-000"
                        ref={zipCodeRef}
                        onChange={() => {
                          zipCodeRef.current.value.length === 8
                            ? getZipCode(zipCodeRef.current.value)
                            : null;
                        }}
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label htmlFor="address" className="text-2xl">
                        Endereço:
                      </label>
                      <input
                        type="text"
                        name="address"
                        id="address"
                        className="h-14 border mt-1 rounded px-4 w-full bg-zinc-300 text-xl"
                        ref={addressRef}
                        defaultValue={address}
                        placeholder=""
                      />
                    </div>
                    <div className="md:col-span-1">
                      <label htmlFor="number" className="text-2xl">
                        Numero:
                      </label>
                      <input
                        type="text"
                        name="number"
                        id="number"
                        className="h-14 border mt-1 rounded px-4 w-full bg-zinc-300 text-xl"
                        ref={houseNumberRef}
                        placeholder=""
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label htmlFor="additional" className="text-2xl">
                        Complemento:
                      </label>
                      <input
                        type="text"
                        name="additional"
                        id="additional"
                        className="h-14 border mt-1 rounded px-4 w-full bg-zinc-300 text-xl"
                        ref={additionalRef}
                        placeholder=""
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label htmlFor="additional" className="text-2xl">
                        Bairro:
                      </label>
                      <input
                        type="text"
                        name="neighborhood"
                        id="neighborhood"
                        className="h-14 border mt-1 rounded px-4 w-full bg-zinc-300 text-xl"
                        ref={neighborhoodRef}
                        defaultValue={neighborhood}
                        placeholder=""
                      />
                    </div>
                    <div className="md:col-span-1">
                      <label htmlFor="city" className="text-2xl">
                        Cidade
                      </label>
                      <input
                        type="text"
                        name="city"
                        id="city"
                        className="h-14 border mt-1 rounded px-4 w-full bg-zinc-300 text-xl"
                        ref={cityRef}
                        defaultValue={city}
                        placeholder=""
                      />
                    </div>
                    <div className="md:col-span-5 text-right">
                      <div className="inline-flex items-end">
                        <button
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-2xl"
                          id="btnRegister"
                          onClick={validateUser}
                        >
                          Cadastrar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

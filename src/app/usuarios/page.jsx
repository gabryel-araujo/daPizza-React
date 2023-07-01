"use client";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { createClient } from "@supabase/supabase-js";
import { data } from "autoprefixer";
//importando css local

const supabaseUrl = "https://xdreraabimpjfynehnjv.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhkcmVyYWFiaW1wamZ5bmVobmp2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODgyMzg4MDgsImV4cCI6MjAwMzgxNDgwOH0.7-T77r4Hsi09R9wI_HmicnSGQy7gKDziWm-ETu3Pd-g";
const supabase = createClient(supabaseUrl, supabaseKey);

export default function Home() {
  const [users, setUsers] = useState([]);

  setTimeout(() => {
    getUsers();
  }, 500);

  async function getUsers() {
    const { data, error } = await supabase.from("cliente").select("*");
    setUsers(data);
  }

  const handleRemoveUser = () => {
    Swal.fire({
      title: "Insira o Email que deseja remover:",
      input: "text",
      inputAttributes: {
        autocapitalize: "off",
      },
      showCancelButton: true,
      confirmButtonText: "Remover",
      showLoaderOnConfirm: true,
      allowOutsideClick: () => !Swal.isLoading(),
    }).then(async (result) => {
      if (result.isConfirmed) {
        const { error } = await supabase
          .from("cliente")
          .delete()
          .eq("email", result.value);
      }
    });
  };

  return (
    <>
      <NavBar />
      <div className="container lg:max-w-screen-lg mx-auto mt-48 p-4 gap-3">
        <button id="remove" className="text-2xl" onClick={handleRemoveUser}>
          <i className="fa-solid fa-trash text-xl bg-red-600 hover:bg-red-500 hover:animate-pulse p-4 rounded-md text-white">
            {" "}
            Remover
          </i>
        </button>
        <div className="grid grid-cols-3">
          {users.map((user) => (
            <div
              className="wheat shadow-lg rounded-lg p-4 mb-5 mx-2 my-2"
              key={user.email}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-700">
                  {user.nome}
                </h3>
                <p className="text-md font-semibold text-gray-700">
                  {user.bairro}
                </p>
              </div>
              <div className="mt-4">
                <p className="text-sm text-gray-500">
                  <span className="font-bold">Endereço:</span> {user.endereço}
                </p>
                <p className="text-sm text-gray-500">
                  <span className="font-bold">Complemento:</span>{" "}
                  {user.complemento}
                </p>
                <p className="text-sm text-gray-500">
                  <span className="font-bold">Email:</span> {user.email}
                </p>
                <p className="text-sm text-gray-500">
                  <span className="font-bold">Cep:</span> {user.cep}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

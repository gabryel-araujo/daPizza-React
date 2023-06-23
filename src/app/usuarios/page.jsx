import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const localStorageKeys = Object.keys(localStorage);
    const localStorageArray = localStorageKeys.map((key) =>
      JSON.parse(localStorage.getItem(key))
    );
    setUsers(localStorageArray);
  }, []);

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
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem(result.value);
        const updatedUsers = users.filter((user) => user.email !== result.value);
        setUsers(updatedUsers);
      }
    });
  };

  return (
    <>
      <NavBar />
      <main className="container lg:max-w-screen-lg mx-auto mt-48 p-4 gap-3 h-full">
        <button id="remove" className="text-2xl" onClick={handleRemoveUser}>
          <i className="fa-solid fa-trash text-xl"> Remover</i>
        </button>
        <div className="grid grid-cols-3">
          {users.map((user) => (
            <div className="bg-white shadow-md rounded-lg p-4 mb-5 mx-2 my-2" key={user.email}>
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-700">{user.name}</h3>
                <p className="text-md font-semibold text-gray-700">{user.neighborhood}</p>
              </div>
              <div className="mt-4">
                <p className="text-sm text-gray-500">
                  <span className="font-bold">Endereço:</span> {user.address}
                </p>
                <p className="text-sm text-gray-500">
                  <span className="font-bold">Complemento:</span> {user.additional}
                </p>
                <p className="text-sm text-gray-500">
                  <span className="font-bold">Email:</span> {user.email}
                </p>
                <p className="text-sm text-gray-500">
                  <span className="font-bold">Cep:</span> {user.zipcode}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}


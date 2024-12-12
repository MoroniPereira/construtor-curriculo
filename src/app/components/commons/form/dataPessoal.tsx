import { useState } from "react";
import { Plus, Minus } from 'lucide-react';

export function DataPessoal({dadosUser, toogleDados}: {
  dadosUser: {
    nomeCompleto: string,
    dataNascimento: string,
    endereco: string,
    bairro: string,
    cidade: string,
    estado: string,
    contato: string,
    email: string
  }, 
  toogleDados: any
}) {
  const [showFormData, setShowFormData] = useState(true)

  const handleShowFormData = () => {
    setShowFormData(!showFormData)
  }
  
  return (
    <div className="flex flex-col bg-white p-4 rounded-lg shadow-md gap-3 sm:p-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Dados Pessoais</h2>

        <button 
          type="button"
          onClick={handleShowFormData} 
          className="py-1 px-1 text-white bg-blue-600 rounded-md"
        >
          { showFormData ? <Minus size={24}/> : <Plus size={24}/> }
        </button>
      </div>

      { showFormData && (
        <div className="flex flex-col gap-3">
          <label className="block w-full">
            <span className="block text-sm font-medium text-slate-700 py-2">Nome Completo</span>
            <input
              type="text"
              name="nomeCompleto"
              placeholder="Moroni Damasio Pereira"
              value={dadosUser.nomeCompleto}
              onChange={toogleDados}
              className="p-2 border rounded w-full"
            />
          </label>

          <label className="block w-full">
            <span className="block text-sm font-medium text-slate-700 py-2">Seu e-mail</span>
            <input
              type="email"
              name="email"
              placeholder="moroni@exemplo.com"
              value={dadosUser.email}
              onChange={toogleDados}
              className="p-2 border rounded w-full"
            />
          </label>

          <div className="flex gap-3 w-full flex-wrap sm:flex-nowrap">
            <label className="block w-full">
              <span className="block text-sm font-medium text-slate-700 py-2">Data de nascimento</span>
              <input
                type="date"
                name="dataNascimento"
                value={dadosUser.dataNascimento}
                onChange={toogleDados}
                className="p-2 border rounded w-full"
              />
            </label>

            <label className="block w-full">
              <span className="block text-sm font-medium text-slate-700 py-2">Contato / Whatsapp</span>
              <input
                type="tel"
                name="contato"
                placeholder="(62) 99999-9999"
                value={dadosUser.contato}
                onChange={toogleDados}
                className="p-2 border rounded w-full"
              />
            </label>
          </div>
        </div>
      )}
    </div>
  )
}

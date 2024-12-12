import { useState } from "react";
import { Plus, Minus } from 'lucide-react';

export function Endereco({dadosUser, toogleDados}: {
  dadosUser: {
    endereco: string,
    bairro: string,
    cidade: string,
    estado: string,
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
        <h2 className="text-xl font-bold">Seu endereço</h2>

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
            <span className="block text-sm font-medium text-slate-700 py-2">Endereço</span>
            <input
              type="text"
              name="endereco"
              placeholder="Rua exemplo, 123"
              value={dadosUser.endereco}
              onChange={toogleDados}
              className="p-2 border rounded w-full"
            />
          </label>

          <label className="block w-full">
            <span className="block text-sm font-medium text-slate-700 py-2">Bairro</span>
            <input
              type="text"
              name="bairro"
              placeholder="Cidade Livre"
              value={dadosUser.bairro}
              onChange={toogleDados}
              className="p-2 border rounded w-full"
            />
          </label>

          <div className="flex gap-3 w-full flex-wrap sm:flex-nowrap">
            <label className="block w-full">
              <span className="block text-sm font-medium text-slate-700 py-2">Cidade</span>
              <input
                type="text"
                name="cidade"
                placeholder="Aparecida de Goiânia"
                value={dadosUser.cidade}
                onChange={toogleDados}
                className="p-2 border rounded w-full"
              />
            </label>

            <label className="block w-full">
              <span className="block text-sm font-medium text-slate-700 py-2">Estado</span>
              <input
                type="text"
                name="estado"
                placeholder="GO"
                value={dadosUser.estado}
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

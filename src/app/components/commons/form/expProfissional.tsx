import { useState } from "react";
import { Plus, Minus } from 'lucide-react';
import { typesFormProfissional } from "@/app/types";

export function ExpProfissional({
  handleExpsProfissionais,
  handleRemoveExpProfissional,
  expsProfissionais
}: {
  handleExpsProfissionais: any,
  handleRemoveExpProfissional: any,
  expsProfissionais: typesFormProfissional[]
}) {
  const [showFormData, setShowFormData] = useState(true)

  const [formData, setFormData] = useState({
    empresa: '',
    cargo: '',
    inicio: '',
    termino: '',
    descricao: ''
  });

  const handleShowFormData = () => {
    setShowFormData(!showFormData)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const saveValueAndResetForm = () => {
    handleExpsProfissionais(formData)
    setFormData({
      empresa: '',
      cargo: '',
      inicio: '',
      termino: '',
      descricao: ''
    })
  }

  return (
    <div className="flex flex-col bg-white p-4 rounded-lg shadow-md gap-3 sm:p-6">
      <div className="flex justify-between items-center"> 
        <h2 className="text-xl font-bold">Experiência Profissional</h2>

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
          {expsProfissionais.length > 0 && (
            <div className="flex flex-col gap-3 mt-4">
              {expsProfissionais.map((item: typesFormProfissional, index: any) => (
                <div key={index} className="flex gap-3 w-full justify-between items-center bg-slate-200 p-2 rounded-md">
                  <div>
                    <h3 className="text-lg font-bold font-large text-slate-700">{item.empresa}</h3>
                    <span className="text-sm text-slate-500">{item.cargo}</span>
                  </div>

                  <button type="button" className="bg-red-500 text-white rounded" 
                    onClick={() => handleRemoveExpProfissional(index)}
                  >
                    <Minus size={24} />
                  </button>
                </div>
              ))}
            </div>
          )}

          <label className="block w-full">
            <span className="block text-sm font-medium text-slate-700 py-2">Nome da empresa</span>
            <input
              type="text"
              name="empresa"
              placeholder="Sistemas web - LTDA"
              value={formData.empresa}
              onChange={handleInputChange}
              className="p-2 border rounded w-full"
            />
          </label>

          <label className="block w-full">
            <span className="block text-sm font-medium text-slate-700 py-2">Seu cargo</span>
            <input
              type="text"
              name="cargo"
              placeholder="Desenvolvedor Full Stack"
              value={formData.cargo}
              onChange={handleInputChange}
              className="p-2 border rounded w-full"
            />
          </label>

          <label className="block w-full">
            <span className="block text-sm font-medium text-slate-700 py-2">Descreva suas atribuições</span>
            <textarea
              name="descricao"
              placeholder="Desenvolvimento de sistemas web, manutenção de sistemas legados, etc."
              value={formData.descricao}
              onChange={handleTextAreaChange}
              className="p-2 border rounded h-24 w-full"
            />
          </label>

          <div className="flex gap-3 w-full flex-wrap sm:flex-nowrap">
            <label className="block w-full">
              <span className="block text-sm font-medium text-slate-700 py-2">Data de Início</span>
              <input
                type="text"
                name="inicio"
                placeholder="01/2020"
                value={formData.inicio}
                onChange={handleInputChange}
                className="p-2 border rounded w-full"
              />
            </label>

            <label className="block w-full">
              <span className="block text-sm font-medium text-slate-700 py-2">Data de Saída</span>
              <input
                type="text"
                name="termino"
                placeholder="12/2024 ou atual"
                value={formData.termino}
                onChange={handleInputChange}
                className="p-2 border rounded w-full"
              />
            </label>
          </div>

          <button 
            type="button" 
            className="bg-blue-500 text-white p-2 rounded w-full"
            onClick={() => saveValueAndResetForm()}
          >
            Adicionar
          </button>
        </div>
      )}
    </div>
  )
}
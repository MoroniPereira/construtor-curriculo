import { useState } from "react"
import { Plus, Minus } from 'lucide-react';
import { typesFormAcademico } from "@/app/types";

export function ExpAcademica({
  expsAcademica, handleExpsAcademica, handleRemoveExpAcademica
}: {
  expsAcademica: typesFormAcademico[], handleExpsAcademica: any, handleRemoveExpAcademica: any
}) {
  const [showFormData, setShowFormData] = useState(true)

  const handleShowFormData = () => {
    setShowFormData(!showFormData)
  }

  const [formData, setFormData] = useState({
    curso: '',
    tipoCurso: '',
    instituicao: '',
    inicio: '',
    termino: '',
  });

  const handleFormExpAcademica = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const saveValueAndResetForm = () => {
    handleExpsAcademica(formData)
    setFormData({
      curso: '',
      tipoCurso: '',
      instituicao: '',
      inicio: '',
      termino: '',
    })
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow-md sm:p-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Graduação ou cursos</h2>

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
          {expsAcademica.length > 0 && (
            <div className="flex flex-col gap-3 mt-4">
              {expsAcademica.map((item: typesFormAcademico, index: any) => (
                <div key={index} className="flex gap-3 w-full justify-between items-center bg-slate-200 p-2 rounded-md">
                  <div>
                    <h3 className="text-lg font-bold font-large text-slate-600">{item.instituicao}</h3>
                    <span className="text-sm text-slate-500">{item.curso} - {item.tipoCurso}</span>
                  </div>

                  <button type="button" className="bg-red-500 text-white rounded" 
                    onClick={() => handleRemoveExpAcademica(index)}
                  >
                    <Minus size={24} />
                  </button>
                </div>
              ))}
            </div>
          )}


          <label className="block w-full">
            <span className="block text-sm font-medium text-slate-700 py-2">Instituição</span>
            <input
              type="text"
              name="instituicao"
              placeholder="Universidade Federal de Goiás"
              value={formData.instituicao}
              onChange={handleFormExpAcademica}
              className="p-2 border rounded w-full"
            />
          </label>

          <label className="block w-full">
            <span className="block text-sm font-medium text-slate-700 py-2">Formação - Curso</span>
            <input
              type="text"
              name="curso"
              placeholder="Engenharia de Software"
              value={formData.curso}
              onChange={handleFormExpAcademica}
              className="p-2 border rounded w-full"
            />
          </label>

          <label className="block w-full">
            <span className="block text-sm font-medium text-slate-700 py-2">Tipo da formação</span>
            <input
              type="text"
              name="tipoCurso"
              placeholder="Bacharelado / Tecnologo / Especialização"
              value={formData.tipoCurso}
              onChange={handleFormExpAcademica}
              className="p-2 border rounded w-full"
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
                onChange={handleFormExpAcademica}
                className="p-2 border rounded w-full"
              />
            </label>

            <label className="block w-full">
              <span className="block text-sm font-medium text-slate-700 py-2">Data de Término</span>
              <input
                type="text"
                name="termino"
                placeholder="02/2024"
                value={formData.termino}
                onChange={handleFormExpAcademica}
                className="p-2 border rounded w-full"
              />
            </label>
          </div>

          <button 
            type="button" className="bg-blue-500 text-white p-2 rounded"
            onClick={() => saveValueAndResetForm()}
          >
            Adicionar
          </button>
        </div>
      )}
    </div>
  )
}

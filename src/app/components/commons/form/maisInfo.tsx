import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { typesFormMaisInfo } from "@/app/types";

export function MaisInfo({
  maisInfo,
  handleMaisInfo,
  handleRemoveMaisInfo
}: { 
  maisInfo: typesFormMaisInfo[],
  handleMaisInfo: any,
  handleRemoveMaisInfo: any
}) {
  const [showFormData, setShowFormData] = useState(true)

  const handleShowFormData = () => {
    setShowFormData(!showFormData)
  }

  const [dataFormMiasInfo, setDataFormMiasInfo] = useState({
    titulo: '',
    descricao: ''
  })

  const handleDataFormMiasInfo = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setDataFormMiasInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const saveValueAndResetForm = () => {
    handleMaisInfo(dataFormMiasInfo)
    setDataFormMiasInfo({
      titulo: '',
      descricao: ''
    })
  }

  return (
    <div className="flex flex-col bg-white p-4 rounded-lg shadow-md gap-3 sm:p-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Suas habilidades</h2>

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
          {maisInfo.length > 0 && (
            <div className="flex flex-col gap-3 mt-4">
              {maisInfo.map((item: typesFormMaisInfo, index: any) => (
                <div key={index} className="flex gap-3 w-full justify-between items-center bg-slate-200 p-2 rounded-md">
                  <div className="w-11/12">
                    <h3 className="text-lg font-bold font-large text-slate-600">{item.titulo}</h3>
                    <span className="text-sm text-slate-500 line-clamp-2">{item.descricao}</span>
                  </div>

                  <button type="button" className="bg-red-500 text-white rounded" 
                    onClick={() => handleRemoveMaisInfo(index)}
                  >
                    <Minus size={24} />
                  </button>
                </div>
              ))}
            </div>
          )}

          <label className="block w-full">
            <span className="block text-sm font-medium text-slate-700 py-2">Título</span>
            <input
              type="text"
              name="titulo"
              placeholder="Freelancer"
              value={dataFormMiasInfo.titulo}
              onChange={handleDataFormMiasInfo}
              className="p-2 border rounded w-full"
            />
          </label>

          <label className="block w-full">
            <span className="block text-sm font-medium text-slate-700 py-2">Descrição</span>
            <textarea
              name="descricao"
              placeholder="Desenvolvi um site para uma empresa de tecnologia"
              value={dataFormMiasInfo.descricao}
              onChange={handleDataFormMiasInfo}
              className="p-2 border rounded w-full"
            />
          </label>

          <button type="button" 
            className="bg-blue-500 text-white p-2 rounded w-full"
            onClick={() => saveValueAndResetForm()}>
              Adicionar
          </button>
        </div>
      )}
    </div>
  );
}
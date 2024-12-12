'use client'

import { Header } from "./components/commons/header";
import { Footer } from "./components/commons/footer";
import { useState } from "react";
import { DataPessoal } from "./components/commons/form/dataPessoal";
import { ExpAcademica } from "./components/commons/form/expAcademica";
import { ExpProfissional } from "./components/commons/form/expProfissional";
import { Endereco } from "./components/commons/form/endereco";
import { Objetivo } from "./components/commons/form/objetivo";
import { MaisInfo } from "./components/commons/form/maisInfo";
import { formData } from "./types";
import { CurriculoFull } from "./components/curriculoFull";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';


export default function Home() {
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [formData, setFormData] = useState<formData>({
    nomeCompleto: '',
    email: '',
    dataNascimento: '',
    contato: '',

    endereco: '',
    bairro: '',
    cidade: '',
    estado: '',

    formacaoAcademica: [],
    experienciaProfissional: [],
    maisInfo: [],

    objetivoProfissional: ''
  });

  const gerarPDF = async () => {
    const elemento = document.getElementById("curriculo-pdf");
    if (!elemento) return;
  
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });
  
    const canvas = await html2canvas(elemento, { scale: 2, useCORS: true });
    const imgData = canvas.toDataURL("image/png");
  
    const pageWidth = 210;
    const imgWidth = pageWidth;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
  
    pdf.internal.pageSize.height = imgHeight;
    pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
  
    const pdfBlob = pdf.output("blob");
    const url = URL.createObjectURL(pdfBlob);
    setPdfUrl(url);
  };
  

  const baixarPDF = () => {
    if (pdfUrl) {
      const link = document.createElement("a");
      link.href = pdfUrl;
      link.download = `curriculo-${formData.nomeCompleto || "curriculo"}.pdf`;
      link.click();
    }
    setPdfUrl(null);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleExpsAcademicas = (exp: {
    curso: string,
    tipoCurso: string,
    instituicao: string,
    inicio: string,
    termino: string
  }) => {
    setFormData(prev => ({
      ...prev,
      formacaoAcademica: [...prev.formacaoAcademica, exp]
    }));
  };

  const handleExpsProfissionais = (exp: {
    empresa: string,
    cargo: string,
    inicio: string,
    termino: string,
    descricao: string
  }) => {
    setFormData(prev => ({
      ...prev,
      experienciaProfissional: [...prev.experienciaProfissional, exp]
    }));
  };

  const handleMaisInfo = (maisInfo: {
    titulo: string,
    descricao: string
  }) => {
    setFormData(prev => ({
      ...prev,
      maisInfo: [...prev.maisInfo, maisInfo]
    }));
  };

  const handleObjetivo = (objetivo: string) => {
    setFormData(prev => ({
      ...prev,
      objetivoProfissional: objetivo
    }));
  };

  const handleRemoveExpAcademica = (index: number) => {
    setFormData(prev => ({
      ...prev,
      formacaoAcademica: prev.formacaoAcademica.filter((_, i) => i !== index)
    }));
  };

  const handleRemoveExpProfissional = (index: number) => {
    setFormData(prev => ({
      ...prev,
      experienciaProfissional: prev.experienciaProfissional.filter((_, i) => i !== index)
    }));
  };

  const handleRemoveMaisInfo = (index: number) => {
    setFormData(prev => ({
      ...prev,
      maisInfo: prev.maisInfo.filter((_, i) => i !== index)
    }));
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50 flex flex-col">
      <Header/>
      
      <main className="w-full flex flex-col items-center justify-center p-4 md:p-8">
        <div className="w-full lg:w-1/2 xl:max-w-2xl">
          <form className="flex flex-col gap-4">
            <DataPessoal dadosUser={formData} toogleDados={handleInputChange} />

            <Endereco dadosUser={formData} toogleDados={handleInputChange} />

            <ExpAcademica 
              expsAcademica={formData.formacaoAcademica} 
              handleExpsAcademica={handleExpsAcademicas}
              handleRemoveExpAcademica={handleRemoveExpAcademica}
            />

            <ExpProfissional 
              expsProfissionais={formData.experienciaProfissional}
              handleExpsProfissionais={handleExpsProfissionais}
              handleRemoveExpProfissional={handleRemoveExpProfissional}
            />

            <MaisInfo 
              maisInfo={formData.maisInfo}
              handleMaisInfo={handleMaisInfo} 
              handleRemoveMaisInfo={handleRemoveMaisInfo}
            />

            <Objetivo dataObjetivo={formData} toogleDados={handleObjetivo} />
          </form>
        </div>

        <div className="w-full py-6 lg:w-1/2 xl:max-w-2xl flex flex-col gap-4">
          {!pdfUrl && (
            <button
              onClick={gerarPDF}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
              Gerar PDF
            </button>
          )}

          {pdfUrl && (
            <button
              onClick={baixarPDF}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Baixar PDF
            </button>
          )}
        </div>
      </main>

      <div
        id="curriculo-pdf"
        className="absolute top-[-9999px] left-[-9999px]"
      >
        <CurriculoFull value={formData} />
      </div>

      <Footer/>
    </div>
  );
}

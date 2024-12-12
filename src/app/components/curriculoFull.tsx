import { useState, useEffect } from 'react';

export function CurriculoFull({ value }: { value: any }) {
  const [idade, setIdade] = useState<number | null>(null);

  const calcularIdade = (dataNascimento: string) => {
    const hoje = new Date();
    const nascimento = new Date(dataNascimento);
    let idade = hoje.getFullYear() - nascimento.getFullYear();

    if (
      hoje.getMonth() < nascimento.getMonth() ||
      (hoje.getMonth() === nascimento.getMonth() && hoje.getDate() < nascimento.getDate())
    ) {
      idade--;
    }

    setIdade(idade);
  };

  useEffect(() => {
    const anoNascimento = value.dataNascimento.split('-')[0];

    if (value.dataNascimento.length === 10 && anoNascimento > 1900) {
      calcularIdade(value.dataNascimento);
    }
  }, [value.dataNascimento]);

  return (
    <div className='flex justify-center' id="curriculo-pdf">
      <div className="bg-white p-8 rounded-md w-full min-w-[210mm] min-h-auto">
      <div className="flex flex-col mb-4 gap-1">
          <h1 className="text-4xl font-bold mb-4">{value.nomeCompleto || 'Nome Completo'}</h1>
          <p>Email: {value.email}.</p>
          <p>Contato: {value.contato}.</p>
          <p>Endereço: {value.endereco}. <br/> {value.bairro}, {value.cidade} - {value.estado}.</p>
          <p>Nascimento: 
            {value.dataNascimento.split('-').reverse().join('/')}, {idade} anos.
          </p>
        </div>

        <hr className="w-full py-4" />

        {value.formacaoAcademica.length > 0 && (
          <div className="flex flex-col mb-6 gap-6">
            <h2 className="text-3xl font-bold">Formação Acadêmica</h2>

            {value.formacaoAcademica.map((formacao: any, index: number) => (
              <div className='flex flex-col' key={`${formacao.curso}-${index}`}>
                <div className="flex flex-col">
                  <p className='text-xs'>{formacao.inicio} - {formacao.termino}</p>
                  <p className='text-xl flex text-end'><strong>{formacao.curso}</strong></p>
                </div>

                <p className='text-lg'>{formacao.tipoCurso} - {formacao.instituicao}</p>
              </div>
            ))}
          </div>
        )}

        {value.experienciaProfissional.length > 0 && (
          <>
            <hr className="w-full py-4"/>

            <div className="flex flex-col gap-8">
              <h2 className="text-3xl font-bold">Experiência Profissional</h2>

              {value.experienciaProfissional.map((exp: any) => (
                <div className="flex flex-col gap-3" key={exp.empresa}>
                  <div className="flex flex-col">
                    <p>{exp.empresa}</p>
                    <p className="text-2xl"><strong>{exp.cargo}</strong></p>
                    <p className="text-sm">{exp.inicio} - {exp.termino}</p>
                  </div>
                  <p>{exp.descricao}</p>
                </div>
              ))}
            </div>
          </>
        )}

        {value.maisInfo.length > 0 && (
          <>
            <hr className="w-full my-4" />

            <div className="flex flex-col gap-4">
              <h2 className="text-3xl font-bold">Minhas Habilidades</h2>

              {value.maisInfo.map((item: any, index: number) => (
                <div className="flex flex-col gap-1" key={`${item.titulo}-${index}`}>
                  <p className="text-xl"><strong>{item.titulo}</strong></p>
                  <p>{item.descricao}</p>
                </div>
              ))}
            </div>
          </>
        )}

        {value.objetivoProfissional && (
          <>
            <hr className="w-full my-4" />

            <div className="flex flex-col gap-4">
              <h2 className="text-3xl font-bold">Objetivo Profissional</h2>
              <p>{value.objetivoProfissional}</p>
            </div>
          </>
        )}
      </div>
    </div>
  )
}


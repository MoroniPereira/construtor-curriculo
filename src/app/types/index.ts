type typesFormAcademico = {
  curso: string;
  tipoCurso: string;
  instituicao: string;
  inicio: string;
  termino: string;
}

type typesFormProfissional = {
  empresa: string;
  cargo: string;
  inicio: string;
  termino: string;
  descricao: string;
}

type typesFormMaisInfo = {
  titulo: string;
  descricao: string;
}

interface formData {
  nomeCompleto: string;
  email: string;
  dataNascimento: string;
  contato: string;

  endereco: string;
  bairro: string;
  cidade: string;
  estado: string;

  formacaoAcademica: typesFormAcademico[];

  experienciaProfissional: typesFormProfissional[];

  maisInfo: typesFormMaisInfo[];

  objetivoProfissional: string;
}

export type { typesFormAcademico, typesFormProfissional, typesFormMaisInfo, formData };
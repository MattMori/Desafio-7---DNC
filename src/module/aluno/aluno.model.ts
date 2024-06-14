import Knex from "knex";
import knexConfig from "../../config/knex";

const connection = Knex(knexConfig);

// Define a interface para o modelo Aluno
interface Aluno {
  id: number;
  nome: string;
  email: string;
  nacionalidade: string;
}

// Função para obter todos os registros da tabela aluno
const getAll = async (): Promise<Aluno[]> => {
  return connection<Aluno>("aluno").select();
};

// Função para inserir um novo registro na tabela aluno
const store = async (params: Partial<Aluno>): Promise<number[]> => {
  return connection<Aluno>("aluno").insert(params);
};

export { getAll, store };

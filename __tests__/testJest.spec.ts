import request from 'supertest';
import app from '../index';

describe('Testes das rotas dos alunos', () => {

  it('Retorna todos os alunos', async () => {
    const response = await request(app).get('/aluno');
    expect(response.status).toBe(200);
  });

  it('Cria um novo aluno', async () => {
    const novoAluno = {
      nome: 'Aluno',
      email: 'test@test.com',
      nacionalidade: 'Test',
    };
    console.log("Novo Aluno:", novoAluno);
    const response = await request(app).post('/aluno').send(novoAluno);
    console.log("Resposta do servidor:", response.body); // Log da resposta do servidor
    expect(response.status).toBe(200);
  });
});

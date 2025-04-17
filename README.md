# Desafio 7 - Escola DNC

Este projeto foi desenvolvido para a resolução do **Desafio 7** do curso **Formação de Tecnologia - Desenvolvedor Full-Stack** da escola DNC.

## Instalação

### 1. Clone o Repositório

```bash
$ git clone https://github.com/MattMori/Desafio-7---DNC.git
```

### 2. Acesse a Pasta Criada

```bash
$ cd Desafio-7---DNC
```

### 3. Instale as Dependências

```bash
$ npm install
```

### 4. Criação do Banco de Dados MySQL

Caso queira criar o banco de dados MySQL manualmente, execute o seguinte comando:

```mysql
CREATE TABLE `aluno` (
	`id` INT(11) NOT NULL AUTO_INCREMENT,
	`nome` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_0900_ai_ci',
	`email` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_0900_ai_ci',
	`nacionalidade` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_0900_ai_ci',
	PRIMARY KEY (`id`) USING BTREE
)
COLLATE='utf8mb4_0900_ai_ci'
ENGINE=InnoDB
AUTO_INCREMENT=5
;
```

### 5. Configuração do Banco de Dados no Arquivo `knex.ts`

Edite o arquivo `src/config/knex.ts` com os dados do seu banco de dados:

```javascript
const knexConfig: KnexConfig = {
  client: 'mysql2',
  connection: {
    host: 'localhost',
    port: 3306,
    user: 'user',        // Altere para seu usuário do MySQL
    password: 'password', // Altere para sua senha do MySQL
    database: 'db',       // Altere para o nome do seu banco de dados
  },
}
```

## Testes

### 1. Iniciar os Testes
Para rodar os testes, execute o comando abaixo:
```bash
$ npm test --config=jest.config.ts
```

### 2. Testes Realizados
![Teste realizado](teste.jpg)

## Contribuição
Contribuições são bem-vindas! Caso tenha sugestões de melhorias ou encontre algum problema, sinta-se à vontade para abrir uma **issue** ou enviar um **pull request**.

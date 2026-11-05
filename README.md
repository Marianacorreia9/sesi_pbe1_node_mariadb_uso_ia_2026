# Sistema de Registro de Uso de Inteligência Artificial

## Descrição

O projeto consiste no desenvolvimento de um sistema back-end para registrar e consultar informações sobre a utilização de Inteligência Artificial por empresas, escolas e pessoas.

O sistema permite o gerenciamento de usuários, autenticação por login, cadastro de registros de uso de IA e consulta dos níveis de risco classificados como Alto, Médio e Baixo.

## Diagrama de Classes

O diagrama de classes representa a estrutura do sistema, suas classes, atributos, métodos e relacionamentos.

![Diagrama de Classes](./docs/Diagrama de classe.png)

## Tecnologias utilizadas

- Node.js
- JavaScript
- Express
- MariaDB
- MySQL2
- Git e GitHub
- Insomnia ou Postman

## Funcionalidades

- **RF001:** CRUD de usuários.
- **RF002:** Login de usuários.
- **RF003:** CRUD de registros de uso de IA.
- **RF004:** Resumo com a contagem total dos níveis de risco Alto, Médio e Baixo.

## Estrutura do projeto

```text
backend_usos_ia/
├── db/
│   └── script.sql
├── docs/
│   ├── der_uso_ia.png
│   └── diagrama-classes.png
├── src/
│   ├── controllers/
│   │   ├── usuario.js
│   │   └── usoia.js
│   ├── db.js
│   └── routes.js
├── .gitignore
├── server.js
└── README.md
```

## Passo a passo para testar

1. Clone o repositório:

```bash
git clone URL_DO_REPOSITORIO
```

2. Entre na pasta do projeto:

```bash
cd backend_usos_ia
```

3. Instale as dependências:

```bash
npm install
```

4. Execute o script `db/script.sql` no MariaDB para criar e popular o banco de dados.

5. Configure a conexão com o banco de dados no arquivo `src/db.js`.

6. Inicie o servidor utilizando o comando configurado no `package.json`.

7. Abra o Insomnia ou Postman e teste as rotas da aplicação.

## Testes

Os testes das funcionalidades foram realizados utilizando o Thunder client.
Abra a pasta docs e testes para ver os prints.


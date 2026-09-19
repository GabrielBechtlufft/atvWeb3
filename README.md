# WebExpress | DSM

> Uma aplicação web introdutória feita com **Node.js** e **Express** para apresentar o curso de Desenvolvimento de Software Multiplataforma (DSM) e disponibilizar telas de acesso e cadastro.

![Node.js](https://img.shields.io/badge/Node.js-Express-339933?logo=node.js&logoColor=white)
![Status](https://img.shields.io/badge/status-conclu%C3%ADdo-16a34a)

## Sobre o projeto

O **WebExpress** é um projeto acadêmico que demonstra como estruturar e servir páginas HTML estáticas a partir de um servidor Express. A página principal reúne informações sobre o curso de DSM, enquanto as páginas complementares simulam os fluxos de login e cadastro.

## Funcionalidades

- Página institucional do curso DSM com logotipos da Fatec e do Centro Paula Souza;
- Navegação entre as páginas inicial, de login e de cadastro;
- Página personalizada para rotas não encontradas (404);
- Arquivos estáticos organizados para imagens e estilos;
- Layout centralizado e responsivo em CSS.

> **Nota:** os formulários de login e cadastro são apenas interfaces nesta versão; eles ainda não possuem persistência de dados nem autenticação no servidor.

## Tecnologias

- [Node.js](https://nodejs.org/)
- [Express 5](https://expressjs.com/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- HTML5 e CSS3

## Como executar

### Pré-requisitos

- Node.js 18 ou superior;
- npm (instalado junto com o Node.js).

### Instalação

```bash
git clone <url-do-repositorio>
cd WebExpress
npm install
```

Crie ou atualize o arquivo `.env` na raiz do projeto com a porta desejada:

```env
PORT=3000
```

### Iniciar a aplicação

Para executar normalmente:

```bash
npm start
```

Durante o desenvolvimento, use o modo de observação:

```bash
npm run dev
```

Com o servidor em execução, acesse [http://localhost:3000](http://localhost:3000).

## Rotas disponíveis

| Rota | Descrição |
| --- | --- |
| `/` | Página inicial com informações do curso DSM. |
| `/login` | Tela de login. |
| `/cadastro` | Tela de criação de conta. |
| Qualquer outra | Página 404 personalizada. |

## Estrutura do projeto

```text
WebExpress/
├── public/
│   ├── assets/
│   │   ├── css/main.css       # Estilos da aplicação
│   │   └── img/               # Logotipos institucionais
│   └── pages/
│       ├── index.html         # Página inicial
│       ├── login.html         # Página de login
│       ├── cadastro.html      # Página de cadastro
│       └── 404.html           # Página não encontrada
├── .env                       # Configuração local da porta
├── package.json
└── server.js                  # Servidor e definição das rotas
```

## Próximos passos

- Implementar o envio e a validação dos formulários;
- Criar autenticação de usuários e armazenamento seguro de senhas;
- Conectar a aplicação a um banco de dados;
- Adicionar testes automatizados e melhorias de acessibilidade.

---

Desenvolvido como atividade de Desenvolvimento Web I para o curso de Desenvolvimento de Software Multiplataforma (DSM).

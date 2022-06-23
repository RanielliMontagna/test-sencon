# Desafio técnico para desenvolvedores

<ul>
    <li>Você deverá criar um novo projeto em React de preferência em typescript</li>
    <li>Você deverá realizar um request para o endpoint</li>
    <li>Com a resposta do endpoint, monte uma tabela igual a mostrada no link de demonstração.</li>
    <li>Para a coluna de empresa, você deverá realizar a seguinte lógica:<br/>
    Ao invés de mostrar a empresa recebida na repsosta, monte uma lógica em que:
    <ul>
    <li>caso o índice for divisível por 3, mostre a palavra "TC"</li>
    <li>caso o índice for divisível por 5, mostre a palavra "SENCON"</li>
    <li>caso o índice for divisível por 3 e 5, mostre a palavra "TC / SENCON"</li>
    <li>caso o índice não seja dívisivel por 3 e 5, mostre a palavra "Sem empresa"</li>
    </ul>
    </li>
    <li>Ao clicar em uma das linhas da tabela, deverá abrir uma modal aonde deverá ser mostrado o username, id e o índice da respectiva linha.</li>
    <li>Sinta-se a vontade para adicionar mais coisas.</li>

</ul>

# Implementação

## Ferramentas

Para o desenvolvimento do Front-End do projeto foi utilizada a linguagem [REACT](https://pt-br.reactjs.org/) com as seguintes ferramentas:

- [Typescript](https://www.typescriptlang.org/): Linguagem fortemente tipada baseada em JavaScript.
- [React Route](https://reactrouter.com/): Sistema de roteamente utilizado no React.
- [Material UI](https://mui.com/pt/): Biblioteca de componentes e ferramentas que simplifica e agiliza o desenvolvimento de aplicações para Web.
- [Styled-Components](https://styled-components.com/): Biblioteca que facilita a utilização do css para estilizar seus projetos.
- [Sentry](https://sentry.io/): Plataforma para trackeamento e monitoramento de erros.

## Extras

Foram utilizados no projeto também, que vale ser ressaltado e explicado:

- Service-Worker: Para a criação e utilização do site em formato de PWA (Progressive web app)
- Meta-Tags do Facebook: Utilizado para otimizar o compartilhamento do site nas redes sociais.

## Como acessar/executar o projeto

Para executar o projeto localmente, você deve primeiro clonar o projeto usando:

```bash
$ git clone https://github.com/RanielliMontagna/test-sencon.git
```

Após ter clonado o projeto você precisará criar um arquivo `.env` na raiz do projeto, esse arquivo irá conter as mesmas chaves e valores do `.env.example`.

Após ter criado o arquivo `.env` você deverá rodar o comando abaixo:
(É necessário para instalar todas dependências e pacotes que são utilizados no projeto).

```bash
$ npm install
```

ou

```bash
$ yarn
```

### Utilizando

Para você iniciar o projeto você deverá rodar o comando

```bash
$ npm start
```

ou

```bash
$ yarn start
```

## Link de demonstração

[https://test-sencon.vercel.app/](https://test-sencon.vercel.app/): Hospedado na [Vercel](https://vercel.com/).

### Feito com ❤ by Ranielli Montagna

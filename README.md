# 📦 rotas-vue-empresa (Empresa 360)

Projeto desenvolvido em **Vue.js** com foco no estudo e prática de **rotas Vue Router**.
O sistema simula uma aplicação chamada **Empresa 360**, utilizando um backend fake com **JSON Server** para simular a API.



## 🚀 Tecnologias utilizadas

* Vue.js"
* Vue Router
* JSON Server
* Node.js / NPM
* Vue-the-mask



## 🔧 Instalação do projeto

```bash
npm install
```



## ▶️ Executando o projeto (Frontend)

```bash
npm run serve
```



## 📡 Executando o JSON Server (Backend Fake)

Certifique-se de que o arquivo **json-server.json** está na raiz do projeto.

```bash
json-server --watch json-server.json
```

> Você pode alterar a porta caso necessário, por exemplo:
>
> ```bash
> json-server --watch json-server.json --port 3001
> ```



## 📦 Build para produção

```bash
npm run build
```



## 🔍 Lint (analisar e corrigir problemas)

```bash
npm run lint
```


## 📌 Observações

* Certifique-se de que o JSON Server está rodando **antes de iniciar o Vue**, caso o frontend dependa dos dados.
* Caso use rotas por história (`history mode`), pode ser necessário configurar o servidor para evitar erro 404.
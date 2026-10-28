# Tech Future

Site de divulgação e inscrição para um evento fictício de tecnologia. O React, o Vite em modo de desenvolvimento e a API Node.js + Express são servidos pelo mesmo servidor e pela mesma porta (`3001`). As inscrições ficam em memória e são reiniciadas quando o backend é encerrado.

## Requisitos

- Node.js 18 ou superior
- npm

## Instalação

Instale as dependências dos dois projetos, uma vez:

```bash
cd frontend
npm install
cd ../backend
npm install
```

## Desenvolvimento

Inicie o servidor:

```bash
cd backend
npm run dev
```

Abra **http://localhost:3001**. O site e os endpoints da API ficam disponíveis nessa mesma origem e porta; não é necessário iniciar outro servidor para o frontend.

## Produção

Gere o frontend e inicie o servidor Express em modo de produção:

```bash
cd frontend
npm run build
cd ../backend
npm start
```

O site e a API também estarão disponíveis em **http://localhost:3001**.

## Funcionalidades

- Página do evento responsiva com data, local, descrição e palestrantes.
- Formulário de inscrição com ingresso estudante ou profissional.
- Lista de inscritos com remoção de inscrições.
- A API valida campos obrigatórios, formato básico do e-mail, tipo de ingresso e e-mails duplicados.

## Endpoints

- `GET /inscricoes` — lista inscrições.
- `POST /inscricoes` — cria inscrição. Campos obrigatórios: `nome`, `email` e `tipoIngresso`.
- `DELETE /inscricoes/:id` — exclui uma inscrição.

O campo `tipoIngresso` aceita `estudante` ou `profissional`; `telefone` é opcional. Exemplos de chamadas estão em [`request.http`](./request.http) (extensão REST Client do VS Code).
>>>>>>> 8c90636 (Adicionar aplicação Tech Future)

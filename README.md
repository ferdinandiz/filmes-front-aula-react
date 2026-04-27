# Front-end mínimo React + TypeScript para CRUD de Filmes

Projeto simples em React com TypeScript, criado no estilo da aula com Vite, componentes `.tsx`, `useState`, `useEffect` e consumo de API com `fetch`.

## Como executar

```bash
npm install
npm run dev
```

A aplicação abrirá em:

```bash
http://localhost:5173
```

## API esperada

O front está apontando para:

```bash
http://localhost:8080/filmes
```

## Funcionalidades

- Listar filmes
- Cadastrar filme
- Editar filme
- Excluir filme
- Trocar o tema visual em tempo real usando a paleta:
  - `#322938`
  - `#89A194`
  - `#CFC89A`
  - `#CC883A`
  - `#A14016`

## Estrutura principal

```text
src/
  components/
    MovieForm.tsx
    MovieList.tsx
    Navbar.tsx
  config/
    themes.ts
  services/
    movieService.ts
  types/
    Movie.ts
  App.tsx
  main.tsx
  index.css
```

## Observação

Para o pôster aparecer corretamente, salve no banco uma URL completa no campo `posterPath`, por exemplo:

```text
https://image.tmdb.org/t/p/w500/...
```

# Task Manager

Projeto React + TypeScript com Vite, reorganizado para uma arquitetura modular simples.

## Arquitetura

A aplicação foi separada em:

- `src/modules/tasks`: modulo de dominio de tarefas
- `src/layout`: estrutura visual global
- `src/routes`: definicao de rotas
- `src/pages`: paginas globais (exemplo: `NotFound`)

Dentro de `src/modules/tasks` ficam os elementos do dominio:

- `components`: componentes da feature
- `pages`: paginas da feature
- `context`: contexto e provider da feature
- `hooks`: hooks de negocio da feature
- `reducers`: reducers da feature
- `services`: cliente HTTP da feature
- `types`: tipos da feature
- `utils`: utilitarios da feature
- `ui`: componentes de UI da feature

## Como rodar

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

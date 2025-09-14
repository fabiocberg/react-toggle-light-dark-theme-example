# React Toggle Light/Dark Theme Example

Este repositório demonstra como implementar um botão toggle para alternar entre temas claro (light) e escuro (dark) em uma aplicação React. O objetivo é fornecer uma base simples e prática, facilmente adaptável a projetos reais, utilizando práticas modernas do React.

## Funcionalidades

- Alternância dinâmica entre temas claro e escuro
- Persistência de preferência do usuário via `localStorage`
- Uso do Context API para gerenciar o tema globalmente
- Estilização via CSS-in-JS ou CSS Modules (dependendo da implementação)
- Exemplo de integração com componentes React

## Como funciona

O estado do tema é armazenado globalmente usando o Context API do React. O valor inicial pode ser definido pela preferência do usuário salva no `localStorage` ou pelo tema do sistema operacional. Ao clicar no botão de alternância, o tema é trocado e a preferência é salva.

## Exemplo de uso

```jsx
import React from "react";
import { ThemeProvider, useTheme } from "./theme-context";

function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button onClick={toggleTheme}>
      Mudar para tema {theme === "light" ? "escuro" : "claro"}
    </button>
  );
}

function App() {
  return (
    <ThemeProvider>
      <div>
        <h1>Exemplo de Toggle Light/Dark Theme</h1>
        <ThemeToggleButton />
        {/* Outros componentes */}
      </div>
    </ThemeProvider>
  );
}

export default App;
```

## Como rodar o projeto

1. **Clone o repositório:**
    ```bash
    git clone https://github.com/fabiocberg/react-toggle-light-dark-theme-example.git
    cd react-toggle-light-dark-theme-example
    ```

2. **Instale as dependências:**
    ```bash
    yarn install
    # ou
    npm install
    ```

3. **Inicie o projeto:**
    ```bash
    yarn start
    # ou
    npm start
    ```

4. **Abra no navegador:**  
   Acesse [http://localhost:3000](http://localhost:3000)

## Estrutura sugerida

```
src/
  ├── theme-context.js
  ├── App.js
  └── index.js
```

- `theme-context.js`: Contexto, provider e lógica do tema
- `App.js`: Exemplo de uso com botão toggle

## Dicas e extensões

- Adicione animações na troca de tema para uma experiência mais suave
- Personalize variáveis CSS ou use styled-components
- Permita detecção automática do tema do sistema operacional (`prefers-color-scheme`)
- Implemente temas adicionais, como “solarized” ou “high contrast”

## Recursos úteis

- [React Context API](https://pt-br.reactjs.org/docs/context.html)
- [Detectar tema do sistema operacional via CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS/@media/prefers-color-scheme)
- [styled-components](https://styled-components.com/)

## Licença

MIT

---

> Contribuições e sugestões são bem-vindas!
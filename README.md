# Cozinha São Pedro Fafá

Site institucional responsivo da Cozinha São Pedro Fafá, desenvolvido com HTML, CSS, Bootstrap 5, JavaScript e ambiente Node.js com Vite.

A interface segue uma abordagem mobile-first, com componentes acessíveis, navegação adaptativa e melhorias progressivas para tablet e desktop.

O projeto mantém os arquivos publicados na raiz da branch `main`, permitindo continuar usando o GitHub Pages com a origem configurada como `main /root`.

## Requisitos

- Node.js 20.19 ou superior
- npm

## Desenvolvimento local

```bash
npm install
npm run dev
```

## Build de produção

```bash
npm run build
```

O build otimizado é gerado em `dist/`. Para conferir o resultado localmente:

```bash
npm run preview
```

## GitHub Pages

A publicação atual continua funcionando diretamente pelos arquivos da raiz do repositório:

- Branch: `main`
- Pasta: `/root`

O diretório `dist/` é ignorado pelo Git e não interfere na publicação atual.

## Estrutura

- `index.html`: página principal e metadados
- `assets/css/style.css`: identidade visual e responsividade
- `assets/js/main.js`: cardápio dinâmico, animações e galeria
- `assets/img/`: logo e imagens locais
- `package.json`: scripts e configuração do projeto Node
- `vite.config.js`: configuração de desenvolvimento e build

## Atualização do cardápio

Edite o objeto `menuData` no início de `assets/js/main.js`. Cada item possui `name`, `desc` e `tag`.

## Fotografias

`hero.webp` é o fundo da abertura. `salao.webp`, `interno.webp`, `ambiente.webp` e `ambiente2.webp` apresentam os espaços. `comida.webp` e `feijoada.webp` mostram a gastronomia.

## Informações públicas usadas

Telefone: (11) 98944-4330. Endereço: Rua Padre Bartolomeu Tadei, 09, FAMA Museu, Itu/SP. Confirme horários, cardápio e programação diretamente com o restaurante antes da publicação comercial.

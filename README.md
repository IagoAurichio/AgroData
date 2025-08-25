# AgroData - Dashboard Agrícola

Um dashboard para visualizar dados de commodities agrícolas (Café e Milho) e a cotação USD/BRL, com gráficos, tabela e cards de resumo.

---

## Tecnologias Utilizadas

- **Front-end:** React + Next.js (App Router)
- **Back-end:** API interna usando Next.js API Routes
- **Visualização de dados:** Recharts
- **Ícones:** Lucide React
- **Estilos:** Tailwind CSS
- **Variáveis de ambiente:** `.env` para armazenar a chave da API

---

## Funcionalidades

- Exibição de dados de **Café**, **Milho** e **USD/BRL**
- Cards com valores atuais e variação em %
- Gráfico com histórico dos últimos meses (filtrável por período)
- Tabela com dados detalhados e seleção de período
- Atualização automática dos dados da API

---

## Setup Local

1. Clone o projeto:  

   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd <PASTA_DO_PROJETO>

2. Instale as dependências

   ```bash
   npm install

3. Crie o arquivo ".env" na raiz do projeto e adicione sua chave da Alpha Vantage:

   ```bash
   ALPHA_VANTAGE_API_KEY=SuaChaveAqui

4. Rode a aplicação em modo de desenvolvimento:

   ```bash
   npm run dev

5. Abra no navegador

   https://localhost:3000
   
---

## Implicações
Durante o desenvolvimento, tive dificuldade para testar algumas funcionalidades devido à limitação da API da Alpha Vantage. A versão gratuita permite apenas 25 requisições por dia, o que restringiu a execução de atualizações automáticas e testes frequentes.
Para contornar isso, foi necessário moderar o número de chamadas à API ou trabalhar com dados mock para testar o front-end sem ultrapassar o limite.

---

## Deploy
O projeto está publicado e disponível online em:
https://agro-data-kappa.vercel.app

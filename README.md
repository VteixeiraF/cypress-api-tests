# Cypress API Tests

Projeto de testes automatizados de API utilizando Cypress.

## Objetivo do projeto

Validar endpoints de uma API REST, verificando status codes, estrutura da resposta e dados retornados.

## Tecnologias utilizadas

- Node.js
- Cypress
- JavaScript
- API REST

## Como rodar o projeto

### Pré-requisitos
- Node.js instalado
- Git instalado

### Passo a passo

```bash
npm install
npx cypress open

Ou em modo headless:
npx cypress run

Estrutura do projeto
cypress/
 └── e2e/
     └── api.cy.js
cypress.config.js
package.json
README.md
Autor

Victor Teixeira
QA / Analista de Testes
Projeto desenvolvido para fins de estudo e portfólio


👉 **Ctrl + S** para salvar.

---

## 🚀 SUBIR TUDO PARA O GITHUB (AGORA SIM)

No terminal, dentro da pasta `cypress-api-tests`, execute:

```powershell
git add .
git commit -m "Adiciona testes de API com Cypress e README"
git push -u origin main

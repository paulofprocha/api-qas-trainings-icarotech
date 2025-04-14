// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', () => {
    // Verificação se o texto principal do website está visível, para garantir que o site foi carregado
    cy.contains('Automation').should('be.visible');

    // Clicar no botão 'Signup / Login'
    cy.contains('Signup / Login').click();

    // Verificar se 'Login to your account' está visível
    cy.contains('Login to your account').should('be.visible');

    // Função que acessa o arquivo json na pasta fixtures
    cy.fixture('login.json').then((data) => {
        // Inserir os dados do endereço de e-mail e senha
        cy.get(data.elements["username"]).type(data.inputs["username"]);
        cy.get(data.elements["password"]).type(data.inputs["password"]);  
    });

    // Clicar no botão login
    cy.get('[data-qa="login-button"]').click();

    // Verificar se logged in as username está visível
    cy.contains('Logged in as').should('be.visible');
});

Cypress.Commands.add('buscar_produto', (produto) => {
    //Clicar no botão Produtos
    cy.contains('Products').click();

    //Capturar o campo de pesquisa e digitar o nome do produto
    cy.get('#search_product').type(produto);

    //Clicar no botão de pesquisa para realizar a busca do produto
    cy.get('#submit_search').click();

    //Validar se o produto encontrado, possui o valor igual a 500 reais
    cy.get('h2').contains('Rs. 500');
})
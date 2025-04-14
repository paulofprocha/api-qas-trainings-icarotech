const { should } = require("chai");

describe('Fluxo de add itens', () => {

    beforeEach(() => {
      // Acessar o website a ser testado
      cy.visit('https://automationexercise.com/');
    });

    it('login com sucesso', () => {
      cy.login();
    });

    it('Pequisar um produto', () => {
      cy.login();
      cy.buscar_produto('Blue Top');
    });

    it('Adicionar ao carrinho', () => {
      cy.login();
      cy.buscar_produto('Blue Top');

      // Clicar no botão laranja de adicionar produto ao carrinho
      cy.get('[data-product-id="1"]').eq(0).click();

      // Validar se a mensagem de produto adicionado ao carrinho está visível
      cy.contains('Your product has been added to cart.').should('be.visible');
    })
  })
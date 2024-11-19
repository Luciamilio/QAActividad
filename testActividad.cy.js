describe('Actividad', { testIsolation: false }, () => {
    beforeEach('Visitar la página', () => {
      // Visitar la página antes de cada prueba
      cy.visit('https://automationintesting.online/');
    });
  
    it('Verificar información del Hotel', () => {

      // Verificar que la información del hotel esté visible
      cy.get('.col-sm-5').contains('Shady Meadows B&B').should('be.visible');
      cy.get('.col-sm-5').contains('The Old Farmhouse, Shady Street, Newfordburyshire, NE1 410S').should('be.visible');
      cy.get('.col-sm-5').contains('012345678901').should('be.visible');
      cy.get('.col-sm-5').contains('fake@fakeemail.com').should('be.visible');

      // Verificar que extista al menos una imagen
      cy.get('img[src="/images/rbp-logo.jpg"]').should('be.visible');
      cy.get('img[src="/images/room2.jpg"]').should('be.visible');

      //Verificar texto de la descripción
      cy.get('.row.hotel-description').should('be.visible');
      cy.get('.row.hotel-description').should('not.be.empty');

    });
  });
  
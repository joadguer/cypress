import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";


Given('the user is on the homepage', () => {
    cy.visit('/');
  });
  
//feature de ir de un lugar a otro
Then('the user should see the first featured item', () => {

    cy.get('.d-block.img-fluid').should('be.visible');
  });
  
  When('the user interacts with the featured items carousel', () => {

    cy.get('.carousel-control-next').click();
    cy.wait(1000);
  });
  
  Then('the user should see the next featured item', () => {

    cy.get('.d-block.img-fluid').should('be.visible');
  });
  
  And('the user clicks on the previous button in the carousel', () => {

    cy.get('.carousel-control-prev').click();
    cy.wait(1000);
  });
  
  Then('the user should see the previous featured item', () => {

    cy.get('.d-block.img-fluid').should('be.visible');
  });

  

//Navegation pages
Given('the user is on the homepage', () => {
  cy.visit('https://www.demoblaze.com');
});

When('the user clicks on the Home link in the header', () => {
    cy.get('.navbar-nav.ml-auto .nav-item a.nav-link')
    .contains('Home')
    .click();
});

Then('the user should see the Home index', () => {
    cy.url().should('include', '/index.html')
});

    
When('the user clicks on the Contact link in the header', () => {
    cy.get('.navbar-nav.ml-auto .nav-item a.nav-link')
    .contains('Contact')
    .click();
});

Then('the user should be navigated to the Contact page', () => {
    
});



When('the user clicks on the About Us link in the header', () => {
    cy.get('.navbar-nav.ml-auto .nav-item a.nav-link')
    .contains('About us')
    .click();
});

Then('the user should be navigated to the About Us page', () => {
});



When('the user clicks on the Cart link in the header', () => {
    cy.get('.navbar-nav.ml-auto .nav-item a.nav-link')
    .contains('Cart')
    .click();}
);

Then('the user should be navigated to the Cart page', () => {
    cy.url().should('include', '/cart.html')
});


When('the user clicks on the Log In link in the header', () => {
    cy.get('.navbar-nav.ml-auto .nav-item a.nav-link')
    .contains('Log in')
    .click();
});

Then('the user should be navigated to the Log In page', () => {

});


When('the user clicks on the Sign Up link in the header', () => {
    cy.get('.navbar-nav.ml-auto .nav-item a.nav-link')
    .contains('Sign up')
    .click();
});

Then('the user should be navigated to the Sign Up page', () => {
});








When('the user selects the Phones category', () => {
  // Implementación para seleccionar la categoría Phones
  cy.get('#itemc').contains('Phones').click();
  cy.wait(2000); 

});

Then('the user should see 7 items in the Phones category', () => {
  // Implementación para verificar que hay 7 elementos en la categoría Phones
  cy.get('#tbodyid').should('exist');
});



When('the user selects the Laptops category', () => {
  // Implementación para seleccionar la categoría Laptops
  cy.get('.list-group-item').contains('Laptops').click();
  cy.wait(2000); // Espera 2 segundos (ajusta según sea necesario)

});

Then('the user should see 7 items in the Laptops category', () => {
  // Implementación para verificar que hay 7 elementos en la categoría Laptops
  cy.get('#tbodyid').should('exist');
});



When('the user selects the Monitors category', () => {
  // Implementación para seleccionar la categoría Monitors
  cy.get('.list-group-item').contains('Monitors').click();
  cy.wait(2000);

});

Then('the user should see 7 items in the Monitors category', () => {
  // Implementación para verificar que hay 7 elementos en la categoría Monitors
  cy.get('#tbodyid').should('exist');

});
  



And('the user selects Samsung Galaxy S6', () => {
  cy.wait(1000);

  cy.get('.card-block .hrefch').contains('Samsung galaxy s6').click();

});

Then('the user should be on the product page for Samsung Galaxy S6', () => {

});


And('the user selects Sony Vaio i5', () => {
  cy.wait(1000);

  cy.contains('.hrefch', 'Sony vaio i5').click();

});

Then('the user should be on the product page for Sony Vaio i5', () => {

});


And('the user selects Apple Monitor 24', () => {
  cy.wait(1000);

  cy.contains('.hrefch', 'Apple monitor 24').click();

  
});

Then('the user should be on the product page for Apple Monitor 24', () => {

});



And('the user selects Samsung Galaxy S6', () => {
  cy.get('.card-block .hrefch').contains('Samsung galaxy s6').click();
  cy.wait(2000); 
});

// Después de hacer clic en el botón "Add to Cart"
And('the user clicks on the Add to Cart button', () => {
  cy.get('.btn.btn-success.btn-lg').contains('Add to cart').click();
  cy.wait(2000); // Espera 2 segundos (ajusta según sea necesario)
});

And('the user navigate to the Cart page', () => {
  cy.visit('/cart.html');
});

// Verifica que el producto se haya añadido al carrito
Then('the product should be added to the cart', () => {
  // Agrega comandos Cypress para verificar que el producto está en el carrito
  // Esto podría ser algo como cy.get('.cart-item').should('contain', 'Samsung Galaxy S6');
  cy.url().should('eq', Cypress.config().baseUrl + '/cart.html');

  cy.get('#tbodyid tr').each(($row, index, $rows) => {
    // Encuentra el segundo td dentro de la fila actual
    cy.wrap($row).find('td:eq(1)').should('contain', 'Samsung galaxy s6'); 
  });
});


When('the user navigates to the Cart page', () => {
  cy.visit('/cart.html');
});

And('the user removes the last item from the cart', () => {
  // Encuentra el último td dentro de la última fila
  cy.wait(1000);
  cy.get('#tbodyid tr:eq(0) td:eq(3)').contains('Delete').click();
});

Then('the cart should not contain the deleted item', () => {
  // Verifica que el último td no contenga 'Samsung Galaxy S6'
  cy.get('#tbodyid tr:last td:eq(1)').should('not.contain', 'Samsung Galaxy S6');
});







And('the user purchase the cart', () => {

  cy.get('.btn.btn-success').contains('Place Order').click();
});


And('the user fills in the name field with a random name', () => {
  cy.wait(2000);
  const randomName = Cypress._.random(0, 1e6);
  cy.get('#name').type(`John Doe ${randomName}`);
});

And('the user fills in the country field with a random country', () => {
  const randomCountry = Cypress._.random(0, 1e6);
  cy.get('#country').type(`Country ${randomCountry}`);
});

And('the user fills in the city field with a random city', () => {
  const randomCity = Cypress._.random(0, 1e6);
  cy.get('#city').type(`City ${randomCity}`);
});

And('the user fills in the credit card field with a random credit card number', () => {
  const randomCreditCard = Cypress._.random(1000000000000000, 9999999999999999);
  cy.get('#card').type(randomCreditCard);
});

And('the user selects a random month', () => {
  const months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
  const randomMonth = Cypress._.sample(months);
  cy.get('#month').type(randomMonth);
});

And('the user selects a random year', () => {
  const currentYear = new Date().getFullYear();
  const randomYear = Cypress._.random(currentYear, currentYear + 10);
  cy.get('#year').type(randomYear.toString());
  cy.wait(2000);
});



And('the user clicks the Purchase button', () => {
  cy.get('.btn.btn-primary').contains('Purchase').click();
  cy.wait(2000);
});

And('the user clicks the Ok button', () => {
  cy.get('.confirm.btn.btn-lg.btn-primary').contains('OK').click();
  cy.wait(2000);
});


Then('the user should see a confirmation message', () => {
  // Agrega verificaciones adicionales según sea necesario para confirmar la compra
  cy.wait(2000);
  cy.url().should('include', '/index.html');

});
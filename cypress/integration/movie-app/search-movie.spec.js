import '@testing-library/cypress/add-commands';

context('Movie search', () => {
  beforeEach(() => {
    cy.visit('/', {
      onBeforeLoad: (win) => {
        win.fetch = null;
      },
    });
  });

  it('Search movie form', () => {
    cy.server()
      .route(
        'GET',
        'https://www.omdbapi.com/?apikey=4d7c0bd5&s=the shining',
        'fixture:omdbapi-response.json'
      )
      .as('fetch-movie');

    cy.getByTestId('input-search').get('input').type('the shining');
    cy.getByTestId('button-search').click().wait('@fetch-movie');
    cy.getByTestId('movie-title').contains('The Shining');
    cy.getByTestId('movie-year').contains('1980');
  });
});

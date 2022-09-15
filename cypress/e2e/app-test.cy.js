/* eslint-disable no-undef */
// will build out properly if have time
/// <reference types="cypress" />

describe('Check App Component is Loading', () => {
  it('Visits the initial project page', () => {
    cy.visit('http://localhost:3000')
    cy.contains('The Top 5')
  })
})

import { beforeEach } from "vitest"

describe('empty spec', () => {
  beforeEach( () => {
    cy.visit('http://127.0.0.1:5173/')
  })
  it('passes', () => {
    cy.get('input').type('una cabra')
    cy.get('textarea').type('ana\njuana\niguana')
    cy.get('button').click()
    cy.get('#winner').contains(/Enhorabuena (ana|juana|iguana) has ganado una cabra/)
  })

  it('passes without participants', () => {
    cy.get('input').type('una cabra')
    cy.get('button').click()
    cy.get('#winner').contains("No hay participantes" )
  })
})
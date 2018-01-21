import { defaultState } from '../../store/state'
import { currency, percentage } from '../../utils/number'

describe('PropertyComparison test suite', function () {
  before(function () {
    cy.visit('/')
  })

  it('should apply the default state', function () {
    cy
      .get('[name="address"]')
      .should('have.value', defaultState.prospects.nextProspect.address)

    cy
      .get('[name="purchasePrice"]')
      .should('have.value', defaultState.prospects.nextProspect.purchasePrice.toString())

    cy
      .get('[name="refurbCosts"]')
      .should('have.value', defaultState.prospects.nextProspect.refurbCosts.toString())

    cy
      .get('[name="monthlyRent"]')
      .should('have.value', defaultState.prospects.nextProspect.monthlyRent.toString())

    cy
      .get('[name="mortgageRate"]')
      .should('have.value', defaultState.prospects.nextProspect.mortgageRate.toString())

    cy
      .get('[name="managementRate"]')
      .should('have.value', defaultState.prospects.nextProspect.managementRate.toString())

    cy
      .get('[name="repairsContingency"]')
      .should('have.value', defaultState.prospects.nextProspect.repairsContingency.toString())

    cy
      .get('[name="serviceCharge"]')
      .should('have.value', defaultState.prospects.nextProspect.serviceCharge.toString())

    cy
      .get('[name="insurance"]')
      .should('have.value', defaultState.prospects.nextProspect.insurance.toString())

    cy
      .get('tbody tr')
      .should('have.length', 0)
  })

  it('should add the default prospect', function () {
    cy
      .get('button[type="submit"]')
      .click()

    cy
      .get('tbody tr')
      .as('row')
      .should('have.length', 1)

    cy
      .get('@row')
      .find('td:nth-child(1)')
      .should('contain', defaultState.prospects.nextProspect.address)

    cy
      .get('@row')
      .find('td:nth-child(3)')
      .should('contain', currency(defaultState.prospects.nextProspect.purchasePrice * 0.25, '£'))

    cy
      .get('@row')
      .find('td:nth-child(5)')
      .should('contain', percentage(0.55))

    cy
      .get('@row')
      .find('td:nth-child(6)')
      .should('contain', percentage(2.1))
  })

  it('should create a new prospect with the appropriate figures', function () {
    const address = '456 Random Street'
    const price = 250000

    cy
      .get('[name="address"]')
      .clear()
      .type(address)
      .should('have.value', address)

    cy
      .get('[name="purchasePrice"]')
      .clear()
      .type(price)
      .should('have.value', price.toString())

    cy
      .get('button[type="submit"]')
      .click()

    cy
      .get('tbody tr')
      .should('have.length', 2)

    cy
      .get('tbody tr:nth-child(2)')
      .as('row2')

    cy
      .get('@row2')
      .find('td:nth-child(1)')
      .should('contain', address)

    cy
      .get('@row2')
      .find('td:nth-child(3)')
      .should('contain', currency(price * 0.25, '£'))

    cy
      .get('@row2')
      .find('td:nth-child(5)')
      .should('contain', percentage(-1.69))

    cy
      .get('@row2')
      .find('td:nth-child(6)')
      .should('contain', percentage(-6.59))
  })
})

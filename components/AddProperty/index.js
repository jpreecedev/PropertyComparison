import React from 'react'
import { connect } from 'react-redux'

import { trackProspectAction } from '../../store/actions'
import TextField from '../TextField'

const AddProperty = props => {
  const { nextProspect } = props

  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <h2>Tell us about the property</h2>
          <fieldset>
            <legend>Prospect details</legend>
            <div className='row'>
              <div className='col'>
                <TextField type='textarea'
                  id='first_line'
                  label='First line of address'
                  placeholder='First line of address'
                  value={nextProspect.address} />
              </div>
              <div className='col' />
            </div>
            <div className='row'>
              <div className='col'>
                <TextField type='number'
                  id='purchase_price'
                  label='Purchase price'
                  prefix='£'
                  placeholder='Purchase price'
                  value={nextProspect.purchasePrice} />
              </div>
              <div className='col'>
                <TextField type='number'
                  id='refurb_costs'
                  label='Refurb costs + fees'
                  prefix='£'
                  placeholder='Refurb costs + fees'
                  value={nextProspect.refurbCosts} />
              </div>
              <div className='col'>
                <TextField type='number'
                  id='monthly_rent'
                  label='Monthly rent'
                  prefix='£'
                  placeholder='Monthly rent'
                  value={nextProspect.monthlyRent} />
              </div>
              <div className='col'>
                <TextField type='number'
                  id='mortgage_rate'
                  label='Mortgage rate'
                  suffix='%'
                  placeholder='Mortgage rate'
                  value={nextProspect.mortgageRate} />
              </div>
            </div>
            <div className='row'>
              <div className='col'>
                <TextField type='number'
                  id='management_rate'
                  label='Management rate'
                  suffix='%'
                  placeholder='Management rate'
                  value={nextProspect.managementRate} />
              </div>
              <div className='col'>
                <TextField type='number'
                  id='repairs_contingency'
                  label='Repairs contingency'
                  prefix='£'
                  placeholder='Repairs contingency'
                  value={nextProspect.repairsContingency} />
              </div>
              <div className='col'>
                <TextField type='number'
                  id='service_charge'
                  label='Service charge + ground rent'
                  prefix='£'
                  placeholder='Service charge + ground rent'
                  value={nextProspect.serviceCharge} />
              </div>
              <div className='col'>
                <TextField type='number'
                  id='insurance'
                  label='Insurance (annual)'
                  prefix='£'
                  placeholder='Insurance'
                  value={nextProspect.insurance} />
              </div>
            </div>
            <div className='row'>
              <div className='col'>
                <button type='button' onClick={() => props.trackProspect(nextProspect)} className='button primary'>Track Prospect</button>
                <button type='reset'>Reset</button>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = store => {
  return {
    nextProspect: store.nextProspect
  }
}

const mapDispatchToProps = dispatch => {
  return {
    trackProspect: value => {
      dispatch(trackProspectAction(value))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddProperty)

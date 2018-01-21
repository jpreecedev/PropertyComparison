import React from 'react'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'

import TextField from '../TextField'

let Form = props => {
  const { handleSubmit, pristine, reset, submitting } = props

  return <form onSubmit={handleSubmit}>
    <fieldset>
      <legend>Prospect details</legend>
      <div className='row'>
        <div className='col'>
          <TextField type='textarea'
            id='address'
            label='First line of address'
            placeholder='First line of address' />
        </div>
        <div className='col' />
      </div>
      <div className='row'>
        <div className='col'>
          <TextField type='number'
            id='purchasePrice'
            label='Purchase price'
            prefix='£'
            placeholder='Purchase price' />
        </div>
        <div className='col'>
          <TextField type='number'
            id='refurbCosts'
            label='Refurb costs + fees'
            prefix='£'
            placeholder='Refurb costs + fees' />
        </div>
        <div className='col'>
          <TextField type='number'
            id='monthlyRent'
            label='Monthly rent'
            prefix='£'
            placeholder='Monthly rent' />
        </div>
        <div className='col'>
          <TextField type='number'
            id='mortgageRate'
            label='Mortgage rate'
            suffix='%'
            placeholder='Mortgage rate' />
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <TextField type='number'
            id='managementRate'
            label='Management rate'
            suffix='%'
            placeholder='Management rate' />
        </div>
        <div className='col'>
          <TextField type='number'
            id='repairsContingency'
            label='Repairs contingency'
            prefix='£'
            placeholder='Repairs contingency' />
        </div>
        <div className='col'>
          <TextField type='number'
            id='serviceCharge'
            label='Service charge + ground rent'
            prefix='£'
            placeholder='Service charge + ground rent' />
        </div>
        <div className='col'>
          <TextField type='number'
            id='insurance'
            label='Insurance (annual)'
            prefix='£'
            placeholder='Insurance' />
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <button type='submit' disabled={submitting} className='button primary'>Track Prospect</button>
          <button type='reset' disabled={submitting} onClick={reset}>Reset</button>
        </div>
      </div>
    </fieldset>
  </form>
}

Form = reduxForm({
  form: 'AddPropertyForm'
})(Form)

Form = connect(
  state => ({
    initialValues: state.prospects.nextProspect
  })
)(Form)

export default Form

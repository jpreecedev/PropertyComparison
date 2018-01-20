import React from 'react'
import TextField from '../TextField'

const AddProperty = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <h2>Tell us about the property</h2>
          <form>
            <fieldset>
              <legend>Prospect details</legend>
              <div className='row'>
                <div className='col'>
                  <TextField type='textarea'
                    id='first_line'
                    label='First line of address'
                    placeholder='First line of address' />
                </div>
                <div className='col' />
              </div>
              <div className='row'>
                <div className='col'>
                  <TextField type='number'
                    id='purchase_price'
                    label='Purchase price'
                    prefix='£'
                    placeholder='Purchase price' />
                </div>
                <div className='col'>
                  <TextField type='number'
                    id='refurb_costs'
                    label='Refurb costs + fees'
                    prefix='£'
                    placeholder='Refurb costs + fees' />
                </div>
                <div className='col'>
                  <TextField type='number'
                    id='monthly_rent'
                    label='Monthly rent'
                    prefix='£'
                    placeholder='Monthly rent' />
                </div>
                <div className='col'>
                  <TextField type='number'
                    id='mortgage_rate'
                    label='Mortgage rate'
                    suffix='%'
                    placeholder='Mortgage rate' />
                </div>
              </div>
              <div className='row'>
                <div className='col'>
                  <TextField type='number'
                    id='management_rate'
                    label='Management rate'
                    suffix='%'
                    placeholder='Management rate' />
                </div>
                <div className='col'>
                  <TextField type='number'
                    id='repairs_contingency'
                    label='Repairs contingency'
                    prefix='£'
                    placeholder='Repairs contingency' />
                </div>
                <div className='col'>
                  <TextField type='number'
                    id='service_charge'
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
                  <input type='submit' value='Track Prospect' />
                  <input type='reset' value='Reset' />
                </div>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddProperty

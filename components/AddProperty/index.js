import React from 'react'
import { connect } from 'react-redux'

import Form from './form'
import { trackProspectAction } from '../../store/actions'

const AddProperty = props => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <h2>Tell us about the property</h2>
          <Form onSubmit={props.handleSubmit} />
        </div>
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    handleSubmit: nextProspect => {
      dispatch(trackProspectAction(nextProspect))
    }
  }
}

export default connect(null, mapDispatchToProps)(AddProperty)

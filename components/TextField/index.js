import React from 'react'
import Head from 'next/head'

import { Field } from 'redux-form'

import {stylesheet, classNames} from './styles.css'

const parse = (value, type) => {
  if (type === 'number') {
    return Number(value)
  }
  return value
}

const TextField = props => {
  const { type, id, label, prefix, suffix, placeholder } = props
  const addonClassName = prefix ? classNames.prefix : suffix ? classNames.suffix : null
  return (
    <div>
      <Head>
        <style key='textField' dangerouslySetInnerHTML={{__html: stylesheet}} />
      </Head>
      <label htmlFor={id}>{ label }</label>
      <div className={classNames.addon}>
        { addonClassName && <i className={addonClassName}>{ prefix || suffix }</i> }
        <Field name={id}
          component={type === 'textarea' ? 'textarea' : 'input'}
          type={type}
          placeholder={placeholder}
          parse={value => parse(value, type)} />
      </div>
    </div>
  )
}

export default TextField

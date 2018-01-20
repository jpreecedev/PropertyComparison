import React from 'react'
import Head from 'next/head'

import {stylesheet, classNames} from './styles.css'

const TextField = props => {
  const { type, id, label, prefix, suffix, placeholder, value } = props
  const addonClassName = prefix ? classNames.prefix : suffix ? classNames.suffix : null

  const inputField = <input id={id}
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={event => props.onChange(event.target.value)} />

  const textareaField = <textarea id={id}
    placeholder={placeholder}
    rows='3'
    value={value}
    onChange={event => props.onChange(event.target.value)} />

  return (
    <div>
      <Head>
        <style key='textField' dangerouslySetInnerHTML={{__html: stylesheet}} />
      </Head>
      <label htmlFor={id}>{ label }</label>
      <div className={classNames.addon}>
        { addonClassName && <i className={addonClassName}>{ prefix || suffix }</i> }
        { type !== 'textarea' ? inputField : textareaField }
      </div>
    </div>
  )
}

export default TextField

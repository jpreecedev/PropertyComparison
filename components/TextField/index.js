import React from 'react'
import Head from 'next/head'

import {stylesheet, classNames} from './styles.css'

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
        { type !== 'textarea'
          ? <input id={id} type={type} placeholder={placeholder} />
          : <textarea id={id} placeholder={placeholder} rows='3' />
        }
      </div>
    </div>
  )
}

export default TextField

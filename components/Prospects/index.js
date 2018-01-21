import React from 'react'
import { connect } from 'react-redux'

import Head from 'next/head'
import classes from 'classnames'

import {stylesheet, classNames} from './styles.css'

const Prospects = props => {
  const containerClassNames = classes(
    'container',
    classNames.container
  )

  const { allProspects } = props
  return (
    <div className={containerClassNames}>
      <Head>
        <style key='textField' dangerouslySetInnerHTML={{__html: stylesheet}} />
      </Head>
      <div className='row'>
        <div className='col'>
          <h2>Prospects</h2>
          <table>
            <thead>
              <tr>
                <th>
                  Address
                </th>
                <th>
                  Purchase price
                </th>
                <th>
                  Annual profit
                </th>
                <th>
                  Net yield
                </th>
                <th>
                  Return on investment
                </th>
              </tr>
            </thead>
            <tbody>
              {
                allProspects.map((prospect, index) => {
                  return <tr key={index}>
                    <td>{ prospect.address }</td>
                    <td>{ prospect.purchasePrice }</td>
                    <td>£2,000</td>
                    <td>5%</td>
                    <td>10%</td>
                  </tr>
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = store => {
  return {
    allProspects: store.prospects.allProspects
  }
}

export default connect(mapStateToProps)(Prospects)

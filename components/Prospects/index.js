import React from 'react'
import Head from 'next/head'
import classes from 'classnames'

import {stylesheet, classNames} from './styles.css'

const Prospects = () => {
  const containerClassNames = classes(
    'container',
    classNames.container
  )

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
              <tr>
                <td>123 Bob Street</td>
                <td>£100,000</td>
                <td>£2,500</td>
                <td>5%</td>
                <td>10%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Prospects

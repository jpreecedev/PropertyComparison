import React from 'react'
import Head from 'next/head'

import {stylesheet, classNames} from './index.css'

const Index = () => (
  <div>
    <Head>
      <title>Property Comparison</title>
      <meta charSet='utf-8' />
      <style dangerouslySetInnerHTML={{__html: stylesheet}} />
    </Head>
    <h1 className={classNames.header}>Property Comparison</h1>
    <p className={classNames.lead}>A useful tool for comparing properties against each other and your property investment goals</p>
  </div>
)

export default Index

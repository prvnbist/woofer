import React from 'react'

import App from 'next/app'
import Head from 'next/head'

import '../global.css'
export default class MyApp extends App {
   static async getInitialProps({ Component, ctx }) {
      let pageProps = {}

      if (Component.getInitialProps) {
         pageProps = await Component.getInitialProps(ctx)
      }

      return { pageProps }
   }

   render() {
      const { Component, pageProps } = this.props

      return (
         <>
            <Head>
               <title>Heap</title>
            </Head>
            <Component {...pageProps} />
         </>
      )
   }
}

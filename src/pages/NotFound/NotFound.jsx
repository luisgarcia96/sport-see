import React from 'react'
import styles from './NotFound.module.scss'

const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <h1>500</h1>
      <h2>Oups! There is an error</h2>
      <p>
        It seems that something went wrong. It is not your fault. We are working hard to fix this. Please try again later.
      </p>
    </div>
  )
}

export default NotFound
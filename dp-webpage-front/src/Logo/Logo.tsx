import React from 'react';
import styles from './Logo.styles';

const Logo = () => {
  return (
    <div>
      <h2 className={styles.logo}><span className={styles.logo__contrast}>Healthy</span>Eats</h2>
    </div>
  )
}

export default Logo;
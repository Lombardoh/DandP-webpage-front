import React from "react";
import styles from "./SocialLogin.styles";

const SocialLogin = ({ link, icon }) => {
  return (
    <div className={styles.container}>
      <a className={styles.icon} href={link}>{icon}</a>
    </div>
  );
};

export default SocialLogin;

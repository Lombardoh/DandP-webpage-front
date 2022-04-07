import React, { ReactElement } from "react";
import { FaQuestion } from 'react-icons/fa';
import styles from "./SocialLogin.styles";


interface Social {
  link: string,
  icon: ReactElement,
}

const SocialLogin = ({ link = "https://www.google.com", icon = <FaQuestion /> }: Social) => {

  return (
    <div className={styles.container}>
      <a className={styles.icon} href={link}>{icon}</a>
    </div>
  );
};

export default SocialLogin;

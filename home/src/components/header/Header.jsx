import React from "react";
import PropTypes from "prop-types";

import styles from './header.module.scss';

function Header(props) {
  return <div className={styles.header}>Fidget Spinner World</div>;
}

Header.propTypes = {};

export default Header;

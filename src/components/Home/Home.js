import React from "react";
import { Link } from "react-router-dom";
import Styles from './Home.module.css';
    


function Home({name}) {
  return (
    <div>
      <div className={Styles.container}>
        <h1>
          <Link className={Styles.link} to="/login">Login</Link>
        </h1>
        <br />
        <h1>
          <Link className={Styles.link} to="/signup">Signup</Link>
        </h1>
      </div>

      <br />
      <br />
      <br />

      <h2 className={Styles.welcome}>{name ? `Welcome -${name}` : "Login please"}</h2>
    </div>
  );
}

export default Home;
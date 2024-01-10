import React from 'react';
import { Link } from 'react-router-dom';

import Footer from '../components/Footer';
import Icon from '../components/Icon';

function LoginPage() {
  return (
    <>
      <main>
        <h1>Login</h1>
        <Link to="signup">Already have an account?</Link>
        <img src="/images/avatars/santa-hat.png" alt="santa hat" />
        <Icon />
      </main>
      <Footer />
    </>
  );
}

export default LoginPage;

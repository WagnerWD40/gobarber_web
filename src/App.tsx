import React from 'react';

import GlobalStyle from './styles/global';

import ToastContainer from './components/ToastContainer';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import AppProvider from './hooks';

const App: React.FC = () => {
  return (
    <>
      <AppProvider>
        {/* <SignUp /> */}
        <SignIn />
      </AppProvider>
      <GlobalStyle />
    </>
  );
}

export default App;

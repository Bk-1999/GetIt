import React from 'react';
import Header from './Header';

function Layout({ children }) {
  return (
    <div>
      <Header />
      <main className="container mx-auto p-6">{children}</main>
    </div>
  );
}

export default Layout;

import React from 'react'
import Footer from '../components/footer';
import Header from '../components/header';


const HeaderFooterLayout = ({children}) => {
  return (
    <div>
      <Header />
        <div>
            {children}
        </div>
        <Footer/>
    </div>
  );
}

export default HeaderFooterLayout
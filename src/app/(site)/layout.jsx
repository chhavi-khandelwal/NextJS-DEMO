import React from 'react';
import '../../styles/globals.css';
import Header from '@/pages/header';
import Footer from '@/pages/footer';
import Provider from './provider'

const Layout = ({ children }) => {
	return (
	    <html lang='en' className='h-full scroll-smooth antialiased'>
      		<head />
      		<body className='flex h-full flex-col'>
			  <Provider>
				<Header />
				<main className='grow'>{children}</main>
				<Footer />
				</Provider>
			</body>
    	</html>
	);
};

export default Layout;

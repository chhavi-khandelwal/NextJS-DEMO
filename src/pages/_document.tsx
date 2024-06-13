import { Html, Head, Main, NextScript } from 'next/document';
import Header from './header';
import Footer from './footer';
import Provider from '@/app/(site)/provider';

export default function Document() {
	return (
		<Html
			lang='en'
			className='h-full scroll-smooth antialiased'
		>
			<Head />
			<body className='flex h-full flex-col'>
				<Provider>
					<Header />
					<div className='flex h-full flex-col'>
						<Main />
					</div>
					<Footer />
					<NextScript />
				</Provider>
			</body>
		</Html>
	);
}

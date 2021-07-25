import type { AppProps } from 'next/app'
import Head from 'next/head'
import 'tailwindcss/tailwind.css'
import '../styles/globals.scss'

const metaDescription = 'My personal website!'

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>React search system</title>
				<link rel="icon" href="/favicon.ico" />
				<meta name="description" content={metaDescription} />
				{/* Animate CSS */}
				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
			</Head>

			<Component {...pageProps} />
		</>
	)
}
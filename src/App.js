/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css'
import { Aside } from './components/Aside'
import { Header } from './components/Header'
import { MainContent } from './components/MainContent'
import { Navigation } from './components/Nav'

function App() {
	return (
		<div className=' bg-gray-100 text-gray-600'>
			<Header />
			<Aside />
			<Navigation />
			<MainContent />
		</div>
	)
}

export default App

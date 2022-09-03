import React from 'react'

export const Navigation = () => {
	return (
		<nav className=' z-60  pl-64 pr-64 sticky w-full   justify-center  flex items-center '>
			<ul className='flex text-sm mx-5 py-2 w-full  justify-center gap-2 border-t border-b bg-white'>
				<li className='rounded-2xl py-1 px-4 bg-black text-white'>Все</li>
				<li className='rounded-3xl border py-1 px-4 bg-gray-100 '>
					Сейчас в эфире
				</li>
				<li className='rounded-3xl border py-1 px-4 bg-gray-100 '>Видеоигры</li>
				<li className='rounded-3xl border py-1 px-4 bg-gray-100 '>Ситкомы</li>
				<li className='rounded-3xl py-1 px-4 bg-gray-100 '>Туризм</li>
				<li className='rounded-3xl border py-1 px-4 bg-gray-100 '>
					Мультфильмы
				</li>
				<li className='rounded-3xl border py-1 px-4 bg-gray-100 '>
					Последние опубликованны...
				</li>
			</ul>
		</nav>
	)
}

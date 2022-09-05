import React from 'react'

export const Navigation = () => {
	const items = [
		'Все',
		'Сейчас в эфире',
		'Видеоигры',
		'Ситкомы',
		'Туризм',
		'Мультфильмы',
		'Последние опубликованные',
	]
	return (
		<nav className=' z-90  whitespace-nowrap overflow-auto   sticky w-full   justify-center  flex items-center '>
			<ul className='flex text-sm py-2 w-full  justify-center gap-2 border-t border-b bg-white'>
				{items.map((item, index) => (
					<li
						className={`${
							item === 'Все'
								? 'rounded-2xl py-1 px-4 bg-gray-700 text-white'
								: 'rounded-3xl border py-1 px-4 bg-gray-100 '
						} transition hover:bg-gray-300 hover:cursor-pointer`}
					>
						{item}
					</li>
				))}
			</ul>
		</nav>
	)
}

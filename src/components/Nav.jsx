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
		<nav className=' z-70  md:pl-32 xl:pl-64 w-full sticky  bg-white '>
			<div className='flex justify-center'>
				<ul className='flex mx-3  text-sm py-2 space-x-3 overflow-auto  whitespace-nowrap max-w-screen-2xl border-t border-b bg-white'>
					{items.map((item, index) => (
						<li
							key={index}
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
			</div>
		</nav>
	)
}

import React from 'react'

export const SignBtn = () => {
	return (
		<>
			<button className='flex items-center px-2 py-1 text-sm text-blue-700 uppercase border border-blue-700 rounded-sm'>
				<svg
					className='mr-2 w-7 h-7'
					fill='none'
					stroke='currentColor'
					viewBox='0 0 24 24'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						stroke-linecap='round'
						stroke-linejoin='round'
						stroke-width='2'
						d='M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z'
					></path>
				</svg>
				Войти
			</button>
		</>
	)
}

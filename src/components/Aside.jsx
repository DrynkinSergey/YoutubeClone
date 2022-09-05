import React from 'react'
import { SignBtn } from './SignBtn'

const AsideItem = ({ title, svgName, active, children }) => {
	return (
		<li>
			<a
				className={`flex items-center px-6 py-2 text-sm  hover:bg-gray-100 ${
					active ? 'bg-gray-200' : ' '
				}`}
				href='#'
			>
				{children}
				<span>{title}</span>
			</a>
		</li>
	)
}
export const Aside = () => {
	return (
		<aside className='z-10 w-64 border-r border-gray-100 max-h-screen overflow-auto  fixed left-0'>
			<section className='py-2 border-b'>
				<ul>
					<AsideItem title='Главная' active>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='currentColor'
							className='w-6 h-6 mr-6 text-red-600'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25'
							/>
						</svg>
					</AsideItem>
					<AsideItem title='Навигатор'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth='1.5'
							stroke='currentColor'
							className='w-6 h-6 mr-6'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z'
							/>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z'
							/>
						</svg>
					</AsideItem>
					<AsideItem title='Shorts'>
						<svg
							className='w-6 h-6 mr-6'
							fill='none'
							stroke='currentColor'
							viewBox='0 0 24 24'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M13 10V3L4 14h7v7l9-11h-7z'
							></path>
						</svg>
					</AsideItem>
					<AsideItem title='Подписки'>
						<svg
							className='w-6 h-6 mr-6'
							fill='none'
							stroke='currentColor'
							viewBox='0 0 24 24'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10'
							></path>
						</svg>
					</AsideItem>
				</ul>
			</section>
			<section className='py-2 border-b'>
				<ul>
					<AsideItem title='Библиотека'>
						<svg
							className='w-6 h-6 mr-6'
							fill='none'
							stroke='currentColor'
							viewBox='0 0 24 24'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z'
							></path>
						</svg>
					</AsideItem>
					<AsideItem title='История'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth='1.5'
							stroke='currentColor'
							className='w-6 h-6 mr-6'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z'
							/>
						</svg>
					</AsideItem>
				</ul>
			</section>
			<section className='px-8 py-4 border-b font-medium leading-5'>
				<span className='text-sm flex w-43'>
					Вы сможете ставить отметки "Нравится", писать комментарии и
					подписываться на каналы.
				</span>
				<div className='mt-3'>
					<SignBtn />
				</div>
			</section>
			<section className=' border-b'>
				<h2 className='px-6 py-2'>НАВИГАТОР</h2>
				<ul>
					<AsideItem title='Музыка'>
						<div className='rounded-full p-1 mr-6 bg-gray-500'>
							<svg
								className='w-4 h-4 text-white'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3'
								></path>
							</svg>
						</div>
					</AsideItem>
					<AsideItem title='Спорт'>
						<div className='rounded-full p-1 mr-6 bg-gray-500'>
							<svg
								className='w-4 h-4 text-white'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z'
								></path>
							</svg>
						</div>
					</AsideItem>
					<AsideItem title='Видеоигры'>
						<div className='rounded-full p-1 mr-6 bg-gray-500'>
							<svg
								className='w-4 h-4 text-white'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z'
								></path>
							</svg>
						</div>
					</AsideItem>
					<AsideItem title='Фильмы'>
						<div className='rounded-full p-1 mr-6 bg-gray-500'>
							<svg
								className='w-4 h-4 text-white'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z'
								></path>
							</svg>
						</div>
					</AsideItem>
					<AsideItem title='Новости'>
						<div className='rounded-full p-1 mr-6 bg-gray-500'>
							<svg
								className='w-4 h-4 text-white'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z'
								></path>
							</svg>
						</div>
					</AsideItem>
					<AsideItem title='Обучение'>
						<div className='rounded-full p-1 mr-6 bg-gray-500'>
							<svg
								className='w-4 h-4 text-white'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z'
								></path>
							</svg>
						</div>
					</AsideItem>
					<AsideItem title='Панорамные видео'>
						<div className='rounded-full p-1 mr-6 bg-gray-500'>
							<svg
								className='w-4 h-4 text-white'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z'
								></path>
							</svg>
						</div>
					</AsideItem>
				</ul>
			</section>
			<section className=' border-b'>
				<ul>
					<AsideItem title='Каталог каналов'>
						<div className='rounded-full p-1 mr-6 bg-gray-500'>
							<svg
								className='w-4 h-4 text-white'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z'
								></path>
							</svg>
						</div>
					</AsideItem>
				</ul>
			</section>

			<section>
				<ul>
					<AsideItem title='Настройки'>
						<div className='rounded-full  mr-6'>
							<svg
								className='w-6 h-6'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z'
								></path>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
								></path>
							</svg>
						</div>
					</AsideItem>
					<AsideItem title='Жалобы'>
						<div className='rounded-full  mr-6'>
							<svg
								className='w-6 h-6'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9'
								></path>
							</svg>
						</div>
					</AsideItem>
					<AsideItem title='Справка'>
						<div className='rounded-full  mr-6 '>
							<svg
								className='w-6 h-6'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
								></path>
							</svg>
						</div>
					</AsideItem>
					<AsideItem title='Оставить отзыв'>
						<div className='rounded-full  mr-6 '>
							<svg
								className='w-6 h-6'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
								></path>
							</svg>
						</div>
					</AsideItem>
				</ul>
			</section>
			<section className='mx-6 py-2 flex flex-col gap-2 text-sm'>
				<span>
					О сервисе Прессе Авторскиеправа Связаться с нами Авторам
					Рекламодателям Разработчикам
				</span>
				<span>
					Условия использования Конфиденциальность Правила и безопасность Как
					работает YouTube Тестирование новых функций
				</span>
				<span className='text-gray-200'>© 2022 Google LLC</span>
			</section>
		</aside>
	)
}

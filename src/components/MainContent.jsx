import React from 'react'

export const MainContent = () => {
	const items = [
		{
			imgSrc: 'https://picsum.photos/id/7/720/400',
			imgChanel:
				'https://yt3.ggpht.com/fR2SqzMp59Pfm9AU6giI3pk6YzhxV8lvB6T9TELvEFVx8Mrlazbg1w62NzmeAiyrWh-WfSL_=s68-c-k-c0x00ffffff-no-rj',

			title: "Як зам Генпрокурорки пов'язаний з кримінальним світом?",
			chanel: 'AcademeG',
			time: '27 тыс. просмотров 16 минут назад',
		},
		{
			imgSrc:
				' https://i.ytimg.com/vi/D8RONluiy8s/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA95BgV8s8NFmNG2vTNM6FJu8onRg',
			imgChanel:
				'https://yt3.ggpht.com/fR2SqzMp59Pfm9AU6giI3pk6YzhxV8lvB6T9TELvEFVx8Mrlazbg1w62NzmeAiyrWh-WfSL_=s68-c-k-c0x00ffffff-no-rj',

			title:
				'Authentication App with Google & Github Login - Next.js For Beginners [#8] - Register Form',
			chanel: 'Daily Tuition',
			time: '644 просмотра 7 дней назад',
		},
		{
			imgSrc:
				'https://i.ytimg.com/an_webp/-_X6PhkjpzU/mqdefault_6s.webp?du=3000&sqp=CN7uzpgG&rs=AOn4CLAMrsbclu--VPnre1-faFLQDoJlWA',
			imgChanel:
				'https://yt3.ggpht.com/fR2SqzMp59Pfm9AU6giI3pk6YzhxV8lvB6T9TELvEFVx8Mrlazbg1w62NzmeAiyrWh-WfSL_=s68-c-k-c0x00ffffff-no-rj',

			title: '5 Front-end Development Skills to Land Your First Job',
			time: '644 просмотра 7 дней назад',
		},
		{
			imgSrc:
				'https://i.ytimg.com/vi/6HTsAT4fCoc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB1CWqJaK5hNb6ac1y4ZrHiPbILHQ',
			imgChanel:
				'https://yt3.ggpht.com/fR2SqzMp59Pfm9AU6giI3pk6YzhxV8lvB6T9TELvEFVx8Mrlazbg1w62NzmeAiyrWh-WfSL_=s68-c-k-c0x00ffffff-no-rj',

			title: "Як зам Генпрокурорки пов'язаний з кримінальним світом?",
			chanel: 'AcademeG',
			time: '27 тыс. просмотров 16 минут назад',
		},
		{
			imgSrc:
				' https://i.ytimg.com/vi/D8RONluiy8s/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA95BgV8s8NFmNG2vTNM6FJu8onRg',
			imgChanel:
				'https://yt3.ggpht.com/fR2SqzMp59Pfm9AU6giI3pk6YzhxV8lvB6T9TELvEFVx8Mrlazbg1w62NzmeAiyrWh-WfSL_=s68-c-k-c0x00ffffff-no-rj',

			title:
				'Authentication App with Google & Github Login - Next.js For Beginners [#8] - Register Form',
			chanel: 'Daily Tuition',
			time: '644 просмотра 7 дней назад',
		},
		{
			imgSrc:
				'https://i.ytimg.com/an_webp/-_X6PhkjpzU/mqdefault_6s.webp?du=3000&sqp=CN7uzpgG&rs=AOn4CLAMrsbclu--VPnre1-faFLQDoJlWA',
			imgChanel:
				'https://yt3.ggpht.com/fR2SqzMp59Pfm9AU6giI3pk6YzhxV8lvB6T9TELvEFVx8Mrlazbg1w62NzmeAiyrWh-WfSL_=s68-c-k-c0x00ffffff-no-rj',

			title: '5 Front-end Development Skills to Land Your First Job',
			time: '644 просмотра 7 дней назад',
		},
		{
			imgSrc:
				'https://i.ytimg.com/vi/6HTsAT4fCoc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB1CWqJaK5hNb6ac1y4ZrHiPbILHQ',
			imgChanel:
				'https://yt3.ggpht.com/fR2SqzMp59Pfm9AU6giI3pk6YzhxV8lvB6T9TELvEFVx8Mrlazbg1w62NzmeAiyrWh-WfSL_=s68-c-k-c0x00ffffff-no-rj',

			title: "Як зам Генпрокурорки пов'язаний з кримінальним світом?",
			chanel: 'AcademeG',
			time: '27 тыс. просмотров 16 минут назад',
		},
		{
			imgSrc:
				' https://i.ytimg.com/vi/D8RONluiy8s/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA95BgV8s8NFmNG2vTNM6FJu8onRg',
			imgChanel:
				'https://yt3.ggpht.com/fR2SqzMp59Pfm9AU6giI3pk6YzhxV8lvB6T9TELvEFVx8Mrlazbg1w62NzmeAiyrWh-WfSL_=s68-c-k-c0x00ffffff-no-rj',

			title:
				'Authentication App with Google & Github Login - Next.js For Beginners [#8] - Register Form',
			chanel: 'Daily Tuition',
			time: '644 просмотра 7 дней назад',
		},
		{
			imgSrc:
				'https://i.ytimg.com/an_webp/-_X6PhkjpzU/mqdefault_6s.webp?du=3000&sqp=CN7uzpgG&rs=AOn4CLAMrsbclu--VPnre1-faFLQDoJlWA',
			imgChanel:
				'https://yt3.ggpht.com/fR2SqzMp59Pfm9AU6giI3pk6YzhxV8lvB6T9TELvEFVx8Mrlazbg1w62NzmeAiyrWh-WfSL_=s68-c-k-c0x00ffffff-no-rj',

			title: '5 Front-end Development Skills to Land Your First Job',
			time: '644 просмотра 7 дней назад',
		},
		{
			imgSrc:
				'https://i.ytimg.com/vi/6HTsAT4fCoc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB1CWqJaK5hNb6ac1y4ZrHiPbILHQ',
			imgChanel:
				'https://yt3.ggpht.com/fR2SqzMp59Pfm9AU6giI3pk6YzhxV8lvB6T9TELvEFVx8Mrlazbg1w62NzmeAiyrWh-WfSL_=s68-c-k-c0x00ffffff-no-rj',

			title: "Як зам Генпрокурорки пов'язаний з кримінальним світом?",
			chanel: 'AcademeG',
			time: '27 тыс. просмотров 16 минут назад',
		},
		{
			imgSrc:
				' https://i.ytimg.com/vi/D8RONluiy8s/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA95BgV8s8NFmNG2vTNM6FJu8onRg',
			imgChanel:
				'https://yt3.ggpht.com/fR2SqzMp59Pfm9AU6giI3pk6YzhxV8lvB6T9TELvEFVx8Mrlazbg1w62NzmeAiyrWh-WfSL_=s68-c-k-c0x00ffffff-no-rj',

			title:
				'Authentication App with Google & Github Login - Next.js For Beginners [#8] - Register Form',
			chanel: 'Daily Tuition',
			time: '644 просмотра 7 дней назад',
		},
		{
			imgSrc:
				'https://i.ytimg.com/an_webp/-_X6PhkjpzU/mqdefault_6s.webp?du=3000&sqp=CN7uzpgG&rs=AOn4CLAMrsbclu--VPnre1-faFLQDoJlWA',
			imgChanel:
				'https://yt3.ggpht.com/fR2SqzMp59Pfm9AU6giI3pk6YzhxV8lvB6T9TELvEFVx8Mrlazbg1w62NzmeAiyrWh-WfSL_=s68-c-k-c0x00ffffff-no-rj',

			title: '5 Front-end Development Skills to Land Your First Job',
			time: '644 просмотра 7 дней назад',
		},
		{
			imgSrc:
				'https://i.ytimg.com/vi/6HTsAT4fCoc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB1CWqJaK5hNb6ac1y4ZrHiPbILHQ',
			imgChanel:
				'https://yt3.ggpht.com/fR2SqzMp59Pfm9AU6giI3pk6YzhxV8lvB6T9TELvEFVx8Mrlazbg1w62NzmeAiyrWh-WfSL_=s68-c-k-c0x00ffffff-no-rj',

			title: "Як зам Генпрокурорки пов'язаний з кримінальним світом?",
			chanel: 'AcademeG',
			time: '27 тыс. просмотров 16 минут назад',
		},
		{
			imgSrc:
				' https://i.ytimg.com/vi/D8RONluiy8s/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA95BgV8s8NFmNG2vTNM6FJu8onRg',
			imgChanel:
				'https://yt3.ggpht.com/fR2SqzMp59Pfm9AU6giI3pk6YzhxV8lvB6T9TELvEFVx8Mrlazbg1w62NzmeAiyrWh-WfSL_=s68-c-k-c0x00ffffff-no-rj',

			title:
				'Authentication App with Google & Github Login - Next.js For Beginners [#8] - Register Form',
			chanel: 'Daily Tuition',
			time: '644 просмотра 7 дней назад',
		},
		{
			imgSrc:
				'https://i.ytimg.com/an_webp/-_X6PhkjpzU/mqdefault_6s.webp?du=3000&sqp=CN7uzpgG&rs=AOn4CLAMrsbclu--VPnre1-faFLQDoJlWA',
			imgChanel:
				'https://yt3.ggpht.com/fR2SqzMp59Pfm9AU6giI3pk6YzhxV8lvB6T9TELvEFVx8Mrlazbg1w62NzmeAiyrWh-WfSL_=s68-c-k-c0x00ffffff-no-rj',

			title: '5 Front-end Development Skills to Land Your First Job',
			time: '644 просмотра 7 дней назад',
		},
		{
			imgSrc:
				'https://i.ytimg.com/vi/6HTsAT4fCoc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB1CWqJaK5hNb6ac1y4ZrHiPbILHQ',
			imgChanel:
				'https://yt3.ggpht.com/fR2SqzMp59Pfm9AU6giI3pk6YzhxV8lvB6T9TELvEFVx8Mrlazbg1w62NzmeAiyrWh-WfSL_=s68-c-k-c0x00ffffff-no-rj',

			title: "Як зам Генпрокурорки пов'язаний з кримінальним світом?",
			chanel: 'AcademeG',
			time: '27 тыс. просмотров 16 минут назад',
		},
		{
			imgSrc:
				' https://i.ytimg.com/vi/D8RONluiy8s/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA95BgV8s8NFmNG2vTNM6FJu8onRg',
			imgChanel:
				'https://yt3.ggpht.com/fR2SqzMp59Pfm9AU6giI3pk6YzhxV8lvB6T9TELvEFVx8Mrlazbg1w62NzmeAiyrWh-WfSL_=s68-c-k-c0x00ffffff-no-rj',

			title:
				'Authentication App with Google & Github Login - Next.js For Beginners [#8] - Register Form',
			chanel: 'Daily Tuition',
			time: '644 просмотра 7 дней назад',
		},
		{
			imgSrc:
				'https://i.ytimg.com/an_webp/-_X6PhkjpzU/mqdefault_6s.webp?du=3000&sqp=CN7uzpgG&rs=AOn4CLAMrsbclu--VPnre1-faFLQDoJlWA',
			imgChanel:
				'https://yt3.ggpht.com/fR2SqzMp59Pfm9AU6giI3pk6YzhxV8lvB6T9TELvEFVx8Mrlazbg1w62NzmeAiyrWh-WfSL_=s68-c-k-c0x00ffffff-no-rj',

			title: '5 Front-end Development Skills to Land Your First Job',
			time: '644 просмотра 7 дней назад',
		},
		{
			imgSrc:
				'https://i.ytimg.com/vi/6HTsAT4fCoc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB1CWqJaK5hNb6ac1y4ZrHiPbILHQ',
			imgChanel:
				'https://yt3.ggpht.com/fR2SqzMp59Pfm9AU6giI3pk6YzhxV8lvB6T9TELvEFVx8Mrlazbg1w62NzmeAiyrWh-WfSL_=s68-c-k-c0x00ffffff-no-rj',

			title: "Як зам Генпрокурорки пов'язаний з кримінальним світом?",
			chanel: 'AcademeG',
			time: '27 тыс. просмотров 16 минут назад',
		},
		{
			imgSrc:
				' https://i.ytimg.com/vi/D8RONluiy8s/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA95BgV8s8NFmNG2vTNM6FJu8onRg',
			imgChanel:
				'https://yt3.ggpht.com/fR2SqzMp59Pfm9AU6giI3pk6YzhxV8lvB6T9TELvEFVx8Mrlazbg1w62NzmeAiyrWh-WfSL_=s68-c-k-c0x00ffffff-no-rj',

			title:
				'Authentication App with Google & Github Login - Next.js For Beginners [#8] - Register Form',
			chanel: 'Daily Tuition',
			time: '644 просмотра 7 дней назад',
		},
		{
			imgSrc:
				'https://i.ytimg.com/an_webp/-_X6PhkjpzU/mqdefault_6s.webp?du=3000&sqp=CN7uzpgG&rs=AOn4CLAMrsbclu--VPnre1-faFLQDoJlWA',
			imgChanel:
				'https://yt3.ggpht.com/fR2SqzMp59Pfm9AU6giI3pk6YzhxV8lvB6T9TELvEFVx8Mrlazbg1w62NzmeAiyrWh-WfSL_=s68-c-k-c0x00ffffff-no-rj',

			title: '5 Front-end Development Skills to Land Your First Job',
			time: '644 просмотра 7 дней назад',
		},
	]
	return (
		<section className='relative  z-10    pt-10    '>
			<ul className='   pt-5 grid   gap-4 sm:px-25 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 md:pl-32 px-20  xl:pl-64'>
				{items.map((item, index) => (
					<li key={index}>
						<div className=' w-full flex  flex-col group hover:cursor-pointer'>
							<div className='relative'>
								<img
									src={`https://picsum.photos/id/${index + 20 * 3}/720/400`}
									alt=''
								/>
								<span className=' opacity-0 group-hover:opacity-100 bg-opacity-60 absolute p-1 top-2 right-0 mr-1  bg-black text-white rounded-sm'>
									{/*time*/}
									<svg
										className='w-5 h-5'
										fill='none'
										stroke='currentColor'
										viewBox='0 0 24 24'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											stroke-linecap='round'
											stroke-linejoin='round'
											stroke-width='2'
											d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
										></path>
									</svg>
								</span>
								<span className='absolute opacity-0 group-hover:opacity-100 bg-opacity-60 p-1 top-10 right-0 mr-1   bg-black text-white rounded-sm'>
									<svg
										className='w-5 h-5'
										fill='none'
										stroke='currentColor'
										viewBox='0 0 24 24'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											stroke-linecap='round'
											stroke-linejoin='round'
											stroke-width='2'
											d='M4 6h16M4 12h16M4 18h7'
										></path>
									</svg>
								</span>
								<span className='opacity-100 group-hover:opacity-0 duration-500 bg-opacity-60 absolute text-xs p-1 semi-bold bottom-1 right-0 mr-1  bg-black text-white rounded-sm'>
									6:34
								</span>
							</div>

							<div className='flex gap-3 py-2'>
								<img
									className='w-[36px] h-[36px] rounded-full'
									src={`https://picsum.photos/id/${index + 4 * 3}/720/400`}
									alt=''
								/>
								<div className='flex flex-col'>
									<span className='text-xl '>{item.title}</span>
									<span>{item.chanel}</span>
									<span className='text-s'>{item.time}</span>
								</div>
							</div>
						</div>
					</li>
				))}
			</ul>
		</section>
	)
}

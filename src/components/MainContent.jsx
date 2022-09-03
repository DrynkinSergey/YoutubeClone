import React from 'react'

export const MainContent = () => {
	const items = [
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
		<section className='relative z-0 main  pt-10  ml-64 '>
			<ul className='grid  grid-cols-4 gap-5 px-20  pt-5 bg-gray-100'>
				{items.map((item, index) => (
					<li key={index}>
						<div className='w-full flex flex-col '>
							<img src={item.imgSrc} alt='' />
							<div className='flex gap-3 py-2'>
								<img
									className='w-[36px] h-[36px]'
									src={item.imgChanel}
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

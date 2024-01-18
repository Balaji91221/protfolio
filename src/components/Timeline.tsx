export default function Timeline(){

    const DATA = [
     
        {
          date: <>November 2021 - August 2023</>,
          work: <>CSI(Computer Society of India)</>,
          desc: 'VProject Lead',
          info: []
      },
        {
            date: <>December 2021 - December 2025 <div className="inline-block ml-2 px-2 py-1 rounded-full bg-green-500 text-white text-xs font-semibold">Ongoing</div> </>,
            work: <><span className="hidden md:inline">Vellore Institute of Technology , Amaravati</span><span className="md:hidden">VIT-AP</span>, Andhra Pradesh</>,
            desc: ' B.Tech in Computer Science and Engineering with specialization(AI/ML), CGPA: 8.7',
            info: []
        },
        {
            date: 'May 2020-May 2021',
            work: 'Sri Sai Krupa junior college, Dharmavaram',
            desc: 'Intermediate',
            info: []
        },
        {
            date: 'March 2019',
            work: 'AP Model School, Dharmavaram',
            desc: 'Secondary School Certificate',
            info: []
        },
    ]


    return(
        <div className="pt-16 lg:pt-32 px-4 lg:px-12">
        <div className="text-center">
          <h1 className="flex flex-col font-black leading-none text-Balaji-700 uppercase font-bebas-neue sm:text-8xl dark:text-Balaji-200">
            <span className="text-3xl sm:text-5xl">TIMELINE</span>
          </h1>
        </div>
        <div className="pt-4 mx-12 lg:mx-60">
        <ol className="relative border-l border-Balaji-200 dark:border-Balaji-700"> 
        {
            DATA.map(({date, work, desc, info}, index) => <li className={`${index !== DATA.length-1 ? 'mb-10' : ''} ml-4`} key={index}>
            <div className="absolute w-3 h-3 bg-Balaji-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-Balaji-900 dark:bg-Balaji-700" />
            <time className="mb-1 text-sm font-normal leading-none text-Balaji-400 dark:text-Balaji-500">{date}</time>
            <h3 className="text-lg font-semibold text-Balaji-900 dark:text-white">{work}</h3>
            <p className="mb-4 text-base font-normal text-Balaji-500 dark:text-Balaji-400">{desc}</p>
            { (info.length > 0) && <a href={info[1]} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 text-sm font-medium text-Balaji-900 bg-white border border-Balaji-200 rounded-lg hover:bg-Balaji-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-Balaji-200 focus:text-blue-700 dark:bg-Balaji-800 dark:text-Balaji-400 dark:border-Balaji-600 dark:hover:text-white dark:hover:bg-Balaji-700 dark:focus:ring-Balaji-700">{info[0]}<svg className="w-3 h-3 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg></a>}
          </li>)
        }                 
      </ol>
      </div>
      </div>
    )
}
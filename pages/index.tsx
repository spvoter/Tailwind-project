import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {

<div></div>
  return (
    
    <div className="">
      <Head>
        <title>In progress of making a replica</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='flex flex-row justify-evenly flex-grow-5 p-5'>
        <img src='/morda.jpeg' className='w-10 h-10 object-cover rounded-full .py-40'></img>
        <a className='text-lg py-2'><p>CONTACT</p></a>
        <a className='text-lg py-2'><p>ABOUT</p></a>
        <a className='text-lg py-2'><p>PROJECTS</p></a>
      </div>

      <main className='m-10 justify-center text-center'>
        <p className='text-1xl p-4 pt-12 font-thin uppercase'> Let's p o o p</p>
        <h1 className="text-6xl pb-5 font-bold">
          Hi, I'm <span className='text-orange-600'>Tadek</span>
        </h1>

        <h2 className='text-6xl pt-5 font-bold'>
          I want to be A Front-End Web Developer
        </h2>
        <p className='text-1xl p-4 font-thin uppercase'>Seriously let's poop party people doing a slam doonk from the ol' pooper</p>

        <div className='flex flex-row justify-center pt-5'>

          <a><div className='m-8 p-3 rounded-full bg-gray-100 shadow-xl shadow-gray-300 cursor-pointer hover:scale-125 ease in duration-200'><img src='linkedin.svg'></img></div></a>

          <a><div className='m-8 p-3 rounded-full bg-gray-100 shadow-xl shadow-gray-300 cursor-pointer hover:scale-125 ease in duration-200'><img src='github.svg'></img></div></a>

          <a><div className='m-8 p-3 rounded-full bg-gray-100 shadow-xl shadow-gray-300 cursor-pointer hover:scale-125 ease in duration-200'><img src='mail.svg'></img></div></a>

          <a><div className='m-8 p-3 rounded-full bg-gray-100 shadow-xl shadow-gray-300 cursor-pointer hover:scale-125 ease in duration-200'><img src='guy.svg'></img></div></a>

        </div>
      </main>
    </div>
  )
}

export default Home

import React from 'react'
import Header from '../components/Header'
import { FaFacebookF } from 'react-icons/fa'
import client from '../assets/images/client.jpg'
import client1 from '../assets/images/client1.jpg'
import client2 from '../assets/images/client2.jpg'
import client3 from '../assets/images/client3.jpg'
import client4 from '../assets/images/client4.jpg'
import OurChart from '../components/OurChart'

const Main = () => {
  return (
    <section className="w-full flex-1 bg-white h-screen overflow-y-auto flex flex-col justify-start items-center gap-2 p-4">
      <Header />

      {/* Main section starts here */}
      <div id="main-section" className="grid lg:grid-cols-3 grid-cols-1 gap-4 w-full p-4">
        <div id="left" className="col-span-2 p-2 gap-3 flex flex-col justify-between items-center h-full">

          {/* Three grid layout */}
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 w-full mb-4">

            {/* Card 1 */}
            <div className="w-full flex flex-col justify-center items-start bg-blue-200 p-5 rounded-xl gap-5 transition-transform transform hover:rotate-[-5deg] hover:scale-105 cursor-pointer">
              <div className="w-full flex justify-between items-center">
                <h1 className="text-md text-black font-semibold">Facebook</h1>
                <h1 className="text-green-600 font-semibold">+21.75%</h1>
              </div>
              <div className="w-full flex justify-between items-center">
                <div className="flex flex-col justify-center items-start gap-1">
                  <h1 className="text-3xl text-black font-semibold">10,328</h1>
                  <p className="text-slate-700">Followers</p>
                </div>
                <div className="bg-blue-400 hover:bg-blue-500 text-white p-3 rounded-full">
                  <FaFacebookF className="w-[30px] h-[30px]" />
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="w-full flex flex-col justify-center items-start bg-red-200 p-5 rounded-xl gap-5 transition-transform transform hover:rotate-[-5deg] hover:scale-105 cursor-pointer">
              <div className="w-full flex justify-between items-center">
                <h1 className="text-md text-black font-semibold">Instagram</h1>
                <h1 className="text-green-600 font-semibold">+15.25%</h1>
              </div>
              <div className="w-full flex justify-between items-center">
                <div className="flex flex-col justify-center items-start gap-1">
                  <h1 className="text-3xl text-black font-semibold">23,328</h1>
                  <p className="text-slate-700">Followers</p>
                </div>
                <div className="bg-red-400 hover:bg-red-500 text-white p-3 rounded-full">
                  <FaFacebookF className="w-[30px] h-[30px]" />
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="w-full flex flex-col justify-center items-start bg-green-200 p-5 rounded-xl gap-5 transition-transform transform hover:rotate-[-5deg] hover:scale-105 cursor-pointer">
              <div className="w-full flex justify-between items-center">
                <h1 className="text-md text-black font-semibold">Twitter</h1>
                <h1 className="text-green-600 font-semibold">+12.40%</h1>
              </div>
              <div className="w-full flex justify-between items-center">
                <div className="flex flex-col justify-center items-start gap-1">
                  <h1 className="text-3xl text-black font-semibold">34,328</h1>
                  <p className="text-slate-700">Followers</p>
                </div>
                <div className="bg-green-400 hover:bg-green-500 text-white p-3 rounded-full">
                  <FaFacebookF className="w-[30px] h-[30px]" />
                </div>
              </div>
            </div>

          </div>
          {/* Three grid layout ends */}

            <OurChart />
        </div>
          {/* left section ends here */}
          {/* right sections starts from here  */}
          <div id='right' className="p-2 flex flex-col justify-center items-center gap-4 h-full">
          <div id='top' className="bg-slate-100 p-8 w-full rounded-xl flex flex-col justify-center items-center gap-6 h-fit">
            <div id='image-box' className="w-full flex flex-col justify-center items-center gap-4">
              <img src={client} alt="client-image" className='rounded-full w-[100px] h-[100px]' />
              <div className="flex flex-col justify-center items-center">
                <h1 className="text-black font-bold text-2xl">abc</h1>
                <p className="text-slate-700 text-lg">abc_de</p>
              </div>
            </div>

            <div id='followers-info' className="flex justify-between items-center gap-8 w-full">
              <div className="flex flex-col justify-center items-start">
                <h1 className='text-2xl text-black font-semibold'>193</h1>
                <p>Posts</p>
              </div>
              <div className="flex flex-col justify-center items-start">
                <h1 className='text-2xl text-black font-semibold'>17,536</h1>
                <p>Folowers</p>
              </div>
              <div className="flex flex-col justify-center items-start">
                <h1 className='text-2xl text-black font-semibold'>274</h1>
                <p>Following</p>
              </div>
            </div>
            </div>

            <div id='bottom' className="bg-black w-full h-full p-6 rounded-xl flex flex-col justify-center items-center gap-8">
              <div className="flex md:flex-row flex-col justify-between items-center w-full gap-2">
                <h1 className='text-white text-md'>Facebook Compaign</h1>
                <button className="bg-green-600 text-white px-6 py-1 rounded-xl cursor-pointer text-md">Active</button>
              </div>

              <div className="flex justify-between items-center w-full h-fit flex-col md:flex-row gap-4">
                <div className="flex flex-col justify-center items-center w-full gap-2">
                  <h1 className="text-white text-2xl font-bold">1,129</h1>
                  <p className='text-slate-200 text-sm'>Followers Today</p>
                </div>
                <div className="flex flex-col justify-center items-center w-full gap-2">
                  <h1 className="text-white text-2xl font-bold">50,000</h1>
                  <p className='text-slate-200 text-sm'>Followers Goals</p>
                </div>
                <div className="flex flex-col justify-center items-center w-full gap-2">
                  <h1 className="text-white text-2xl font-bold">10,000</h1>
                  <p className='text-slate-200 text-sm'>Followers online</p>
                </div>
              </div>

                <div className="flex md:flex-row flex-col justify-between items-center w-full">
                  <div className="flex -space-x-4 rt1:space-x-reverse w-full md:justify-start justify-center items-start">
                    <img src={client1} alt="client image" className="w-10 h-10 border-2 border-white rounded-full" />
                    <img src={client2} alt="client image" className="w-10 h-10 border-2 border-white rounded-full" />
                    <img src={client3} alt="client image" className="w-10 h-10 border-2 border-white rounded-full" />
                    <img src={client2} alt="client image" className="w-10 h-10 border-2 border-white rounded-full" />
                    <img src={client1} alt="client image" className="w-10 h-10 border-2 border-white rounded-full" />
                    <img src={client3} alt="client image" className="w-10 h-10 border-2 border-white rounded-full" />
                    <img src={client2} alt="client image" className="w-10 h-10 border-2 border-white rounded-full" />
                    <img src={client1} alt="client image" className="w-10 h-10 border-2 border-white rounded-full" />
                  </div>

                  <div className="flex flex-col justify-center items-center gap-1">
                    <h1 className="text-white text-xl font-bold">+7,294</h1>
                    <p className="text-slate-200 text-sm">All Time</p>
                  </div>
                </div>

            </div>

          </div>

      </div>
    </section>
  )
}

export default Main

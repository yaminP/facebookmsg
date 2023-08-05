import Image from 'next/image'
import RootLayout from '../../components/layout'
import Link from 'next/link'
import FacebookMsg from '../../components/FacebookMsg'

export default function Home() {
  return (
    <RootLayout>
      <div className="relative min-w-min h-96 overflow-hidden mb-24">
        <img className='w-full ' src="/asset/img/banner1.jpg" alt="" />
        <div className='absolute top-[40%] left-[10%]'>
          <h1 className="font-extrabold font-mono text-7xl bg-clip-text bg-gradient-to-r from-pink-900 via-cyan-600 to-teal-500 text-transparent">Me Service</h1>
        </div>
      </div>
      <div className='container mx-auto'>
        <div className='flex flex-row justify-center gap-10'>
          <div className='text-blue-900  p-3 border-r-2'>
            <Link href='' className='flex items-center'>
              <img className='w-24' src="/asset/img/responsive.png" alt="" />
              <span className='ml-5'>Product</span>
            </Link>
          </div>
          <div className='text-blue-900 flex items-center p-3 border-r-2'>
            <img className='w-24' src="/asset/img/customer-service.png" alt="" />
            <span className='ml-5'>Product</span>
          </div>

          <div className='text-blue-900 flex items-center p-3s'>
            <img className='w-24' src="/asset/img/support.png" alt="" />
            <span className='ml-5'>Product</span>
          </div>
        </div>
      </div>
      <FacebookMsg/>
    </RootLayout>
  )
}

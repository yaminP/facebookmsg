import Image from 'next/image'
import RootLayout from '../components/layout'
import Link from 'next/link'

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

      <div className='container mx-auto my-10'>
        <p>
          What is artificial intelligence?
          Hear the term artificial intelligence (AI) and you might think of self-driving cars, robots, ChatGPT or other AI chatbots, and artificially created images. But its also important to look behind the outputs of AI and understand how the technology works and its impacts for this and future generations.

          AI is a concept that has been around, formally, since the 1950s, when it was defined as a machines ability to perform a task that wouldve previously required human intelligence. This is quite a broad definition and one that has been modified over decades of research and technological advancements.

          When you consider assigning intelligence to a machine, such as a computer, it makes sense to start by defining the term intelligence -- especially when you want to determine if an artificial system is truly deserving of it.
        </p>

        <p>
          ปัญญาประดิษฐ์คืออะไร?
          เมื่อได้ยินคำว่าปัญญาประดิษฐ์ (AI) แล้วคุณอาจนึกถึงรถยนต์ที่ขับเคลื่อนด้วยตนเอง หุ่นยนต์ ChatGPT หรือแชทบอท AI อื่นๆ และรูปภาพที่สร้างขึ้นโดยมนุษย์ แต่สิ่งสำคัญคือต้องดูเบื้องหลังผลลัพธ์ของ AI และทำความเข้าใจว่าเทคโนโลยีทำงานอย่างไรและผลกระทบที่มีต่อคนรุ่นนี้และรุ่นต่อๆ ไป

          AI เป็นแนวคิดที่มีมาอย่างเป็นทางการตั้งแต่ทศวรรษ 1950 เมื่อถูกกำหนดให้เป็นความสามารถของเครื่องจักรในการทำงานที่ก่อนหน้านี้ต้องใช้สติปัญญาของมนุษย์ นี่เป็นคำจำกัดความที่ค่อนข้างกว้างและได้รับการแก้ไขตลอดทศวรรษของการวิจัยและความก้าวหน้าทางเทคโนโลยี

          เมื่อคุณพิจารณากำหนดความฉลาดให้กับเครื่องจักร เช่น คอมพิวเตอร์ คุณควรเริ่มต้นด้วยการกำหนดคำว่า ความฉลาด โดยเฉพาะอย่างยิ่งเมื่อคุณต้องการพิจารณาว่าระบบประดิษฐ์นั้นสมควรได้รับมันจริง ๆ หรือไม่
        </p>
      </div>


    </RootLayout>
  )


}

import Image from 'next/image'

export default function Home() {
  return (
    <div className='w-full h-full bg-white shadow p-4 flex flex-col gap-5 '>
      <div className='relative h-full w-full'>
        <div className='absolute top-1/2 left-0 -translate-y-1/2 w-full flex items-center justify-between gap-10'>
          <div className=''>
            <div className='text-4xl font-medium text-gray-700'>
              Innovating the World with Latest Technology
            </div>
            <div className='text-lg font-normal text-gray-600'>
              Working with close collaboration with I&Eye
            </div>
          </div>
          <div className='flex-1 w-full'>
            <img src="https://img.freepik.com/free-vector/online-tutorials-concept_52683-37480.jpg?w=2000" className='wfull' />
          </div>
        </div>

      </div>
    </div>
  )
}

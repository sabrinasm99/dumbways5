import Head from "next/head";

export default function Home() {
  return (
    <React.Fragment>
    <Head>
      <title>DWTube</title>
      <div className='px-10 pt-3 h-full'>
        <div className='flex'>
          <h2 className='text-orange-500 text-3xl font-bold'>DWTube</h2>
          <div className='ml-auto p-1 flex items-center'>
            <button className='bg-orange-500 text-white px-1 rounded-md focus:outline-none'>Add Video</button>
            </div>
          <div className='p-1 flex items-center'>
            <button className='bg-orange-500 text-white px-1 rounded-md focus:outline-none'>Add Category</button>
          </div>
        </div>
        <div className='grid grid-cols-4 gap-5 mt-5'>
          <div className='border border-gray-700 rounded-md p-1'>
            <div className='text-lg'>Judul Video</div>
            <div className='text-xs text-gray-600'>Category: Komedi</div>
          </div>
          <div className='border border-gray-700 rounded-md p-1'>
            <div className='text-lg'>Judul Video</div>
            <div className='text-xs text-gray-600'>Category: Komedi</div>
          </div>
          <div className='border border-gray-700 rounded-md p-1'>
            <div className='text-lg'>Judul Video</div>
            <div className='text-xs text-gray-600'>Category: Komedi</div>
          </div>
          <div className='border border-gray-700 rounded-md p-1'>
            <div className='text-lg'>Judul Video</div>
            <div className='text-xs text-gray-600'>Category: Komedi</div>
          </div>
          <div className='border border-gray-700 rounded-md p-1'>
            <div className='text-lg'>Judul Video</div>
            <div className='text-xs text-gray-600'>Category: Komedi</div>
          </div>
        </div>
      </div>
    </Head>
    </React.Fragment>

  );
}

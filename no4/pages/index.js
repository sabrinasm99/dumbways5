import Head from "next/head";
import Modal from "react-modal";
import {Formik} from "formik";
import Axios from "axios";
import Link from 'next/link';

Modal.setAppElement("#main");
export default function Home() {
  const [modal, setModal] = React.useState(false);
  const [modalCat, setModalCat] = React.useState(false);

  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    ((async function(){
      const res = await Axios.get('/api/video');
      setData(res.data);
      // console.log(res);
    })())
  }, [])
  return (
    <React.Fragment>
      <Head>
        <title>DWTube</title>
      </Head>
      <div id="main">
      <Modal 
      isOpen={modalCat}  style={{
        overlay: {
          position: 'fixed',
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.75)'
        }, 
      
        content: {
          position: 'static',
          width:'50%',
          // top: '50%',
          // left: '50%',
          // right: '40px',
          // bottom: '40px',
          // border: '1px solid #ccc',
          // background: '#fff',
          // overflow: 'auto',
          // width:'50%',
          // transform: 'translate(-50%, -50%)',
          // WebkitOverflowScrolling: 'touch',
          // borderRadius: '4px',
          // outline: 'none',
          padding: '20px'
        }}}  
          // className='absolute w-1/2 m-auto bg-white'
         onRequestClose={() => {setModalCat(false)}}>
      <div>
        <h4 className='text-2xl font-semibold'>Add Kategori</h4>
      <Formik 
      enableReinitialize={true}
      initialValues={{name: ''}} 
      onSubmit={(values, {setSubmitting}) => {
        

        Axios.post('/api/video', values).then(res => {
          console.log(res.data)
          setModalCat(false)
        }).catch(e => {
          console.log(e)
        })
        
        setSubmitting(false)
      }}
      >
        {({values, handleChange, handleBlur, setFieldValue, handleSubmit, isSubmitting}) => (
          <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor='name' className='block'>Name</label>
                <input 
                type="text"
                id='name'
                name='name'
                value={values.title}
                onChange={handleChange} 
                className="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4"/>
              </div>
              <button 
              type='submit'
              className='text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg'
              >
                Masukkan
              </button>
          </form>
        ) }
      </Formik>
      </div>
      
      </Modal>
        
      <Modal 
      isOpen={modal}  style={{
        overlay: {
          position: 'fixed',
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.75)'
        }, 
      
        content: {
          position: 'static',
          width:'50%',
          // top: '50%',
          // left: '50%',
          // right: '40px',
          // bottom: '40px',
          // border: '1px solid #ccc',
          // background: '#fff',
          // overflow: 'auto',
          // width:'50%',
          // transform: 'translate(-50%, -50%)',
          // WebkitOverflowScrolling: 'touch',
          // borderRadius: '4px',
          // outline: 'none',
          padding: '20px'
        }}}  
          // className='absolute w-1/2 m-auto bg-white'
         onRequestClose={() => {setModal(false)}}>
      <div>
        <h4 className='text-2xl font-semibold'>Add Video</h4>
      <Formik 
      enableReinitialize={true}
      initialValues={{title: '', category_id:'', attache: '', thumbnail: ''}} 
      onSubmit={(values, {setSubmitting}) => {
        let formData = new FormData();
        formData.append('title', values.title);
        formData.append('category_id', values.category_id);
        formData.append('attacheFile', values.attache);
        formData.append('thumbnailFile', values.thumbnail);
        formData.append('attache', values.attache.name);
        formData.append('thumbnail', values.thumbnail.name);
        console.log(values)

        Axios.post('/api/video', formData).then(res => {
          console.log(res.data)
          Axios.get('/api/video').then(res => {
            setData(res.data)
          });
          setModal(false)
        }).catch(e => {
          console.log(e)
        })
        
        setSubmitting(false)
      }}
      >
        {({values, handleChange, handleBlur, setFieldValue, handleSubmit, isSubmitting}) => (
          <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor='title' className='block'>Title</label>
                <input 
                type="text"
                id='title'
                name='title'
                value={values.title}
                onChange={handleChange} 
                className="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4"/>
              </div>
              <div>
              <label htmlFor='category_id' className='block'>Category ID</label>

                <input 
                type='number'
                name='category_id'
                id='category_id'
                value={values.category_id}
                onChange={handleChange} 
                className="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4"/>
              </div>
              <div>
              <label htmlFor='attache' className='block'>Attach Video</label>
                
                <input 
                type='file'
                name='attache'
                id='attache'
                // value={values.attache}
                onChange={(e) => {
                  console.log(e.currentTarget.files);
                  setFieldValue('attache', e.currentTarget.files[0])
                }} 
                className="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4"/>
              </div>
              <div>
              <label htmlFor='thumbnail' className='block'>Upload Thumbnail</label>
                <input 
                type='file'
                name='thumbnail'
                id='thumbnail'
                // value={values.thumbnail}
                onChange={(e) => {
                  setFieldValue('thumbnail', e.currentTarget.files[0])
                }} 
                className="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4"/>
              </div>
              <button 
              type='submit'
              className='text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg'
              >
                Masukkan
              </button>
          </form>
        ) }
      </Formik>
      </div>
      
      </Modal>
        <div className="px-10 pt-3 h-full">
          <div className="flex">
            <h2 className="text-orange-500 text-3xl font-bold">DWTube</h2>
            <div className="ml-auto p-1 flex items-center">
              <button onClick={() => {
                setModal(true)
              }} className="bg-orange-500 text-white px-1 rounded-md focus:outline-none">
                Add Video
              </button>
            </div>
            <div className="p-1 flex items-center">
              <button onClick={() => setModalCat(true)}className="bg-orange-500 text-white px-1 rounded-md focus:outline-none">
                Add Category
              </button>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-5 mt-5">
            {data.length > 0 ? data.map(val => {
              return (
                <div key={val.id} className="border border-gray-700 rounded-md p-1">
                  <Link href='/video/[id].js' as={`/video/${val.id}`}>
                    <div>
                      <img src={`/image/${val.thumbnail}`} />
                      <div className="text-lg">{val.title}</div>
                      <div className="text-xs text-gray-600">Category: {val.kategori}</div>
                    </div>
                  </Link>
                </div>
              )
            }) : null}
            
            
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

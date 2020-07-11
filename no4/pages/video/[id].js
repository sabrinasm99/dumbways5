import React, { useState } from 'react'
import {useRouter} from 'next/router';
import Axios from 'axios';
import dynamic from 'next/dynamic';
import { validateYupSchema } from 'formik';

function Index() {
    const [data, setData] = useState({})
    const [complete, setComplete] = useState(false)
    const router = useRouter();

    React.useEffect(() => {
        (async function(){
            const res = await Axios.get('/api/video/' + router.query.id);
            setData(res.data);
            setComplete(true);
        })();
    }, [])
    console.log(data.attache)
    return (
        <div id='main'>
            {setComplete ? 
                <React.Fragment>
             {/* <video width="320" height="240" controls> */}
            {/* <source src={'/video/Big_Buck_Bunny_360_10s_1MB.mp4'} type="video/mp4" /> */}
            {/* <source src="movie.ogg" type="video/ogg"> */}

            {/* </video> */}
            <img src={'/image/' + data.attache} />
            {data.title}
            {/* {data.kategori} */}
            <button 
            className='bg-red-500 text-white p-2'
            onClick={
                async () => {
                    await Axios.delete('/api/video/' + router.query.id);
                    router.replace('/');
                }
            }>
                Delete
            </button>
                </React.Fragment>

                :
                null
            }
            
        </div>
    )
}

export default dynamic(() => Promise.resolve(Index), {ssr: false})

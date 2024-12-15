import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext';
import Spinner from "./Spinner";

const Blogs = () => {

  //consume
  const {loading, posts} = useContext(AppContext);

  return (
    <div className='my-16 justify-center items-center w-full overflow-x-hidden'>
        
        {
          loading ? (<Spinner />) : 
          (
            posts.length === 0 ? (
              <div>
                <p>No Post Found</p>
              </div>
            ) : 
            (
              posts.map( (post) => (
                
                <div key={post.id} className='flex flex-col my-8 mx-auto w-11/12 md:w-10/12 lg:w-[45%]'>
                  <h1 className='text-xl font-bold mb-2 '>{post.title}</h1>
                  <p>By <span className='font-mono'>{post.author}</span> on <span className=' underline font-bold'>{post.category}</span> </p>
                  <p>Posted on {post.date} </p>

                  <p className='mt-3 text-base font-normal font-serif'>{post.content} </p>
                  <div className='flex flex-wrap gap-2 '>
                    {post.tags.map( (tag, index) => {
                      return <span key={index} className='text-blue-800 underline font-semibold text-xs mt-[5px]'>#{tag}</span>
                    })}
                  </div>
                </div>
              ))
            )
          )
        }


    </div>
  )
}

export default Blogs;

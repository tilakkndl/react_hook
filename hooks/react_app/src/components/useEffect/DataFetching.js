import React, {useEffect, useState} from 'react'

const DataFetching = () => {
    const [post, setPost] = useState([])
    const [id, setId] = useState(1)
    const [idFromButtonClick, setIdFromButtonClick] = useState(1)
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response=>response.json())
        .then(data=>{
            console.log(data)
            setPost(data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[idFromButtonClick])
  return (
    <div>
        <input type="text" value={id} onChange={e=>setId(e.target.value)}/>
        <button onClick={()=>setIdFromButtonClick(id)}>Fetch Post</button>
{/* {posts.map(post=><div key={post.id}>{post.title}</div>)} */}
        <div>{post.title}</div>
    </div>
  )
}

export default DataFetching
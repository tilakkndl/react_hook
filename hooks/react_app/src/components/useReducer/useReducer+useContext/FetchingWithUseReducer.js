import React, {useReducer, useEffect} from 'react'

const initialState = {
  loading: true,
  error: '',
  post: {}
}

const reducer =(state, action)=>{
    switch(action.type){
        case 'FETCH_SUCCESS':
        return {
            loading: false,
            post: action.payload,
            error: ''
        }
        case 'FETCH_ERROR':
        return {
            loading: false,
            post: {},
            error: 'Something went wrong!'
        }
        default:
        return state
    }
}

const FetchingWithUseReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response=>response.json())
        .then(data=>{
            dispatch({type: 'FETCH_SUCCESS', payload: data})
        })
        .catch(error=>{
            dispatch({type: 'FETCH_ERROR'})
        })
    
    })
  return (
    <div>
        <div>{state.loading?"Loading": state.post.title}</div>
        <div>{state.error?state.error:null}</div>
    </div>
  )
}

export default FetchingWithUseReducer
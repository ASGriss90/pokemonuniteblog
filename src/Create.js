import {useState, useEffect} from 'react';
import {useNavigate} from "react-router-dom"

const Create = () =>{

    const [title, setTitle] = useState()
    const [body, setBody] = useState()
    const [author, setAuthor] = useState()
    const navigate = useNavigate()
    const [count, setCount]  = useState(0)

   const handleSubmit = (e)=>{
        e.preventDefault()
        const blogBody = {title, body, author};
        
        fetch('http://localhost:8000/blogs/',{
            method: 'POST',
            headers:{"Content-type": "application/json; charset=UTF-8"},
            body: JSON.stringify(blogBody)
        }).then( ()=>{
            console.log('New Blog Added!')
            navigate("/")
        }) 
   }

   useEffect(()=>{
    console.log('Update:', count)
   }, [count])


    return(
        <div className="create">
            <button onClick={() => {setCount(count+1)}}>Increase</button>
            <h2>{count}</h2>
            <h2>Create a Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={ e => setTitle(e.target.value)}
                />
                <label>Blog Body</label>
                <textarea
                    type="text"
                    required
                    value={body}
                    onChange={ e => setBody(e.target.value)}
                />
                <label>Choose Author</label>
                <select
                value={author}
                onChange={ e => setAuthor(e.target.value)}>
                    <option value="mario" >Alex G</option>
                    <option value="yoshi">Blair D</option>
                </select>    
                <button type="submit" value="Submit">
                    Create Blog
                </button>
                <h2>{title}</h2>
                <p>{body}</p>  
            </form>
        </div>
    )
}

export default Create;
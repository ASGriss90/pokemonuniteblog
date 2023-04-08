import {useNavigate, useParams} from 'react-router-dom';
import useFetch from './useFetch';

const BlogPage = () => {
    const {id} = useParams();
    const {data: blog, error} = useFetch('http://localhost:8000/blogs/' + id);
    const navigate = useNavigate()

    const handleDelete = () =>{

        fetch('http://localhost:8000/blogs/' + id,{
            method:'Delete',
        }).then( ()=>{
            navigate("/")
        });
    }
    return ( 
        <div className="blog-details">
            {error && <div> {error} </div>} 
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <h4>Written by {blog.author}</h4>
                    <p>{blog.body}</p>
                    <button onClick={handleDelete}>Delete</button>
                </article>
            )}      
        </div>
     );
}
 
export default BlogPage;
import {Link} from 'react-router-dom';

//Use a map() to interate through a list and display it in JSX
const BlogList = ({title ,blogs})=> {
    return(
        <div className="Blog-list">
         <h2>{title}</h2>
            {blogs.map((blog)  => (
                    <div className="blog-preview" key={blog.id}> 
                        <h2>{blog.title}</h2>
                        <p>Written by: {blog.author}</p>
                        <Link to={`/blogs/${blog.id}`}>
                              <button>Read</button>
                        </Link>
                    </div>
                ))}
        </div>
            
    )
}

export default BlogList;
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = ()=>{
    const {data: blogs, error} = useFetch('http://localhost:8000/blogs');
    return(
        <div className="Home content">
           {error && <div> {error} </div>}
           { blogs && <BlogList blogs={blogs} title={'Blogs List'}/>}
           { blogs && <BlogList blogs={blogs.filter((blog)=> blog.author === 'Alex G')} title={'Popular Blogs'}/>}
        </div>    
    );
}

export default Home;
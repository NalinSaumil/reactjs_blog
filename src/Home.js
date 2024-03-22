import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
    const { data: blogs, isPending, err } = useFetch('http://localhost:8000/blogs');

    return (  
        <div className="home">
            {err && <div>{ err }</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={ blogs } title="All Blogs!" />}
        </div>
    );
}
 
export default Home;
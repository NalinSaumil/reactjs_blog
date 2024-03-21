import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [err, setErr] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/blogs')
            .then(res => {
                if(!res.ok) {
                    throw Error('could not fetch data for that resource');
                }
                return res.json();
            })
            .then((data) => {
                setBlogs(data);
                setIsPending(false);
                setErr(null);
            })
            .catch(err => {
                setErr(err.message);
                setIsPending(false);
                setBlogs(null)
            });
        }, 1000);        
    }, []);

    return (  
        <div className="home">
            {err && <div>{ err }</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={ blogs } title="All Blogs!" />}
        </div>
    );
}
 
export default Home;
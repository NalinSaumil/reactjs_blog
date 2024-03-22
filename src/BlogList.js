import { Link } from 'react-router-dom';

const BlogList = ({ blogs, title }) => {
    // const blogs = props.blogs;
    // const title = props.title;

    const handleDel = (e, blogId) => {
        fetch('http://localhost:8000/blogs/' + blogId, {
            method: 'DELETE'
        }).then(() => {
            window.location.reload();
        });
    };

    return (  
        <div className="blog-list">
            <h2>{ title }</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`blogs/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <p>Written by {blog.author}</p>
                    </Link>
                    <button onClick={ (e) => handleDel(e, blog.id) }>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                            <path d="M0 0h24v24H0z" fill="none"/>
                            <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
                        </svg>
                    </button>
                </div>
            ))}
        </div>
    );
}
 
export default BlogList;
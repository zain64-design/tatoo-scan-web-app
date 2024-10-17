import React from 'react'
import InnerBannerOne from '../components/InnerBanners/InnerBannerOne'
import SecBlogDetails from '../components/Blogs/SecBlogDetails';
import useFetch from '../utils/hooks/useFetch';
import { BLOG_DETAIL_API } from '../utils/constant';
import { useParams } from 'react-router-dom';

const BlogDetails = () => {
    // const apiUrl = `${BLOG_DETAIL_API}/${id}`;
    // console.log('Fetching from:', apiUrl);
    // const { data, loading, error } = useFetch(apiUrl);
    const { data, loading, error } = useFetch(`${BLOG_DETAIL_API}`);
    const { id } = useParams();
    const blogData = data.find(blog => blog.id === parseInt(id));
    console.log(blogData);
    
    
    if (loading) return <div>loading...</div>;

    if (error) return <div>Fetching details blogs: {error}</div>
    

    return (
        <>
            <InnerBannerOne blogTitle={blogData.title} backgroundImage={blogData.thumbnail} />
            <SecBlogDetails blogData={blogData}/>
        </>
    )
}

export default BlogDetails
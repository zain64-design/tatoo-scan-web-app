import React from 'react';
import useFetch from '../../utils/hooks/useFetch';
import { BLOG_COMMENTS_API } from '../../utils/constant';
import Text from '../UI/Text';

const Comments = () => {

    const { data, isloading, error } = useFetch(BLOG_COMMENTS_API);
    if (isloading) return <div>loading...</div>;

    if (error) return <div>Fetching blogs: {error}</div>

    return (
        <>
            {data.map((value) => {
                const { id, authName, date, comment } = value;
                return (
                    <div className="comment" key={id}>
                        <div className="comment-top">
                            <Text as="h6">{authName}</Text>
                            <Text as="span">{date}</Text>
                        </div>
                        <div className="desc">
                            <Text as='p'>{comment}</Text>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default Comments
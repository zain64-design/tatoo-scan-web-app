import React from 'react'
import Text from '../UI/Text';
import Image from '../UI/Image';

const AuthArea = ({authImg,authName}) => {
    return (
        <>
            <div className="author-area">
                <Image src={authImg} className="auth-ico" alt="author" />
                <Text as='span'>{`by ${authName}`}</Text>
            </div>
        </>
    )
}

export default AuthArea
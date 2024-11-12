import React from 'react'
import Text from '../UI/Text'

const FeaturesHeading = ({subHeading,mainHeading}) => {
    return (
        <>
            <div className="head-area">
                <Text as="h6">{subHeading}</Text>
                <Text as="h3">{mainHeading}</Text>
            </div>
        </>
    )
}

export default FeaturesHeading
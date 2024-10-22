import React from 'react';
import Text from '../UI/Text'

const TeamSliderDesc = (value) => {
    const {name,designation,desc} = value;
    return (
        <>
            <div className="desc">
                <Text as="h4">{name}</Text>
                <Text as='h6'>{designation}</Text>
                <Text as="p">{desc}</Text>
            </div>
        </>
    )
}

export default TeamSliderDesc
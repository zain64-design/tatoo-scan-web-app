import React from 'react'
import Text from '../UI/Text'

const AboutDesc = (...value) => {
  const descData = value[0].desc;
  // console.log(descData);


  
  return (
    <>
    {descData?.map((value)=>{
      const {id,head,para} = value;
      return (
        <div className="desc" key={id}>
        <Text as="h6">{head}</Text>
        <Text as="p">{para}</Text>
    </div>
      )
    })}
    </>
  )
}

export default AboutDesc
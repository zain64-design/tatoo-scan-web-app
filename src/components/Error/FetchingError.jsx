import React from 'react'
import Text from '../UI/Text'

const FetchingError = (props) => {
    console.log(props);
    
  return (
    <>
    <div className="error-message">
        <Text as="h6"></Text>
    </div>
    </>
  )
}

export default FetchingError
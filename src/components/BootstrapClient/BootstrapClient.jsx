import { useEffect } from 'react'

const BootstrapClient = () => {
    useEffect(() => {
        require('bootstrap/dist/js/bootstrap.min.js')
    },[])
    return null;
    }

export default BootstrapClient
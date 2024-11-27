import React, { useEffect } from 'react'
import { Card } from 'react-bootstrap'
import { HiOutlinePhone } from "react-icons/hi2";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { HiOutlineMapPin } from "react-icons/hi2";
import Text from '../UI/Text';
import { useSelector } from 'react-redux';

const contactInfo = [
    {
        icon: <HiOutlinePhone />,
        title: 'Phone Number',
        link: 'tel:000000000',
        value: '000-000-000',
    },
    {
        icon: <HiOutlineEnvelope />,
        title: 'Email Address',
        link: 'mailto:info@email.com',
        value: 'info@email.com',
    },
    {
        icon: <HiOutlineMapPin />,
        title: 'Address',
        link: 'void:;',
        value: 'Address',
    },
];

const InfoBox = () => {
    const configData = useSelector(state => state.cmsContent).config;
    useEffect(()=>{
        contactInfo[0].value = configData?.phone_number;
        contactInfo[1].value = configData?.email_address;
        contactInfo[2].value = configData?.address;
    }, [configData]);
    
    return (
        <>
            {contactInfo?.map((data,index) => {
                const {icon,title,link,value} = data;
                return (
                    <Card className='info-card' key={index}>
                        <div className="icon-area">
                            {icon}
                        </div>
                        <div className="desc">
                            <Text as="h6">{title}</Text>
                            <a href={link}>{value}</a>
                        </div>
                    </Card>
                )
            })}
        </>
    )
}

export default InfoBox
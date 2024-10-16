import React, {useId } from 'react';
import Form from 'react-bootstrap/Form';
import { Col, Row } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { MdError } from "react-icons/md";

const ContactForm = () => {

    const id = useId();

    const initialValues = {
        name: '',
        email: '',
        message: ''
    }
    const onSubmit = values => {
        console.log('Submitting form', values);
    }

    const validationSchema = Yup.object({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email address').required('Email is required'),
        message: Yup.string().required('Message is required')
    })

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    })

    // console.log('visited', formik.touched);

    return (
        <>
            <div className="form-main">
                <Form onSubmit={formik.handleSubmit}>
                    <Row>
                        <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                            <div className="input-field">
                                <Form.Label className="fm-lb" htmlFor={id + "name"}>your name</Form.Label>
                                <Form.Control type="text" className="inp-ctl" id={id + "name"} placeholder="full name" required name="name" autoComplete='off' onChange={formik.handleChange} value={formik.values.name} onBlur={formik.handleBlur} />
                                {formik.touched.name && formik.errors.name ? <small>{formik.errors.name}<MdError /></small> : null}
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                            <div className="input-field">
                                <Form.Label className="fm-lb" htmlFor={id + 'email'}>your email</Form.Label>
                                <Form.Control type="email" className="inp-ctl" id={id + 'email'} placeholder="email address" required name="email" autoComplete='off' onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur} />
                                {formik.touched.email && formik.errors.email ? <small>{formik.errors.email} <MdError /></small> : null}
                            </div>
                        </Col>

                        <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                            <div className="input-field">
                                <Form.Label className="fm-lb" htmlFor={id + 'message'}>your message</Form.Label>
                                <Form.Control as="textarea" className="txt-ctl" placeholder="type your message" name="message" id={id + 'message'} rows="7" onChange={formik.handleChange} value={formik.values.message} onBlur={formik.handleBlur}></Form.Control>
                                {formik.touched.message && formik.errors.message ? <small>{formik.errors.message} <MdError /></small> : null}
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                            <div className="input-field">
                                <button type="submit" value="send" className="btn submit-btn hvr-bounce-to-right">contact us</button>
                            </div>
                        </Col>
                    </Row>
                </Form>
            </div>
        </>
    )
}

export default ContactForm
import React, { useContext, useState } from 'react'
import { FormContext } from '../Form/FormContext';
import { Col, Row } from 'react-bootstrap'
import Container from '../Component/Container'
import DateRangeInput from '../Component/Form/DateRangeInput'
import FileUpload from '../Component/Form/FileUpload'
import Input from '../Component/Form/Input'
import Input2 from '../Component/Form/Input2'

const _ = require("lodash");

// dateList
let dateList = []
const date = _.range(1, 32);
date.map(i => { dateList.push({ label: i, value: i }) })
// month List
let monthList = []
const month = _.range(1, 13);
month.map(i => { monthList.push({ label: i, value: i }) })

// year List
let yearList = []
const year = _.range(1930, 2023);
year.map(i => { yearList.push({ label: i, value: i }) })


export default function ApplicantDetails() {
    const { formState, handleChange,setFormState } = useContext(FormContext);
    const [date, setDate] = useState()
    const [month, setMonth] = useState()
    function handleSelectChange(value) {
        const dob = [date, month, value]
        let nominee_dob = dob.toString()
        nominee_dob.replaceAll(",", "-")
            setFormState({ ...formState, ["dob"]: nominee_dob })
    }
    return (
        <Container>
            <Row className='title m-0'>
                <Col sm={3} md={3}>
                    <p className='fs-4'>Applicant Details</p>
                </Col>
                <Col style={{ background: "white" }} sm={1}></Col>
                <Col sm={8} md={8} >
                    <p className='fs-4'>1st Account Holder Details</p>
                </Col>
            </Row>
            <div className='pt-3'>
                <Row >
                    <Input
                        type="text"
                        id="name"
                        
                        onChange={handleChange} 
                        placeholder="Applicant Name"
                        name="name"
                        isClearable={true}
                        className="w-100  font-weight-50"
                    />
                    <Input
                        type="text"
                        id="contact"
                        placeholder="Contact number"
                        name="contact_no"
                        
                        onChange={handleChange} 
                        button="true"
                        btnValue="Send OTP"
                        isClearable={true}
                        className="w-100  font-weight-50"
                    />
                    <Input2
                        type="text"
                        id="contact-otp"
                        placeholder="Enter OTP"
                        name="contact-otp"
                        isClearable={true}
                        className="w-100  font-weight-50"
                    />
                    <Input
                        type="text"
                        id="email"
                        placeholder="Email ID"
                        name="email"
                        button="true"
                        
                        onChange={handleChange} 
                        btnValue="Send OTP"
                        isClearable={true}
                        className="w-100  font-weight-50"
                    />
                    <Input2
                        type="text"
                        id="email-otp"
                        placeholder="Enter OTP"
                        name="email-otp"
                        
                        isClearable={true}
                        className="w-100  font-weight-50"
                    />
                    <Input
                        type="text"
                        id="pan"
                        placeholder="Pan No"
                        
                        onChange={handleChange} 
                        name="pan_no"
                        isClearable={true}
                        className="w-100  font-weight-50"
                    />
                    <Row className='d-flex align-items-center pt-5'>
                        <Col sm={3} />
                        <Col sm={1} />
                        <Col sm={8} >
                            <p className='dob pb-2'>Date Of Birth</p>
                            <Row>
                                <Col sm={3}>
                                <DateRangeInput
                                id="day"
                                name="day"
                                placeHolder='Day'
                                onChange={(e) => setDate(e.value)}
                                className="w-100  font-weight-50"
                                options={dateList}
                            /></Col><Col sm={3}>
                            <DateRangeInput
                                id="month"
                                onChange={(e) =>
                                    setMonth(e.value > 10 ? e.value : "0" + e.value)}
                                name="month"
                                placeHolder="Month"
                                className="w-100  font-weight-50"
                                options={monthList}
                            /></Col><Col sm={3}>
                            <DateRangeInput
                                id="year"
                                onChange={(e) => {
                                    handleSelectChange(e.value)
                                }}
                                name="year"
                                placeHolder="Year"
                                className="w-100  font-weight-50"
                                options={yearList}
                            /></Col></Row>
                        </Col>
                    </Row>
                    <FileUpload para="PAN" />
                    <FileUpload para="ADHAR" />




                </Row>
            </div>

        </Container>
    )
}

import React, { useContext, useState } from 'react'
import { FormContext } from '../Form/FormContext';
import { Row, Col } from 'react-bootstrap'
import Select from '../Component/Form/Select'
import Input from '../Component/Form/Input'
import DateRangeInput from '../Component/Form/DateRangeInput'

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

const data = [

    {
        name: "nominee_name",
        label: "Nominee Name",

        type: "text",
    },

    {
        name: "nominee_pan",
        label: "Nominee PAN",

        type: "text",
    },
    {
        name: "nominee_email",
        label: "Nominee EmailID",

        type: "text",
    },
    {
        name: "nominee_contact",
        label: "Nominee Contact Number",
        para: "",
        type: "text",

    }

]
export default function Nominee() {
    const { formState, handleChange, setFormState } = useContext(FormContext);
    const [date, setDate] = useState()
    const [month, setMonth] = useState()
    function handleSelectChange(value) {
        const dob = [date, month, value]
        let nominee_dob = dob.toString()
        nominee_dob.replaceAll(",", "-")
            setFormState({ ...formState, ["nominee_dob"]: nominee_dob })
    }
    return (
        <>
            <Row className='p-0'>
                <Select
                    id="nominee"
                    label="nominee"
                    bank={true}
                    placeHolder="Select Number of Nominees"
                    name="nominee_count"
                    isClearable={true}
                    className="w-100  font-weight-50"
                    options={[]}
                />
            </Row>

            <Row className='title m-0 mt-5'>
                <Col style={{ background: "rgba(var(--bs-light-rgb), var(--bs-bg-opacity))" }} sm={3} md={3}>

                </Col>
                <Col style={{ background: "white" }} sm={1}></Col>
                <Col sm={8} md={8} >
                    <p className='fs-4'>1st Nominee Details</p>
                </Col>
            </Row>
            <Row>
                {data.map((i, id) => (
                    <Input
                        key={id}
                        type={i.type}
                        id={i.label}
                        label={i.label}
                        onChange={handleChange}
                        name={i.name}
                        bank={true}
                        isClearable={true}
                        className="w-100  font-weight-50" />
                ))}
            </Row>
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
            <Input
                type="text"
                id="nominee-rel"
                label="Nominee Relationship"
                name="nominee_rel"
                onChange={handleChange}
                bank={true}
                isClearable={true}
                className="w-100  font-weight-50" />
            <Input
                type="text"
                id="nominee_per"
                onChange={handleChange}
                label="Nominee (%)"
                name="nominee-per"
                bank={true}
                isClearable={true}
                className="w-100  font-weight-50" />
        </>
    )
}

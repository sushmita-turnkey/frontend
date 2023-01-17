import React, { useContext } from 'react'
import { FormContext } from '../Form/FormContext';
import Container from '../Component/Container'
import { Col, Row } from 'react-bootstrap'
import Input from '../Component/Form/Input'


const data = [

    {
        name: "bank_name",
        label: "Bank Name",
        type: "text",
    },
    {
        name: "account_no",
        label: "Account Number",
        type: "text",
    },
    {
        name: "account_title",
        label: "Account Title",
        type: "text",
    },
    {
        name: "ifsc_code",
        label: "Bank IFSC Code ",
        para: "",
        type: "text",

    }

]
export default function BankingDetails() {

    return (
        <Container>
            <Row className='title m-0'>
                <Col sm={3} md={3}>
                    <p className='fs-4'>Banking Preferences</p>
                </Col>
                <Col style={{ background: "white" }} sm={1}></Col>
                <Col className=" radio-col-main bg-light p-0" sm={8} md={8} >
                    <Row className='p-0'>
                        <Col sm={5} className="radio-col">
                            <input type="radio" id="cheque" name="bank" value="cheque" />
                            <label className='ps-2  radio' htmlFor="cheque">Cancelled Cheque</label>
                        </Col>
                        <Col sm={5} className="radio-col ms-4">
                            <input type="radio" id="bank-detail" name="bank" value="bank" />
                            <label className='ps-2 radio' htmlFor="bank-detail">Bank Details</label>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                {data.map((i, id) => (
                    <Input
                        key={id}
                        type={i.type}
                        id={i.label}
                        label={i.label}
                        name={i.name}
                        bank={true}
                        isClearable={true}
                        className="w-100  font-weight-50" />
                ))}

            </Row>
        </Container>
    )
}

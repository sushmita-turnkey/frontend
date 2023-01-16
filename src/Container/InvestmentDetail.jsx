import React ,{useContext}from 'react'
import { Col, Row } from 'react-bootstrap'
import Container from '../Component/Container'
import Input from '../Component/Form/Input'
import Select from '../Component/Form/Select'
import { FormContext } from '../Form/FormContext';

 

const data = [
    {
        label: "Account Type",
        name: "account-type",
        para: "",
        type: "select",
        options: [{ label: "Normal", value: "normal" },
        { label: "Hero", value: "hero" }]
    },
    {
        name: "portfolio",
        label: "Portfolio/Strategy Name",
        para: "",
        type: "select",
        options: [{ label: "Normal", value: "normal" },
        { label: "Hero", value: "hero" }]
    },
    {
        name: "fund-category",
        label: "Fund Fees Category",
        para: "Fees preview according to selection",
        type: "select",
        options: [{ label: "Normal", value: "normal" },
        { label: "Hero", value: "hero" }]
    },
    {
        name: "investment-category",
        label: "Investment Category",
        para: "Preview only when systematic transfer plan is selected",
        type: "select",
        options: [{ label: "Normal", value: "normal" },
        { label: "Hero", value: "hero" }]
    },
    {
        name: "address",
        label: "Communication Address",
        para: "All further deliverables will be communicated on this address",
        type: "text",
    },
    {
        name: "country",
        label: "Country of Tax Residency ",
        para: "",
        type: "select",
        options: [{ label: "India", value: "India" },
        { label: "Africa", value: "africa" }]
    },
    {
        name: "account_holders",
        label: "No. of Account Holders ",
        para: "",
        type: "select",
        options: [{ label: "2", value: "2" },
        { label: "3", value: "3" }]
    },
    {
        name: "quantum_of_investment",
        label: "Quantum of Investment",
        para: "",
        type: "text",

    },
    {
        name: "investment_mode",
        label: "Investment Mode",
        para: "",
        type: "select",
        options: [{ label: "2", value: "2" },
        { label: "3", value: "3" }]
    },

]

export default function InvestmentDetail() {


    const { formState, handleChange } = useContext(FormContext);
    return (
        <Container>
            <Row className='title m-0'>
                <Col sm={12} md={12}>
                    <p className='fs-4'>Investment Details</p>
                </Col>
            </Row>
            <Row className='pt-5'>
         
                {data.map((i, id) => (
                    i.type === "select" ?
                        <Select
                            key={id}
                            id={i.label}
                            label={i.label}
                            para={i.para}
                            name={i.name}
                            isClearable={true}
                            className="w-100  font-weight-50"
                            options={i.options}
                        /> : <Input
                            key={id}
                            type={i.type}
                            id={i.label}
                            onChange={handleChange} 
                            label={i.label}
                            para={i.para}
                            name={i.name}
                            isClearable={true}
                            className="w-100  font-weight-50"
                        />
                ))}
            </Row>
        </Container>
    )
}

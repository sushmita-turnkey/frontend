import React,{useContext} from 'react'
import { FormContext } from '../Form/FormContext';
import { Col, Row } from 'react-bootstrap'
import Container from '../Component/Container'
import Input from '../Component/Form/Input'
import Radio from '../Component/Form/Radio'
import Select from '../Component/Form/Select'

const data=[
    {
        label: "Investment Objective",
        name: "investment_objective",
        para: "",
        type: "select",
        options: [{ label: "Normal", value: "normal" },
        { label: "Hero", value: "hero" }]
    },{
        label: "Risk Tolerance",
        name: "risk_tolerance",
        para: "",
        type: "select",
        options: [{ label: "Normal", value: "normal" },
        { label: "Hero", value: "hero" }]
    },
]
export default function InvestmentRisk() {
    const { formState, handleChange } = useContext(FormContext);

    return (
        <Container >
            <Row className='title m-0 mt-3'>
                <Col sm={12} md={12}>
                    <p className='fs-4'>Investment Risk Profile</p>
                </Col>
            </Row>
            <Row className='pt-5'>

                <div className="welcome fs-4" >
                    <p>Welcome Investor,<span>
                        "To Risk Profile"
                    </span></p>

                    <p className='pt-3'>Your Investment is utmost as important as understanding your emotional risk appetite</p>
                </div>

            </Row>
            <Radio title="investment experience:" 
            name="investment_exp"
            r1="0-3yrs"
            onChange={handleChange} 
            r2="3-5yrs"
            r3="5-7yrs"
            r4="+7yrs"
            />
             <Radio title="investment style:" 
             name="investment_style"
            r1="active"
            onChange={handleChange} 
            r2="passive"
            />
             <Radio title="How would you react if well diversified portfolio fells below 10%:" 
             name="investment_reaction"
            r1="accumulate"
            r2="hold"
            inc={true}
            onChange={handleChange} 
            r3="reduce"
            r4="exit"
            />
           
           {data.map((i, id) => (
                    
                        <Select
                            key={id}
                            id={i.label}
                            label={i.label}
                            name={i.name}
                            isClearable={true}
                            className="w-100  font-weight-50"
                            options={i.options}
                        /> 
           ))}
           <Radio title="Investment Horizon:" 
             name="investment_horizon"
            r1="<3 yr"
            r2="3-5 yr"
            r3="5-7 yr"
            r4=">10 yr"
            />
        </Container>
    )
}

import React, { useContext } from 'react'
import { FormContext } from '../../Form/FormContext';
import { Col, Row } from 'react-bootstrap'

export default function Radio({ title, r1, r2, r3, r4, name, inc, }) {
    const { formState, handleChange } = useContext(FormContext);
    return (
        <Row className=' pt-5'>
            <Col sm={4} md={4}>
                <h5 className='text-capitalize'>{title}</h5>
            </Col>
            {/* <Col sm={1}></Col> */}
            <Col className=" radio-col-main bg-light p-0" sm={8} md={8} >
                <form onChange={handleChange}  >
                    <Row className='p-0'>

                        <Col sm={inc ? 3 : 2}>

                            <input type="radio" id={r1}

                                name={name} value={r1} />
                            <label className='ps-2 text-capitalize radio-inv' htmlFor={r1}>{r1}</label>
                        </Col>
                        <Col sm={2} className=" ms-4">
                            <input type="radio" id={r2} name={name} value={r2} />
                            <label className='ps-2 radio-inv text-capitalize' htmlFor={r2}>{r2}</label>
                        </Col>
                        {r3 !== undefined ? <Col sm={2} className=" ms-4">
                            <input type="radio" id={r3} name={name} value={r3} />
                            <label className='ps-2 text-capitalize radio-inv' htmlFor={r3}>{r3}</label>
                        </Col> : ""}
                        {r4 !== undefined ? <Col sm={2} className=" ms-4">
                            <input type="radio" id={r4} name={name} value={r4} />
                            <label className='ps-2 text-capitalize radio-inv' htmlFor={r4}>{r4}</label>
                        </Col> : ""}



                    </Row>
                </form>
            </Col>
        </Row>
    )
}

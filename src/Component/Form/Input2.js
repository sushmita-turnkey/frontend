import React ,{useContext,useState}from 'react'
import { FormContext } from '../../Form/FormContext';
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import { Col, Row } from "react-bootstrap";

const Input2 = 
    (
        {
            className,
            onChange,
            onBlur,
            label,
            id,
            error,
            btnValue,
            isClearable,
            para,
            type,
            ...rest
        }
    ) => {
        const [reset, setReset] = useState(uuidv4());
        const [inputType, setInputType] = useState(type);
        const onClear = () => {
            onChange({ target: { value: "" } });
            setReset(uuidv4());
        };
        const restProps = () => {
            const temp = { ...rest };
            temp.defaultValue = temp.value || "";
            delete temp.value;
            return temp;
        };
    const { formState, handleChange } = useContext(FormContext);

        return (
            <div className='d-flex align-items-center pt-5'>
                <Col sm={3}>
                </Col>
                <Col sm={1}></Col>
                <Col sm={8} >
                    <Row className="d-flex align-items-center w-100">
                        <Col sm={6}>
                            <span
                                className={`d-inline-block w-100 position-relative pt-2 pb-2 input__wrapper ${error ? "error" : ""
                                    }`}
                            >
                                <input
                                    key={`input-${reset}`}
                                    id={`input-${id}`}
                                    type={inputType}
                                    className={`${className}${isClearable ? " input-clearable" : ""} text`}
                                    onChange={handleChange} 
                                    onBlur={onBlur}
                                    placeholder={label}
                                    step="any"
                                    {...restProps()}
                                />
                                <span className="input-error">{error}</span>
                            </span>
                        </Col>
                        <Col sm={3}>
                            <button className="btn">Verify</button>
                        </Col>
                        <Col sm={2}>
                            <button className="button2">Re-Send OTP</button>
                        </Col>
                    </Row>
                </Col>
            </div>
        );
    }

Input2.propTypes = {
    className: PropTypes.string,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    label: PropTypes.string,
    id: PropTypes.string,
    error: PropTypes.string,
    isClearable: PropTypes.bool,
    type: PropTypes.string,
    hint: PropTypes.string,
};

Input2.defaultProps = {
    className: "",
    onChange: () => null,
    onBlur: () => null,
    label: "",
    id: uuidv4(),
    error: "",
    isClearable: false,
    type: "text",
    hint: "",
};

export default Input2;

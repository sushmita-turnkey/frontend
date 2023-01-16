import React, { useState } from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import { Col ,Row} from "react-bootstrap";

const Input = 
  (
    {
      className,
      onChange,
      onBlur,
      label,
      id,
      bank,
      error,
      btnValue,
      isClearable,
      para,
      type,
      button,
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

    return (
      <div className='d-flex align-items-center pt-5'>
        <Col sm={3}>
          {bank?"":<> <h5>{label}</h5>
          <p style={{ fontSize: "14px" }}>{para}</p></>}
         
        </Col>
        <Col sm={1}></Col>
        <Col sm={8} >
          {button ? <Row className="d-flex align-items-center">
            <Col sm={9}>
              <span
                className={`d-inline-block w-100 position-relative pt-2 pb-2 input__wrapper ${error ? "error" : ""
                  }`}
              >
                <input
                  key={`input-${reset}`}
                  id={`input-${id}`}
                  type={inputType}
                  className={`${className}${isClearable ? " input-clearable" : ""} text`}
                  onChange={onChange}
                  onBlur={onBlur}
                  placeholder={label}
                  step="any"
                  {...restProps()}
                />
                <span className="input-error">{error}</span>
              </span>
            </Col>
            <Col sm={2}>
              <button className="button1">{btnValue}</button>
              </Col></Row> : <span
              className={`d-inline-block w-100 position-relative pt-2 pb-2 input__wrapper ${error ? "error" : ""
                }`}
            >
            <input
              key={`input-${reset}`}
              id={`input-${id}`}
              type={inputType}
              className={`${className}${isClearable ? " input-clearable" : ""} text`}
              onChange={onChange}
              onBlur={onBlur}
              placeholder={label}
              step="any"
              {...restProps()}
            />
            <span className="input-error">{error}</span>
          </span>}


        </Col>
      </div>

    );
  }


Input.propTypes = {
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

Input.defaultProps = {
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

export default Input;

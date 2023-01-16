import React ,{useContext}from 'react'
import { FormContext } from '../../Form/FormContext';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { default as ReactSelect } from 'react-select';
import makeAnimated from 'react-select/animated';
import { Col, Row } from 'react-bootstrap'


const animatedComponents = makeAnimated();

const Select = 
  ({ options,bank, placeHolder, isClearable, para,name, isMulti, className, label, id, error, onChange, ...rest }) => {
    const { formState, setFormState } = useContext(FormContext);
    function handleSelectChange(value) {
     setFormState({...formState, [name]: value.value });
    }
    return (
      <div className='d-flex align-items-center pt-5'>
         {bank?<Col className='nominee' sm={3} md={3}>
                    <p className='fs-4'>Nominee Details</p>
                </Col>:<Col sm={3}>
         
         <h5>{label}</h5> 
         <p >{para}</p>
      </Col>}
        
                <Col sm={1}></Col>
                <Col sm={8} >
                <span
        className={`d-inline-block w-100 d-flex align-items-center position-relative input__wrapper ${error ? 'error' : ''}`}
       
      >
        <ReactSelect
          id={`input-select-${id}`}
          name={name}
          onChange={handleSelectChange} 
          placeholder={placeHolder}
          components={animatedComponents}
          closeMenuOnSelect={!isMulti}
          isMulti={isMulti}
          options={options.map((option) => {
            return {
              value: option.value || option.label,
              label: option.label,
              isDisabled: !!option.isDisabled,
            };
          })}
          isClearable={isClearable}
          className={`input__select ${className}`}
          {...rest}
        />
        {/* {label && <label htmlFor={`input-select-${id}`}>{label}</label>} */}
        <span className="input-error">{error}</span>
      </span>
                </Col>
        
      </div>
      
    );
  }


Select.propTypes = {
  options: PropTypes.array.isRequired,
  placeHolder: PropTypes.string,
  isClearable: PropTypes.bool,
  name: PropTypes.string,
  isMulti: PropTypes.bool,
  className: PropTypes.string,
  onChange: PropTypes.func,
  required: PropTypes.bool,
  label: PropTypes.string,
  id: PropTypes.string,
  error: PropTypes.string,
};

Select.defaultProps = {
  placeHolder: 'Select',
  isClearable: false,
  name: '',
  isMulti: false,
  className: '',
  onChange: () => null,
  required: false,
  label: '',
  id: uuidv4(),
  error: '',
};

export default Select;

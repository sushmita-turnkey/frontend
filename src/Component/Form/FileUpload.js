import React from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import { Col, Row } from "react-bootstrap";
const FileUpload =
    ({
        name,
        onChange,
        onClick,
        id,
        error,
        isClearable,
        para,
    }) => {

        
        return (
            <div className='d-flex align-items-center pt-5'>
                <Col sm={3}>
                </Col>
                <Col sm={1}></Col>
                <Col sm={8} >
                    <Row className="d-flex align-items-center w-100">
                        <Col sm={6}>
                            <p className="text para">Upload scanned copy of {para} Card</p>
                        </Col>
                        <Col sm={3}>
                            <label className='position-relative' htmlFor={name}> <p className="button1">Choose File</p></label>
                            <input
                                type="file"
                                accept="image/*"
                                id={name}
                                name={name}
                                onChange={onChange}
                                onClick={onClick}
                                className='d-none' />
                        </Col>
                        <Col sm={2}>
                            <button className="btn" onClick={() => console.log("hghg")}>Upload</button>
                        </Col>
                    </Row>
                </Col>
            </div>

        );
    }


FileUpload.propTypes = {
    className: PropTypes.string,
    onChange: PropTypes.func,
    onClick: PropTypes.func,
    onBlur: PropTypes.func,
    label: PropTypes.string,
    id: PropTypes.string,
    error: PropTypes.string,
    isClearable: PropTypes.bool,
    type: PropTypes.string,
    hint: PropTypes.string,
};

FileUpload.defaultProps = {
    className: "",
    onChange: () => null,
    onClick:()=>null,
    onBlur: () => null,
    label: "",
    error: "",
    isClearable: false,
    type: "file",
    hint: "",
};

export default FileUpload;

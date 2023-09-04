import React from "react";
import { Row } from "react-bootstrap";

const Input = ({ placeholder, value, onChange, src }) => {
  return (
    <Row className="border mt-2 rounded-4 row">
      <div class="col-1 justify-content-center align-items-center d-flex border-4">
        <img
          src={src}
          style={{ width: 20, height: 20, alignSelf: "center", marginLeft: 20 }}
        />
      </div>
      <div class="col-11">
        <div class="form-floating">
          <input
            type="text"
            class="form-control gilroy border-0"
            id="email"
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            formControlName="email"
          />
          <label class="gilroy-sb text-muted" for="email">
            {placeholder}
          </label>
        </div>
      </div>
    </Row>
  );
};

export default Input;

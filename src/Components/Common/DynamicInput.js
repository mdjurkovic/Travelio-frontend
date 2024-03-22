import React, { memo, useEffect, useState } from "react";
import { Input } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

const DynamicForm = memo(
  ({ passengers, maxPassengers, onInputChange, disabled }) => {
    const [inputValues, setInputValues] = useState(
      passengers.length
        ? passengers.map((passenger) => String(passenger))
        : [""]
    );

    useEffect(() => {
      onInputChange(inputValues);
    }, [inputValues, onInputChange]);

    const handleInputChange = (index, value) => {
      const newValues = [...inputValues];
      newValues[index] = value;
      setInputValues(newValues);
    };

    const handleAddInput = () => {
      if (inputValues.length < maxPassengers || disabled) {
        setInputValues([...inputValues, ""]);
      }
    };

    const handleRemoveInput = (index) => {
      const newValues = [...inputValues];
      newValues.splice(index, 1);

      // If there's at least one input remaining, convert the new last one to "+"
      if (newValues.length > 0 && index === newValues.length) {
        newValues[newValues.length - 1] = "";
        setInputValues(newValues);
      } else {
        setInputValues(newValues);
      }
    };

    return (
      <div>
        {inputValues.map((value, index) => (
          <div key={index} style={{ marginBottom: "8px" }}>
            <Input
              value={value}
              onChange={(e) => handleInputChange(index, e.target.value)}
              placeholder={`Passenger ${index + 1}`}
              style={{ marginRight: "8px" }}
              addonAfter={
                <div>
                  {index === inputValues.length - 1 &&
                    inputValues.length < maxPassengers &&
                    !disabled && (
                      <PlusOutlined
                        onClick={handleAddInput}
                        style={{
                          cursor: "pointer",
                          marginRight: index !== 0 ? "23px" : "0",
                        }}
                      />
                    )}
                  {inputValues.length > 1 && (
                    <MinusCircleOutlined
                      onClick={() => handleRemoveInput(index)}
                      style={{ cursor: "pointer" }}
                    />
                  )}
                </div>
              }
            />
          </div>
        ))}
      </div>
    );
  }
);

export default DynamicForm;

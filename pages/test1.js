import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import InputMask from "react-input-mask";

export default function Test1 () {

    return (
        <InputMask
        mask={"999.999.999"}
      >
        {() => (
          <TextField
            id="name"
            name="name"
            variant="outlined"
            label="Name"
          />
        )}
      </InputMask>

    );
  
}

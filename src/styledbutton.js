import React from "react";
import styled from "styled-components";
const StyledButton =styled.button
`
    color:red;
    background-color:green ;
    &:hover
    {
        background-color:blue ;
    }
`
export default StyledButton;
import React from "react";
import styled from "styled-components";

function ex_header(props) {
    return (
        <Main>
            <div>
                <h1>RITE EXAMPLE TEST</h1>
            </div>
        </Main>
    );
}

export default ex_header;

const Main = styled.div`
    width: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .btnSave {
        margin-top: 10px;
    }
`;

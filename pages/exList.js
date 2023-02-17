import React, { useCallback, useState, useEffect } from "react";
import styled from "styled-components";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Header from "../pages/ex_header";
import MuiInput from "@mui/material/Input";
import Tooltip from "@mui/material/Tooltip";
import TextField from "@mui/material/TextField";

import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { RESPONSE_LIMIT_DEFAULT } from "next/dist/server/api-utils";

import Link from "next/link";

function ValueLabelComponent(props) {
    const { children, value } = props;

    return (
        <Tooltip enterTouchDelay={0} placement="top" title={value}>
            {children}
        </Tooltip>
    );
}

function exList(props) {
    const [tableData, setTableData] = useState([]);

    function selectList() {
        useEffect(() => {
            fetch("api/test")
                .then((data) => data.json())
                .then((data) => setTableData(data));
        }, []);
        // fetch("http://localhost:3000/api/test")
        //     .then((res) => callBack(result))
        //     .then((data) => console.log(data));
    }

    selectList();

    const [name, setName] = useState("");

    const onChange = (e) => {
        switch (e.target.name) {
            case "name":
                setName(e.target.value);
                break;
            default:
                break;
        }
        // console.log(name);
    };
    // 이건 고정적으로 값 넣으면 되고
    const columns = [
        {
            field: "id",
            headerName: "No",
            minWidth: 30,
            width: 60,
            renderCell: (params) =>
                params.row.exam_typ === "EX1" ? (
                    <Link
                        href={{
                            pathname: "/ex1_2/",
                            query: { id: params.row.id },
                        }}
                    >
                        <div>
                            <a>{params.row.id}</a>
                        </div>
                    </Link>
                ) : (
                    <Link
                        href={{
                            pathname: "/ex2_2",
                            query: { id: params.row.id },
                        }}
                    >
                        <div>
                            <a>{params.row.id}</a>
                        </div>
                    </Link>
                ),
        },
        {
            field: "exam_typ",
            headerName: "Example Type",
            minWidth: 100,
            width: 100,
            editable: false,
            sortable: false,
            // flex: 1,
        },
        {
            field: "name",
            headerName: "Name",
            minWidth: 300,
            width: 130,
            editable: false,
            sortable: false,
            flex: 1,
        },
        // {
        //     field: "school",
        //     headerName: "School/Grade",
        //     width: 200,
        //     minWidth: 130,
        //     editable: false,
        //     sortable: false,
        //     flex: 1,
        // },
        {
            field: "reg_date",
            headerName: "Reg_Date",
            width: 150,
            minWidth: 90,
            editable: false,
            sortable: false,
            flex: 1,
        },
    ];

    // 이부분은 DB에서 가져와서 아래 형식으로 맞춰져야할듯
    const rows = [
        {
            id: 15,
            name: "Stark",
            school: "Cersei",
            reg_date: "2023-01-12",
        },
        {
            id: 2,
            name: "Lannister",
            school: "Cersei",
            reg_date: "2023-01-12",
        },
        {
            id: 3,
            name: "Lannister",
            school: "Jaime",
            reg_date: "2023-01-12",
        },
        { id: 4, name: "Stark", school: "Arya", reg_date: "2023-01-12" },
        {
            id: 5,
            name: "Targaryen",
            school: "Daenerys",
            reg_date: "2023-01-12",
        },
        {
            id: 6,
            name: "Melisandre",
            school: null,
            reg_date: "2023-01-12",
        },
        {
            id: 7,
            name: "Clifford",
            school: "Ferrara",
            reg_date: "2023-01-12",
        },
        {
            id: 8,
            name: "Frances",
            school: "Rossini",
            reg_date: "2023-01-12",
        },
        { id: 9, name: "Roxie", school: "Harvey", reg_date: "2023-01-12" },
    ];
    return (
        <Info>
            <div className="Header">
                <h1>RITE DIAGNOSTIC TEST LIST</h1>
            </div>
            {/* 
            <div className="info">
                <div className="infoDiv">
                    <InputLabel
                        className="infoLabel"
                        htmlFor="component-simple"
                    >
                        Name
                    </InputLabel>
                    <Input
                        className="infoInput"
                        name="name"
                        id="name"
                        onChange={onChange}
                        value={name}
                        placeholder="Enter Name."
                    />
                </div>
                <Button className="btnSave" variant="contained">
                    저장
                </Button>
            </div> */}

            <div className="ExList">
                <DataGrid
                    rows={tableData}
                    columns={columns}
                    pageSize={10}
                    // rowsPerPageOptions={[5]}
                    // checkboxSelection
                    disableSelectionOnClick
                    experimentalFeatures={{ newEditingApi: true }}
                    autoHeight={true}
                />
            </div>
        </Info>
    );
}
export default exList;

const Info = styled.div`
    height: 100%;
    max-width: 100%;
    margin: 0 auto;

    .btnSave {
        margin-top: 10px;
    }
    .Header {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 15pt;
    }
    .info {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        margin-right: 35px;
    }
    .ExList {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 35px;
        with: "100%";
    }
`;

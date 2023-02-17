import React, { useCallback, useState, useEffect } from "react";
import styled from "styled-components";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Header from "../pages/ex_header";
import Slider, {
    SliderThumb,
    SliderValueLabelProps,
} from "@mui/material/Slider";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import MuiInput from "@mui/material/Input";
import VolumeUp from "@mui/icons-material/VolumeUp";
import Tooltip from "@mui/material/Tooltip";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";

import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { RESPONSE_LIMIT_DEFAULT } from "next/dist/server/api-utils";
import axios from "axios";
import { useRouter } from "next/router";

function ValueLabelComponent(props) {
    const { children, value } = props;

    return (
        <Tooltip enterTouchDelay={0} placement="top" title={value}>
            {children}
        </Tooltip>
    );
}

function calculate(array) {
    let len = 0;
    // console.log(array);
    for (const num of array) {
        if (num > 0) {
            len += 1;
        }
    }
    // console.log("dddd" + len);
    if (len == 0) {
        return 0;
    } else {
        return (array.reduce((a, b) => a + b) / len).toFixed();
    }
}

function ex1(props) {
    const router = useRouter();
    const [name, setName] = useState("");
    const [school, setSchool] = useState("");
    const [result_class, setResultClass] = useState("");
    const [result_comment, setComment] = useState("");
    const [sub1, setSub1] = useState(0);
    const [sub2, setSub2] = useState(0);
    const [sub3, setSub3] = useState(0);
    const [sub4, setSub4] = useState(0);
    const [sub5, setSub5] = useState(0);
    const [sub6, setSub6] = useState(0);
    const [sub7, setSub7] = useState(0);
    const [overall1, setOverall1] = useState(0);
    const [sub8, setSub8] = useState(0);
    const [sub9, setSub9] = useState(0);
    const [sub10, setSub10] = useState(0);
    const [overall2, setOverall2] = useState(0);

    const [sum_overall, setSumOverall] = useState(0);
    const [tableData, setTableData] = useState();

    // useEffect
    // [sub1, sub2, sub3, sub4, sub5, sub6, sub7] 배열안에 있는 useState 값이 바뀌면
    // let sum = sub1 + sub2 + sub3 + sub4 + sub5 + sub6 + sub7;
    // console.log(sum);
    // setOverall1(sum);

    useEffect(() => {
        console.log(props.data);
        console.log(props.data.NO);
        setSub1(props.data.RESULT01);
        setSub2(props.data.RESULT02);
        setSub3(props.data.RESULT03);
        setSub4(props.data.RESULT04);
        setSub5(props.data.RESULT05);
        setSub6(props.data.RESULT06);
        setSub7(props.data.RESULT07);
        setSub8(props.data.RESULT08);
        setSub9(props.data.RESULT09);
        setSub10(props.data.RESULT10);

        setResultClass(props.data.CLASS);
        setComment(props.data.COMMENT);

        setName(props.data.NAME);
        setSchool(props.data.SCHOOL);
    }, []);
    useEffect(() => {
        let sum = calculate([sub1, sub2, sub3, sub4, sub5, sub6, sub7]);
        // console.log(sum);
        setOverall1(sum);
    }, [sub1, sub2, sub3, sub4, sub5, sub6, sub7]);

    useEffect(() => {
        let sum = calculate([sub8, sub9, sub10]);
        // console.log(sum);
        setOverall2(sum);
    }, [sub8, sub9, sub10]);

    useEffect(() => {
        let sum = calculate([overall1 * 1, overall2 * 1]); //string으로 받아져서 number로 자동형변환
        // console.log(sum);
        // console.log(overall1);
        // console.log(overall2);
        setSumOverall(sum);
    }, [overall1, overall2]);

    const onChange = (e) => {
        switch (e.target.name) {
            case "name":
                setName(e.target.value);
                break;
            case "result_class":
                setResultClass(e.target.value);
                // console.log(e.target.value);
                break;
            case "result_comment":
                setComment(e.target.value);
                break;
            default:
                break;
        }
        // console.log(name);
    };
    const onChange2 = (e) => {
        setSchool(e.target.value);
        // console.log(name);
    };

    const handleSliderChange = (event, newValue) => {
        switch (event.target.name) {
            case "sub1":
                setSub1(newValue);
                // console.log(newValue);
                break;
            case "sub2":
                setSub2(newValue);
                break;
            case "sub3":
                setSub3(newValue);
                break;
            case "sub4":
                setSub4(newValue);
                break;
            case "sub5":
                setSub5(newValue);
                break;
            case "sub6":
                setSub6(newValue);
                break;
            case "sub7":
                setSub7(newValue);
                break;
            case "sub8":
                setSub8(newValue);
                break;
            case "sub9":
                setSub9(newValue);
                break;
            case "sub10":
                setSub10(newValue);
                break;
            default:
                break;
        }

        // console.log(event.target);

        // var sum = sub1 + sub2 + sub3 + sub4 + sub5 + sub6 + sub7;
        // console.log(sum);
        // setOverall1(sum);
    };

    const handleInputChange = (event) => {
        switch (event.target.name) {
            case "sub1":
                setSub1(
                    event.target.value === "" ? "" : Number(event.target.value),
                );
                break;
            case "sub2":
                setSub2(
                    event.target.value === "" ? "" : Number(event.target.value),
                );
                break;
            case "sub3":
                setSub3(
                    event.target.value === "" ? "" : Number(event.target.value),
                );
                break;
            case "sub4":
                setSub4(
                    event.target.value === "" ? "" : Number(event.target.value),
                );
                break;
            case "sub5":
                setSub5(
                    event.target.value === "" ? "" : Number(event.target.value),
                );
                break;
            case "sub6":
                setSub6(
                    event.target.value === "" ? "" : Number(event.target.value),
                );
                break;
            case "sub7":
                setSub7(
                    event.target.value === "" ? "" : Number(event.target.value),
                );
                break;
            case "sub8":
                setSub8(
                    event.target.value === "" ? "" : Number(event.target.value),
                );
                break;
            case "sub9":
                setSub9(
                    event.target.value === "" ? "" : Number(event.target.value),
                );
                break;
            case "sub10":
                setSub10(
                    event.target.value === "" ? "" : Number(event.target.value),
                );
                break;
            default:
                break;
        }
    };

    const handleBlur = () => {
        if (sub1 < 0) {
            setSub1(0);
            console.log("blurSub1=0");
        } else if (sub1 > 100) {
            setSub1(100);
            console.log("blurSub1=100");
        } else if (sub2 < 0) {
            setSub2(0);
            console.log("blurSub2=0");
        } else if (sub2 > 100) {
            setSub2(100);
            console.log("blurSub2=100");
        }
    };

    function Save() {
        // alert("Complete  Save!");
        fetch("http://192.168.35.233:3000/api/save_ex1", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                school: school,
                result01: sub1,
                result02: sub2,
                result03: sub3,
                result04: sub4,
                result05: sub5,
                result06: sub6,
                result07: sub7,
                result08: sub8,
                result09: sub9,
                result10: sub10,
                result_class: result_class,
                comment: result_comment,
            }),
        })
            .then((res) => callBack(res))
            // .then((data) => {
            .then((data) => {
                console.log(data);
            });
    }

    function callBack(res) {
        // alert("Complete  Save!");
        if (res.status == 200) {
            alert("Complete  Save!");
            window.location.href = "/";
        } else {
            alert(res.message);
        }
    }
    // // 이건 고정적으로 값 넣으면 되고
    // const columns = [
    //     { field: "id", headerName: "ID", width: 90 },
    //     {
    //         field: "phonics_overall",
    //         headerName: "Phonics",
    //         type: "number",
    //         width: 150,
    //         editable: false,
    //     },
    //     {
    //         field: "language_overall",
    //         headerName: "Language",
    //         type: "number",
    //         width: 150,
    //         editable: false,
    //         sortable: false,
    //     },
    //     {
    //         field: "overall",
    //         headerName: "Overall",
    //         type: "number",
    //         width: 150,
    //         editable: false,
    //         sortable: false,
    //     },
    //     {
    //         field: "class",
    //         headerName: "Class",
    //         // description: "This column has a value getter and is not sortable.",
    //         sortable: false,
    //         editable: true,
    //         width: 200,
    //     },
    //     {
    //         field: "comment",
    //         headerName: "Comment",
    //         sortable: false,
    //         filt
    //         editable: true,
    //         width: 400,
    //         // valueGetter: (params) =>
    //         //     `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    //     },
    // ];
    // // 이부분은 DB에서 가져와서 아래 형식으로 맞춰져야할듯
    // const rows = [
    //     { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    //     { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    //     { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    //     { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    //     { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    //     { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    //     { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    //     { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
    // ];
    return (
        <Info>
            <div className="Header">
                <h1>RITE DIAGNOSTIC TEST (EX1)</h1>
            </div>

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
                        // placeholder="Enter Name."
                        inputProps={{ readOnly: true }}
                    />
                    <InputLabel
                        className="infoLabel"
                        htmlFor="component-simple"
                    >
                        School/Grade
                    </InputLabel>
                    <Input
                        className="infoInput"
                        id="school"
                        onChange={onChange2}
                        value={school}
                        // placeholder="Enter School/Grade."
                        inputProps={{ readOnly: true }}
                    />
                </div>
                {/* <Button className="btnSave" onClick={Save}>
                    저장
                </Button> */}
            </div>

            <div className="Subject">
                <Box margin={4}>
                    <InputLabel
                        className="subjectLabel"
                        htmlFor="component-simple"
                    >
                        Phonnics
                    </InputLabel>

                    <Typography id="input-slider" gutterBottom>
                        1) Uppercase/Lowercase
                    </Typography>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item>{/* <VolumeUp /> */}</Grid>
                        <Grid item xs>
                            <PrettoSlider
                                valueLabelDisplay="auto"
                                value={typeof sub1 == "number" ? sub1 : 0}
                                onChange={handleSliderChange}
                                aria-labelledby="input-slider"
                                color="primary"
                                id="sub1"
                                name="sub1"
                            />
                        </Grid>
                        <Grid item>
                            <Input
                                name="sub1"
                                value={sub1}
                                size="small"
                                onChange={handleInputChange}
                                onBlur={handleBlur}
                                inputProps={{
                                    step: 1,
                                    min: 0,
                                    max: 100,
                                    type: "number",
                                    "aria-labelledby": "input-slider",
                                    readOnly: true,
                                }}
                            />
                        </Grid>
                    </Grid>

                    <Typography id="input-slider" gutterBottom>
                        2) Phonetic
                    </Typography>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item>{/* <VolumeUp /> */}</Grid>
                        <Grid item xs>
                            <PrettoSlider
                                valueLabelDisplay="auto"
                                value={typeof sub2 == "number" ? sub2 : 0}
                                onChange={handleSliderChange}
                                aria-labelledby="input-slider"
                                name="sub2"
                            />
                        </Grid>
                        <Grid item>
                            <Input
                                name="sub2"
                                value={sub2}
                                size="small"
                                onChange={handleInputChange}
                                onBlur={handleBlur}
                                inputProps={{
                                    step: 1,
                                    min: 0,
                                    max: 100,
                                    type: "number",
                                    "aria-labelledby": "input-slider",
                                    readOnly: true,
                                }}
                            />
                        </Grid>
                    </Grid>

                    <Typography id="input-slider" gutterBottom>
                        3) Short vowel
                    </Typography>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item>{/* <VolumeUp /> */}</Grid>
                        <Grid item xs>
                            <PrettoSlider
                                valueLabelDisplay="auto"
                                value={typeof sub3 == "number" ? sub3 : 0}
                                onChange={handleSliderChange}
                                aria-labelledby="input-slider"
                                name="sub3"
                            />
                        </Grid>
                        <Grid item>
                            <Input
                                name="sub3"
                                value={sub3}
                                size="small"
                                onChange={handleInputChange}
                                onBlur={handleBlur}
                                inputProps={{
                                    step: 1,
                                    min: 0,
                                    max: 100,
                                    type: "number",
                                    "aria-labelledby": "input-slider",
                                    readOnly: true,
                                }}
                            />
                        </Grid>
                    </Grid>

                    <Typography id="input-slider" gutterBottom>
                        4) Long vowel
                    </Typography>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item>{/* <VolumeUp /> */}</Grid>
                        <Grid item xs>
                            <PrettoSlider
                                valueLabelDisplay="auto"
                                value={typeof sub4 == "number" ? sub4 : 0}
                                onChange={handleSliderChange}
                                aria-labelledby="input-slider"
                                name="sub4"
                            />
                        </Grid>
                        <Grid item>
                            <Input
                                name="sub4"
                                value={sub4}
                                size="small"
                                onChange={handleInputChange}
                                onBlur={handleBlur}
                                inputProps={{
                                    step: 1,
                                    min: 0,
                                    max: 100,
                                    type: "number",
                                    "aria-labelledby": "input-slider",
                                    readOnly: true,
                                }}
                            />
                        </Grid>
                    </Grid>

                    <Typography id="input-slider" gutterBottom>
                        5) Double consonant
                    </Typography>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item>{/* <VolumeUp /> */}</Grid>
                        <Grid item xs>
                            <PrettoSlider
                                valueLabelDisplay="auto"
                                value={typeof sub5 == "number" ? sub5 : 0}
                                onChange={handleSliderChange}
                                aria-labelledby="input-slider"
                                name="sub5"
                            />
                        </Grid>
                        <Grid item>
                            <Input
                                name="sub5"
                                value={sub5}
                                size="small"
                                onChange={handleInputChange}
                                onBlur={handleBlur}
                                inputProps={{
                                    step: 1,
                                    min: 0,
                                    max: 100,
                                    type: "number",
                                    "aria-labelledby": "input-slider",
                                    readOnly: true,
                                }}
                            />
                        </Grid>
                    </Grid>

                    <Typography id="input-slider" gutterBottom>
                        6) Vowel
                    </Typography>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item>{/* <VolumeUp /> */}</Grid>
                        <Grid item xs>
                            <PrettoSlider
                                valueLabelDisplay="auto"
                                value={typeof sub6 == "number" ? sub6 : 0}
                                onChange={handleSliderChange}
                                aria-labelledby="input-slider"
                                name="sub6"
                            />
                        </Grid>
                        <Grid item>
                            <Input
                                name="sub6"
                                value={sub6}
                                size="small"
                                onChange={handleInputChange}
                                onBlur={handleBlur}
                                inputProps={{
                                    step: 1,
                                    min: 0,
                                    max: 100,
                                    type: "number",
                                    "aria-labelledby": "input-slider",
                                    readOnly: true,
                                }}
                            />
                        </Grid>
                    </Grid>

                    <Typography id="input-slider" gutterBottom>
                        7) Sight words
                    </Typography>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item>{/* <VolumeUp /> */}</Grid>
                        <Grid item xs>
                            <PrettoSlider
                                valueLabelDisplay="auto"
                                value={typeof sub7 == "number" ? sub7 : 0}
                                onChange={handleSliderChange}
                                aria-labelledby="input-slider"
                                name="sub7"
                            />
                        </Grid>
                        <Grid item>
                            <Input
                                name="sub7"
                                value={sub7}
                                size="small"
                                onChange={handleInputChange}
                                onBlur={handleBlur}
                                inputProps={{
                                    step: 1,
                                    min: 0,
                                    max: 100,
                                    type: "number",
                                    "aria-labelledby": "input-slider",
                                    readOnly: true,
                                }}
                            />
                        </Grid>
                    </Grid>

                    <div className="overallDiv">
                        <InputLabel
                            className="overallLabel"
                            htmlFor="component-simple"
                        >
                            Overall&nbsp;:&nbsp;
                        </InputLabel>
                        <InputLabel
                            className="overallLabel"
                            htmlFor="component-simple"
                            name="overall1"
                        >
                            {overall1}
                        </InputLabel>
                    </div>

                    <InputLabel
                        className="subjectLabel"
                        htmlFor="component-simple"
                    >
                        Language
                    </InputLabel>

                    <Typography id="input-slider" gutterBottom>
                        1) Theme words
                    </Typography>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item>{/* <VolumeUp /> */}</Grid>
                        <Grid item xs>
                            <PrettoSlider2
                                valueLabelDisplay="auto"
                                value={typeof sub8 == "number" ? sub8 : 0}
                                onChange={handleSliderChange}
                                aria-labelledby="input-slider"
                                color="primary"
                                id="sub8"
                                name="sub8"
                            />
                        </Grid>
                        <Grid item>
                            <Input
                                name="sub8"
                                value={sub8}
                                size="small"
                                onChange={handleInputChange}
                                onBlur={handleBlur}
                                inputProps={{
                                    step: 1,
                                    min: 0,
                                    max: 100,
                                    type: "number",
                                    "aria-labelledby": "input-slider",
                                    readOnly: true,
                                }}
                            />
                        </Grid>
                    </Grid>

                    <Typography id="input-slider" gutterBottom>
                        2) Simple directions
                    </Typography>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item>{/* <VolumeUp /> */}</Grid>
                        <Grid item xs>
                            <PrettoSlider2
                                valueLabelDisplay="auto"
                                value={typeof sub9 == "number" ? sub9 : 0}
                                onChange={handleSliderChange}
                                aria-labelledby="input-slider"
                                name="sub9"
                            />
                        </Grid>
                        <Grid item>
                            <Input
                                name="sub9"
                                value={sub9}
                                size="small"
                                onChange={handleInputChange}
                                onBlur={handleBlur}
                                inputProps={{
                                    step: 1,
                                    min: 0,
                                    max: 100,
                                    type: "number",
                                    "aria-labelledby": "input-slider",
                                    readOnly: true,
                                }}
                            />
                        </Grid>
                    </Grid>

                    <Typography id="input-slider" gutterBottom>
                        3) Fluency
                    </Typography>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item>{/* <VolumeUp /> */}</Grid>
                        <Grid item xs>
                            <PrettoSlider2
                                valueLabelDisplay="auto"
                                value={typeof sub10 == "number" ? sub10 : 0}
                                onChange={handleSliderChange}
                                aria-labelledby="input-slider"
                                name="sub10"
                            />
                        </Grid>
                        <Grid item>
                            <Input
                                name="sub10"
                                value={sub10}
                                size="small"
                                onChange={handleInputChange}
                                onBlur={handleBlur}
                                inputProps={{
                                    step: 1,
                                    min: 0,
                                    max: 100,
                                    type: "number",
                                    "aria-labelledby": "input-slider",
                                    readOnly: true,
                                }}
                            />
                        </Grid>
                    </Grid>
                    <div className="overallDiv">
                        <InputLabel
                            className="overallLabel"
                            htmlFor="component-simple"
                        >
                            Overall&nbsp;:&nbsp;
                        </InputLabel>
                        <InputLabel
                            className="overallLabel"
                            htmlFor="component-simple"
                            name="overall2"
                        >
                            {overall2}
                        </InputLabel>
                    </div>
                </Box>
            </div>
            <div className="Result">
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: "100%" }} aria-label="simple table">
                        <TableHead>
                            <TableRow
                                sx={{
                                    "& th": {
                                        fontSize: "1.25rem",
                                        fontWeight: "bold",
                                    },
                                }}
                            >
                                <TableCell align="center" width={"15%"}>
                                    Phonnics
                                </TableCell>
                                <TableCell align="center" width={"15%"}>
                                    Language
                                </TableCell>
                                <TableCell align="center" width={"15%"}>
                                    Overall
                                </TableCell>
                                <TableCell align="center" width={"15%"}>
                                    Class
                                </TableCell>
                                <TableCell align="center" width={"40%"}>
                                    Comment
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow
                                sx={{
                                    "&:last-child td, &:last-child th": {
                                        border: 0,
                                    },
                                }}
                            >
                                <TableCell
                                    align="center"
                                    // sx={{
                                    //     padding: "0px 0px",
                                    //     borderRight: "2px solid black",
                                    //     backgroundColor: "lightblue",
                                    //     fontSize: "10rem",
                                    // }}
                                >
                                    <InputLabel
                                        className="resultLabel"
                                        name="result_phonnics"
                                    >
                                        {overall1}
                                    </InputLabel>
                                </TableCell>
                                <TableCell align="center">
                                    <InputLabel
                                        name="result_language"
                                        className="resultLabel"
                                    >
                                        {overall2}
                                    </InputLabel>
                                </TableCell>
                                <TableCell align="center">
                                    <InputLabel
                                        name="result_overall"
                                        className="resultLabel"
                                    >
                                        {sum_overall}
                                    </InputLabel>
                                </TableCell>
                                <TableCell align="center">
                                    <Input
                                        name="result_class"
                                        className="resultLabel"
                                        inputProps={{
                                            style: { textAlign: "center" },
                                            readOnly: true,
                                        }}
                                        onChange={onChange}
                                        value={result_class}
                                    />
                                </TableCell>
                                <TableCell align="center">
                                    <TextField
                                        name="result_comment"
                                        fullWidth
                                        id="outlined-multiline-static"
                                        multiline
                                        rows={4}
                                        onChange={onChange}
                                        value={result_comment}
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                    />
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            {/* <PrettoSlider
                valueLabelDisplay="auto"
                aria-label="pretto slider"
                defaultValue={20}
            /> */}
            {/* <DataGrid
                rows={rows}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[5]}
                // checkboxSelection
                disableSelectionOnClick
                experimentalFeatures={{ newEditingApi: true }}
                autoHeight={true}
            /> */}
        </Info>
    );
}
export async function getServerSideProps(context) {
    // api 이용해서 데이터 불러오기 (async, await으로 기다려주기)
    const id = context.query.id;
    // const res = await fetch("https://example_site.com/user_data");
    // fetch("http://localhost:3000/api/list2")
    // const res = fetch("http://localhost:3000/api/list2", {
    //     method: "GET",
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //         no: id,
    //     }),
    // });
    // const res = fetch(`http://localhost:3000/api/list2/${id}`, {
    //     headers: {
    //         Accept: "application/json",
    //     },
    // })
    //     .then((data) => data.json())
    //     .then((data) => console.log(data));

    const res = await axios
        .get(`http://192.168.35.213:3000/api/list2`, {
            params: {
                id: id,
            },
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then(function (res) {
            console.log(res.data[0]);
            return res.data[0];
        });

    // page에 props로 전달하기위해, json 형식으로 변경해주기
    // 페이지 props로 전달하기 (json 형식만 가능)

    return {
        props: {
            data: res,
        },
    };
}

export default ex1;
const PrettoSlider = styled(Slider)({
    // color: "#52af77",
    color: "#97DECE",
    height: 8,
    "& .MuiSlider-track": {
        border: "none",
    },
    "& .MuiSlider-thumb": {
        height: 24,
        width: 24,
        backgroundColor: "#fff",
        border: "2px solid currentColor",
        "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
            boxShadow: "inherit",
        },
        "&:before": {
            display: "none",
        },
    },
    "& .MuiSlider-valueLabel": {
        lineHeight: 1.2,
        fontSize: 12,
        background: "unset",
        padding: 0,
        width: 32,
        height: 32,
        borderRadius: "50% 50% 50% 0",
        // backgroundColor: "#52af77",
        backgroundColor: "#62B6B7",
        transformOrigin: "bottom left",
        transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
        "&:before": { display: "none" },
        "&.MuiSlider-valueLabelOpen": {
            transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
        },
        "& > *": {
            transform: "rotate(45deg)",
        },
    },
});

const PrettoSlider2 = styled(Slider)({
    // color: "#52af77",
    color: "#1160AA",
    height: 8,
    "& .MuiSlider-track": {
        border: "none",
    },
    "& .MuiSlider-thumb": {
        height: 24,
        width: 24,
        backgroundColor: "#fff",
        border: "2px solid currentColor",
        "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
            boxShadow: "inherit",
        },
        "&:before": {
            display: "none",
        },
    },
    "& .MuiSlider-valueLabel": {
        lineHeight: 1.2,
        fontSize: 12,
        background: "unset",
        padding: 0,
        width: 32,
        height: 32,
        borderRadius: "50% 50% 50% 0",
        // backgroundColor: "#52af77",
        backgroundColor: "#161D6E",
        transformOrigin: "bottom left",
        transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
        "&:before": { display: "none" },
        "&.MuiSlider-valueLabelOpen": {
            transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
        },
        "& > *": {
            transform: "rotate(45deg)",
        },
    },
});

const green500 = "#00BFFF";
const green900 = "#1E90FF";

const CustomSlider = styled(Slider)(({ theme }) => ({
    color: green500, //color of the slider between thumbs
    "& .MuiSlider-thumb": {
        backgroundColor: green500, //color of thumbs
    },
    "& .MuiSlider-rail": {
        color: green900, ////color of the slider outside  teh area between thumbs
    },
}));

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
    .infoDiv {
        width: 150px;
    }
    .infoInput {
        display: flex;
        margin-bottom: 5px;
    }
    .subjectLabel {
        display: flex;
        text-align: left;
        font-size: 40px;
        font-weight: bold;
        font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
            "Lucida Sans Unicode", Geneva, Verdana, sans-serif, -apple-system,
            sans-serif !important;
        /* color: #439a97; */
        color: black;
        text-decoration: underline;
        text-underline-position: under;
        /* text-decoration: line-through; */
        margin-bottom: 20px;
    }
    .overallLabel {
        display: flex;
        font-size: 27px;
        font-weight: bold;
        /* color: #439a97; */
        color: black;
        text-decoration: underline;
        text-underline-position: under;
        /* text-decoration: line-through; */
        margin-bottom: 20px;
        margin-top: 20px;
    }
    .overallDiv {
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
    }
    .resultLabel {
        display: flex;
        font-size: 30px;
        font-weight: bold;
        /* color: #439a97; */
        color: black;
        margin-bottom: 0px;
        margin-top: 0px;
        justify-content: center;
        text-align: center;
    }
    .resultComment {
        display: flex;
        font-size: 50px;
        font-weight: bold;
        /* color: #439a97; */
        color: black;
        margin-bottom: 0px;
        margin-top: 0px;
        justify-content: center;
        text-align: center;
    }
`;

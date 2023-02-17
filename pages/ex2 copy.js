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

function ex2(props) {
    const [name, setName] = useState("");
    const [school, setSchool] = useState("");
    const [result_class, setResultClass] = useState("");
    const [result_comment, setComment] = useState("");

    const [sub1, setSub1] = useState(0);
    const [sub2, setSub2] = useState(0);
    const [sub3, setSub3] = useState(0);
    const [overall1, setOverall1] = useState(0);

    const [sub4, setSub4] = useState(0);
    const [sub5, setSub5] = useState(0);
    const [overall2, setOverall2] = useState(0);

    const [sub6, setSub6] = useState(0);
    const [sub7, setSub7] = useState(0);
    const [sub8, setSub8] = useState(0);
    const [overall3, setOverall3] = useState(0);

    const [sub9, setSub9] = useState(0);
    const [sub10, setSub10] = useState(0);
    const [sub11, setSub11] = useState(0);
    const [sub12, setSub12] = useState(0);
    const [sub13, setSub13] = useState(0);
    const [overall4, setOverall4] = useState(0);

    const [sub14, setSub14] = useState(0);
    const [sub15, setSub15] = useState(0);
    const [sub16, setSub16] = useState(0);
    const [sub17, setSub17] = useState(0);
    const [sub18, setSub18] = useState(0);
    const [overall5, setOverall5] = useState(0);

    const [sum_overall1, setSumOverall1] = useState(0);
    const [sum_overall2, setSumOverall2] = useState(0);
    const [sum_overall3, setSumOverall3] = useState(0);

    useEffect(() => {
        let sum = calculate([sub1, sub2, sub3]);
        // console.log(sum);
        setOverall1(sum);
    }, [sub1, sub2, sub3]);

    useEffect(() => {
        let sum = calculate([sub4, sub5]);
        // console.log(sum);
        setOverall2(sum);
    }, [sub4, sub5]);

    useEffect(() => {
        let sum = calculate([sub6, sub7, sub8]);
        // console.log(sum);
        setOverall3(sum);
    }, [sub6, sub7, sub8]);

    useEffect(() => {
        let sum = calculate([sub9, sub10, sub11, sub12, sub13]);
        // console.log(sum);
        setOverall4(sum);
    }, [sub9, sub10, sub11, sub12, sub13]);

    useEffect(() => {
        let sum = calculate([sub14, sub15, sub16, sub17, sub18]);
        // console.log(sum);
        setOverall5(sum);
    }, [sub14, sub15, sub16, sub17, sub18]);

    useEffect(() => {
        let sum = calculate([overall1 * 1, overall2 * 1, overall3 * 1]);
        // console.log(sum);
        setSumOverall1(sum);
    }, [overall1, overall2, overall3]);

    useEffect(() => {
        let sum = calculate([overall4 * 1, overall5 * 1]);
        // console.log(sum);
        setSumOverall2(sum);
    }, [overall4, overall5]);

    useEffect(() => {
        let sum = calculate([sum_overall1 * 1, sum_overall2 * 1]);
        // console.log(sum);
        setSumOverall3(sum);
    }, [sum_overall1, sum_overall2]);

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
            case "sub11":
                setSub11(newValue);
                break;
            case "sub12":
                setSub12(newValue);
                break;
            case "sub13":
                setSub13(newValue);
                break;
            case "sub14":
                setSub14(newValue);
                break;
            case "sub15":
                setSub15(newValue);
                break;
            case "sub16":
                setSub16(newValue);
                break;
            case "sub17":
                setSub17(newValue);
                break;
            case "sub18":
                setSub18(newValue);
                break;
            default:
                break;
        }

        // console.log(event.target);
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
                sub10(
                    event.target.value === "" ? "" : Number(event.target.value),
                );
                break;
            case "sub11":
                setSub11(
                    event.target.value === "" ? "" : Number(event.target.value),
                );
                break;
            case "sub12":
                setSub12(
                    event.target.value === "" ? "" : Number(event.target.value),
                );
                break;
            case "sub13":
                setSub13(
                    event.target.value === "" ? "" : Number(event.target.value),
                );
                break;
            case "sub14":
                setSub14(
                    event.target.value === "" ? "" : Number(event.target.value),
                );
                break;
            case "sub15":
                setSub15(
                    event.target.value === "" ? "" : Number(event.target.value),
                );
                break;
            case "sub16":
                setSub16(
                    event.target.value === "" ? "" : Number(event.target.value),
                );
                break;
            case "sub17":
                setSub17(
                    event.target.value === "" ? "" : Number(event.target.value),
                );
                break;
            case "sub18":
                setSub18(
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
        fetch("http:/192.168.35.213:3000/api/save_ex2", {
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
                result11: sub11,
                result12: sub12,
                result13: sub13,
                result14: sub14,
                result15: sub15,
                result16: sub16,
                result17: sub17,
                result18: sub18,
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

    return (
        <Info>
            <div className="Header">
                <h1>RITE DIAGNOSTIC TEST (EX2)</h1>
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
                        placeholder="Enter Name."
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
                        placeholder="Enter School/Grade."
                    />
                </div>
                {/* <Button className="btnSave" variant="contained" onClick={Save}> */}
                <Button className="btnSave" onClick={Save}>
                    저장
                </Button>
            </div>

            <div className="Subject">
                <Box margin={4}>
                    <InputLabel
                        className="subjectLabel"
                        htmlFor="component-simple"
                    >
                        Vocabulary
                    </InputLabel>

                    <Typography id="input-slider" gutterBottom>
                        1) Spelling
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
                                }}
                                readOnly="true"
                            />
                        </Grid>
                    </Grid>

                    <Typography id="input-slider" gutterBottom>
                        2) Meaning
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
                                }}
                                readOnly="true"
                            />
                        </Grid>
                    </Grid>

                    <Typography id="input-slider" gutterBottom>
                        3) Vsage
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
                                }}
                                readOnly="true"
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
                        Reading Comprehension
                    </InputLabel>

                    <Typography id="input-slider" gutterBottom>
                        1) Main idea
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
                                }}
                                readOnly="true"
                            />
                        </Grid>
                    </Grid>

                    <Typography id="input-slider" gutterBottom>
                        2) Key details
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
                                }}
                                readOnly="true"
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

                    <InputLabel
                        className="subjectLabel"
                        htmlFor="component-simple"
                    >
                        Grammar
                    </InputLabel>

                    <Typography id="input-slider" gutterBottom>
                        1) Basic
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
                                }}
                                readOnly="true"
                            />
                        </Grid>
                    </Grid>

                    <Typography id="input-slider" gutterBottom>
                        2) Intermediate
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
                                }}
                                readOnly="true"
                            />
                        </Grid>
                    </Grid>
                    <Typography id="input-slider" gutterBottom>
                        3) Advance
                    </Typography>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item>{/* <VolumeUp /> */}</Grid>
                        <Grid item xs>
                            <PrettoSlider
                                valueLabelDisplay="auto"
                                value={typeof sub8 == "number" ? sub8 : 0}
                                onChange={handleSliderChange}
                                aria-labelledby="input-slider"
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
                                }}
                                readOnly="true"
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
                            name="overall3"
                        >
                            {overall3}
                        </InputLabel>
                    </div>

                    <InputLabel
                        className="subjectLabel"
                        htmlFor="component-simple"
                    >
                        Oral
                    </InputLabel>

                    <Typography id="input-slider" gutterBottom>
                        1) Listening Comprehension
                    </Typography>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item>{/* <VolumeUp /> */}</Grid>
                        <Grid item xs>
                            <PrettoSlider2
                                valueLabelDisplay="auto"
                                value={typeof sub9 == "number" ? sub9 : 0}
                                onChange={handleSliderChange}
                                aria-labelledby="input-slider"
                                color="primary"
                                id="sub9"
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
                                }}
                                readOnly="true"
                            />
                        </Grid>
                    </Grid>

                    <Typography id="input-slider" gutterBottom>
                        2) Vocabulary
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
                                }}
                                readOnly="true"
                            />
                        </Grid>
                    </Grid>

                    <Typography id="input-slider" gutterBottom>
                        3) Structure
                    </Typography>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item>{/* <VolumeUp /> */}</Grid>
                        <Grid item xs>
                            <PrettoSlider2
                                valueLabelDisplay="auto"
                                value={typeof sub11 == "number" ? sub11 : 0}
                                onChange={handleSliderChange}
                                aria-labelledby="input-slider"
                                name="sub11"
                            />
                        </Grid>
                        <Grid item>
                            <Input
                                name="sub11"
                                value={sub11}
                                size="small"
                                onChange={handleInputChange}
                                onBlur={handleBlur}
                                inputProps={{
                                    step: 1,
                                    min: 0,
                                    max: 100,
                                    type: "number",
                                    "aria-labelledby": "input-slider",
                                }}
                                readOnly="true"
                            />
                        </Grid>
                    </Grid>
                    <Typography id="input-slider" gutterBottom>
                        4) Fluency
                    </Typography>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item>{/* <VolumeUp /> */}</Grid>
                        <Grid item xs>
                            <PrettoSlider2
                                valueLabelDisplay="auto"
                                value={typeof sub12 == "number" ? sub12 : 0}
                                onChange={handleSliderChange}
                                aria-labelledby="input-slider"
                                name="sub12"
                            />
                        </Grid>
                        <Grid item>
                            <Input
                                name="sub12"
                                value={sub12}
                                size="small"
                                onChange={handleInputChange}
                                onBlur={handleBlur}
                                inputProps={{
                                    step: 1,
                                    min: 0,
                                    max: 100,
                                    type: "number",
                                    "aria-labelledby": "input-slider",
                                }}
                                readOnly="true"
                            />
                        </Grid>
                    </Grid>

                    <Typography id="input-slider" gutterBottom>
                        5) Communication
                    </Typography>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item>{/* <VolumeUp /> */}</Grid>
                        <Grid item xs>
                            <PrettoSlider2
                                valueLabelDisplay="auto"
                                value={typeof sub13 == "number" ? sub13 : 0}
                                onChange={handleSliderChange}
                                aria-labelledby="input-slider"
                                name="sub13"
                            />
                        </Grid>
                        <Grid item>
                            <Input
                                name="sub13"
                                value={sub13}
                                size="small"
                                onChange={handleInputChange}
                                onBlur={handleBlur}
                                inputProps={{
                                    step: 1,
                                    min: 0,
                                    max: 100,
                                    type: "number",
                                    "aria-labelledby": "input-slider",
                                }}
                                readOnly="true"
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
                            name="overall4"
                        >
                            {overall4}
                        </InputLabel>
                    </div>

                    <InputLabel
                        className="subjectLabel"
                        htmlFor="component-simple"
                    >
                        Writing
                    </InputLabel>

                    <Typography id="input-slider" gutterBottom>
                        1) Grammar
                    </Typography>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item>{/* <VolumeUp /> */}</Grid>
                        <Grid item xs>
                            <PrettoSlider2
                                valueLabelDisplay="auto"
                                value={typeof sub14 == "number" ? sub14 : 0}
                                onChange={handleSliderChange}
                                aria-labelledby="input-slider"
                                color="primary"
                                id="sub14"
                                name="sub14"
                            />
                        </Grid>
                        <Grid item>
                            <Input
                                name="sub14"
                                value={sub14}
                                size="small"
                                onChange={handleInputChange}
                                onBlur={handleBlur}
                                inputProps={{
                                    step: 1,
                                    min: 0,
                                    max: 100,
                                    type: "number",
                                    "aria-labelledby": "input-slider",
                                }}
                                readOnly="true"
                            />
                        </Grid>
                    </Grid>

                    <Typography id="input-slider" gutterBottom>
                        2) Vocabulary
                    </Typography>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item>{/* <VolumeUp /> */}</Grid>
                        <Grid item xs>
                            <PrettoSlider2
                                valueLabelDisplay="auto"
                                value={typeof sub15 == "number" ? sub15 : 0}
                                onChange={handleSliderChange}
                                aria-labelledby="input-slider"
                                name="sub15"
                            />
                        </Grid>
                        <Grid item>
                            <Input
                                name="sub15"
                                value={sub15}
                                size="small"
                                onChange={handleInputChange}
                                onBlur={handleBlur}
                                inputProps={{
                                    step: 1,
                                    min: 0,
                                    max: 100,
                                    type: "number",
                                    "aria-labelledby": "input-slider",
                                }}
                                readOnly="true"
                            />
                        </Grid>
                    </Grid>

                    <Typography id="input-slider" gutterBottom>
                        3) Convention
                    </Typography>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item>{/* <VolumeUp /> */}</Grid>
                        <Grid item xs>
                            <PrettoSlider2
                                valueLabelDisplay="auto"
                                value={typeof sub16 == "number" ? sub16 : 0}
                                onChange={handleSliderChange}
                                aria-labelledby="input-slider"
                                name="sub16"
                            />
                        </Grid>
                        <Grid item>
                            <Input
                                name="sub16"
                                value={sub16}
                                size="small"
                                onChange={handleInputChange}
                                onBlur={handleBlur}
                                inputProps={{
                                    step: 1,
                                    min: 0,
                                    max: 100,
                                    type: "number",
                                    "aria-labelledby": "input-slider",
                                }}
                                readOnly="true"
                            />
                        </Grid>
                    </Grid>
                    <Typography id="input-slider" gutterBottom>
                        4) Structure
                    </Typography>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item>{/* <VolumeUp /> */}</Grid>
                        <Grid item xs>
                            <PrettoSlider2
                                valueLabelDisplay="auto"
                                value={typeof sub17 == "number" ? sub17 : 0}
                                onChange={handleSliderChange}
                                aria-labelledby="input-slider"
                                name="sub17"
                            />
                        </Grid>
                        <Grid item>
                            <Input
                                name="sub17"
                                value={sub17}
                                size="small"
                                onChange={handleInputChange}
                                onBlur={handleBlur}
                                inputProps={{
                                    step: 1,
                                    min: 0,
                                    max: 100,
                                    type: "number",
                                    "aria-labelledby": "input-slider",
                                }}
                                readOnly="true"
                            />
                        </Grid>
                    </Grid>

                    <Typography id="input-slider" gutterBottom>
                        5) Content
                    </Typography>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item>{/* <VolumeUp /> */}</Grid>
                        <Grid item xs>
                            <PrettoSlider2
                                valueLabelDisplay="auto"
                                value={typeof sub18 == "number" ? sub18 : 0}
                                onChange={handleSliderChange}
                                aria-labelledby="input-slider"
                                name="sub18"
                            />
                        </Grid>
                        <Grid item>
                            <Input
                                name="sub18"
                                value={sub18}
                                size="small"
                                onChange={handleInputChange}
                                onBlur={handleBlur}
                                inputProps={{
                                    step: 1,
                                    min: 0,
                                    max: 100,
                                    type: "number",
                                    "aria-labelledby": "input-slider",
                                }}
                                readOnly="true"
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
                            name="overall5"
                        >
                            {overall5}
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
                                        padding: "5px 5px",
                                        fontSize: "1.3rem", //Result Table Header font size
                                        fontWeight: "bold",
                                    },
                                }}
                            >
                                <TableCell align="center" width={"15%"}>
                                    Voca / R/C / Gr
                                </TableCell>
                                <TableCell align="center" width={"15%"}>
                                    Oral / Writing
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
                                    sx={{
                                        padding: "4px 4px",
                                        borderRight: "2px solid black",
                                        fontSize: "10rem",
                                    }}
                                >
                                    <InputLabel
                                        className="resultLabel"
                                        name="result_phonnics"
                                    >
                                        {sum_overall1}
                                    </InputLabel>
                                </TableCell>
                                <TableCell
                                    align="center"
                                    sx={{
                                        padding: "4px 4px",
                                        borderRight: "2px solid black",
                                        fontSize: "10rem",
                                    }}
                                >
                                    <InputLabel
                                        name="result_language"
                                        className="resultLabel"
                                    >
                                        {sum_overall2}
                                    </InputLabel>
                                </TableCell>
                                <TableCell
                                    align="center"
                                    sx={{
                                        padding: "4px 4px",
                                        borderRight: "2px solid black",
                                        fontSize: "10rem",
                                    }}
                                >
                                    <InputLabel
                                        name="result_overall"
                                        className="resultLabel"
                                    >
                                        {sum_overall3}
                                    </InputLabel>
                                </TableCell>
                                <TableCell
                                    align="center"
                                    sx={{
                                        padding: "4px 4px",
                                        borderRight: "2px solid black",
                                        fontSize: "10rem",
                                    }}
                                >
                                    <Input
                                        name="result_class"
                                        className="resultLabel"
                                        inputProps={{
                                            style: { textAlign: "center" },
                                        }}
                                        onChange={onChange}
                                        value={result_class}
                                    />
                                </TableCell>
                                <TableCell
                                    align="center"
                                    sx={{
                                        padding: "4px 4px",
                                        borderRight: "2px solid black",
                                        fontSize: "10rem",
                                    }}
                                >
                                    <TextField
                                        name="result_comment"
                                        fullWidth
                                        id="outlined-multiline-static"
                                        multiline
                                        rows={4}
                                        onChange={onChange}
                                        value={result_comment}
                                        InputProps={{
                                            style: {
                                                fontSize: 13,
                                                padding: 5,
                                            },
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

export default ex2;

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
        font-size: 13pt;
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
        font-size: 30px;
        font-weight: bold;
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

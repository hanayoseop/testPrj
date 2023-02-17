import React from "react";
import Button from "@mui/material/Button";
import styled from "styled-components";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import HouseIcon from "@mui/icons-material/House";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";

export default function Home() {
    function Copyright() {
        return (
            <Typography variant="body2" color="text.secondary" align="center">
                {"Copyright © "}
                <Link color="inherit" href="https://blog.naver.com/ritehannah/">
                    RITE Blog
                </Link>{" "}
                {new Date().getFullYear()}
                {"."}
            </Typography>
        );
    }

    return (
        <Main>
            <CssBaseline />
            <AppBar className="indexAppbar" position="relative">
                <Toolbar>
                    <HouseIcon sx={{ mr: 2 }} />
                    <Typography variant="h6" color="inherit" noWrap>
                        RITE DIGNOSTIC TEST
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                {/* Hero unit */}
                <Box
                    sx={{
                        bgcolor: "background.paper",
                        pt: 8,
                        pb: 6,
                    }}
                >
                    <Container maxWidth="sm">
                        <Typography
                            component="h1"
                            variant="h2"
                            align="center"
                            color="text.primary"
                            gutterBottom
                        >
                            RITE DIGNOSTIC TEST
                        </Typography>
                        <Typography
                            variant="h5"
                            align="center"
                            color="text.secondary"
                            paragraph
                        >
                            Something short and leading about the collection
                            below—its contents, the creator, etc. Make it short
                            and sweet, but not too short so folks don&apos;t
                            simply skip over it entirely.
                        </Typography>
                        <Stack
                            sx={{ pt: 4 }}
                            direction="row"
                            spacing={2}
                            justifyContent="center"
                        >
                            <Link href="/ex1">
                                <Button className="linkBtn" variant="contained">
                                    Ex1
                                </Button>
                            </Link>
                            <Link href="/ex2">
                                <Button className="linkBtn" variant="contained">
                                    Ex2
                                </Button>
                            </Link>
                            <Link href="/exList">
                                <Button className="linkBtn" variant="contained">
                                    ExamList
                                </Button>
                            </Link>
                        </Stack>
                    </Container>
                </Box>
            </main>
            {/* Footer */}
            <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
                <Typography
                    variant="h6"
                    align="center"
                    gutterBottom
                ></Typography>
                <Typography
                    variant="subtitle1"
                    align="center"
                    color="text.secondary"
                    component="p"
                >
                    {/* Something here to give the footer a purpose! */}
                </Typography>
                <Copyright />
            </Box>
            {/* End footer */}
        </Main>
    );
}

const Main = styled.div`
    /* height: 100vh; */
    width: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .linkBtn {
        margin-right: 10px;
        background-color: #10a19d;
    }
    .indexAppbar {
        background-color: #10a19d;
    }
`;

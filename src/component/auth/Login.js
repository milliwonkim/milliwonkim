// src/component/auth/Login.js

import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import styled from 'styled-components';

import { FaFacebookSquare, FaTwitter, FaGoogle } from 'react-icons/fa';
import { GoPerson } from 'react-icons/go';

import * as actions from '../../store/actions/index';

const StyledDiv1 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    margin: 10px;
    padding: 20px;
    text-align: center;
    justify-content: space-around;
    ${'' /* flex-direction: row; */}
    box-shadow: 2px 3px 8px gray;
    @media (max-width: 768px) {
    }
`;

const StyledDiv2 = styled.div`
    padding: 10px;
    align-items: center;
`;

const StyledLabel = styled.label`
    font-family: 'Archivo Black', sans-serif;
    color: #34495e;
    ${'' /* text-shadow: 4px 3px 1px #bdc3c7; */}
    font-size: 35px;
`;

const StyledInput = styled.input`
    padding: 20px;
    font-size: 18px;
    width: 420px;
    margin: 10px;
    ${'' /* border-radius: 8px; */}
    border: 6px solid #34495E;
`;

const StyledButton = styled.button`
    padding: 20px;
    width: 420px;
    margin: 10px;
    font-size: 20px;
    font-weight: bold;
    color: white;
    background-color: #34495E;
    border-radius: 8px;
    box-shadow: 2px 3px 3px gray;
    &:hover {
        cursor: pointer;
        font-family: Bowlby One SC, cursive;
        text-shadow: 2px 3px 0 gray;
        color: yellow;
    }
`;

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      border: '3px solid #34495E',
      margin: '10px',
      padding: '18px',
      boxShadow: '2px 2px 3px gray',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'space-around'
    },
    textInput: {
        width: '400px'
    }
  }));

const Login = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container>
                <Grid 
                    item 
                    xs={12} sm={12} md={6} lg={6}
                >
                    <Paper className={classes.paper}>
                        <form className={classes.root} noValidate autoComplete="off">
                            <StyledDiv2>
                                <TextField
                                    className={classes.textInput}
                                    id="standard-basic"
                                    label="EMAIL"
                                    type="email"
                                />
                            </StyledDiv2>

                            <StyledDiv2>
                                <TextField
                                    className={classes.textInput}
                                    id="standard-basic"
                                    label="PASSWORD"
                                    type="password"
                                />
                            </StyledDiv2>

                            <StyledDiv2>
                                <StyledButton
                                    type="submit"
                                >LOGIN</StyledButton>
                            </StyledDiv2>
                        </form>
                    </Paper>
                </Grid>

                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Paper className={classes.paper}>
                        <p>If you don't already have an account, <br /> click the button below to create your account</p>
                        <StyledButton>CREATE ACCOUNT</StyledButton>
                        <br />
                        <br />
                        <p style={{color: '#718093'}}>or</p>
                        <br />
                        <StyledButton
                            style={{ backgroundColor: '#3b5998' }}
                        ><FaFacebookSquare
                            style={{
                                        fontSize: '20px'
                                    }}
                        /></StyledButton>
                        <br />
                        <StyledButton
                            style={{ backgroundColor: '#00aced' }}
                        ><FaTwitter
                            style={{
                                        fontSize: '20px',
                                        margin: '0 10px'
                                    }}
                        /></StyledButton>
                        <br />
                        <StyledButton
                            style={{ backgroundColor: '#d62d20' }}
                        ><FaGoogle
                            style={{
                                        fontSize: '20px'
                                    }}
                        /></StyledButton>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default Login;
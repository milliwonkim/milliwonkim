// src/component/article/feed/post/plusPost.js

import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import SaveIcon from '@material-ui/icons/Save';

import styled from 'styled-components';

import Modal from '@material-ui/core/Modal';

import { AiOutlinePlusCircle } from 'react-icons/ai';

// ------material-ui-------------

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }

const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1)
        },
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
        }
    },
    button: {
        backgroundColor: '#34495E',
        color: 'white',
        '&:hover': {
            backgroundColor: '#40739e',
            color: 'yellow'
        }
    },
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
      },
    input: {
        display: 'none'
    }
}));

// ------styled-components-------
const StyledDiv = styled.div`
    font-family: Bowlby One SC, cursive;
    padding: 8px 18px;
    width: 20vw;
    background-color: #34495E;
    border-radius: 8px;
    box-shadow: 2px 3px 8px gray;
    &:hover {
        background-color: #34495E;
        color: yellow;
        border: 3px solid yellow;
        text-shadow: 2px 3px gray;
    }
`;

// const StyledLink = styled(Link)`
//     text-decoration: none !important;
//     color: white;
// `;

const StyledDiv1 = styled.div`
    margin: 30px;
`;

const StyledDiv2 = styled.div`
    margin: 30px;
    display: flex;
    justify-content: 'center';
    flex-direction: 'column';
`;

// const StyledAiOutlinePlusCircle = styled(AiOutlinePlusCircle)`
//     width: 24px !important;
//     height: 60px !important;
// `;

const PlusPost = () => {

    const classes = useStyles();

    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
                <Button 
                    variant="contained" 
                    className={classes.button}
                    onClick={handleOpen}
                >
                        NEW POST
                </Button>
                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={open}
                    onClose={handleClose}
                >
                    <div style={modalStyle} className={classes.paper}>
                        <StyledDiv2>
                            <form className={classes.root} noValidate autoComplete="off">
                                <StyledDiv1>
                                    <h1>New Post</h1>
                                </StyledDiv1>
                                <StyledDiv1>
                                    <TextField
                                        id="standard-textarea"
                                        label="Title"
                                        multiline
                                    />
                                </StyledDiv1>
                                <StyledDiv1>
                                    <TextField
                                        id="standard-textarea"
                                        label="Content"
                                        multiline
                                    />
                                </StyledDiv1>
                                <StyledDiv1>
                                    <input
                                        accept="image/*"
                                        className={classes.input}
                                        id="contained-button-file"
                                        multiple
                                        type="file"
                                    />
                                    <label htmlFor="contained-button-file">
                                        <Button variant="contained" color="primary" component="span">
                                        File
                                        </Button>
                                    </label>
                                </StyledDiv1>
                                <StyledDiv1>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        size="small"
                                        className={classes.button}
                                        startIcon={<SaveIcon />}
                                    >
                                        Save
                                    </Button>
                                </StyledDiv1>
                            </form>
                        </StyledDiv2>
                        <PlusPost />
                    </div>
                </Modal>
        </div>
    );
}
export default PlusPost;
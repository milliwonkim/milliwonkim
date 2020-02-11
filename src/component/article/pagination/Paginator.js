// src/component/paginator/Paginator.js

import React from 'react';
import { MemoryRouter as Router } from 'react-router';
import { Link } from 'react-router-dom';
import Pagination, { usePagination } from '@material-ui/lab/Pagination';
import PaginationItem from '@material-ui/lab/PaginationItem';

import { makeStyles, withTheme } from '@material-ui/core/styles';
import styled from 'styled-components';


// -------material-ui-----------------

const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            marginTop: theme.spacing(2),
        }
    },
    paginationItem: {
        '&:focus': {
            backgroundColor: '#40739e',
            color: 'white'
        }
    }
  }));

// -------styled-components-------------

const StyledDiv1 = styled.div`
    display: inline-block;
    margin: 30px;
    padding: 5px;
    border: 2px solid black;
    ${'' /* background-color: #34495E; */}
    align-items: center;
    border-radius: 8px;
    border: none;
    box-shadow: 2px 3px 8px gray;
`;

const Paginator = ({ postsPerPage, totalPosts, paginate }) => {


    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    const classes = useStyles();

    const { items } = usePagination({
        count: pageNumbers.length
    })


    return (
        <StyledDiv1>
            <Router>
                <Pagination>
                    {
                        items.map(item => (
                            <li key={item.type || item.page}>
                                <PaginationItem
                                    onClick={() => paginate(item.page)}
                                    component={Link}
                                    to={`/cars${item.page === 1 ? '' : `?page=${item.page}`}`}
                                    {...item}
                                    className={classes.paginationItem}
                                />
                            </li>
                        ))
                    }
                </Pagination>
            </Router>
        </StyledDiv1>
    )
};

export default Paginator;
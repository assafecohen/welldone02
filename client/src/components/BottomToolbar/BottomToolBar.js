import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const BottomToolBar = () => {
    return (
        <Container>
                <Link to='/categories'  className='btn btn-info' style={{width: '100%'}}>
                    Categories
                </Link>
            <Link to='/locations'  className='btn btn-primary' style={{width: '100%', marginLeft: '5px'}}>
                Locations
            </Link>
        </Container>
    )
};

const Container = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
    padding: 7px;
    display: flex;
    justify-content: space-around
`;


export default BottomToolBar;
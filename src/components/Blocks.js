import React, { Fragment } from 'react';
import '../App.css';
import Girl from './Girl';
import { Container, Typography } from '@material-ui/core';
import classes from './Blocks.module.css';


const blocks = () => {

    let backgroundColors = {
        "pink": "#F06B86",
        "purple": "#A28EBE",
        "green": "#77C29F",
        "yellow": "#F0D577",
        "orange": "#F28061"
      };

    const blocks = Object.keys(backgroundColors).slice(1).map(color => (
        <Container maxWidth="sm" className="block" key={color} data-key={color}>
            <Typography variant="h4">
            Camila Espinoza
            </Typography>
        </Container>
    ));

    return (
        <Fragment>
            <FirstBlock color={backgroundColors[0]} />
            {blocks}
        </Fragment>
    );
}


const FirstBlock = props => {
    return (
        <Container maxWidth="sm" className={classes.wrapper} key={props.color} data-key={props.color}>
            <Typography variant="h3">
                Camila Espinoza
            </Typography>
            <Girl />
        </Container>
    )
}

export default blocks;
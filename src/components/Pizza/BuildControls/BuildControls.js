import React from 'react';

import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Mozzarela', type: 'mozzarela' },
    { label: 'Pepperoni', type: 'pepperoni' },
    { label: 'Onion', type: 'onion' },
    { label: 'FreshTomatoes', type: 'FreshTomatoes' },
];
  
const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Current Price: <stron>{props.price.toFixed(2)}</stron></p>
        {controls.map(ctrl => (
            <BuildControl 
                key={ctrl.label} 
                label={ctrl.label}
                added={() => props.ingredientAdded(ctrl.type)}
                removed={() => props.ingredientRemoved(ctrl.type)}
                disabled={props.disabled[ctrl.type]}
                />
        ))};

    </div>
);

export default buildControls;
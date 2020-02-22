import React from 'react';
// import { readFileSync } from 'fs-extra';

const withClass = (props) => (
<div className={props.classes}>{props.children}</div>
);

export default  withClass;
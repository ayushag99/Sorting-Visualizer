import React from 'react'

import styles from './ArrayBar.module.css'

const ArrayBar=(props)=> (
    <div className={styles.ArrayBar} style={{height:props.height , width: props.width , backgroundColor:props.mark? props.swap_mark?'Blue':'red'   : '#2e2e2e'}}></div>
)
export default ArrayBar;
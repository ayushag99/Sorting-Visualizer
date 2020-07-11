import React, { Component } from "react";

import styles from "./Bars.module.css";

// Imorting Component
import ArrayBar from "./ArrayBar/ArrayBar";

class Bars extends Component {
  state = {
    maxHeight: 0,
    maxValue: 0,
  };

  render() {
    let maxHeight = window.innerHeight * 0.8 * 0.98;
    let maxwidth = (window.innerWidth * 0.8) / this.props.array.length;
    let maxValue = Math.max(...this.props.array);
    // console.log(maxwidth)
    return (
      <div className={styles.Bars}>
        {this.props.array.map((value, index) => (
          <ArrayBar
            key={index}
            width={maxwidth}
            height={(value / maxValue) * maxHeight}
            mark= {this.props.animation.marker.i === index || this.props.animation.marker.j === index ? true : false}
            swap_mark = {this.props.animation.swap}
          />
        ))}
      </div>
    );
  }
}

export default Bars;

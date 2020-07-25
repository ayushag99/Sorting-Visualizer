import React, { Component } from "react";

import styles from "./Toolbar.module.css";

// Importing Button
import Play from "../../../assets/Play.svg";
import Pause from "../../../assets/Pause.svg";
import LeftShift from "../../../assets/LeftShift.svg";
import RightShift from "../../../assets/RightShift.svg";

class Toolbar extends Component {
  render() {
    return (
      <div className={styles.Toolbar}>
        <div className={styles.Controler}>
          <div className={styles.arrayGenerate}>
            <button onClick={() => this.props.arrayGeneration(50, 5, 1000)}>
              Generate Array
            </button>
          </div>

          <div className={styles.Controls}>
            <div className={styles.LeftShift}>
              <img onClick={this.props.leftShift} src={LeftShift} alt="" />
            </div>
            <div className={styles.Play}>
              <img
                onClick={this.props.toggleAnimation}
                src={this.props.animationPlayingStatus ? Pause : Play}
                alt=""
              />
            </div>
            <div className={styles.RightShift}>
              <img onClick={this.props.rightShift} src={RightShift} alt="" />
            </div>
          </div>

          <div>
            <select name="" id="" >
              <option value="">Selection Sort</option>
              <option value="">Bubble Sort</option>
            </select>
          </div>
        </div>

        <div className={styles.ProgressBar}>
          <span className={styles.ProgressCount}>
            {this.props.completedLength}
          </span>
          <input
            type="range"
            min="0"
            onChange={(e) => {
              this.props.progressBarUpdate(e);
            }}
            max={this.props.totalLength}
            value={this.props.completedLength}
          />
          <span className={styles.TotalLength}>{this.props.totalLength}</span>
        </div>
      </div>
    );
  }
}

export default Toolbar;

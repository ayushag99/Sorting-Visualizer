import React, { Component } from "react";

// Importing Styles
import styles from "./SortingVisualizer.module.css";

// Importing Components
import Toolbar from "./Component/Toolbar/Toolbar";
import Bars from "./Component/Bars/Bars";

// Importing Algorithm Handler
import selectionSort from "../Algorithms/SelectionSort";
import bubbleSort from "../Algorithms/BubbleSort";

class SortingVisualizer extends Component {
  animation_speed = 10;
  animations = [];
  index = 0;
  state = {
    array: [],
    animationPlayingStatus: false,
    animation: {
      marker: { i: null, j: null },
      swap: null,
    },
  };

  //   @desc
  // HERE: Lifecycle Management
  componentDidMount = () => {
    console.log("Mounted");
    this.resetWithNewArray(20, 5, 50, () =>
      this.animationInitializer(selectionSort)
    );
  };

  //   @desc
  //   HERE: Reset with new array
  resetWithNewArray = (len = 20, startRange = 5, endRange = 50, cb) => {
    this.index = 0;
    this.animations = [];
    this.setState(
      {
        array: this.generateRandomArray(len, startRange, endRange),
        animationPlayingStatus: false,
        animation: {
          marker: { i: null, j: null },
          swap: null,
        },
      },
      cb
    );
  };
  //   @desc
  //   HERE: Generate Random Array
  generateRandomArray = (len, startRange, endRange) => {
    //   Generating random array
    let array = Array.from({ length: len }, () =>
      Math.floor(Math.random() * (endRange - startRange + 1) + startRange)
    );
    return array;
  };

  // @desc
  // HERE: Initializes the animation
  animationInitializer = (algo) => {
    //   TODO: Will need a correction--such that algorithm can be dynamically selected
    this.animations = algo(this.state.array);
    this.animations.push({
      i: null,
      j: null,
      swap: null,
      arr: this.animations[this.animations.length - 1].arr,
    });
    this.index = 0;
  };

  // @desc
  // HERE: Animation Handler
  animationHandler = (animations) => {
    if (animations.length === this.index) {
      this.pauseAnimation();
      this.index -= 1;
      return;
    }
    this.setState({
      array: animations[this.index].arr,
      animation: {
        marker: { i: animations[this.index].i, j: animations[this.index].j },
        swap: animations[this.index].swap,
      },
    });
  };

  pauseAnimation = () => {
    this.setState({ animationPlayingStatus: false });
    clearInterval(this.animation_id);
  };

  continueAnimation = () => {
    if (this.animations == false) {
      //   TODO: Needs an alteration that the by default algo is preset
      this.animationInitializer(selectionSort);
    }
    this.setState({ animationPlayingStatus: true });
    this.animation_id = setInterval(() => {
      this.animationHandler(this.animations);
      this.index += 1;
    }, this.animation_speed);
  };

  toggleAnimation = () => {
    if (this.state.animationPlayingStatus) {
      this.pauseAnimation();
    } else {
      this.continueAnimation();
    }
  };

  leftShift = () => {
    this.pauseAnimation();
    this.animationHandler(this.animations);
    this.index -= 1;
  };
  rightShift = () => {
    this.pauseAnimation();
    this.animationHandler(this.animations);
    this.index += 1;
  };
  progressUpdate=(e)=>{
    console.log(e.target.value)

  }

  // @desc
  // HERE: Render Function
  render() {
    return (
      <div className={styles.SortingVisualizer}>
        <Bars array={this.state.array} animation={this.state.animation} />

        <Toolbar
          arrayGeneration={this.resetWithNewArray}
          animationPlayingStatus={this.state.animationPlayingStatus}
          toggleAnimation={this.toggleAnimation}
          leftShift={this.leftShift}
          rightShift={this.rightShift}
          totalLength={this.animations.length}
          completedLength={this.index}
          progressBarUpdate={this.progressUpdate}
        />
      </div>
    );
  }
}

export default SortingVisualizer;

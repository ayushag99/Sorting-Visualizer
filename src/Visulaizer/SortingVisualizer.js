import React, { Component } from "react";

// Importing Styles
import styles from "./SortingVisualizer.module.css";

// Importing Components
import Toolbar from "./Component/Toolbar/Toolbar";
import Bars from "./Component/Bars/Bars";

// Importing Algorithm Handler
import selectionSort from "../Algorithms/SelectionSort/SelectionSort";

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
    this.generateRandomArray();
  };

  //   @desc
  //   HERE: Methods
  resetAnimationWithNewArray = (array) => {
    this.setState({
      array: array,
      animationPlayingStatus: false,
      animation: {
        marker: { i: null, j: null },
        swap: null,
      },
    });
    this.index = 0;
    this.animations=[]
  };

  //   @desc
  //   HERE: Generate Radom Array
  generateRandomArray = (len = 20, startRange = 5, endRange = 50) => {
    //   Generating random array
    this.pauseAnimation()
    let array = Array.from({ length: len }, () =>
      Math.floor(Math.random() * (endRange - startRange + 1) + startRange)
    );
    this.resetAnimationWithNewArray(array);
  };

  // @desc
  // HERE: Algorithm Handler
  sortingHandler = () => {
    this.animations = selectionSort(this.state.array);
    this.index = 0;
  };

  // @desc
  // HERE: Animation Handler
  animationHandler = (animations) => {
    if (animations.length === this.index) {
      this.pauseAnimation();
      this.setState({
        animation: { marker: { i: null, j: null }, swap: null },
      });
      return;
    }
    //   console.log(animations[0])
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
    console.log("Right Shift");
    this.pauseAnimation();
    this.animationHandler(this.animations);
    this.index += 1;
  };

  // @desc
  // HERE: Render Function
  render() {
    return (
      <div className={styles.SortingVisualizer}>
        <Bars array={this.state.array} animation={this.state.animation} />

        <Toolbar
          arrayGeneration={this.generateRandomArray}
          array={this.state.array}
          animationPlayingStatus={this.state.animationPlayingStatus}
          toggleAnimation={this.toggleAnimation}
          selection={() => this.sortingHandler([...this.state.array])}
          leftShift={this.leftShift}
          rightShift={this.rightShift}
          totalLength={this.animations.length}
          completedLength={this.index}
        />
      </div>
    );
  }
}

export default SortingVisualizer;

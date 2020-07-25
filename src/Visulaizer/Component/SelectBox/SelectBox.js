import React from "react";

import styles from "./SelectBox.module.css";

const SelectBox = (props) => {


  const _class = [styles.options_container, styles.active].join(" ")
  console.log(_class)
  return (
      <div className={styles.select_box}>

        <div className={_class}>

          <div className={styles.option}>
            <input
              type="radio"
              class={styles.radio}
              name="category"
              id="algo"
            />
            <label for="algo">Automobiles</label>
          </div>
          <div className={styles.option}>
            <input
              type="radio"
              className={styles.radio}
              name="category"
              id="film"
            />
            <label for="film">Film</label>
          </div>
          <div className={styles.option}>
            <input
              type="radio"
              className={styles.radio}
              name="category"
              id="option2"
            />
            <label for="option2">Option 2</label>
          </div>
          <div className={styles.option}>
            <input
              type="radio"
              className={styles.radio}
              name="category"
              id="option3"
            />
            <label for="option3">Option 3</label>
          </div>
          <div className={styles.option}>
            <input
              type="radio"
              className={styles.radio}
              name="category"
              id="option4"
            />
            <label for="option4">Option 4</label>
          </div>
          <div className={styles.option}>
            <input
              type="radio"
              className={styles.radio}
              name="category"
              id="option5"
            />
            <label for="option5">Option 5</label>
          </div>
          <div className={styles.option}>
            <input
              type="radio"
              className={styles.radio}
              name="category"
              id="option6"
            />
            <label for="option6">Option 6</label>
          </div>
          <div className={styles.option}>
            <input
              type="radio"
              className={styles.radio}
              name="category"
              id="option7"
            />
            <label for="option7">Option 7</label>
          </div>
          <div className={styles.option}>
            <input
              type="radio"
              className={styles.radio}
              name="category"
              id="option8"
            />
            <label for="option8">Option 8</label>
          </div>
        </div>
        <div className={styles.selected}>Select an algo</div>
      </div>
  );
};
export default SelectBox;

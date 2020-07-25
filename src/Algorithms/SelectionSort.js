// selection Sort
const selectionSort = (array) => {
  let animations = [];
  // Structure = {i:index_1 , j:index_2 . swap:true/false}
  for (let i = 0; i < array.length; i++) {
    let min_ind = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[min_ind] > array[j]) {
        min_ind = j;
        animations.push({ i, j, swap: true, arr: [...array] });
      } else {
        animations.push({ i, j, swap: false, arr: [...array] });
      }
    }
    animations.push({ i, j: min_ind, swap: true, arr: [...array] });
    let temp = array[i];
    array[i] = array[min_ind];
    array[min_ind] = temp;
    animations.push({ i, j: min_ind, swap: true, arr: [...array] });
  }
  return animations;
};
export default selectionSort;

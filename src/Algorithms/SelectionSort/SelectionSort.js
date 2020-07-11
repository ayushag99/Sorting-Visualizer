// selection Sort
const selectionSort=(array)=>{
    let animations = []
    // Structure = {i:index_1 , j:index_2 . swap:true/false}
    for(let i=0; i<array.length;i++){
        for (let j= i+1; j<array.length;j++){
            if (array[i]>array[j]){
                let temp = array[i]
                array[i] = array[j]
                array[j] = temp
                animations.push({i,j,swap:true , arr:[...array]})
            }else{
                animations.push({i,j,swap:false , arr:[...array]})
            }
        }
    }
    return animations
}
export default selectionSort
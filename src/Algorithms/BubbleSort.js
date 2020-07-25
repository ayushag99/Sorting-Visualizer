// selection Sort
const bubbleSort=(array)=>{
    let animations = []
    // Structure = {i:index_1 , j:index_2 . swap:true/false}
    for(let i=0; i<array.length;i++){
        for (let j= 0; j<array.length-i-1;j++){
            animations.push({i:j,j:j+1,swap:false , arr:[...array]})

            if (array[j]>array[j+1]){
                animations.push({i:j,j:j+1,swap:true , arr:[...array]})
                let temp = array[j]
                array[j] = array[j+1]
                array[j+1] = temp
                animations.push({i:j,j:j+1,swap:true , arr:[...array]})
            }
            
            
        }
        
        
    }
    return animations
}
export default bubbleSort
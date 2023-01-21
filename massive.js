const reverse = (massive)=>{
  for (let i = 0; i < massive.length / 2; i+=1) {
    // временная переменная swap что бы хранить элемент 
    // который берётся из второй половины массива
    let swap = massive[massive.length - 1 - i];
    // элемент из второй части массива меняется местами 
    // с элементом из первой части массива
    massive[massive.length - 1 - i] = massive[i];
    // элемент из первой части массива меняется местами 
    // с элементом из второй части массива
    
    massive[i] = swap ;
  }
  return massive;
}
export {reverse};
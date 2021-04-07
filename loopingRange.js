function range(start, end, step){
  var result = []
  
  if (step > 0) {
    while (start <= end) {
      result.push(start)
      start += step
    }
  }else{
    while (start >= end) {
      result.push(start)
      start -= step  
    }
  }
  return result
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
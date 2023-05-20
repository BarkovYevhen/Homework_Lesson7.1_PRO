function getPow(num, degree) {
    return degree === 0 ? 1 : degree < 0 ? 1 / getPow(num, -degree) : num * getPow(num, degree - 1);
  }
  
  console.log(getPow(5, 3));
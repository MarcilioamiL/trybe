const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
  const flatten = () => {
      return arrays.reduce((c, cv) => [...c, ...cv], []);//ou poderia usar o arrays.concat(cv)[]
  }
  console.log(flatten(arrays))
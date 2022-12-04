const parseArgs = () => {
  const arrKeyValue = [];

  const arrAllArg = process.argv.slice(2)
    .map((item, index) => index % 2 === 0 ? item.slice(2) : item);

  while (arrAllArg.length) {
    arrKeyValue.push(arrAllArg.splice(0, 2));
  }

  const result =  arrKeyValue
    .map((item) => item.join(' is '))
    .join(', ');

  console.log(result);
};

parseArgs();
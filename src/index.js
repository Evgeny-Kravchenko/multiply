module.exports = function multiply(first, second) {
  //Разобъем наши числа-строки на массивы и реверсируем их
  let arrFirst = first.split("").reverse();
  let arrSecond = second.split("").reverse();

  //Заведём стек для перемноженных в столбик значений
  let stackValues = [];

  for(let i = 0; i < arrFirst.length; i++) {
    for(let j = 0; j < arrSecond.length; j++) {
      let value = arrFirst[i] * arrSecond[j];
      //Если в стеке на данной позиции есть значение, то плюсуем его, если нет, то записываем
      if(stackValues[i + j]) {
        stackValues[i + j] = stackValues[i + j] + value;
      } else {
        stackValues[i + j] = value;
      }
    }
  }
  //Теперь имитируем стадию сложения при умножении в столбик, десятки, сотни и тысячи переносим выше на позицию
  for(let i = 0; i < stackValues.length; i++) {
    let a = stackValues[i] % 10;
    let up = Math.floor(stackValues[i] / 10);
    stackValues[i] = a;

    if(stackValues[i + 1]) {
      stackValues[i + 1] += up;
    } else if(up != 0) {
      stackValues[i + 1] = up;
    }
  }
  //Получаем результат
  let result = stackValues.reverse().join("");
  
  return result;
}
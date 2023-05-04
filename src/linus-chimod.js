let num = parseInt(prompt('Введите число от 0 до 7:'));
switch (num) {
  case 0:
    console.log('У вас нет прав на чтение, запись и выполнение.');
    break;
  case 1:
    console.log('У вас есть право только на выполнение.');
    break;
  case 2:
    console.log('У вас есть право только на запись.');
    break;
  case 3:
    console.log('У вас есть право на запись и выполнение.');
    break;
  case 4:
    console.log('У вас есть право только на чтение.');
    break;
  case 5:
    console.log('У вас есть право на чтение и выполнение.');
    break;
  case 6:
    console.log('У вас есть право на чтение и запись.');
    break;
  case 7:
    console.log('У вас есть право на чтение, запись и выполнение.');
    break;
  default:
    console.log('Некорректный ввод значения.');
}
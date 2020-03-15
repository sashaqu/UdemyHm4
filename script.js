let num = 50;

if (num < 49) {
  console.log("Число не меньше 49");
} else if (num > 100) {
  console.log("Да, число больше 100, так как условие, что переменная должна быть больше 100");
} else {
  console.log("Если мы не попали в услоие больше 100, то всё ок, мы не больше 100 и больше 49");
}

(num == 50) ? console.log("Да, 50") : console.log("нет, не 50");

switch (num) {
  case num < 49: 
    console.log("Число не меньше 49");
    break;
  case num > 100:
    console.log("Да, число больше 100, так как условие, что переменная должна быть больше 100");
    break;
  case num > 80:
    console.log("Всё ещё много");
    break;
  case 50:
    console.log("Верно!");
    break;
  default:
    console.log("Что-то пошло не так...");
    break;
}

// Пока num строго меньше 55, делаем итерации
// while (num < 55) {
//   console.log(num);
//   num++;
// }

// Призыв к действию)
do {
  console.log(num);
  num++;
}
while (num < 55);

for (let i = 1; i < 13; i++) {
  if (i==8) {
    break;
  }
  console.log(i);
}

// Когда дорос до 11
for(let i = 5; i < 18; i++) {
  console.log(`${i}`);

  if (i == 10) {
    console.log("Мальчик, тебе 10. Иди гуляй");
    break;
  }
}

//Цикл for с декрементом

for(let j = 10; j > 0; j--) {
  console.log(j);

  if (j == 5) {
    continue;
  }
}
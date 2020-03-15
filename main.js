let money, time;

function start() {
  money = +prompt("Ваш бюджет на месяц?");
  time = prompt("Введите дату в формате YYYY-MM-DD");

  while(isNaN(money) || money == "" || money == null) {
    money = +prompt("Ваш бюджет на месяц?");
  }
}
//null - отмена. "" - не хотим пустой строкой. первое - не цифры.
start();

console.log("money: ", money);
console.log("time: ", time);

var appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: true
};

console.log("appData: ", appData);

function chooseExpenses () {
  for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце?");
    let b = prompt("Во сколько обойдется?");
  // Потому, что при отмене promt возвращает null
    if (typeof(a) === 'string' && typeof(a) != null && typeof(a) != null && a != '' && b != '' &&  a.length < 50) {
      console.log("done");
      appData.expenses[a] = b;
    } else {
      console.log("плохо");
      i--;
    }
  }
}

chooseExpenses();

// 5) Вывести на экран пользователя бюджет на 1 день (брать месяц за 30 дней, использовать alert)
// alert("Ежедневный бюджет: " + appData.moneyPerDay + "грн");

function detectDayBudget() {
  appData.moneyPerDay = (appData.budget/30).toFixed(1);
  // возвращает сроковую переменную
  alert("Ежедневный бюджет: " + appData.moneyPerDay + "грн");
}
detectDayBudget();

function detectLevel() {
  if (appData.moneyPerDay < 100) {
    console.log("Минимальынй уровень достатка");
  } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
      console.log("Средний уровень достатка");
  } else if (appData.moneyPerDay > 2000) {
      console.log("Высокий уровень достатка");
  } else {
      console.log("Ошибка");
  }
}

detectLevel();

function checkSavings() {
  if(appData.savings == true) {
    let save = +prompt("Какова сумма накопления?");
    let percent = +prompt("Под какоой процент");

    appData.monthIncome = save/100/12*percent;
    alert("Доход в месяц с депозита:" + appData.monthIncome);
  }
}

checkSavings();

function chooseOptExpenses() {
  for(let i=1;i <= 3;i++) {
    let question = prompt("Статья необязательных расходов?");
    appData.optionalExpenses[i] = question;
    console.log(appData.optionalExpenses);
  }
}

chooseOptExpenses();
console.log(appData.optionalExpenses);
console.log("appData:" , appData);
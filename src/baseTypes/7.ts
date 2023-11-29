/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Day {
  MON = "Monday",
  TUE = "Tuesday",
  WED = "Wednesday",
  THU = "Thursday",
  FRI = "Friday",
  SAT = "Saturday",
  SUN = "Sunday",
}

function isWeekend(day: Day): boolean {
  if (day === Day.SAT || day === Day.SUN) {
    return true;
  } else {
    return false;
  }
}

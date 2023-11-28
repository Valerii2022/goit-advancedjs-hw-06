/*
  Як ви вкажете типи для аргументів і значень цих функцій, що повертаються?
*/

function showMessage(message: string): void {
  console.log(message);
}

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(): never {
  throw new Error("Error");
}

export {};

function calc2(num1: number | string, num2: number | string): number | string {
  if (typeof num1 === "string" || typeof num2 === "string") {
    return num1.toString() + num2.toString();
  } else {
    return num1 + num2;
  }
}

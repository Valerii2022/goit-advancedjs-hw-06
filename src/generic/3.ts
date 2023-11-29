/*
  У вас є функція merge, яка поєднує два об'єкти. 
  Використовуйте generics, щоб вказати, що ці об'єкти можуть бути будь-якого типу.
*/

type Any = any;

function merge<Any>(objA: any, objB: any) {
  return Object.assign(objA, objB);
}

export {};

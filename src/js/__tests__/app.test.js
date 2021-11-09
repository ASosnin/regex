import { Validator } from '../app';

test('Проверка что имя пользователя валидно', () => {
  const user = new Validator('Some-User666_Name');
  expect(user.validateUsername()).toBe(true);
});

test('Проверка ограничения более трёх цифр подряд', () => {
  const user = new Validator('Some-User6667_Name');
  expect(user.validateUsername()).toBe(false);
});

test('Не должно начинаться с тире', () => {
  const user = new Validator('-Some-User666_Name');
  expect(user.validateUsername()).toBe(false);
});

test('Не должно начинаться с со знака подчёркивания', () => {
  const user = new Validator('_Some-User666_Name');
  expect(user.validateUsername()).toBe(false);
});

test('Не должно заканчиваться знаком подчёркивания', () => {
  const user = new Validator('Some-User666_Name_');
  expect(user.validateUsername()).toBe(false);
});

test('Не должно заканчиваться знаком тире', () => {
  const user = new Validator('Some-User666_Name-');
  expect(user.validateUsername()).toBe(false);
});

test('Не должно начинаться с цифры', () => {
  const user = new Validator('1Some-User666_Name');
  expect(user.validateUsername()).toBe(false);
});

test('Не должно заканчиваться цифрой', () => {
  const user = new Validator('Some-User666_Name7');
  expect(user.validateUsername()).toBe(false);
});

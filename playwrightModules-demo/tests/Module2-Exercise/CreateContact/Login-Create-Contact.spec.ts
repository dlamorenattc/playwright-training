import { test, expect } from '@playwright/test';

test('Login and create new contact', async ({ page }) => {
  await page.goto('https://thinking-tester-contact-list.herokuapp.com/login');
  await expect(page.getByRole('heading')).toContainText('Contact List App');
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill('danlam2000@slkdskld.com');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('$Password1');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Add a New Contact' }).click();
  await page.getByPlaceholder('First Name').click();
  await page.getByPlaceholder('First Name').fill('TestFirstName');
  await page.getByPlaceholder('Last Name').click();
  await page.getByPlaceholder('Last Name').fill('TestLastName');
  await page.getByPlaceholder('yyyy-MM-dd').click();
  await page.getByPlaceholder('yyyy-MM-dd').fill('1990-01-01');
  await page.getByPlaceholder('example@email.com').click();
  await page.getByPlaceholder('example@email.com').fill('111@abcdefg.com');
  await page.getByPlaceholder('8005551234').click();
  await page.getByPlaceholder('8005551234').fill('123456789');
  await page.getByPlaceholder('Address 1').click();
  await page.getByPlaceholder('Address 1').fill('Test Address 1');
  await page.getByPlaceholder('City').click();
  await page.getByPlaceholder('City').fill('Test City');
  await page.getByPlaceholder('State or Province').click();
  await page.getByPlaceholder('State or Province').fill('Test State');
  await page.getByPlaceholder('Postal Code').click();
  await page.getByPlaceholder('Postal Code').fill('1234');
  await page.getByPlaceholder('Country').click();
  await page.getByPlaceholder('Country').fill('New Zealand');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Logout' }).click();
})

;
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://thinking-tester-contact-list.herokuapp.com/login');
  await expect(page.getByRole('heading')).toContainText('Contact List App');
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill('danlam2000@slkdskld.com');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('$Password1');
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.getByRole('heading')).toContainText('Contact List');
  await page.getByRole('cell', { name: 'TestFirstName TestLastName' }).first().click();
  await expect(page.getByRole('button', { name: 'Delete Contact' })).toBeVisible();
  await page.getByRole('button', { name: 'Delete Contact' }).click();
  //Logic to Handle Confirm Delete Popup
  await page.getByRole('button', { name: 'Logout' }).click();
});
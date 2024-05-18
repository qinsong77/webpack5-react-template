import { expect, test } from '@playwright/test'

test('has title', async ({ page }) => {
  await page.goto('')

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/webpack5 react app/)
})

test('app journey', async ({ page }) => {
  await page.goto('')

  // Click the get started link.
  await page.getByRole('link', { name: 'main' }).first().click()

  // Expects page to have a heading with the name of Installation.
  await expect(
    page.getByRole('heading', { name: 'this is aside' })
  ).toBeVisible()
  await expect(page.locator('p')).toContainText('this is Dashboard')

  await page.getByRole('link', { name: 'profile' }).click()

  await expect(
    page.getByRole('heading', { name: 'this is Profile' })
  ).toBeVisible()
  await page.getByRole('link', { name: 'introduce' }).click()

  await expect(page.getByRole('button', { name: 'test' })).toBeVisible()
})

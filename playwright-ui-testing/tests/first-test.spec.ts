import { test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
    await page.goto("https://playground.bondaracademy.com/")
    await page.getByText("Forms").click();
    await page.getByText("Form Layouts").click();
})

// test.describe("suite1", () => {
//   test.beforeEach(async ({ page }) => {
//     await page.getByText("Forms").click();
//   });

//   test("this is a first test", async ({ page }) => {
//     await page.getByText("Form Layouts").click();
//   });

//   test("this is a first test to datepicker", async ({ page }) => {
//     await page.getByText("Datepicker").click();
//   });
// });


// test.describe("suite2", () => {
//   test.beforeEach(async ({ page }) => {
//     await page.getByText("Auth").click();
//   });

//   test("this is a first test", async ({ page }) => {
//     await page.getByText("Register").click();
//   });

  
// });

 test("Locator Syntax Rule", async ({ page }) => {
    // find by tag
    page.locator('input')

    // find by ID
    page.locator('#inputEmail1')

    // find by class value
    page.locator('.shape-rectangle')

    // find by attribute
    page.locator('[placeholder="Email"]')

    // find by full class
    page.locator('[class="input-full-width size-medium status-basic shape-rectangle nb-transition"]')

  })


test('User-visible locator', async ({page})=>{
  await page.getByRole('button',{name:'Sign in'}).first().click()
  await page.getByRole('textbox',{name:'Email'}).first().fill('test.test')
  await page.getByLabel('Email').first().fill('tesssssssst')
  await page.getByPlaceholder('Jane Doe').fill('Dung Han')
  await page.getByText('Submit').first().click()
  await page.getByTestId('inputEmail1').fill('test.com')
  await page.getByTitle('Auth').click()
})


test('location child elements', async ({page})=>{
await page.locator('nb-card').locator('nb-radio-group').locator(':text-is("Option 1")').click()
await page.locator('nb-card  nb-radio-group :text-is("Option 2")').click()
})
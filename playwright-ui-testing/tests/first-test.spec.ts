import { expect, test } from "@playwright/test";

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


test('location parent elements', async ({page})=> {
  await page.locator('nb-card',{hasText: 'Using the Grid'}).getByRole('button').click()
  await page.locator('nb-card').filter({hasText: 'Using the Grid'}).getByRole('button').click()
  await page.locator('nb-card').filter({has: page.locator('nb-checkbox')}).filter({hasText:'Sign in'}).getByLabel('Email').fill('test.com.vn')
})


test('reuseble elements', async ({page})=> {
  const basicFormSection = page.locator('nb-card',{hasText:'Basic form'})
  await basicFormSection.getByLabel('Email').fill('tesssssssst.com')
  await basicFormSection.getByLabel('Password').fill('tesst123')
  await basicFormSection.locator('nb-checkbox').click()
  await basicFormSection.getByRole('button').click()

})


test('Extracting values', async ({page})=> {
  // extract text
  const basicFormSection = page.locator('nb-card',{hasText:'Basic form'})
  const submitButtonText = await basicFormSection.getByRole('button').textContent()
  
  expect(submitButtonText).toEqual('Submit')


  // extract multiple text
  const allRadioButton = await page.locator ('nb-radio').allTextContents()
  console.log(allRadioButton)

  // extract input field 
  const emailField = basicFormSection.getByRole('textbox', {name: 'Email'})
  await emailField.fill('dunghan2test')
  const emailFieldValue= await emailField.inputValue()
  console.log(emailFieldValue)

  // extract attribute
  const emmailPlaceholder = await emailField.getAttribute('placeholder')
  console.log(emmailPlaceholder)
})



test('Assertions', async ({page})=> {

  const basicFormSectionButton = page.locator('nb-card',{hasText:'Basic form'}).getByRole('button')
  const value = 5
  expect (value).toEqual(5)

  const submitButtonText = await basicFormSectionButton.textContent()
  expect(submitButtonText).toEqual('Submit')

  //locator assertion
  await expect(basicFormSectionButton).toHaveText('Submit')

})



test('generated test', async({page}) => {
  await page.getByRole('textbox', { name: 'Email address' }).fill('dung@test')

  await page.locator('#exampleInputPassword1').click();
  await page.locator('#exampleInputPassword1').fill('newpasswork');
  await page.locator('.form-group > .status-basic > .label > .custom-checkbox').click();
  await page.getByRole('checkbox', { name: 'Check me out' }).check();
  await page.locator('nb-card').filter({ hasText: 'Basic formEmail' }).getByRole('button').click();
})
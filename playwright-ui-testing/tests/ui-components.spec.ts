import { test, expect } from '@playwright/test';

test('checkboxes', async ({page})=> {
    await page.goto('https://playground.bondaracademy.com/');
    await page.getByText('Modal & Overlays').click()
    await page.getByText('Toastr').click()
    await page.getByRole('checkbox', {name: 'Hide on click'}).uncheck({force:true})

    const allBoxes = page.getByRole('checkbox')
    for (const box of await allBoxes.all()){
        await box.uncheck({force:true})
        await expect(box).not.toBeChecked
    }

})



test('lists and dropdowns', async ({page})=> {
    await page.goto('https://playground.bondaracademy.com/');
    await page.getByText('Modal & Overlays').click()
    await page.getByText('Toastr').click()

    //standard drop-down
    await page.locator('.form-group',{hasText:'Toast type'}).getByRole('combobox').selectOption('info')
    await expect(page.getByRole('combobox')).toHaveValue('info')

    // dropdown
    await page.locator('.form-group',{hasText:'Position:'}).locator('nb-select').click()
    //option1
   // await page.getByRole('list').getByText('bottom-end').click()
    //option2
    await page.locator('nb-option', {hasText: 'bottom-end'}).click()
    await expect(page.locator('.form-group',{hasText:'Position:'}).locator('nb-select')).toHaveText('bottom-end')
})


test('tooltip', async ({page})=> {
    await page.goto('https://playground.bondaracademy.com/');
    await page.getByText('Modal & Overlays').click()
    await page.getByText('Tooltip').click()
    await page.getByRole('button', {name: 'RIGHT'}).hover()
    await expect(page.getByRole('tooltip')).toHaveText('This is a tooltip')
})



test('dialog box', async ({page})=> {
    await page.goto('https://playground.bondaracademy.com/')
    await page.getByText('Tables & Data').click()
    await page.getByText('Smart Table').click()

    page.on('dialog', dialog => {
        expect(dialog.message()).toEqual('Are you sure you want to delete?')
        dialog.accept()
    })
    await page.locator('tr', {hasText: 'mdo@gmail.com'}).locator('.nb-trash').click()
    await expect(page.locator('tr', {hasText: 'mdo@gmail.com'})).not.toBeVisible()
})


test('web table', async ({page})=> {
    await page.goto('https://playground.bondaracademy.com/')
    await page.getByText('Tables & Data').click()
    await page.getByText('Smart Table').click()


    // how to select row by any visible text
    const tableRowByEmail = page.getByRole('row', {name: 'twitter@outlook.com'})
    await tableRowByEmail.locator('.nb-edit').click()
    await tableRowByEmail.getByPlaceholder('Age').fill('35')
    await tableRowByEmail.locator('.nb-checkmark').click()
    await expect(tableRowByEmail.locator('td').last()).toHaveText('35')

    // get row by a spicific column value
    const tableRowbyID = page.getByRole('row').filter({has: page.getByRole('cell').nth(1).getByText('10')})
    await tableRowbyID.locator('.nb-edit').click()
    await page.locator('tbody').getByPlaceholder('E-mail').fill('jun@test.com')
    await page.locator('tbody').locator('.nb-checkmark').click()
    await expect(tableRowbyID.locator('td').nth(5)).toHaveText('jun@test.com')

})

test('date picker', async ({page})=> {
    await page.goto('https://playground.bondaracademy.com/')
    await page.getByText('Forms').click()
    await page.getByText('Datepicker').click()

    const CalendarInputField = page.getByPlaceholder('Form Picker')
    await CalendarInputField.click()
    await page.locator('.day-cell:not(.bounding-month').getByText('15').click()
})
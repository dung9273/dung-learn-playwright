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

})
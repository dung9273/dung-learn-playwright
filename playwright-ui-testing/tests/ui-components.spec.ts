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
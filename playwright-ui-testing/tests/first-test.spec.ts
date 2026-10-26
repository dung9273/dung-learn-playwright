import { test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
    await page.goto("https://playground.bondaracademy.com/")
})

test.describe("suite1", () => {
  test.beforeEach(async ({ page }) => {
    await page.getByText("Forms").click();
  });

  test("this is a first test", async ({ page }) => {
    await page.getByText("Form Layouts").click();
  });

  test("this is a first test to datepicker", async ({ page }) => {
    await page.getByText("Datepicker").click();
  });
});


test.describe("suite2", () => {
  test.beforeEach(async ({ page }) => {
    await page.getByText("Auth").click();
  });

  test("this is a first test", async ({ page }) => {
    await page.getByText("Register").click();
  });

  
});

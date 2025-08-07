import { test, expect } from "./base";

test("should render all relevant parts of the sankey", async ({ page }) => {
  await page.goto(
    "http://localhost:8080/test-resources/com/sankey/app/index.html"
  );
  await expect(
    page.getByRole("button", { name: "Product 1", exact: true })
  ).toBeVisible();
  await expect(
    page.getByRole("button", { name: "Product 2", exact: true })
  ).toBeVisible();
  await expect(
    page.getByRole("button", { name: "Raw Material" })
  ).toBeVisible();
  await expect(
    page.getByRole("button", { name: "Semi-finished Product" })
  ).toBeVisible();
  await expect(
    page.getByRole("button", { name: "Finished Product 1" })
  ).toBeVisible();
  await expect(
    page.getByRole("button", { name: "Finished Product 2" })
  ).toBeVisible();

  await expect(await page.locator("#chart path.sv-sankey__path").count()).toBe(
    5
  );
});

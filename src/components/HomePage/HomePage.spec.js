// src/components/HomePage.spec.js
import { test, expect } from "@playwright/experimental-ct-vue";
import HomePage from "./HomePage.vue";

test("should render HomePage component successfully", async ({ mount }) => {
  const component = await mount(HomePage);

  await expect(component.locator("h1")).toHaveText("OUR LOCATION");
});

test("Filling the input for location input", async ({ mount }) => {
  const component = await mount(HomePage);

  const locationInput = component.locator("#pickup-location");
  await locationInput.fill("Brisbane");

  await expect(locationInput).toHaveValue("Brisbane");
});

test("Filling the from date for booking", async ({ mount }) => {
  const component = await mount(HomePage);

  const fromDateInput = component.locator("#fromdate");
  const today = new Date();
  const day = String(today.getDate()).padStart(2, "0");
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const year = today.getFullYear();
  const formattedDate = `${year}-${month}-${day}`;
  await fromDateInput.fill(formattedDate);
  await expect(fromDateInput).toHaveValue(formattedDate);
});

test("Filling the to date for booking", async ({ mount }) => {
  const component = await mount(HomePage);

  const fromDateInput = component.locator("#fromdate");
  const today = new Date();
  const day = String(today.getDate()).padStart(2, "0" + 1);
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const year = today.getFullYear();
  const formattedDate = `${year}-${month}-${day}`;
  await fromDateInput.fill(formattedDate);
  await expect(fromDateInput).toHaveValue(formattedDate);
});

test("Check click search button", async ({ mount, page }) => {
  const component = await mount(HomePage);

  const searchButton = component.locator("#search-btn");

  await searchButton.click();

  await expect(
    component.getByText("Something went wrong. Please try again !")
  ).toBeAttached();
});

import { test, expect } from "@playwright/experimental-ct-vue";
import CartPage from "./CartPage.vue";
import { ApiCreateBooking } from "../../api/booking";
import { toRaw } from "vue";
import { generateRandomCharacters } from "../../utils/help";

test("should render CartPage component successfully", async ({ mount }) => {
  const component = await mount(CartPage);

  await expect(component.getByText("Confirm Your Booking")).toBeVisible();
});

test("renders driver details form", async ({ mount }) => {
  const component = await mount(CartPage);
  await expect(component.locator("form")).toBeVisible();

  await expect(component.locator("#first_name")).toBeVisible();
  await expect(component.locator("#last_name")).toBeVisible();
  await expect(component.locator("#dob")).toBeVisible();
  await expect(component.locator("#email")).toBeVisible();
  await expect(component.locator("#phone-input")).toBeVisible();
});

test("displays the correct vehicle review details", async ({ mount }) => {
  const component = await mount(CartPage);
  await expect(component.getByText("Verhicle")).toBeVisible();
  await expect(component.getByText("Review")).toBeVisible();
  await expect(component.getByText("Total")).toBeVisible();
  await expect(component.getByText("Hiring Duration")).toBeVisible();
  await expect(component.getByText("Pick-up")).toBeVisible();
});

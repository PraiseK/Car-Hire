import { test, expect } from "@playwright/experimental-ct-vue";
import App from "./App.vue";

test("Check App Component is working", async ({ mount }) => {
  const component = await mount(App);
  await expect(component).toBeDefined();
});

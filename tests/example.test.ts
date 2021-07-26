// Needs to be higher than the default Playwright timeout
import {ExamplePage} from "../pages/ExamplePage";

jest.setTimeout(40 * 1000)

describe("Example.com", () => {
  it("should have the exact text 'Example Domain' in the h1", async () => {
    const examplePage = new ExamplePage(page);
    examplePage.goto();
    examplePage.isShown();
    // or via the Playwright text selector engine
    await expect(page).toHaveSelector('"Example Domain"', {
      state: "attached"
    })
  })
  it("should navigate to iana once you click on 'More information'", async () => {
    await page.click("a");
    expect(page.url()).toMatch(/iana\.org/)
  })
})
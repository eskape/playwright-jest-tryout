import type {Page} from 'playwright';

export class ExamplePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async goto() {
        await this.page.goto("https://example.com");
    }
}
import { test } from "@playwright/test";

test("Generate from text", async ({ page }) => {
	await page.goto("about:blank");
	await page.goto("http://localhost:3010/");
	await page.getByLabel("Generate from text").click();
	await page
		.getByLabel("Generate from text")
		.fill(
			'/**\n * Return "hello" + string\n * @module reply\n * @param {string} name - name to display\n * @return {string} - return hello + name\n */\nmodule.exports = reply = (name) => {\n\treturn "hello" + name;\n};\n',
		);
	const page1Promise = page.waitForEvent("popup");
	await page.getByRole("button", { name: "Generate" }).click();
	const page1 = await page1Promise;
	await page1.getByRole("link", { name: "reply" }).click();
	await page1.locator("h1").click();
});

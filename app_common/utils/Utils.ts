import test, { type Page, expect, PageScreenshotOptions } from "@playwright/test"
import { APIRequestContext } from '@playwright/test'
import Tesseract from 'tesseract.js';
import * as fs from 'fs';
import path from 'path'

class Utils {
    constructor(public page: Page) {
        this.page = page;
    }   
    async navigateTo(url: string, options: object = {}) {
        return await this.page.goto(url, options);
    }
    async getTitle() {
        return await this.page.title();
    }
    async pause() {
        return await this.page.pause();
    }
    async getUrl() {
        return this.page.url();
    }
    async wait(waitInMilliseconds: number) {
        return this.page.waitForTimeout(waitInMilliseconds);
    }
   async waitForPageLoad() {
       return await this.page.waitForLoadState('domcontentloaded');
    }
   async waitForNetworkTabToIdle() {
       return await this.page.waitForLoadState('networkidle');
    }
    async clickOn(selector: string) {
        return await this.page.click(selector);
    }
    async doubleClickOn(selector: string) {
        await this.page.dblclick(selector);
    }
    async rightClickOn(selector: string) {
        return await this.page.click(selector, { button: 'right' });
    }
    async enterText(selector: string, text: string) {
        return await this.page.fill(selector, text);
    }
    async selectAutocompleteValues(containerSelector: string, ...values: string[]): Promise<void> {
        const inputField = this.page.locator(containerSelector).locator('input');
        for (const value of values) {
            await inputField.pressSequentially(value, { delay: 100 });
            await inputField.press('Enter');
        }
    }
    async extractText(selector: string) {
        const text = await this.page.textContent(selector);
        return text;
    }
    async keyPress(selector: string, key: string) {
        return await this.page.press(selector, key);
    }
    async takeScreenshot(fileName: string = 'screenshot.png') {
        // Default base directory where screenshots will be stored
        const baseDir = path.join(__dirname, '../../src/screenshots'); // You can change this to another folder if you want

        // Ensure the directory exists, if not create it
        if (!fs.existsSync(baseDir)) {
            fs.mkdirSync(baseDir, { recursive: true });
        }
        // Build the full file path using the base directory and the provided filename
        const filePath = path.join(baseDir, fileName);

        // Take the screenshot and save it at the resolved file path
        await this.page.screenshot({ path: filePath })
    }

    async refreshBrowser() {
        return await this.page.reload();
    }
    async performVisualTest(screenshotName: string | readonly string[]) {
        await this.page.waitForTimeout(500)
        await expect(this.page).toHaveScreenshot(screenshotName, { fullPage: false });
    }
    async verifyElementContainsText(selector: string, text: string | RegExp | readonly (string | RegExp)[]) {
        const locatorText = this.page.locator(selector);
        return await expect(locatorText).toContainText(text);
    }
    async verifyJSElementValue(selector: any, text: unknown) {
        const textValue = await this.page.$eval(selector, element => element.value)
        return expect(textValue.trim()).toBe(text);
    }
    async hoverOver(selector: string) {
        const element = await this.page.locator(selector)
        await element.hover();
    }
    async selectOptionAfterHover(hoverSelector: string, optionSelector: string) {
        await this.hoverOver(hoverSelector)
        await this.page.waitForSelector(optionSelector)
        await this.page.click(optionSelector);
    }
    async hoverOverAndHoverAgain(hoverSelector1: string, hoverSelector2: string, optionSelector: string) {
        await this.hoverOver(hoverSelector1);
        const secondElement = await this.page.locator(hoverSelector2);
        await secondElement.hover()
        await this.page.waitForSelector(optionSelector)
        await this.page.click(optionSelector);
    }
    async selectOptionForDropDown(selector: string, value: string) {
        await this.page.selectOption(selector, { label: value });
    }
    async getFirstElementFromTheList(selector: string) {
        const rows = this.page.locator(selector);
        const count = await rows.count();
        if (count > 0) {
            return await rows.nth(0).textContent();
        }
        return null;
    }
    async isElementVisible(selector: string, errorMessage: string) {
        const element = this.page.locator(selector);
        try {
            const isVisible = await element.isVisible();
            expect(isVisible).toBeTruthy();
        } catch (error) {
            throw new Error(`${errorMessage}`);
        }
    }
    async isElementNotVisible(selector: string) {
        const element = this.page.locator(selector);
        return expect(element).toBeHidden();
    }
    async isElementEnabled(selector: string, errorMessage: string) {
        const element = this.page.locator(selector);
        try {
            const isEnabled = await element.isEnabled();
            expect(isEnabled).toBeTruthy();
        } catch (error) {
            throw new Error(`${errorMessage}`);
        }
    }
    async isElementChecked(selector: string, errorMessage: string) {
        const element = this.page.locator(selector);
        try {
            const isChecked = await element.isChecked();
            expect(isChecked).toBeTruthy();
        } catch (error) {
            throw new Error(`${errorMessage}`);
        }
    }
    async dragAndDrop(sourceSelector: string, targetSelector: string) {
        const source = this.page.locator(sourceSelector);
        const target = this.page.locator(targetSelector);
        await source.dragTo(target);
    }

    // async getTextFromElements(selector: string): Promise<string[]> {
    //     const elements = this.page.locator(selector);
    //     const count = await elements.count();
    //     const texts: string[] = [];
    //     for (let i = 0; i < count; i++) {
    //         const textContent = await elements.nth(i).textContent();
    //         // Handle the possibility of null textContent
    //         texts.push(textContent || ''); // Push an empty string if textContent is null
    //     }
    //     return texts;
    // }
    //OR 
    async getTextFromElements(selector: string): Promise<string[]> {
        const elements = this.page.locator(selector);
        const count = await elements.count();
        const texts: string[] = [];
        for (let i = 0; i < count; i++) {
            const textContent = await elements.nth(i).textContent();
            // Assert that textContent is not null
            texts.push(textContent as string); // Assume textContent is not null
        }
        return texts;
    }
    async scrollToElement(selector: string) { // Method to scroll to a specific element
        const element = this.page.locator(selector);
        await element.scrollIntoViewIfNeeded();
    }
    async waitForElementVisible(selector: string, timeout: number = 30000) {
        const element = this.page.locator(selector);
        await element.waitFor({ state: 'visible', timeout });
    }
    async isElementPresent(selector: string): Promise<boolean> {
        const element = this.page.locator(selector);
        return await element.count() > 0;
    }
    async selectFutureDateFromCalendar(selector: string, daysFromToday: number) {
        const openDateCalendar = this.page.locator(selector);
        await openDateCalendar.click();

        // Calculate future date
        let date = new Date();
        date.setDate(date.getDate() + daysFromToday);
        const day = ('0' + date.getDate()).slice(-2);
        const month = ('0' + (date.getMonth() + 1)).slice(-2);
        const year = date.getFullYear().toString().slice(-2); // Get last 2 digits of the year

        // Format date as dd/mm/yy
        const formattedDate = `${day}/${month}/${year}`;

        // Select date from calendar
        await this.page.locator(`//td[contains(@class, 'ui-state-default ng-tns-c58-10 ng-star-inserted') and text()='${day}']`).click();
    }
    async interactWithAutocomplete(id: string, searchTerm: string, suggestionText: string): Promise<void> {
        const autocomplete = this.page.locator(`p-autocomplete[id="${id}"]`)
        await autocomplete.click()
        await autocomplete.fill(searchTerm);
        await this.page.waitForSelector(`p-autocomplete[id="${id}"] .suggestion-class`)
        const suggestion = this.page.locator(`p-autocomplete[id="${id}"] .suggestion-class:has-text("${suggestionText}")`)
        await suggestion.click()
        const selectedSuggestion = await autocomplete.inputValue();
        expect(selectedSuggestion).toBe(suggestionText)
    }
    async selectOptionFromDropdown(dropdownSelector: string, optionText: string, waitForSelector?: string) {
        const dropdown = this.page.locator(dropdownSelector)
        await dropdown.click()
        if (waitForSelector) {
            await this.page.waitForSelector(waitForSelector)
        }
        const option = this.page.locator(`text="${optionText}")`);
        await option.click();
    }
    async selectValueFromDropdown(dropdownSelector: string, optionText: string, waitForSelector?: string){
        const dropdown= this.page.locator(dropdownSelector)
        await dropdown.click()
        const option = this.page.getByRole('option', {name: `${optionText}`, exact: true})
        await this.page.waitForTimeout(1000)
        // const option = this.page.locator(`:text("${optionText}")`);
        await option.click()
    }
    async getCaptchaText(captchaImageSelector: string, captchaInputSelector: string): Promise<void> {
        const captchaImage = await this.page.$(captchaImageSelector);

        if (captchaImage) {
            const imageBuffer = await captchaImage.screenshot();
            const imagePath = path.join(__dirname, 'captcha.png');
            fs.writeFileSync(imagePath, imageBuffer);

            const result = await Tesseract.recognize(
                imagePath,
                'eng',
                {
                    logger: info => console.log(info) // Optional: Log progress
                }
            );
            const captchaText = result.data.text.trim();
            await this.enterText(captchaInputSelector, captchaText);
        } else {
            throw new Error('CAPTCHA image not found');
        }
    }
   
    async verifyApiStatusCode(apiContext: APIRequestContext, endpoint: string, expectedStatusCode: number, method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET', data?: any) {
        let response;
            switch (method) {
                case 'POST':
                    response = await apiContext.post(endpoint, { data })
                    break;
                case 'PUT':
                    response = await apiContext.put(endpoint, { data })
                    break;
                case 'DELETE':
                    response = await apiContext.delete(endpoint)
                    break;
                case 'GET':
                    default:
                    response = await apiContext.get(endpoint)
                    break;
                }
                    expect(response.status(), `Expected status code ${expectedStatusCode} and got ${response.status()} for ${method} ${endpoint}`).toBe(expectedStatusCode);
                    return response;
            }

    async verifyNewTabUrl(expectedUrl: string, linkLocator: string) {
        const [newPage] = await Promise.all([
            this.page.context().waitForEvent('page'),
            this.page.click(linkLocator)
        ])
            await newPage.waitForLoadState('load')
            const url = newPage.url()
            if (!url.includes(expectedUrl)) {
            throw new Error(`Expected URL to include "${expectedUrl}", and got "${url}"`);
            }
            // await newPage.close()
            await this.page.bringToFront()
        }
    async uploadFile(fileInputSelector: string, filePath: string) {
        await this.page.waitForSelector(fileInputSelector)
        const fileInput = this.page.locator(fileInputSelector)
        await fileInput.setInputFiles(filePath)
       }

    async selectRadioOptionByLabel(label: string, valueMap: Record<string, string>) {
    const selector = valueMap[label]
    await this.clickOn(selector)
    }

    async selectDateFromCalendar(dateInputSelector: string, dateString: string) {
        const [day, month, year] = dateString.split(" ")
        await this.clickOn(dateInputSelector)
        const yearDropdown = this.page.locator(".react-datepicker__year-select")
        await yearDropdown.selectOption({ label: year })
        const monthDropdown = this.page.locator(".react-datepicker__month-select")
        await monthDropdown.selectOption({ label: month })
        const daySelector = `.react-datepicker__day--0${parseInt(day)}:not(.react-datepicker__day--outside-month)`
        await this.page.click(daySelector)
    }


}


export default Utils;

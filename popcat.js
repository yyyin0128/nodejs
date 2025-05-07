import puppeteer from 'puppeteer';

async function click() {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://popcat.click/');

    for (let i = 0; i < 10000; i++) {
        await page.click('div.cat-img');
    }

    await browser.close();
}

click();
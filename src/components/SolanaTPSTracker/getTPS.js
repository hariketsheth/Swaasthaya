// const { chromium } = require("playwright-chromium");


// const url = "https://explorer.solana.com/";

// const interval_in_sec = 60

// async function getTPS() {
//   let tps = "...";

//   try {
//     const browser = await chromium.launch({ chromiumSandbox: false });
//     const context = await browser.newContext();
//     const page = await context.newPage();
//     await page.goto(url);

//     await page.waitForSelector("table");
//     const tables = await page.locator("table").allTextContents();
//     tps = tables[1].split("(TPS)")[1].trim();
//     console.log(tps);
//     return tps;
//     await browser.close();

//   } catch (e){
//     console.error("Couldnt Scrape!");
//     console.error(e);
//   }
// };

// export default getTPS();
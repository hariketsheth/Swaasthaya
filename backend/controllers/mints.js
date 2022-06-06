import express from 'express';
import mongoose from 'mongoose';
import axios from 'axios';

const router = express.Router();
import { chromium } from "playwright-chromium";


export const getSolanaTPS = async (req, res) => {
    let tps = "...";
    const url = "https://explorer.solana.com/";

    try {
        const browser = await chromium.launch({ chromiumSandbox: false });
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto(url);
    
        await page.waitForSelector("table");
        const tables = await page.locator("table").allTextContents();
        tps = tables[1].split("(TPS)")[1].trim();
        console.log(tps);
        res.json(tps);
        await browser.close();
    
      } catch (e){
        console.error("Couldnt Scrape!");
        console.error(e);
      }

}


function sleep (milliseconds) {
    return new Promise((resolve) => setTimeout(resolve, milliseconds))
  }


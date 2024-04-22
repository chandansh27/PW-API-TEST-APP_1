// import { test, expect } from '@playwright/test';
// import { TIMEOUT } from 'dns';
// import { json } from 'stream/consumers';
// import tags from '../test-data/tags.json'
// import exp from 'constants';

// test.beforeEach(async ({ page }) => {

//   //await page.route('https://conduit-api.bondaracademy.com/api/tags', async route => { 
//     await page.route('*/**/api/tags', async route => { // we can provide matching pattern rather than using complete URL , so commenting above line

//     // const tags = {     // this Json we have moved to test-data file for better readiness and making better structure 
//     //   "tags": [
//     //     "Automation",
//     //     "Playwright",

//     //   ]
//     // }

//     await route.fulfill({
//       body: JSON.stringify(tags)

//     })

//   })

//   //await page.route('https://conduit-api.bondaracademy.com/api/articles?limit=10&offset=0', async route=>{

//   await page.route('*/**/api/articles*', async route=>{ // here also we r replacing API URL with wild card
//     const response= await route.fetch()
//     const responseBody= await response.json()
//     responseBody.articles[0].title= "This is a test title"
//     responseBody.articles[0].description= "This is a description"

//       await route.fulfill({
//       body: JSON.stringify(responseBody)
//     })

//   })

//   await page.goto('https://conduit.bondaracademy.com/')

// })

// test('has title', async ({ page }) => {

//    //await page.waitForTimeout(3000)
//    await expect(page.locator('.navbar-brand')).toHaveText('conduit');

//    await expect(page.locator('app-article-list h1').first()).toContainText('This is a test title')
//    await expect(page.locator('app-article-list p').first()).toContainText('This is a description')
   
   
// });







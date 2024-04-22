// import { test, expect,request } from '@playwright/test';
// import { TIMEOUT } from 'dns';
// import { json } from 'stream/consumers';
// import tags from '../test-data/tags.json'
// import exp from 'constants';


// test.beforeEach(async ({ page }) => {

//     await page.route('*/**/api/tags', async route => { 

//       await route.fulfill({
//       body: JSON.stringify(tags)

//     })

//   })

    
//   await page.goto('https://conduit.bondaracademy.com/')

//   await page.getByText('Sign in').click()
//   await page.getByRole('textbox',{name: "Email"}).fill('sharma.chandan@hotmail.com')
//   await page.getByRole('textbox',{name: "Password"}).fill('Ch!ndansh27')
//   await page.getByRole('button').click()



// })

// test('has title', async ({ page }) => {

//     await page.route('*/**/api/articles*', async route=>{ 
//         const response= await route.fetch()
//         const responseBody= await response.json()
//         responseBody.articles[0].title= "This is a Mock test title"
//         responseBody.articles[0].description= "This is a Mock description"
    
//           await route.fulfill({
//           body: JSON.stringify(responseBody)
//         })
    
//       })

//       await page.getByText('Global Feed').click()
//       await expect(page.locator('.navbar-brand')).toHaveText('conduit');
//       await expect(page.locator('app-article-list h1').first()).toContainText('This is a Mock test title')
//       await expect(page.locator('app-article-list p').first()).toContainText('This is a Mock description')
      
// });

// test('delete article', async ({page, request})=>{
//     const response= await request.post('https://conduit-api.bondaracademy.com/api/users/login', {
//         data: {
//             "user": {"email": "sharma.chandan@hotmail.com", password: "Ch!ndansh27"}
//         }

//     })
//     const responseBody= await response.json()
//     const accessToken= responseBody.user.token

//     const articleResponse= await request.post('https://conduit-api.bondaracademy.com/api/articles/',{

//     data: {

//         "article":{"title":"This is Chandan first article","description":"description: Learning API testing through Playwright","body":"welcome to API","tagList":[]}
//     },
//     headers:{
//         Authorization: `Token ${accessToken}`
//     }
//     })

//     expect(articleResponse.status()).toEqual(201)

//     await page.getByText('Global Feed').click()
//     await page.getByText('This is Chandan first article').click()
//     await page.getByRole('button', {name: "Delete Article"}).first().click()
//     await page.getByText('Global Feed').click()

//     await expect(page.locator('app-article-list h1').first()).not.toHaveText('This is Chandan first article')
    
// })







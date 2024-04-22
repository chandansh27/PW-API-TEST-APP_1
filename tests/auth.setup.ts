import { test as setup } from '@playwright/test';
import user from '../.auth/user.json'
import fs from 'fs'
import { json } from 'stream/consumers';

  const authFile= '.auth/user.json'

//setup('authentication', async({page}) =>{

  setup('authentication', async({request}) =>{

   // insted for using the below fill will use uncommented code
    // await page.goto('https://conduit.bondaracademy.com/')
    // await page.getByText('Sign in').click()
    // await page.getByRole('textbox',{name: "Email"}).fill('sharma.chandan@hotmail.com')
    // await page.getByRole('textbox',{name: "Password"}).fill('Ch!ndansh27')
    // await page.getByRole('button').click()
    // await page.waitForResponse('https://conduit-api.bondaracademy.com/api/tags')

    // await page.context().storageState({path: authFile})
  
        const response= await request.post('https://conduit-api.bondaracademy.com/api/users/login', {
        data: {
            "user": {"email": "sharma.chandan@hotmail.com", password: "Ch!ndansh27"}
        }

    })
    const responseBody= await response.json()
    const accessToken= responseBody.user.token
    user.origins[0].localStorage[0].value= accessToken
    fs.writeFileSync(authFile, JSON.stringify(user))

    process.env['ACCESS_TOKEN']= accessToken


})
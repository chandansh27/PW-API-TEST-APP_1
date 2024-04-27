import { test as setup, expect } from '@playwright/test';

setup('create new arcticle', async({request})=>{


    const articleResponse= await request.post('https://conduit-api.bondaracademy.com/api/articles/',{

    data: {

        "article":{"title":"Likes test arcticle","description":"description: Learning API testing through Playwright","body":"welcome to API","tagList":[]}
    },
    
    })

    expect(articleResponse.status()).toEqual(201)
    const response = await articleResponse.json()
    const slugId= response.article.slug
    process.env['SLUGID']= slugId
})
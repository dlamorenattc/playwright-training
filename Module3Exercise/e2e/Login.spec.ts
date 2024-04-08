import { test, expect } from '@playwright/test';


test('Authenticate Method', async ({ request }) => {

    const postRequest = await request.post('https://thinking-tester-contact-list.herokuapp.com/users/login', {

        data:
        {
            "email": "danlam2000@slkdskld.com",
            "password": "$Password1"
        }

    });

    //This logs out the response to the console
    console.log("Post response body --> " + JSON.stringify(await postRequest.json(), null, 2))
    const statusCode = await postRequest.status();
    console.log("Post response status code --> " + statusCode)
    await expect(statusCode).toEqual(200)
    console.log("Post response status code --> " + postRequest.ok())
    await expect(postRequest.ok()).toBeTruthy();

})
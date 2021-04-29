exports.handler = async () => {
    console.log("function ran");

    const data = { name: "jaycee", age: 35, job: "dev" }

    //Return response to browser
    return {
        statusCode: 200,
        body: JSON.stringify(data)
    }
}
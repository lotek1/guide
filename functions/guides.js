exports.handler = async (event, context) => {
  const guides = [
    {
      id: 1,
      name: "Ceejay",
      age: 35,
      job: "Fisherman",
      title: "This is where the magic happens",
    },
    {
      id: 2,
      name: "Sonnyelis",
      age: 15,
      job: "Dev",
      title: "Black water runs deep",
    },
    {
      id: 3,
      name: "Tildehan",
      age: 10,
      job: "Racer",
      title: "Would you rather be sailing",
    },
  ];

  if (context.clientContext.user) {
    return {
      statusCode: 200,
      body: JSON.stringify(guides),
    };
  }
  return {
    statusCode: 401,
    body: JSON.stringify({
      mssg: "Appp appp, you must be logged in to see this hot type of content",
    }),
  };
};

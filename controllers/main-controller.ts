const getData = async ({ response }: { response: any }) => {
  response.status = 200;
  response.body = {
    message: "Hello World!",
  };
};

export { getData };

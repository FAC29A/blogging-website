const test = require("node:test");
const assert = require("node:assert");
const server = require("../src/server");

test("//route shoould return expected page ", async () => {
  const app = server.listen(9876);
  const response = await fetch("http://localhost:9876");
  app.close();

  assert.equal(response.status, 200);
  const body = await response.text();
  assert.match(body, /Type your post here/);
});

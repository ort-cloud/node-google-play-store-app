const expect = require("chai").expect;
const supertest = require("supertest");
const app = require("../app");

describe("GET /app", () => {
  it("should return a message from GET /", () => {
    return supertest(app)
      .get("/app")
      .expect(200);
  });
});

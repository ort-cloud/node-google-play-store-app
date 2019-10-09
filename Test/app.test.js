const expect = require("chai").expect;
const request = require("supertest");
const app = require("../app");

describe("GET /app", () => {
  it("should return an array of apps", () => {
    return request(app)
      .get("/app")
      .expect(200)
      .expect("Content-Type", /json/);
  });
});

/* describe("GET /app", () => {
  it("should return a message from GET /", () => {
    return supertest(app)
      .get("/app")
      .expect(200);
  });
});
 */

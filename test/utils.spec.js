const { getNewUser, mapObjectToArray } = require("./utils");

describe("mapObjectToArray()", () => {
  test("maps values to array using callback", () => {
    const result = mapObjectToArray({ age: 30, height: 65 }, (key, value) => {
      return value + 10;
    });
    expect(result).toEqual([40, 75]);
  });

  test("callbacks get called", () => {
    const mockCB = jest.fn();
    const result = mapObjectToArray({ age: 30, height: 65 }, mockCB);

    expect(mockCB.mock.calls.length).toBe(2);
  });
});

describe("getNewUser()", () => {
  test("it gets user ", async () => {
    const user = await getNewUser(1);
    expect(user).toBeTruthy();
    expect(user.id).toBe(1);
  });
  test("no user found", async () => {
   expect.assertions(1);
   try {
    const user = await getNewUser(1000);
   } catch (error) {
    expect(error).toBeTruthy();
   }
  });
});

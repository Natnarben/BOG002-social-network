// importamos la funcion que vamos a testear
import { registerUser } from "../src/firebase/firebaseAuth.js";

const firebasemock = require("firebase-mock");
const auth = firebase.auth();

const mockauth = new firebasemock.MockAuthentication();
const mocksdk = new firebasemock.MockFirebaseSdk(
  () => null,
  () => mockauth
);




mockauth.autoFlush();
global.firebase = mocksdk;

global.firebase = {
  auth: () => {
    const newMockFirebase = new mockFirebase.MockAuthentication();
    return newMockFirebase;
  },
};

describe("registerUser", () => {
  it("debería ser una función", () => {
    expect(typeof registerUser).toBe("function");
  });
  it("deberia registrarse", () => {
    const promesa = registerUser("djdjdm@gmail.com", "123456");

    return promesa.then((user) => {
      expect(typeof user).toBe("object");
      expect(user.email).toBe("djdjdm@gmail.com");
    });
  });
});

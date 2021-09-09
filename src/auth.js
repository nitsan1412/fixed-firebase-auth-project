import { auth } from "./firebase";
class Auth {
  constructor() {
    this.authenticated = false;
  }

  login(email, pass, cb) {
    auth
      .signInWithEmailAndPassword(email, pass)
      .then((user) => {
        console.log("?????????????????");
        console.log("email: ", user);
        this.authenticated = true;
        cb();
      })
      .catch((e) => console.log("login error: ", e));
  }
  signup(email, pass) {
    auth
      .createUserWithEmailAndPassword(email, pass)
      .catch((e) => console.log("user creation error: ", e));
  }
  logout(cb) {
    this.authenticated = false;
    cb();
  }

  isAuthenticated() {
    return this.authenticated;
  }
}

export default new Auth();

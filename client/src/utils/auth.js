import decode from "jwt-decode";
class AuthService {
  //retrieve data saved in the token
  getProfile() {
    return decode(this.getToken());
  }
  //check if the user is still logged in

  loggedIn() {
    //checks if there is token and it is valid
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }
  // check if the token has expired
  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        // if experation date is less than now we good
        return true;
      } else {
        return false;
      }
    } catch (err) {
      return false;
    }
  }
  getToken() {
    //retrieve token from localstorage
    return localStorage.getItem("id_token");
  }
  //set token and reload homepage
  login(idToken) {
    //retrieve token from localstorage
    localStorage.setItem("id_token", idToken);

    window.location.assign("/");
  }
  // clear token from localStorage and force logout with reload
  logout() {
    // Clear user token and profile data from localStorage
    localStorage.removeItem("id_token");
    // this will reload the page and reset the state of the application
    window.location.assign("/");
  }
}
export default new AuthService();

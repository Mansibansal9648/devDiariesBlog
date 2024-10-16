class UrlConstant {
  constructor() { }

  url_dev = 'http://localhost:8080/api';


  login = `${this.url_dev}/login`;
  signup = `${this.url_dev}/signup`;
  forgotPassword = `${this.url_dev}/forgot-password`;
  resetPassword = `${this.url_dev}/reset-password?accessToken`;

}

const urls = new UrlConstant();
export default urls;

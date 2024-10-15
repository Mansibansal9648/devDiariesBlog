class UrlConstant {
    constructor() {}
  
    url_dev = 'http://localhost:8080/api';
  
    login = `${this.url_dev}/login`;
    signup = `${this.url_dev}/signup`;
   
  }
  
  const urls = new UrlConstant();
  export default urls;
  
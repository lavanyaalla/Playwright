class LoginPage {
  constructor(page) {

    this.page = page;
        this.loginname =  page.locator("#userEmail");
        this.loginPassword = page.locator("#userPassword");
        this.loginbutton = page.locator("#login");
        this.UserN = page.locator()

  }

  async login(username, password) {

        await this.loginname.fill(username);
        await this.loginPassword.fill(password);
        await this.loginbutton.click();
  } 
  
  async Goto(){
        await this.page.goto("https://rahulshettyacademy.com/client/#/auth/login", { waitUntil: 'networkidle' });
        
  }
}

module.exports = { LoginPage };

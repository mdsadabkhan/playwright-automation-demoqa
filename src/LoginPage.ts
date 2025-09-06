import Utils from "../app_common/utils/Utils";

class LoginPage extends Utils{
    username: string
    password: string
    logginButton: string

    constructor(page: any) {
        super(page);
        this.username = 'input[name="username"]';
        this.password = 'input[name="password"]';
        this.logginButton = 'button[type="submit"]';
    }
    async enterUsername(username: string) {
        await this.page.fill(this.username, username);
    }           
    async enterPassword(password: string) {
        await this.page.fill(this.password, password);
    }
    async clickOnLoginButton() {
        await this.clickOn(this.logginButton);
    }


} export default LoginPage;
const FormPage = require('../pages/form.page');

describe('Todo application', () => {
  it('should open todos form', async () => {
    await FormPage.open();

    // await LoginPage.login('tomsmith', 'SuperSecretPassword!');
    // await expect(SecurePage.flashAlert).toBeExisting();
    // await expect(SecurePage.flashAlert).toHaveTextContaining(
    //   'You logged into a secure area!'
    // );
    // await FormPage.todoForm();
    await FormPage.isDoneButton.click();
    await expect(FormPage.isDoneButton).toHaveTextContaining('In process');
    await FormPage.removeButton.click();
    await expect(FormPage.todoLi).not.toBeExisting();
  });
});

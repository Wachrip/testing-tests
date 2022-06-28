const Page = require('./page');

class FormPage extends Page {
  get todoLi() {
    return $('#todoLi3');
  }

  get isDoneButton() {
    return $('#isDoneButton1');
  }

  get removeButton() {
    return $('#removeButton3');
  }

  async todoForm() {
    // await this.isDoneButton.click();
  }

  open() {
    return super.open('');
  }
}

module.exports = new FormPage();

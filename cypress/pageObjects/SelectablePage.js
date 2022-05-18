import BasePage from "./BasePage";

class SelectablePage extends BasePage {
  static get url() {
    return "/selectable";
  }

  static get listItems() {
    return cy.get("#verticalListContainer>li");
  }
  static get gridTabBtn() {
    return cy.get("#demo-tab-grid");
  }
  static get gridElems(){
    return cy.get('#gridContainer>div>li');
  }
}

export default SelectablePage;

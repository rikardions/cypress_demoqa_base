import SelectablePage from "../../pageObjects/SelectablePage";
import TextBoxPage from "../../pageObjects/textBoxPage";

context("Elements Page", () => {
  context("SelectablePage scenarios", () => {
    beforeEach(() => {
      SelectablePage.visit();
    });

    it("Selecting certain elements (day3 hw)", () => {
      // Noklikot uz laukiem “Cras justo odio” un “Morbi leo risus”.
      SelectablePage.listItems.contains("Cras justo odio").click();
      SelectablePage.listItems.contains("Morbi leo risus").click();
      // Novalidēt, ka noklikotie lauki ir aktīvi. (.invoke('class')).
      SelectablePage.listItems
        .contains("Cras justo odio")
        .invoke("attr", "class")
        .should("contain", "active");
        SelectablePage.listItems
        .contains("Morbi leo risus")
        .invoke("attr", "class")
        .should("contain", "active");
      // Novalidēt, ka pārējie lauki nav mainījuši stāvokli.
      SelectablePage.listItems
      .contains("Dapibus ac facilisis in")
      .invoke("attr", "class")
      .should("not.contain", "active");
      SelectablePage.listItems
      .contains("Porta ac consectetur ac")
      .invoke("attr", "class")
      .should("not.contain", "active");
    });
    context("Grid tab scenarios", () => {
      it.only("Grid section", () => {
        // Atvērt sadaļu “Grid”.
        SelectablePage.gridTabBtn.click();
        // Noklikot laukus “Two”, “Four”, “Six” un “Eight”.
        SelectablePage.gridElems.contains("Two").click();
        SelectablePage.gridElems.contains("Four").click();
        SelectablePage.gridElems.contains("Six").click();
        SelectablePage.gridElems.contains("Eight").click();
        // Novalidēt, ka lauki “Two”, “Four”, “Six” un “Eight” ir aktīvi (.invoke('class')).
        SelectablePage.gridElems
          .contains("Two")
          .invoke("attr", "class")
          .should("contain", "active");
        SelectablePage.gridElems
          .contains("Four")
          .invoke("attr", "class")
          .should("contain", "active");
        SelectablePage.gridElems
          .contains("Six")
          .invoke("attr", "class")
          .should("contain", "active");
        SelectablePage.gridElems
          .contains("Eight")
          .invoke("attr", "class")
          .should("contain", "active");
        // Novalidēt, ka pārējie lauki nav mainījuši stāvokli.
        SelectablePage.gridElems
          .contains("One")
          .invoke("attr", "class")
          .should("not.contain", "active");
        SelectablePage.gridElems
          .contains("Three")
          .invoke("attr", "class")
          .should("not.contain", "active");
        SelectablePage.gridElems
          .contains("Five")
          .invoke("attr", "class")
          .should("not.contain", "active");
        SelectablePage.gridElems
          .contains("Nine")
          .invoke("attr", "class")
          .should("not.contain", "active");
      });
    });
  });
});

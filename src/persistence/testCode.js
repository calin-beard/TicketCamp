class DBHandler {

    constructor(table) {
        this.table = table;
    }

    addItem() {
        return this;
    }
}

let handler = new DBHandler("issues");

handler.addItem().addItem().addItem();


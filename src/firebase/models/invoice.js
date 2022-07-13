export default class Invoice {
  constructor(id, items, totalQuantity, totalAmount, date) {
    this.id = id;
    this.items = items;
    this.totalQuantity = totalQuantity;
    this.totalAmount = totalAmount;
    this.date = date;
  }
}

export const converter = {
  toFirestore: (invoice) => {
    return {
      items: invoice.items,
      totalQuantity: invoice.totalQuantity,
      totalAmount: invoice.totalAmount,
      date: invoice.date || new Date(),
    };
  },
  fromFirestore: (snapshot, options) => {
    const data = snapshot.data(options);
    return new Invoice(
      snapshot.id,
      data.items,
      data.totalQuantity,
      data.totalAmount,
      data.date
    );
  },
};

export default class Product {
  constructor(id, name, price, category, description = null, date = null) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.category = category;
    this.description = description;
    this.date = date || new Date().toDateString();
  }
}

export const converter = {
  toFirestore: (product) => {
    return {
      name: product.name,
      price: product.price,
      category: product.category,
      description: product.description,
      date: product.date,
    };
  },
  fromFirestore: (snapshot, options) => {
    const data = snapshot.data(options);
    return new Product(
      snapshot.id,
      data.name,
      data.price,
      data.category,
      data.description,
      data.date
    );
  },
};

import { converter } from '@/firebase/models/product';
import { addDoc, collection, doc, getDocs } from 'firebase/firestore';
import BaseApi from '@/api/base';

export default class extends BaseApi {
  getCollection(withConverter = true) {
    if (withConverter) {
      return collection(this.firestore, 'products').withConverter(converter);
    }
    return collection(this.firestore, 'products');
  }

  getDoc(id, withConverter = true) {
    if (withConverter) {
      return doc(this.firestore, id).withConverter(converter);
    }
    return doc(this.firestore, id);
  }

  async create({ name, category, price, description, date }) {
    await addDoc(this.getCollection(), {
      name,
      category,
      price,
      description,
      date,
    });

    return this.all();
  }

  async all() {
    const data = [];
    const snapshot = await getDocs(this.getCollection());

    if (snapshot.empty) {
      return data;
    }

    snapshot.forEach((doc) => {
      data.push(doc.data());
    });

    return data;
  }
}

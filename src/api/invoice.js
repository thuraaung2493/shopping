import { converter } from '@/firebase/models/invoice';
import { addDoc, collection, doc, getDocs } from 'firebase/firestore';
import BaseApi from '@/api/base';

export default class extends BaseApi {
  getCollection(withConverter = true) {
    if (withConverter) {
      return collection(this.firestore, 'invoices').withConverter(converter);
    }
    return collection(this.firestore, 'invoices');
  }

  getDoc(id, withConverter = true) {
    if (withConverter) {
      return doc(this.firestore, id).withConverter(converter);
    }
    return doc(this.firestore, id);
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

  create(data) {
    console.log(data);
    return addDoc(this.getCollection(), data);
  }

  async update() {
    await addDoc(this.getCollection(), {});
  }

  async delete() {
    await addDoc(this.getCollection(), {});
  }
}

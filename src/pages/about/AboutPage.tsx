import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from 'firebase/firestore/lite';
import React, { useEffect, useState } from 'react';
import { db } from 'utils/firebase';

interface Props {}

const AboutPage = (props: Props) => {
  const [books, setBooks] = useState<any>([]);


  // Get DATA from firebase
  const getData = async () => {
    const bookCollectionRef = collection(db, 'books');
    const citySnapshot = await getDocs(bookCollectionRef);
    const cityList = citySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setBooks(cityList);
  };

  // CREATE DATA from firebase
  // const createData = async () => {
  //   await addDoc(bookCollectionRef, {
  //     name: 'abc',
  //     image: 'xyz',
  //     price: 'lmao',
  //   });
  // };

  // Update Data from firebase
  // const updateData = async (id, dataForUpdate) => {
  //   const dataDoc = doc(db, 'books', id);
  //   await updateDoc(dataDoc, dataForUpdate);
  // };

  // Delete Data from firebase
  // const deleteData = async (id) => {
  //   const dataDoc = doc(db, 'books', id);
  //   await deleteDoc(dataDoc);
  // };

  useEffect(() => {
    // getData();
  }, []);

  return (
    <div>
      <h1>This is About Page</h1>
      {books.map((book: any) => (
        <div key={book.name}>
          <img
            src={book.image}
            alt={book.name}
            style={{ width: '100%', height: 'auto' }}
          />
          <div>Name: {book.name}</div>
          <div>Description: {book.description}</div>
          <div>Price: {book.price}</div>
        </div>
      ))}
      {/* <img src={logo} /> */}
    </div>
  );
};

export default AboutPage;

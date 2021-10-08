import { collection, getDocs } from 'firebase/firestore/lite';
import React, { useEffect, useState } from 'react';
import { db } from 'utils/firebase';

interface Props {}

const AboutPage = (props: Props) => {
  const [books, setBooks] = useState<any>([]);

  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const booksCol = collection(db, 'books');
    const citySnapshot = await getDocs(booksCol);
    const cityList = citySnapshot.docs.map((doc) => doc.data());
    setBooks(cityList);
  };
  console.log('🚀 ~ file: AboutPage.tsx', books);

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
    </div>
  );
};

export default AboutPage;

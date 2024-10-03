import { openDB } from 'idb';

const DB_NAME = 'profile-management-db';
const STORE_NAME = 'profile-management-store';

export const openDatabase = async () => {
  const db = await openDB(DB_NAME, 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    },
  });

  return db;
};

export const saveToken = async (token) => {
  const db = await openDatabase();
  const tx = db.transaction(STORE_NAME, 'readwrite');
  const store = tx.objectStore(STORE_NAME);
  console.log('idb set token:', token)
  await store.put(token, 'token');
  await tx.complete;
};

export const saveRefreshToken = async (token) => {
  const db = await openDatabase();
  const tx = db.transaction(STORE_NAME, 'readwrite');
  const store = tx.objectStore(STORE_NAME);
  console.log('idb set refresh token:', token)
  await store.put(token, 'token');
  await tx.complete;
};


export const getToken = async () => {
  const db = await openDatabase();
  const tx = db.transaction(STORE_NAME, 'readonly');
  const store = tx.objectStore(STORE_NAME);

  const token = await store.get('token');
  await tx.complete;

  return token;
};


export const getRefreshToken = async () => {
  const db = await openDatabase();
  const tx = db.transaction(STORE_NAME, 'readonly');
  const store = tx.objectStore(STORE_NAME);

  const token = await store.get('token');
  await tx.complete;
  console.log('idb get refresh token:', token)
  return token;
};

export const clearTokenOnBrowserClose = () => {
    const handleUnload = async (event) => {
      if (event.type === 'unload') {
        const db = await openDatabase();
        const tx = db.transaction(STORE_NAME, 'readwrite');
        const store = tx.objectStore(STORE_NAME);
  
        await store.clear();
        await tx.complete;
      }
    };
  
    window.addEventListener('unload', handleUnload);
};

export const clearTokenOnLogout = async () => {
  const db = await openDatabase();
  const tx = db.transaction(STORE_NAME, 'readwrite');
  const store = tx.objectStore(STORE_NAME);

  // Log the data before clearing the store
  const dataBefore = await store.getAll();
  console.log('Data before clearing:', dataBefore);

  await store.clear();

  // Log the data after clearing the store
  const dataAfter = await store.getAll();
  console.log('Data after clearing:', dataAfter);

  await tx.complete;
};

export const saveUserInfo = async (userInfo) => {
  const db = await openDatabase();
  const tx = db.transaction(STORE_NAME, 'readwrite');
  const store = tx.objectStore(STORE_NAME);
  console.log('idb set user info:', userInfo)
  await store.put(userInfo, 'user_info');
  await tx.complete;
};

export const getUserInfo = async () => {
  const db = await openDatabase();
  const tx = db.transaction(STORE_NAME, 'readonly');
  const store = tx.objectStore(STORE_NAME);

  const userInfo = await store.get('user_info');
  await tx.complete;

  return userInfo;
};

// Function to save payment data
export const savePaymentData = async (payment_data) => {
  const db = await openDatabase();
  const tx = db.transaction(STORE_NAME, 'readwrite');
  const store = tx.objectStore(STORE_NAME);
  await store.put(payment_data, 'payment_data');
  await tx.complete;
};

// Function to fetch payment data
export const fetchPaymentData = async () => {
  const db = await openDatabase();
  const tx = db.transaction(STORE_NAME, 'readonly');
  const store = tx.objectStore(STORE_NAME);
  const payment_data = await store.get('payment_data');
  await tx.complete;
  return payment_data;
};

export const clearPaymentData = async () => {
  const db = await openDatabase();
  const tx = db.transaction(STORE_NAME, 'readwrite');
  const store = tx.objectStore(STORE_NAME);
  await store.delete('payment_data'); 
  await tx.complete;
};

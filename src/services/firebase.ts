import { initializeApp } from 'firebase/app';
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword, signOut
} from 'firebase/auth';
import { getDatabase, ref } from 'firebase/database';

const firebaseConfig = {
    apiKey: 'AIzaSyDzM68C8HfszkZ6bZTgzIzmcjYUVZrvXpc',
    authDomain: 'gb-1992-react.firebaseapp.com',
    projectId: 'gb-1992-react',
    storageBucket: 'gb-1992-react.appspot.com',
    messagingSenderId: '245931481673',
    appId: '1:245931481673:web:0fa6123a516c31a2cd3d98',
    measurementId: 'G-SK7FXB3SBS'
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);

export const signUp = async (email: string, password: string) =>
    await createUserWithEmailAndPassword(firebaseAuth, email, password);

export const logIn = async (email: string, password: string) =>
    await signInWithEmailAndPassword(firebaseAuth, email, password);

export const logOut = async () => await signOut(firebaseAuth);

const db = getDatabase(app);

export const userRef = ref(db, 'user');
export const messagesRef = ref(db, 'messages');

export const getChatById = (chatName: string) =>
    ref(db, `messages/${chatName}`);

export const getMessageListById = (chatId: string) =>
    ref(db, `messages/${chatId}/messageList/`);


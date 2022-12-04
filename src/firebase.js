
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// ウェブアプリの追加で表示されたfirebaseConfigをコピー＆ペースします。
const firebaseConfig = {
    apiKey: "AIzaSyBUgrNncxAMEyzbXVIMFBKw2drKrQguTu0",
    authDomain: "my-chat-app-6fd76.firebaseapp.com",
    projectId: "my-chat-app-6fd76",
    storageBucket: "my-chat-app-6fd76.appspot.com",
    messagingSenderId: "833667556800",
    appId: "1:833667556800:web:1e19d535e36a5576655425"
  };

// Firebaseを初期化します。
const app = firebase.initializeApp(firebaseConfig);
// データベースとしてFirebaseのFireStoreを使用します。DBのインスタンスを作成します。
const db = app.firestore();
// グーグルでログインする認証のインスタンスを作成します。
const auth = app.auth();
// インスタンスを他のモジュールからでも使用できるようにエクスポートします。
export { db, auth };

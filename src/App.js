import './App.css';
import SignIn from './components/SignIn';
import { MessageList } from './components/MessageList';
//react-firebase-hooksのuseAuthStateを使用できるようにインポートします
import { useAuthState } from "react-firebase-hooks/auth";
// firebaseのauthインスタンスをインポートします。
import { auth } from "./firebase.js";

function App() {
  // ユーザーがログインしているかどうかの変数
  const [user] = useAuthState(auth);
  // ログインしている場合、MessageList
  // していない場合は、SignIn
  // を表示します。
  return <div className="App">{user ? <MessageList /> : <SignIn />}</div>;
}

export default App;

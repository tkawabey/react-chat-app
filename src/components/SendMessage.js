import { Input } from '@mui/material'
import React, { useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import { db, auth } from "../firebase.js";
import firebase from "firebase/compat/app";

export const SendMessage = () => {
  // テキストボックスに入力されたメッセージをReactのUseStateで管理できるように宣言します。
  const [message, setMessage] = useState("");

  // Formのサブミット処理
  function sendMessage(e) {
    // リロード時の画面再描画をキャンセルさせます。
    e.preventDefault();
    // Googleアカウントのカレントユーザーのuid,photoURLプロパティの値を取得
    const { uid, photoURL } = auth.currentUser;

    // コレクションに新規ドキュメントを追加します。
    db.collection("chat-messages").add({
      text: message,
      photoURL,
      uid,
      createdTime: firebase.firestore.FieldValue.serverTimestamp(),
    });
    // テキストボックスをクリア
    setMessage("");
  }

  return (
    <div>
      <form onSubmit={sendMessage}>
        <div className="sendMsg">
          <Input 
            style={{
              width: "78%",
              fontSize: "15px",
              fontWeight: "550",
              marginLeft: "5px",
              marginBottom: "-3px",
            }}          
          placeholder="Please input message."
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          />
          <SendIcon style={{ color: "#7AC2FF", marginLeft: "20px" }} />
        </div>
      </form>
    </div>
  )
}

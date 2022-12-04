// firebase.jsで作成した、firestorのインスタンスをインポートする宣言を行います
import { db, auth } from "../firebase.js";
import React, { useEffect, useState } from 'react'
import { SignOut } from './SignOut'
import { SendMessage } from "./SendMessage.js";

export const MessageList = () => {
  // メッセージを保存する変数
  const [messages, setMessages] = useState([]);
  // DBから一覧を取得する処理は、このページにアクセスorリロード時
  // 1回だけ実行できればいいので、userEffectを宣言します。
  useEffect(() => {
    // DBから一覧を取得するようにfirestorのメソッドをコールします。
    // https://cloud.google.com/firestore/docs/query-data/get-data?hl=ja

    // 指定したパスのFirestorコレクションを取得します。
    const col = db.collection("chat-messages");
    // クエリーを発行して、一覧を取得します。
    col.orderBy("createdTime", "asc")　// 作成日時で昇順に並び替え。第2引数を省略した場合は、ascが適用されます。
    .limit(50) // 一覧を取得する最大件数    
    .onSnapshot((snapshot) => { // QuerySnapshot イベントのリスナーをアタッチします。
      setMessages(snapshot.docs.map((doc) => doc.data()));
    });



  }, []);
  return (
    <div>
        <SignOut/>
        <div className="msgs">
        {messages.map(({ id, text, photoURL, uid }) => (
          <div>
          <div
            key={id}
            className={`msg ${
              uid === auth.currentUser.uid ? "sent" : "received"
            }`}
          >
            <img src={photoURL} alt="" />
            <p>{text}</p>
          </div>
        </div>
        ))}
      </div>
      <SendMessage/>
    </div>
  )
}

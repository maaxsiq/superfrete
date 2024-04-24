import React, { useState, useEffect } from "react"
import firebase from "firebase/compat/app"
import "firebase/compat/firestore"
import * as S from './styles'
import { firebaseConfig } from '../../constants/constants';

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()

interface Message {
  timestamp: firebase.firestore.Timestamp;
  id: string;
  message: string;
}

export const ListMessage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const unsubscribe = db.collection("messages").onSnapshot(snapshot => {
      const data: Message[] = snapshot.docs.map(doc => ({
        id: doc.id,
        message: doc.data().message,
        timestamp: doc.data().timestamp
      }));
      setMessages(data);
    });
    return () => unsubscribe();
  }, []);

  return (
    <S.Container>
      <S.Title>Mensagens enviadas</S.Title>
      {messages.map((message) => (
        <S.Card key={message.id}>
          <S.Message>{message.message}</S.Message>
          <S.DateTime>{message.timestamp ? message.timestamp.toDate().toLocaleString() : 'Sem data'}</S.DateTime>
        </S.Card>
      ))}
    </S.Container>
  )
}

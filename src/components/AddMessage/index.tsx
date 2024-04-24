import React, { useState } from "react"
import firebase from "firebase/compat/app"
import "firebase/compat/firestore"
import * as S from './styles'
import { firebaseConfig } from '../../constants/constants';

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()

export const AddMessage: React.FC = () => {
  const [message, setMessage] = useState("")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value)
  }

  const handleSubmit = () => {
    if (message.trim() !== "") {
      db.collection("messages").add({
        message,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      })
      setMessage("")
    }
  }

  return (
    <S.Container>
      <S.Title>Digite um texto abaixo</S.Title>
      <S.BodyContainer>
        <S.Input placeholder="Insira sua mensagem*" type="text" value={message} onChange={handleInputChange} />
        <S.Button disabled={message.length < 1} onClick={handleSubmit}>
          <S.TextButton>Enviar</S.TextButton>
        </S.Button>
      </S.BodyContainer>
    </S.Container>
  )
}

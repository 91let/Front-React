import React from 'react';
import { useState } from "react";
import axios from "axios";

function App() {
  const restUrl = "/quiz/";
  const [question, setQuestion] = useState("답변에 SSAFY를 입력해 주세요");
  const [url, setUrl] = useState("alpha");
  const [nickname, setNickname] = useState("");
  const [yourAnswer, setYourAnswer] = useState("");
  const [result, setResult] = useState(true);

  const config = {
    headers: { 
      Accept: 'application/json',
      ContentType: 'application/json',
     }
  }

  const send = () => {
    axios
      .post(restUrl + url, {
          nickname : nickname,
          yourAnswer : yourAnswer
        },
        config
      )
      .then(response => {
        console.log(nickname)
        console.log(yourAnswer)
        if(response.data.code === 200) {
          setResult(true);
          setUrl(response.data.nextUrl)
          setQuestion(response.data.question)
          console.log("success");
          console.log(response.data);
        }
        else{
          setResult(false);
          console.log(response.data);
        }
      })
  }

  const nicknameChange = (e: { target: { value: React.SetStateAction<string> } }) => {
    setNickname(e.target.value.toString());
  }

  const ansChange = (e: { target: { value: React.SetStateAction<string> } }) => {
    setYourAnswer(e.target.value.toString());
  }

  return (
    <div>
      <label>{url}</label>
      <br/>
      <label>{question}</label>
      <br/>
      <label>지역반이름</label>
      <input type="text" value={nickname} onChange={nicknameChange}/>
      <br/>
      <label>정답</label>
      <input type="text" value={yourAnswer} onChange={ansChange}/>
      {result? <label></label>: <label>오답</label>}
      <br/>
      <button onClick={send}>제출</button>
    </div>
  );
}

export default App;

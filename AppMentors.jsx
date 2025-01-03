import React, { useReducer, useState } from 'react';
import personReducer from './reducer/person-reducer'

export default function AppMentors() {
  // const [person, setPerson] = useState(insitialPerosn);
  const [person, dispatch] = useReducer(personReducer, insitialPerosn);
  const handleUpdate = () => {
    const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
    const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
    dispatch({type: 'updated', prev, current })
  };
  const handleAdd = () => {
    const name = prompt(`멘토의 이름을 알려주세요`);
    const title = prompt(`멘토의 직책을 알려주세요`);
    dispatch({type:'added', name, title})
    // setPerson((person) => ({
    //   ...person,
    //   mentors : [
    //     ...person.mentors,
    //     {name, title}
    //   ],
    // }));
  };
  const handleDelete = () => {
    const name = prompt(`해고할 멘토의 이름을 알려주세요`);
    const title = prompt(`해고할 멘토의 직책을 알려주세요`);
    dispatch({type: 'deleted', name, title})
  }
  return (
    <div>
      <h1>
        {person.name}은 {person.title}
      </h1>
      <p>{person.name}의 멘토는:</p>
      <ul>
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <button onClick={handleUpdate}>멘토의 이름을 바꾸기</button>
      <button onClick={handleAdd}>멘토 추가하기</button>
      <button onClick ={handleDelete}>멘토 삭제하기</button></div>
  );
}

const insitialPerosn = {
    name: '겨울 선생님',
    title: '개발자',
    mentors: [
      {
        name: '봄',
        title: '시니어개발자',
      },
      {
        name: '가을',
        title: '시니어개발자',
      },
    ],
  }

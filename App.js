import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [array, setArray] = useState([]);
  const onChange = (e) => setText(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      return;
    }
    setArray((currentArray) => [text, ...currentArray]);
    setText("");
  };
  const onClickRemove = (index) => {
    setArray((currentArray) => {
      const updatedTodos = currentArray.filter((_, i) => i !== index);
      return updatedTodos;
    });
  };
  console.log(onClickRemove);

  return (
    <div>
      <h1>Your ToDos! ({array.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          value={text}
          onChange={onChange}
          type="text"
          placeholder="Write Your Todos"
        ></input>
        <button>Write</button>
      </form>
      <hr />
      <ul>
        {array.map((item, index) => (
          <li key={index}>
            {item} &nbsp;
            <button onClick={() => onClickRemove(index)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

import { useState } from "react";

const TodoFrom = () => {
  const [text, setText] = useState("shoiab");

  const onformsumbit = () => {};

  const onInputChange = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <form onSubmit={onformsumbit}>
        <input
          type="text"
          placeholder="enter todo"
          className="inputfield"
          onInput={onInputChange}
        ></input>
      </form>
    </>
  );
};
export default TodoFrom;

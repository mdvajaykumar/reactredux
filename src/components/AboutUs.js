import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export function AboutUs() {
  const [tinput, setTinput] = useState("");

  const [list, setList] = useState([]);

  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const updateValue = (e) => setTinput(e.target.value);
  const addPost = () => {
    dispatch({ type: "Post_Tweet", payload: tinput });
    setTinput("");
  };

  return (
    <div>
      <div className="mr-3">
        <input
          type="text"
          value={tinput}
          placeholder="Enter tweet"
          onChange={(e) => updateValue(e)}
        />
      </div>
      <div>
        <input
          type="button"
          value="tweet"
          className="bg-primary"
          onClick={() => addPost()}
        />
      </div>
      {state.list.map((item, index) => (
        <h4 key={index}>{item}</h4>
      ))}
    </div>
  );
}

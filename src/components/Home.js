import { useDispatch, useSelector } from "react-redux";

export function Home() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const Increment = () => dispatch({ type: "Inc" });

  return (
    <div className="m-2">
      <h1 className="text-center">counter{state.counter}</h1>
      <input
        type="button"
        value="Increment"
        className="form-control m-2 bg-primary"
        onClick={() => Increment()}
      />
    </div>
  );
}

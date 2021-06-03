import { useSelector } from "react-redux";

export function Project() {
  const state = useSelector((state) => state);
  return (
    <div className="bg-danger">
      <div>Project</div>
      <div className="bg-secondary">
        <h1>{state.message}</h1>
        <h2>{state.cr.counter}</h2>
        <h3>{state.tweet.list}</h3>
      </div>
    </div>
  );
}

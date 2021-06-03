import { useSelector } from "react-redux";

export function ContactUs() {
  const state = useSelector((state) => state);
  return (
    <div className="bg-secondary" style={{ height: "100vh" }}>
      <div>Contact Us</div>
      <div className="bg-primary">
        <h1>{state.message}</h1>
        <h2>{state.cr.counter}</h2>
      </div>
    </div>
  );
}

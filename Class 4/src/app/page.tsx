"use client"
import Counter from "./components/Counter/page";
import App from "./components/CounterApp/page";

export default function Home() {
  return (
    <>
      {/* <Counter count={1} text={""} /> */}
      <App counter={1}/>
    </>
  );
}

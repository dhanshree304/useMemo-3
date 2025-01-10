import { useMemo, useState } from "react";
import "./styles.css";

export default function App() {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  const IncOne = () => {
    setCountOne(countOne + 1);
  };

  const IncTwo = () => {
    setCountTwo(countTwo + 1);
  };

  const isEven = useMemo(() => {
    console.log("activated");
    let i = 0;
    while (i > 2000000) i++;
    return countOne % 2 === 0;
  }, [countOne]); //dependency pass krne must aahe

  //fkt countOne vrti isEven cha prabhav aahe mhnun te slow chlat
  //bt fkt countOne vr nhi tr countTwo pn slow chlat.

  //mhnun useMemo usekrun aapn isEven cha prabhav fkt countOne vr thevto
  //mhnje countOne fkt slow chalt.aani countTwo fast chalel

  return (
    <div className="App">
      <button onClick={IncOne}>IncCountOne:{countOne}</button>
      <span>{isEven ? "Even" : "Odd"}</span>
      <button onClick={IncTwo}>IncCountTwo:{countTwo}</button>
    </div>
  );
}

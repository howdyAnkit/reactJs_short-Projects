import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [inputOne, setInputOne] = useState("");
  const [inputTwo, setInputTwo] = useState("");

  const [reverseArray, setReverseArray] = useState("");
  const [reverseArray2, setReverseArray2] = useState("");
 
  useEffect(() => {
    const reversTemp2 = inputOne.split('');
    const tempRev2 = reversTemp2.reverse().join('');
    setReverseArray(tempRev2);
    setReverseArray2(inputOne);
  },[inputOne]);

  useEffect(() => {
    const reverseTemp1 = inputTwo.split('');
    const tempRev1 = reverseTemp1.reverse().join('');
    setReverseArray(inputTwo);
    setReverseArray2(tempRev1);
  },[inputTwo])

  // useEffect(() => {
  //   console.log(inputOne);
  //   console.log(inputTwo);
  //   const arr1 = inputOne.split('');
  //   const arr2 = inputTwo.split(''); //'a' , 'n'

  //   const reverse1 = arr1.reverse(); //'n', 'a'
  //   const reverse2 = arr2.reverse();

  //   const join1 = reverse1.join(""); //na
  //   const join2 = reverse2.join("");

  //   setReverseArray(join1);
  //   setReverseArray2(join2);
  // }, [inputOne, inputTwo]);

  return (
    <div className="App">
      <input onChange={(e) => setInputOne(e.target.value)} value={reverseArray2} />
      <input onChange={(e) => setInputTwo(e.target.value)} value={reverseArray} />
    </div>
  );
}

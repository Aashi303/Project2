import {useState,useRef,useEffect,React} from 'react'

const Hook9 = () => {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });
  return (
    <div>
        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render Count: {count.current}</h1>
    </div>
  )
}

export default Hook9
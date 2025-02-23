```javascript
//In a functional component
const MyComponent = () => {
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setCount(prevCount => prevCount + 1);
      setIsLoading(false);
    }, 1000); 
  }, []); //Empty dependency array ensures that the useEffect only runs once after mounting

  return (
    <div>
      <h1>{count}</h1>
      {isLoading && <p>Loading...</p>}
      <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
    </div>
  );
};
```
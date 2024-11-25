

function Child({SendObjToParent}) {
 
  const sendObject = () => {
    const obj = {name:"Chand", age:23};
    SendObjToParent(obj)
  }
  return(
    <>
    <p>Child component</p>
    <button onClick = {sendObject}>Send</button>
    </>
  );
}


export default Child;
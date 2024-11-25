
import Child from "./Child";
import './App.css';


function App() {
  // const username = "Chandini";
  // const city = "Chennai";

  /*object*/
  const person = {
    name: "Chandini",
    age: 35,
    address: {
      city: "Chennai",
      state: "TN",
      country: "INDIA"
    }
  }
  return (
    <>
      {/* <h1>This is parent component</h1>
      {/*Username is : {username}*/}
      {/* <Child name={username} city={city}/> */}
      {/* <Child name ="Grocery" order = "200" offers = "yes"/>
      <Child name ="Mobiles" order = "200" offers = "no"/>
      <Child name ="Fashion" order = "200" offers = "yes"/>
      <Child name ="Electronics" order = "200" offers = "no"/>
      <Child name ="Flight Bookings" order = "200" offers = "yes"/> */}
      <Child person={person} />
    </>
  );
}

export default App;

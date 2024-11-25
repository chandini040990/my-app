
// function Child(props) {
//     return (
//         <>
//             <h1>This is child component</h1>
//             Username is <strong style={{ color: "green" }}> {props.name}</strong>
//             City is <strong style={{ color: "red" }}> {props.city}</strong>
//         </>
//     );
// }

// export default Child

// function Child(props) {
//     return (
//         <>
//             <pre>Category:{props.name}<br />
//                 Order:{props.order}<br />
//                 Offers:{props.offers}<br />
//             </pre>
//         </>
//     );
// }

// export default Child

// function Child({name,order,offers}) {
//         return (
//             <>
//                 <pre>Category:{name}<br />
//                     Order:{order}<br />
//                     Offers:{offers}<br />
//                 </pre>
//             </>
//         );
//     }

//     export default Child


// function Child({person}) {
//     return (
//         <>
//             <pre>Name :{person.name}<br />
//             Age :{person.age}<br />
//             Address :{person.address.city}<br />
//             State :{person.address.state}<br />
//             Country :{person.address.country}<br />
//             </pre>
//         </>
//     );
// }

// export default Child

/* destructuring way*/

function Child({ person }) {
    const { name, age, address: { city, state, country } } = person;
    return (
        <>
            <pre>Name :{name}<br />
                 Age :{age}<br />
                 Address :{city}<br />
                 State :{state}<br />
                 Country :{country}<br />
            </pre>
        </>
    );
}

export default Child
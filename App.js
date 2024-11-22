import React from 'react';
import ReactDOM from 'react-dom/client';

//Functional Component

const Title=()=> <h1>Let's Learn React</h1>

// const Heading=()=> (
//     <div>
//         {/* These alll three title perform the same function. These are just different ways of writing */}
//         <Title/>
//         <Title></Title>
//         {Title()}
//         <h1>REACT</h1>
//     </div>
// )


const Heading=()=>{          //with return use {}
    return (
        <div>
            Hello
            <Title/>
        </div>
    );
}
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Heading/>);

// function CompB(props){
//     return <div>
//         <h1>Component B</h1>
//         <pre>{JSON.stringify(props)}</pre>
//     </div>
// }
// export default CompB

function CompB(x){
    return <div>
        <h1>Component B</h1>
        <pre>{JSON.stringify(x)}</pre>
        {/* <h3>Wish Message:{x.prop1}</h3>
        <h3>Wish Message:{x.prop2}</h3> */}
        <h3>Employee Id:{x.employee_id}</h3>
        <h3>Employee Id:{x.employee_name}</h3>
    </div>
}
export default CompB
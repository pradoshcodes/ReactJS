import CompB from "./CompB"
function CompA(){

    let eid=101
    let ename="Rahul"
    return <div>
        <h1>Component A</h1>
        <hr/>
        {/* <CompB prop1={"Good Morning"} prop2={["A","B","C"]}/> */}
       <CompB employee_id={eid} employee_name={ename} msg={"Good Morning"}/>
    </div>
}
export default CompA
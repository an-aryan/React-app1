export default function IterationComponent() {
    var employeeNames = ["Mayank", "Ankit", "Anshul", "Meha", "Aniket"];
    
    function employeeNameJsx() {
        var employeeJSX = [];
        for (let i = 0; i < employeeNames.length; i++) {
            employeeJSX.push(<h3>Employee Name is: {employeeNames[i]} </h3>)
        }
        return employeeJSX;
    }
    
    return (
        <div>
            <h1>Total Number of Employees: {employeeNames.length}</h1>
            <h2>Following is the List of Employees in the company: </h2><hr/>
            {/* {[
                <h3>Employee Name is: {employeeNames[0]} </h3>,
                <h3>Employee Name is: {employeeNames[1]} </h3>,
                <h3>Employee Name is: {employeeNames[3]} </h3>,
                <h3>Employee Name is: {employeeNames[4]} </h3>,
                <h3>Employee Name is: {employeeNames[2]} </h3>,                
            ]}<hr /> */}
            { employeeNameJsx() }
        </div>
    )
}
export function ChildComponent(props) {
    // props.designation = "rapper"
    return (
        <div>
            <h1>This is Child Element {props.designation}</h1>
        </div>
    )
}

export default function ParentComponent(props) {
    return (
        <div>
            <h1>This is Parent Element {props.name}</h1>
            <div style={{marginLeft: "20px"}}>
                <ChildComponent {...props}></ChildComponent>
            </div>
        </div>
    )
}
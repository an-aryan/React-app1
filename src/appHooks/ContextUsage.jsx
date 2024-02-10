import { useState, createContext, useContext } from "react";

const UserDetailsContext = createContext();

export default function GrandParents() {
    
    var [details, setDetails] = useState({
        city: "Haryana",
        surName: "Gupta"
    });
    
    return (
        <div>
            <div>
                <OtherComponent></OtherComponent>
            </div>
            <UserDetailsContext.Provider value={{details: details, setDetails: setDetails}}>
                <h1>This is Grand Parents</h1>
                <h6>My City is {details.city}</h6><hr />
                <Parents></Parents>
            </UserDetailsContext.Provider>
        </div>
    )
}
function OtherComponent() {
    return (
        <div>
            <h2>This is Other Component</h2><hr />
        </div>
    )
}

function Parents() {
    return (
        <div>
            <h2>This is Parents</h2><hr />
            <Childrens></Childrens>
        </div>
    )
}

function Childrens() {
    return (
        <div>
            <h3>This is Children</h3><hr />
            <GrandChildrens></GrandChildrens>
        </div>
    )
}

function GrandChildrens() {
    return (
        <div>
            <h4>This is Grand Children</h4><hr />
            <GrandGrandChildrens></GrandGrandChildrens>
        </div>
    )
}

function GrandGrandChildrens() {
    const inputData = useContext(UserDetailsContext);
    function updateData() {
        inputData.setDetails({
            ...inputData.details,
            city: "Delhi"
        })
    }
    
    debugger;
    
    return (
        <div>
            <h5>This is Grand Children</h5>
            <h6>My City is {inputData.details.city}</h6>
            <input type="button" value="Update City" onClick={updateData}  />
        </div>
    )
}
import React, { useState } from "react";

export default function OtherHooksComponent() {
    const [userName, setUserName] = useState("");

    const handleInputChange = (event) => {
        setUserName(event.target.value);
    };

    return (
        <>
            <h1>User Name is {userName}</h1>
            <input type="text" value={userName} onChange={handleInputChange} />
        </>
    );
}

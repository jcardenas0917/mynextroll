// src/components/Profile.js

import React from "react";
import { useAuth0 } from "../react-auth0-spa";

const TempProfile = () => {
    const { user } = useAuth0();

    return (
        <div>
            {user.email}
        </div>
    );
};



export default TempProfile;
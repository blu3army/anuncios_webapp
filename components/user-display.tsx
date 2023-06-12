'use client';

import { useContext } from "react";
import { UserContext } from "@/providers/user-provider";


export function UserDisplay() {

    const user = useContext(UserContext);

    return(
        <div>
           
                {user?.displayName}
           
        </div>
    )
    
}
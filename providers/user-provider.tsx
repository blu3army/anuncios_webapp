'use client';

import { User } from "@/models/User";
import { createContext } from "react";


export const UserContext = createContext<User | null>(null);

export default function UserProvider({children}:{children:React.ReactNode}){

    const user = new User({
        username: 'nikolai',
        displayName: 'Nicolas Bressan',
        email: 'nikolai@gmail.com',
        uid: '11111'
    });


    return(
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    );
}
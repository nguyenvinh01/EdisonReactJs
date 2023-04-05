import React from "react";

export default function HelloWorld() {
    const name = "Cee"
    const User = {
      firstName: 'Vinh',
      lastName: 'Vinh2'
    }
    const formatName = (user) => {
      return user.firstName + user.lastName
    }
    return (
        <>
        <div>HelloWorld</div>
        <div>Hello: {name} va {formatName(User)}
        
        
        </div>
        {/* <div>Rat vui duoc gap ban</div> */}
        <HelloWorld />
        
        </>
    );
   }
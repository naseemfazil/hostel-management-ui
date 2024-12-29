import React, { useEffect, useState } from 'react';


const IsAdminWrapper = (props) => {
    const [isAdmin, setAdmin] = useState({});


    useEffect(() => {
        let storedUser = sessionStorage.getItem('user');
        storedUser = JSON.parse(storedUser);
        if (storedUser) {
            setAdmin(storedUser);
        }
        console.log("isAdmin",isAdmin);
        
    }, []);



    return (
        <>
            {isAdmin?.role == 'admin' && props.children}
        </>
    );
}

export default IsAdminWrapper;
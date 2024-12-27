import React, { useEffect, useState } from 'react';


const IsAdminWrapper = (props) => {
    const [isAdmin, setAdmin] = useState({});


    useEffect(() => {
        let storedUser = sessionStorage.getItem('user');
        storedUser = JSON.parse(storedUser);
        if (storedUser) {
            setAdmin(storedUser);
        }
    }, []);



    return (
        <>
            {isAdmin?.user == 'admin' && props.children}
        </>
    );
}

export default IsAdminWrapper;
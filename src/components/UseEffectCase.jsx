import React, { useEffect, useState } from 'react';

const UseEffectCase = () => {
    const [data, setData] = useState([]);

    async function getUsers() {
        try {
            const fetchedData = await fetch("https://api.github.com/users");
            const response = await fetchedData.json();
            setData(response);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    useEffect(() => {
        getUsers();
    }, []); // Empty dependency array, so it runs only once on mount

    return (
        <div>
            {
                data.map(({ id, login }) => (
                    <h2 key={id}>
                        {login}
                    </h2>
                ))
            }
        </div>
    )
}

export default UseEffectCase;

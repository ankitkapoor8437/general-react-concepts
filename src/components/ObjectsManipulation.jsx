import React, { useState } from 'react'


const ObjectData = () => {
    const [name, setName] = useState("");
    const [data, setData] = useState(
        [{
            id: 1,
            name: "himanshu",
            like: 0,
            disLike: 0,
        },
        {
            id: 2,
            name: "Ankit",
            like: 0,
            disLike: 0,
        },
        {
            id: 3,
            name: "Aniket",
            like: 0,
            disLike: 0,
        },]
    )
    const [random, setRandom] = useState(data.length + 1);

    const handleChange = (event) => {
        setName(event.target.value);
    };

    const addData = (event) => {
        setRandom(random + 1);
        setData((prev) => [...prev, { id: random, name: name, like: 0, disLike: 0 }])
        console.log(random, name);
        setName("");
    }

    const handleDelete = (id) => {
        setData(data.filter((prev) => prev.id !== id));
    }

    const handleLike = (id, like) => {
        setData(data.map((prev) => prev.id === id ? { ...prev, like: like + 1 } : prev))
    }


    const handleDislike = (id, disLike) => {
        setData(data.map((prev) => prev.id === id ? { ...prev, disLike: disLike + 1 } : prev))

    }
    return (
        <div>
            <input type="text" onChange={handleChange} value={name} />
            <button onClick={addData}>ADD</button>
            {
                data.map((element) => (
                    <div key={element.id}>
                        <h1>{element.id}</h1>
                        <span>{element.name}</span>
                        <span >
                            <h3>L - {element.like}</h3> <h3>D - {element.disLike}</h3>
                        </span>
                        <br />
                        <button onClick={() => handleDelete(element.id)}>Delete</button>
                        <button onClick={() => handleLike(element.id, element.like)}>Like</button>
                        <button onClick={() => handleDislike(element.id, element.disLike)}>Dislike</button>
                    </div>
                ))
            }
        </div>
    )
}

export default ObjectData;
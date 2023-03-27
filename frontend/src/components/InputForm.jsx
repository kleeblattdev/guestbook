import { useState } from 'react'

const InputForm = ({setPosts}) => {
    const [vorname, setVorname] = useState()
    const [nachname, setNachname] = useState()
    const [email, setEmail] = useState()
    const [nachricht, setNachricht] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        const newPost ={
            vorname,
            nachname,
            email,
            nachricht
        }
        fetch('http://localhost:9898/api/addPost', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPost)
        })
        .then(res => res.json())
        .then(data =>{
            setPosts(data)
            console.log(data)
        })
    }

    return ( 
    <>
    <form>
        <label htmlFor="vorname" hidden>Vorname</label>
        <input type="text" name="vorname" placeholder="Vorname" onChange={(e)=> setVorname(e.target.value)} />
        <label htmlFor="nachname" hidden>Nachname</label>
        <input type="text" name="nachname" placeholder="Nachname" onChange={(e)=> setNachname(e.target.value)}/>
        <label htmlFor="email" hidden>Email</label>
        <input type="email" name="email" placeholder="E-Mail" onChange={(e)=> setEmail(e.target.value)}/>
        <label htmlFor="nachricht" hidden>Nachricht</label>
        <input type="text" name="nachricht" placeholder="Nachricht" onChange={(e)=> setNachricht(e.target.value)}/>
        <button onClick={handleSubmit}>Senden</button>
    </form>
    </> 
    );
}

export default InputForm;
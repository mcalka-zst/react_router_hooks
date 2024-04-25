import { useState, useRef, useEffect} from 'react';
import Menu from '../others/Menu';
import Footer from "../others/Footer";
const Example03 = () =>{
    const [name, setName] = useState('Anonim');
    const nameRef = useRef();
    useEffect(()=>{
        nameRef.current.focus(); // Ustawienie fokusu na polu tekstowym po zamontowaniu komponentu
    })

    const handleName = () => { 
        let value=nameRef.current.value;
        if(value==='') value='Anonim';
        setName(value);
    };
    return (
        <div>
            <Menu/>
            <main>
                <h1>Przykłady użycia hook'a useState </h1>
                <h3>Witaj {name}</h3>
                <div className='input'>
                    <input type="text" onChange={handleName} ref={nameRef} placeholder='Wpisz imię' /><br/>
                </div>
                <p>Hook useRef umożliwia tworzenie referencji do elementów DOM oraz innych wartości w komponentach funkcyjnych. Głównym celem useRef jest zachowanie wartości pomiędzy renderowaniami komponentu oraz dostęp do aktualnej instancji elementu DOM, nawet gdy komponent jest ponownie renderowany.</p>   
            </main>
            <Footer/>
        </div>
    )
}

export default Example03;
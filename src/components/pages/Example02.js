import { useState, useEffect } from 'react';
import Menu from "../others/Menu";
import Footer from "../others/Footer";
const Example02 = () => {
    const [count, setCount] = useState(1);
    useEffect(() => {
        console.log(`Wartość count wynosi teraz ${count}`);
    }, [count]); // [count] to tablica zależności - useEffect będzie wywoływany tylko wtedy, gdy count się zmieni.
    // Bez tablicy zależności  funkcja useEffect zostanie wywołana za każdym razem, gdy nastąpi renderowanie komponentu.

    return (
        <div>
            <Menu />
            <main>
                <h1>Przykład użycia hook'a useEffect</h1>
                <h3>Nr {count} (działanie useEffect zobacz w konsoli)</h3>
                <div className='buttons'>
                    <button onClick={() => setCount(count + 1)}>+</button>
                    <button onClick={() => setCount(count - 1)}>-</button>
                </div>

                <p>Hook useEffect  wywoływany jest tu po renderowaniu komponentu oraz po każdej zmianie wartości stanu.</p>
            </main>
            <Footer/>
        </div>
    )
}

export default Example02;
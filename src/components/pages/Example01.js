import { useState } from "react";
import Menu from "../others/Menu";
import Footer from "../others/Footer";

const Example01 = () => {

    const languages = ['Java', 'C#', 'PHP'];
    const [language, setLanguage] = useState('JavaScript');
    return (
        <div>
            <Menu />
            <main>
                <h1>Przykład użycia hook'a useState </h1>
                <h3>Najfajniejszy jezyk programowania to {language}</h3>
                <div className='buttons'>
                    <button onClick={() => setLanguage('JavaScript')}>JavaScript</button>
                    <button onClick={() => setLanguage('C++')}>C++</button>
                    <button onClick={() => setLanguage('Python')}>Python</button>
                    {/* inny sposób - z tablicą*/}
                    {languages.map((lang) => <button key={lang} onClick={() => setLanguage(lang)}>{lang}</button>)}
                </div>
                <p>Hook useState umożliwia komponentom funkcjonalnym korzystanie ze stanu wewnątrz siebie. Stan jest miejscem przechowywania danych, które mogą zmieniać się w trakcie życia komponentu. Funkcja useState przyjmuje wartość początkową stanu i zwraca wartość stanu oraz funkcję do aktualizacji stanu.</p>
            </main>
            <Footer/>
        </div>
    )
}

export default Example01;
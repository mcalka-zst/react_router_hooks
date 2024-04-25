import Menu from "../others/Menu";
import Footer from "../others/Footer";
const Main = () => {
    return (
        <div>
            <Menu />
            <main>
                <h1>Witamy na stronie o HOOKACH</h1>
                <p><b>Hook</b> to specjalna funkcja, która umożliwia korzystanie z funkcji stanu i innych funkcji React w komponentach funkcyjnych. Hooki zostały wprowadzone w wersji 16.8 Reacta i pozwoliły na użycie w komponentach funkcyjnych stanu i innych funkcji, które wcześniej były dostępne tylko w komponentach klasowych.</p>

            </main>
            <Footer/>
        </div>
    )
}

export default Main;

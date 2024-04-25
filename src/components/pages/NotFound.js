import Menu from "../others/Menu";
import Footer from "../others/Footer";
const NotFound = () => {
    return (
        <div>
            <Menu />
            <main>
                <h1>Błąd 404!</h1>
                <h3>Nie ma takiej strony! Tu nie ma żadnych hooków!</h3>
            </main>
            <Footer/>
        </div>

    )
}

export default NotFound;
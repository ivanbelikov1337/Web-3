import {Footer, Navbar, Services, SetIn, Transactions} from "./components/index.js"


const App = () => {

    return (
        <div className="min-h-screen">
            <div className="gradient-bg-welcome">
                <Navbar/>
                <SetIn/>
            </div>
            <Services/>
            <Transactions/>
            <Footer/>
        </div>
    )
}

export default App

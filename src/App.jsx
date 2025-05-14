import './App.css'
import Header from './components/Header.jsx'
import Card from './components/Card.jsx'

function App() {
    // const [count, setCount] = useState(0)

    return (
        <>
            <Header/>
            <div className='container mt-4'>
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <div className='col-md-6 d-flex justify-content-center'><Card></Card></div>
                    <div className='col-md-6 d-flex justify-content-center'><Card></Card></div>
                    <div className='col-md-6 d-flex justify-content-center'><Card></Card></div>
                    <div className='col-md-6 d-flex justify-content-center'><Card></Card></div>
                </div>
            </div>
        </>
    )
}

export default App

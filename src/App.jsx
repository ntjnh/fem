import { Link } from 'react-router'
import Layout from './components/layout'
import './App.css'

function App() {

    return (
        <Layout>
            <div className="gap-4 grid grid-cols-3">

                <article>
                    <Link to="/bmi-calculator">                    
                        <img src="https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/cdpgn90uwbjdyvztgqu6.jpg" alt="BMI Calculator screenshot" />
                        <span></span>
                        <div>
                            <p>2 - Junior</p>
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JS</li>
                            </ul>
                            <h2>BMI Calculator</h2>
                        </div>
                    </Link>
                </article>

                <article>
                    <Link to="/personal-finance">                    
                        <img src="https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/dwt5ev1gzfkpc9opax77.jpg" alt="BMI Calculator screenshot" />
                        <span></span>
                        <div>
                            <p>5 - Guru</p>
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JS</li>
                            </ul>
                            <h2>Personal finance app</h2>
                        </div>
                    </Link>
                </article>

                <article>
                    <Link to="/personal-finance">                    
                        <img src="https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/go73d9rjvzc8fsw13hy8.jpg" alt="BMI Calculator screenshot" />
                        <span></span>
                        <div>
                            <p>3 - Intermediate</p>
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JS</li>
                            </ul>
                            <h2>Weather app</h2>
                        </div>
                    </Link>
                </article>

            </div>
        </Layout>
    )
}

export default App

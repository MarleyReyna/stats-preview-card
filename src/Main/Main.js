import React from 'react';
import './Main.scss'

const Main = () => {
    return (
        <main>
            <div className='content-section'>
                <h1>
                    Get <span>insights</span> that 
                    help your business 
                    grow.
                </h1>
                <p>
                    Discover the benefits of data 
                    analytics and make better 
                    decisions regarding revenue, 
                    customer experience, and overall 
                    efficiency.
                </p>
                <ul>
                    <li className='companies'> 
                        <h2>10k+ <span><br />Companies</span></h2>
                    </li>
                    <li className='templates'>
                        <h2>314 <span><br />Templates</span></h2>
                    </li>
                    <li className='queries'>
                        <h2>12M+ <span><br />Queries</span></h2>
                    </li>
                </ul>
            </div>
            <div className='main-img' />
        </main>
    );
}
 
export default Main;
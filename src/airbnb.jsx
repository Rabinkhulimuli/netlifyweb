 function Airbnb(){
    return (
        <div className='screen-size'>
            <div>
            <Navbnb/>
            <CardGrid/>
            <SlideCard/>
            </div>
            
        </div>
    )
}
 function Navbnb(){
    return (
        <><nav className="logo-nav">
            <a href="">
            <img className='nav-logo' src='src/assets/airbnb 1 (1).png'/>
            </a>
            </nav>
        </>
    )
}
function CardGrid(){
    return(
        <>
        <div className="grid-photo">
            <a className="g-img" href="" alt="products"> <img  src="/src/assets/image 22.png" /></a>
            <a className="g-img" href="" alt="products"> <img  src="/src/assets/image 30.png" /> </a>
            <a className="g-img" href="" alt="products"> <img  src="/src/assets/image 24.png" />  </a>
            <a className="g-img" href="" alt="products"> <img  src="/src/assets/image 25.png" /> </a>
            <a className="g-img" href="" alt="products"> <img  src="/src/assets/image 26.png" />  </a>
            <a className="g-img" href="" alt="products"> <img  src="/src/assets/image 27.png" /> </a>
            <a className="g-img" href="" alt="products"> <img  src="/src/assets/image 28.png" />  </a>
            <a className="g-img" href="" alt="products"> <img  src="/src/assets/image 29.png" /> </a>
            <a className="g-img" href="" alt="products"> <img  src="/src/assets/image 23.png" /> </a>
        </div>
        <h1 className="grid-heading">Online Experiences</h1>
        <p className="grid-text">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
</p>
        </>
    )
}
function SlideCard(){
    return(
        <><div className="card-flex">
        <div>
            <a href="">
                <h5 className ="card-top">Sold Out</h5>
                <img className="main-img" src="src/assets/image 12.png"/>
                <img src="src/assets/star 1.png"/>
                <span> <b> 5.0  </b></span>
                <span>(6)    </span>
                <span><img src="src/assets/Ellipse 6.png" />  USA</span>
                <p>Life lessons with Katie Zaferes</p>
                <p><b>From $136</b> / person</p>
            </a>
        </div>
        <div>
        <a href="">
                <h5 className="card-top">Sold Out</h5>
                <img className="main-img" src="src/assets/wedding-photography 1.png"/>
                <img src="src/assets/star 1.png"/>
                <span><b>5.0  </b></span>
                <span>(6)    </span>
                <span><img src="src/assets/Ellipse 6.png" />  USA</span>
                <p>Life lessons with Katie Zaferes</p>
                <p><b>From $136</b> / person</p>
            </a>
        </div>
        <div>
        <a href="">
                <h5 className="card-top">Sold Out</h5>
                <img className="main-img" src="src/assets/mountain-bike 1.png"/>
                <img src="src/assets/star 1.png"/>
                <span><b>5.0  </b></span>
                <span>(6)    </span>
                <span><img src="src/assets/Ellipse 6.png" />  USA</span>
                <p>Life lessons with Katie Zaferes</p>
                <p><b>From $136</b> / person</p>
            </a>
        </div>
        </div>
        </>
    )
}
export default Airbnb 
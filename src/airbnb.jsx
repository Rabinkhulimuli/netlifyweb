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
            <img className='nav-logo' src='https://img.favpng.com/18/18/11/santa-claus-christmas-love-clip-art-png-favpng-rxfGvRhaxrxh2KJUsjYVPdXxb_t.jpg'/>
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
                <img className="main-img" src="data:image/jpeg;base64,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"/>
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
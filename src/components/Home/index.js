import './index.css'

const Home = () => (
  <div className="home-bg">
    <nav className="nav-bar">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        className="nav-logo"
        alt="website logo"
      />
      <ul className="content-nav1">
        <li className="nav-items">Home</li>
        <li className="nav-items">Products</li>
        <li className="nav-items">Cart</li>
        <li>
          <button type="button" className="button-logout">
            Logout
          </button>
        </li>
      </ul>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
        className="log-out"
        alt="nav logout"
      />
    </nav>
    <ul className="content-nav2">
      <li>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
          className="icon-img"
          alt="nav home"
        />
      </li>
      <li>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
          className="icon-img"
          alt="nav products"
        />
      </li>
      <li>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
          className="icon-img"
          alt="nav cart"
        />
      </li>
    </ul>
    <div className="home-content">
      <div className="first-div">
        <h1 className="home-heading">Clothes That get You Noticed</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          className="right-div1"
          alt="clothes that get you noticed"
        />
        <p className="para-home">
          Fashion is part of the daily air and does not quite help it changes
          all the time. Clothes have always been a marker of the era and we are
          ina revolution. Your fashion makes you been seen and heard the way you
          are. So, celebrate the seasons new and exciting fashion in your own
          way.
        </p>
        <button type="button" className="shop-button">
          Shop Now
        </button>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
        className="right-div2"
        alt="clothes that get you noticed"
      />
    </div>
  </div>
)

export default Home

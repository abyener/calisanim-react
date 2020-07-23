import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

// const mainLogo = require('../dist/images/logo.png')
// const profilePicture = require('../dist/images/profile-pic-dummy-200x250.png')
import { Auth } from '../backend'

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
      user: {
        id: 2,
        name: "Misafir",
        email: null,
      }
    };
  }

  componentDidMount() {
    Auth.profile()
      .then(data => this.setState({ user: data }))
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    return (
      <header>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light pull-right">
            <Link to="/" className="navbar-brand">
              <img src={require('../dist/images/logo.png')} className="img-fluid" alt="logo" />
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
              data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
              aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">

              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/islerim">İşlerim <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                  <Link to="/ilanlarim" className="nav-link">İlanlarım</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/odemelerim">Ödemelerim</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">Mesajlarım <span className="badge_count" id="msgLink">5</span></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/uyegiris">Giriş</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/uyeol">Kayıt Ol</Link>
                </li>

                <li className="nav-item">
                  <UncontrolledDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} id="navbarDropdown">
                    <DropdownToggle className="avatar-toggle" caret style={{ backgroundColor: 'white', border: 'none' }}>
                      <div className="profile-avatar">
                        <img src={require('../dist/images/profile-pic-dummy-200x250.png')}
                          alt="avatar" />
                      </div>
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem><Link className="dropdown-item" to="#">{this.state.user.name}</Link></DropdownItem>
                      <DropdownItem><Link className="dropdown-item" to="#">Hesap Ayarları</Link></DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem><Link className="dropdown-item" to="#">Anlaşmalarım</Link></DropdownItem>
                      <DropdownItem><Link className="dropdown-item" to="#">Destek</Link></DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  {/* <Dropdown>
                <Dropdown.Toggle variant="success" id="navbarDropdown">
                  <div className="profile-avatar">
                    <img src={require('../dist/images/profile-pic-dummy-200x250.png')}
                      alt="profile picture" />
                  </div>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item><Link className="dropdown-item" to="#">Profil</Link></Dropdown.Item>
                  <Dropdown.Item><Link className="dropdown-item" to="#">Hesap Ayarları</Link></Dropdown.Item>
                  <div className="dropdown-divider"></div>

                  <Dropdown.Item><Link className="dropdown-item" to="#">Anlaşmalarım</Link></Dropdown.Item>
                  <Dropdown.Item><Link className="dropdown-item" to="#">Destek</Link></Dropdown.Item>

                </Dropdown.Menu>
              </Dropdown> */}

                  {/* <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
              data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <div className="profile-avatar">
                    <img src={require('../dist/images/profile-pic-dummy-200x250.png')}
                      alt="profile picture" />
                  </div>
            </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link className="dropdown-item" to="#">Profil</Link>
              <Link className="dropdown-item" to="#">Hesap Ayarları</Link>
              <div className="dropdown-divider"></div>
              <Link className="dropdown-item" to="#">Anlaşmalarım</Link>
              <Link className="dropdown-item" to="#">Destek</Link>
            </div> */}
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="fast-search-bar">
          <div className="container">
            <div className="provider-search-container clearfix">
              <div className="nav-container clearfix">
                <form name="searchBarForm" id="searchBarForm" method="GET" action=""
                  autoComplete="off">
                  <div className="provider-search-pj-button ">
                    <div className="search-bar-left">
                      <div className="inner">
                        <Link to="/ilanduzenle" className="btn btn-sm btn-primary-1 paj-btn">
                          <span className="butn-red"> İlan Ver </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="provider-search-group clearfix">
                    <div className="provider-search-field-type clearfix">
                      <div className="provider-search-field-data service-select">
                        <div className="dropdown custom-dropdown">
                          <a className="dropdown-toggle" href="#" role="button"
                            data-toggle="dropdown">Child Care Provider&nbsp;</a>
                          <input type="hidden" name="sitterService" id="searchBar" value="childCare" />
                          <ul className="dropdown-menu">
                            <li><a href="#" data-value="childCare">Child Care Provider</a></li>
                            <li className="sub-item">
                              <a href="#"
                                data-value="babysitter">Babysitter</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="provider-search-location-type visible-min-xs">
                      <span className="provider-search-field-label hidden-ms hidden-sm">İL</span>
                      <div className="provider-search-field-data ">
                        <div className="dropdown custom-dropdown" data-dropdownname="milesFromZipCode"
                          data-value="10">
                          <a className="dropdown-toggle bold-text" href=""
                            data-eventcta="milesFromZipCodeSelect" role="button"
                            data-toggle="dropdown">İL</a>
                          <input type="hidden" value="Ataşehir" id="il_id" name="il_id" />
                          <ul className="dropdown-menu">
                            <li><a href="" data-value="1">İstanbul</a></li>
                            <li><a href="" data-value="2">Ankara</a></li>

                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="provider-search-distance-type hidden-ms">
                      <span className="provider-search-field-label hidden-sm">İLÇE</span>
                      <div className="provider-search-field-data">
                        <div className="dropdown custom-dropdown" data-dropdownname="milesFromZipCode"
                          data-value="10">
                          <a className="dropdown-toggle bold-text" href="#"
                            data-eventcta="milesFromZipCodeSelect" role="button"
                            data-toggle="dropdown">İlçe</a>
                          <input type="hidden" value="Ataşehir" id="ilce_id" name="ilce_id" />
                          <ul className="dropdown-menu">
                            <li><a href="#" data-value="1">Ataşehir</a></li>
                            <li><a href="#" data-value="2">Ataköy</a></li>

                          </ul>
                        </div>
                      </div>
                    </div>
                    <input type="hidden" name="searchPerformed" value="true" />
                    <input type="hidden" name="searchByZip" value="true" />
                    <input type="hidden" name="defaultZip" value="true" />
                    <span className="provider-search-icon">
                      <button type="button" data-eventcta="search" className="btn-submit btn-searchbar-submit" aria-label="Search button">
                        <span className="icon icon-search">
                          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23">
                            <g fill="none" fillRule="evenodd" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                              <path d="M18.091 9.663c0 4.643-3.7688 8.4072-8.4176 8.4072-4.6487 0-8.417-3.764-8.417-8.407 0-4.6432 3.7683-8.4073 8.417-8.4073 4.6488 0 8.4175 3.764 8.4175 8.407z"
                                strokeLinejoin="round"></path>
                              <path d="M20.7208 21.744l-5.6425-5.6358"></path>
                            </g>
                          </svg>
                        </span>
                      </button>
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </header >
    )
  }
}



// const Header = ({ siteTitle }) => (


// )


// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

// export default Header


import React from "react"
import { Link } from "react-router-dom"
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa"

const baLogo = require('../dist/images/beyinatolyesi.png')
const year = new Date().getFullYear()

const Footer = () => (
    <section className="cls-footer condensed">
        <div className="footer">
            <div className="discover condensed container">
                <div className="row">
                    <div className="col-xs-3 col-sm-3">
                        <h4>Site Haritası</h4>
                        <ul>
                            <li><Link to="/hakkimizda">Hakkımızda</Link></li>
                            <li><Link name="" to="/calisanimizol">Çalışanımız Ol</Link></li>
                            <li><Link name="" to="/ilanlar">İlanlar</Link></li>
                            <li><Link name="" to="/sss">Sıkça Sorulan Sorular</Link></li>
                            <li><Link name="" to="/iletisim">İletişim</Link></li>
                        </ul>
                    </div>
                    <div className="col-xs-3 col-sm-3">
                        <h4>Kurumsal</h4>
                        <ul>
                            <li><Link to="/hakkimizda">Kullanıcı Sözleşmesi</Link></li>
                            <li><Link name="" to="/calisanimizol">Kullanım Koşulları</Link></li>
                            <li><Link name="" to="/ilanlar">Gizlilik Politikası</Link></li>
                            <li><Link name="" to="/sss">Sigorta Şartları</Link></li>
                            <li><Link name="" to="/iletisim">Ücretlendirme Politikası</Link></li>
                        </ul>
                    </div>

                    <div className="col-xs-5 col-sm-5 text-center">

                        <div className="social condensed">
                            <h4>Bizi Takip Edin</h4>
                            <a href="https://www.facebook.com/calisanim" className="btn" target="_blank" rel="noopener noreferrer">
                                <FaFacebookF />
                                <span>Facebook</span>
                            </a>
                            <a href="https://twitter.com/calisanim" className="btn" target="_blank" rel="noopener noreferrer">
                                <FaTwitter />
                                <span>Twitter</span>
                            </a>
                            <a href="https://instagram.com/calisanim" className="btn" target="_blank" rel="noopener noreferrer">
                                <FaInstagram />
                                <span>Instagram</span>
                            </a >
                        </div>
                    </div >
                </div >
            </div >

            <div className="legal">
                <div className="gray-text">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <p className="copyright-text">Calisanim.com &copy; {year} - Tüm hakları saklıdır.</p>
                            </div>
                            <div className="col-md-6 text-right">
                            <p>
                                    Designed by
                                <a href="https://beyinatolyesi.com/" target="_blank" rel="noopener noreferrer">
                                        <img src={baLogo} alt="loop logo" />
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
)

export default Footer
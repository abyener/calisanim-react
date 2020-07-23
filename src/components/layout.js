import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import Footer from './footer'
// import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      {<Header />}

      <div>
        <div className="app-content">{children}</div>
      </div>
      {/* //todo burada sıkıntı mevcut */}

      {<Footer />}
    </>

  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

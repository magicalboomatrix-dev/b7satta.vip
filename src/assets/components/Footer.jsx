import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <>
  <section className="somelinks" style={{ overflow: "hidden" }}>
    
    <Link className="yellow-link mx-4" to="/privacy-policy">
        Privacy Policy
    </Link>
     <Link className="yellow-link mx-4" to="/terms-and-conditions">
        Terms &amp; Conditions
    </Link>    
    
    <br />
  </section>
  <section className="somelinks2">
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <strong>©️ 2025 A3 Satta All Rights Reserved</strong>
        </div>
      </div>
    </div>
  </section>
  <section className="somelinks">
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <ul>
            <li
              style={{ color: "rgb(255, 216, 0)", padding: 0, fontWeight: 700 }}
            >
              Disclaimer: A3 Satta provides informational content about Satta
              King results, charts and market data. This site does not
              facilitate gambling or betting services. Laws around Satta Matka
              and related betting vary by jurisdiction — please check local
              regulations before using any information on this site. We are
              not liable for user actions or legal consequences arising from
              use of the information. Use this site at your own risk.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</>

    </div>
  )
}

export default Footer

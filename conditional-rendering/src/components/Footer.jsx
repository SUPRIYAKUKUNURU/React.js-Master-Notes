import React from 'react'

function Footer() {
  return (
    <div>
        <footer className="bg-secondary text-light pt-4">
  <div className="container">
    <div className="row">
      {/* Company Info */}
      <div className="col-md-4 mb-3">
        <h5>Electronics</h5>
        <p>
          Revolutionizing healthcare with AI-powered solutions.  
          Smarter, faster, and more inclusive hospital management.
        </p>
      </div>

      {/* Quick Links */}
      <div className="col-md-4 mb-3">
        <h5>Quick Links</h5>
        <ul className="list-unstyled">
          <li><a href="#" className="text-light text-decoration-none">Home</a></li>
          <li><a href="#" className="text-light text-decoration-none">About</a></li>
          <li><a href="#" className="text-light text-decoration-none">Services</a></li>
          <li><a href="#" className="text-light text-decoration-none">Contact</a></li>
        </ul>
      </div>

      {/* Contact */}
      <div className="col-md-4 mb-3">
        <h5>Contact</h5>
        <p>
          📍 Hyderabad, India <br />
          📞 +91 8919147740 <br />
          ✉️ info@electronics.com
        </p>
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="text-center border-top pt-3">
      <p className="mb-0">&copy; {new Date().getFullYear()}  All Rights Reserved.</p>
    </div>
  </div>
</footer>

    </div>
  )
}

export default Footer
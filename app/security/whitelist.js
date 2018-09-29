var whitelist = {
    /* Helmet security modules enabled by default:
    DNS Prefetch Control
    Frameguard to prevent clickjacking
    hidePoweredBy to remove powered by framework header
    hsts to enforce strict transport security
    ieNoOpen turns on X-Download options to prevent execution of client-side script when downloaded HTML files are opened in IE8
    noSniff prevents clients from sniffing MIME types
    xssFilter prevents cross-scripting attacks

    Modules disabled by default:
    contentSecurityPolicy, manually enabled to set security policy in post headers -- CSP whitelists are passed below
    hpkp can be enabled to pin a client's public key to its web server
    noCache disables client-side caching
    referrerPolicy hides header of referring link */

    directives: {
        defaultSrc: ["'self'"],
        styleSrc: ["'self'",
            'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.css',
            'https://fonts.googleapis.com/'],
        scriptSrc: ["'self'",
            'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js',
            'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.js',
            'https://code.jquery.com/jquery-3.3.1.js',
            'https://www.gstatic.com/firebasejs/4.12.0/firebase.js',
            'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.18.1/moment.min.js',
            'https://www.youtube.com/']

    }
};

module.exports = whitelist;
@import url(https://fonts.googleapis.com/css?family=Montserrat:700);

html,
body {
    width: 100%;
    height: 100%;
}

body {
    font-family: 'Montserrat','Helvetica Neue',Arial,sans-serif;
    color: #001A33;
    webkit-tap-highlight-color: #222;
    top:0;
}

/* workaround modal-open padding issue */
body.modal-open {
    padding-right:0 !important;
}

hr {
    max-width: 120px;
    border-width: 3px;
    opacity: 0.08;
    margin-top: 25px;
    margin-bottom: 25px;
}

hr.light {
    border-color: #fff;
    opacity: 1;
}

hr.primary {
    border-color: #007FFF;
    opacity: 1;
}

a {
    color: #007FFF;
    -webkit-transition: all .35s;
    -moz-transition: all .35s;
    transition: all .35s;
}

a:hover,
a:focus {
    color: #222;
    outline: 0;
}

p {
    font-size: 17px;
    line-height: 1.7;
    margin-bottom: 20px;
    font-family:'Helvetica Neue',Arial,sans-serif;
}

.text-normal {
    font-family:'Helvetica Neue',Arial,sans-serif;
}

.wide-space {
    letter-spacing: 1.6px;
}

.icon-lg {
    font-size: 50px;
    line-height: 18px;
}

.bg-primary {
    background-color: #007FFF;
}

.bg-alt {
    background-color: #fff;
}

.text-faded {
    color: rgba(245,245,245,0.7);
}

.text-dark {
    color: #001A33;
}

.text-light {
    color: #fff;
}

.text-light:hover,.text-light:focus {
    color: #eee;
    text-decoration:none;
}

.text-primary {
    color: #007FFF;
}

section {
    padding: 70px 0;
}

aside {
    padding: 45px 0;
}

footer {
    padding: 45px;
    padding-top: 40px;
    background-color: #212121;
}

footer h4, footer h6 {
    color:#fff;
}
#footer {background:#212121;}
#footer a: {color:#fff;}

.navbar-default {
    border-color: rgba(35,35,35,.05);
    background-color: #fff;
    -webkit-transition: all .4s;
    -moz-transition: all .4s;
    transition: all .4s;
    border-bottom:1px solid #e0e0e3;
}

.navbar-brand {
    -webkit-transition: padding .2s ease-in;
    -moz-transition: padding .2s ease-in;
    transition: padding .2s ease-in;
}

.navbar-brand:hover,
.navbar-brand:focus {
    color: #007FFF;
}

.navbar-default .navbar-toggle:focus, .navbar-default .navbar-toggle:hover {
    background-color: #001A33;
}
.navbar-default .navbar-toggle, .navbar-default .navbar-collapse {
    border-color: transparent;
}

.navbar-default .nav > li>a,
.navbar-default .nav>li>a:focus {
    font-size: 12px;
    color: #001A33;
    text-transform: uppercase;
}

.navbar-default .nav>li>a:hover,
.navbar-default .nav>li>a:focus:hover {
    color: #007FFF;
}

.navbar-default .nav .nav-link.active,
.navbar-default .nav .nav-link.active:focus {
    color: #007FFF !important;
    background-color: transparent;
}

/* responsive nav */
@media(max-width:48em) {
    .navbar-default .navbar-nav>.nav-item {
        float: none;
        margin-left: .1rem;
    }
    .navbar-default .navbar-nav {
        float:none !important;
    }
    .navbar-default .navbar-brand img {
        display:inline;
    }
}

@media(min-width:48em) {
    .navbar-default {
        border-color: transparent;
        background-color: #fff;
        min-height: 60px;
    }

    .navbar-brand {
        padding: 12px;
    }

    .navbar-default .navbar-brand:hover,
    .navbar-default .navbar-brand:focus {
        color: #001A33;
    }
    
    .navbar-default .nav > li>a,
    .navbar-default .nav>li>a:focus {
        color: #001A33;
        padding-left: 5px;
        padding-top: 21px;
        letter-spacing: 1.1px;
    }

    .navbar-default .nav > li>a:hover,
    .navbar-default .nav>li>a:focus:hover {
        color: #001A33;
    }

    #topNav {
      background-color:#8dcff4;
    }
    
}

header {
    position: relative;
    min-height: auto;
    text-align: center;
    color: #001A33;
    width: 100%;
    background-color: #fff;
}

header .header-content {
    position: relative;
    width: 100%;
    padding: 100px 15px;
    text-align: center;
    z-index: 2;
}

header .header-content .inner h1 {
    margin-top: 0;
    margin-bottom: 0;
}

header .header-content .inner p {
    margin-bottom: 50px;
    font-size: 16px;
    font-weight: 300;
    color: #222;
}

@media(min-width:34em) {
    .icon-lg {
        font-size: 80px;
    }
    
    header {
        min-height: 100%;
    }

    header .header-content {
        position: absolute;
        top: 50%;
        padding: 0 50px;
        -webkit-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
    }

    header .header-content .inner {
        margin-right: auto;
        margin-left: auto;
        max-width: 1000px;
    }

    header .header-content .inner h1 {
        font-size: 53px;
    }

    header .header-content .inner p {
        margin-right: auto;
        margin-left: auto;
        max-width: 80%;
        font-size: 18px;
    }
    
    section {
        min-height: 600px;
        padding: 100px 0;
    }

}

.list-group-item, .card-footer {
    background-color:transparent;
}

textarea {
    resize: none;
}

.call-to-action h2 {
    margin: 0 auto 20px;
}

.btn.btn-primary {
    background-color: transparent;
    border:1px solid #007FFF;
    -webkit-transition: all .35s;
    -moz-transition: all .35s;
    transition: all .35s;
    color:#007FFF;
}

.btn.btn-primary:hover {
    opacity: 0.7;
}

.btn-primary-outline {
    border-color:#007FFF;
    color:#007FFF;
}
.btn-primary-outline:hover {
    background-color:#007FFF;
}

.btn-xl {
    padding: 15px 30px;
    font-size: 20px;
}

::-moz-selection {
    text-shadow: none;
    color: #fff;
    background: #222;
}

::selection {
    text-shadow: none;
    color: #fff;
    background: #222;
}

img::selection {
    color: #fff;
    background: 0 0;
}

img::-moz-selection {
    color: #fff;
    background: 0 0;
}
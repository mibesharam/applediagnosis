(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<section id=\"banner\" class=\"bg-grey\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-7\">\n        <img src=\"../../assets/images/Apple Macbook.svg\" width=\"100%\">\n      </div>\n      <div class=\"col-lg-5\">\n        <h1 class=\"display-3\">All Apple Solution Under One Roof.</h1>\n        <a href=\"tel:+918469443014\" class=\"btn btn-success btn-lg\">Call Now</a>\n      </div>\n    </div>\n  </div>\n</section>\n\n<section id=\"aboutUs\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-8 order-2 order-lg-2\">\n        <h2>About Company Page</h2>\n        <p class=\"lead\">Since 2002,we stratup as computer service provider in surat at nanpura named as Ktechnology services after continue evolving we also was certified iball care till 2004.After much experince we moved ahead and started repairing laptops</p>\n        <br>\n        <br>\n        <p class=\"lead\">After much expertise in laptop repairing we started repairing macbooks and imac.Now,we have well expertise in macbook repairing.We are able to repair your mac which were refused to repair by ivenus.Infact we are also getting business from ivenu-s</p>\n        <a href=\"#\" class=\"btn btn-outline-secondary\">Get in Touch</a>\n      </div>\n      <div class=\"col-lg-4 order-1 order-lg-1\">\n        <img src=\"../../assets/images/profile.svg\" width=\"100%\">\n      </div>\n    </div>\n  </div>\n</section>\n<hr>\n\n<section id=\"values\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-4\">\n        <img src=\"../../assets/images/globe.svg\" width=\"100%\">\n      </div>\n      <div class=\"col-lg-8\">\n        <h2>Our values</h2>\n        <p class=\"lead\"><b>Mission:</b>Our mission is to make customer’s lives simpler by being responsible, dependable and cost efficient in order to take care of all your apple devices. We aim to provide our visitors with proficient services in repair and exceptional client benefit. Our team of technicians is committed to guarantee an awesome experience through following the company’s guidelines for the latest model of your apple devices when they are due to service or is not working for any reason.</p>\n        <br><br>\n        <p class=\"lead\"><b>Vision:</b> Our vision is to offer the authenticated spare parts and services to our esteemed clients. We visualize to dependably surpass client’s expectation by making our client’s experience hassel free. Our main goal is to be responsible in giving the best of class quality services to our clients at the reasonable price.</p>\n      </div>\n    </div>\n  </div>\n</section>\n\n<h2 class=\"display-5 text-center\">Contact</h2>\n<section id=\"contact\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-6\">\n        <p class=\"lead\">Contact us and we'll get back to you within minutes.</p>\n        <ul class=\"contact-list\">\n          <li class=\"address d-none\">172/16,Sharamsaphalay Chg, Near HDFC Bank, Sector No.1, Charkop, Kandivali(WEST), Mumbai-400067.</li>\n          <li class=\"user\">Mr. Amit Yogi</li>\n          <li class=\"phone\">+91 9029601000</li>\n          <li class=\"email\">sales.lapplus@gmail.com</li>\n        </ul>\n      </div>\n      <div class=\"col-lg-6\">\n        <app-contact-frm></app-contact-frm>\n      </div>\n    </div>\n  </div>\n</section>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\" id=\"loader-container\" *ngIf=\"showLoader\">\n  <div class=\"text-danger bg-black loader\" >\n    <span></span>\n    <span></span>\n    <span></span>\n    <span></span>\n    <span></span>\n    <span></span>\n  </div>\n</div>\n<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact-frm/contact-frm.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact-frm/contact-frm.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form name=\"contact\" method=\"post\" data-netlify=\"true\">\n<div class=\"form-row\">\n  <div class=\"form-group col-lg-12\">\n    <input type=\"text\" class=\"form-control\" name=\"name\" placeholder=\"Name\">\n  </div>\n</div>\n<div class=\"form-row\">\n  <div class=\"form-group col-lg-6\">\n    <input type=\"tel\" class=\"form-control\" name=\"phone\" placeholder=\"Contact\">\n  </div>\n  <div class=\"form-group col-lg-6\">\n    <input type=\"email\" class=\"form-control\" name=\"email\" placeholder=\"Email\">\n  </div>\n</div>\n<div class=\"form-row\">\n  <div class=\"form-group col-lg-12\">\n    <textarea class=\"form-control\" name=\"comment\" placeholder=\"Comment\"></textarea>\n  </div>\n</div>\n<div class=\"form-row\">\n  <div class=\"form-group col-lg-12\">\n    <button class=\"btn btn-outline-success\" type=\"submit\">Send</button>\n  </div>\n</div>\n\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<section id=\"banner\">\n  <div class=\"container\">\n    <div class=\"d-flex justify-content-center\">\n      <img src=\"../../assets/images/contact_us.svg\" width=\"80%\">\n    </div>\n  </div>\n</section>\n\n<h2 class=\"display-5 text-center\">📇 Contact</h2>\n<section id=\"contact-detail\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-6\">\n        <p class=\"Lead\">Contact us and we'll get back to you within minutes.</p>\n        <h6>Mumbai :</h6>\n        <ul class=\"contact-list\">\n          <li class=\"address d-none\">172/16,Sharamsaphalay Chg, Near HDFC Bank, Sector No.1, Charkop, Kandivali(WEST), Mumbai-400067.</li>\n          <li class=\"user\">Mr. Amit Yogi</li>\n          <li class=\"phone\">+91 9029601000</li>\n          <li class=\"email\">applediagnosis@gmail.com</li>\n        </ul>\n        <h6>Surat :</h6>\n        <ul class=\"contact-list\">\n          <li class=\"address d-none\">121-122, Lalbhai Contractor Complex,Nanpura,Surat-395001</li>\n        </ul>\n      </div>\n      <div class=\"col-lg-6\">\n        <app-contact-frm></app-contact-frm>\n      </div>\n    </div>\n  </div>\n</section>\n<section id=\"whyus\" class=\"d-none\">\n  <h2 class=\"display-5 text-center\">📍 Find Us On Map</h2>\n  <div class=\"container-fluid\">\n    <a href=\"https://www.google.com/maps/dir//19.2144901,72.8268695/@19.2144901,72.8246808,17z?hl=en\"><img src=\"../../assets/images/apple-diagnosis-kandivali-west.png\" class=\"rounded\" width=\"100%\"></a>\n  </div>\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/evaluation-form/evaluation-form.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/evaluation-form/evaluation-form.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<section id=\"banner\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-6\">\n        <img src=\"../../assets/images/Apple Macbook.svg\" width=\"100%\">\n      </div>\n      <div class=\"col-lg-6 text-center\">\n        <h1 class=\"display-3\">Register Now & Make Diagnosing Process Easy!</h1>\n        <h2>Our Expert will contact you within 30-60 minutes</h2>\n        <p class=\"lead\">Call Us for more details</p>\n        <a href=\"#\" class=\"btn btn-outline-info\">☎️ Call Now</a>\n      </div>\n    </div>\n  </div>\n</section>\n\n<section id=\"detail\">\n  <div class=\"container\">\n    <div class=\"d-flex justify-content-center\">\n      <div class=\"card form-dark\" style=\"width: 80%;\">\n        <h2 class=\"card-header text-center\" style=\"margin-top: 0%;\">Free Evaluation Form</h2>\n        <div class=\"card-body\">\n          <form method=\"POST\" data-netlify=\"true\" name=\"evaluation\">\n          <div class=\"form-group\">\n            <h5>Full Name</h5>\n            <input class=\"form-control\" name=\"name\" type=\"text\" placeholder=\"Full Name\">\n          </div>\n          <div class=\"form-row\">\n            <div class=\"form-group col-lg-6\">\n              <h5>Phone</h5>\n              <input class=\"form-control\" name=\"phone\" type=\"tel\" placeholder=\"Phone\">\n            </div>\n            <div class=\"form-group col-lg-6\">\n              <h5>Email</h5>\n              <input class=\"form-control\" name=\"email\" type=\"email\" placeholder=\"Email\">\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <h5>Apple Serial No.</h5>\n            <input class=\"form-control\" name=\"serial\" type=\"text\" placeholder=\"Apple Serial Number\">\n          </div>\n          <div class=\"form-group\">\n            <h5>Problem Description</h5>\n            <textarea class=\"form-control\" name=\"problem\" placeholder=\"Describe your peoblem\"></textarea>\n          </div>\n          <div class=\"form-group\">\n            <button class=\"btn btn-warning btn-block btn-lg text-light\" type=\"submit\">Submit</button>\n          </div>\n        </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/evaluation-steps/evaluation-steps.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/evaluation-steps/evaluation-steps.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>We Made Our Diagnosing Process Easy For you.</h2>\n\n        <h4 class=\"subtitle\" style=\"margin-bottom: 2px;\"><span class=\"icon\">☝️</span> Step 1: Begin Your Free Case Evaluation</h4>\n        <p>We’ll put you in contact with one of our friendly experts to begin diagnostics of what’s wrong with your\n          Macbook. </p>\n\n        <h4 class=\"subtitle\" style=\"margin-bottom: 2px;\"><span class=\"icon\">✌️</span> Step 2: Full Evaluation</h4>\n        <p>Upon your Product’s arrival in our professional facility, we’ll take a closer look at what exactly went\n          wrong. At which point we’ll be able to provide you with a summary of the work, costs, and time required to get\n          you back up and running.</p>\n\n        <h4 class=\"subtitle\" style=\"margin-bottom: 2px;\"><span class=\"icon\">👌</span> Step 3: Expert Repairing &amp; servicing</h4>\n        <p>With your approval, our team of experts will go to work repairing your product, and fix any issue in a timely\n          and affordable fashion.</p>\n        <a class=\"btn btn-success btn-block\" routerLink=\"/evaluation\"><span class=\"icon\">👉</span>Click Here to Begin your FREE Evaluation</a>\n        <br>\n        <br>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer/footer.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer/footer.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"footer\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-6\">\n        <a routerLink=\"/\" class=\"navbar-brand\"> <img src=\"../../../assets/images/APPLE DIAGNOSIS.png\" width=\"400px\" alt=\"Lapplus\" > </a><br>\n        <h2 class=\"mb-0\" >APPLE DIAGNOSIS</h2  ><p>is a all apple product solution provider under one roof</p>\n      </div>\n      <div class=\"col-lg-3 col-sm-6\">\n        <h4 class=\"nav-head\">More</h4>\n        <ul class=\"footer-nav\">\n            <li><a routerLink=\"/\">Services</a></li>\n            <li><a href=\"#\">Offers</a></li>\n            <li><a href=\"#\">Shop</a></li>\n            <li><a routerLink=\"/evaluation\">Evaluation Form</a></li>\n            <li><a href=\"#\">Privacy Policy</a></li>\n        </ul>\n      </div>\n      <div class=\"col-lg-3 col-sm-6\">\n        <h4 class=\"nav-head\">Usefull Links</h4>\n        <ul class=\"footer-nav\">\n            <li><a href=\"#\">Terms</a></li>\n            <li><a routerLink=\"/review\">Reviews</a></li>\n            <li><a routerLink=\"/contact\">Contact Us</a></li>\n            <li><a routerLink=\"/partnership\">Become a Partner</a></li>\n        </ul>\n      </div>\n    </div>\n    <hr>\n    <div class=\"row\">\n      <div class=\"col-lg-12 text-center\">\n        <h4 class=\"nav-head\" >Reach Us At</h4>\n        <ul class=\"footer-contact-list\" style=\"padding-left: 0px !important;\">\n          <li class=\"address d-none\">\n              <a href=\"https://www.google.com/maps/dir//19.2144901,72.8268695/@19.2144901,72.8246808,17z?hl=en\">\n                Mumbai :172/16, Sharamsaphalay Chg, Near HDFC Bank,Sector No.1, Charkop, Kandivali(West),Mumbai-400067</a>\n          </li>\n          <li class=\"email\">\n            <a href=\"mailto:applediagnosis@gmail.com?Subject=Apple%20Inquiry\">applediagnosis@gmail.com</a> | <span class=\"phone\"></span> Support :<a href=\"tel:+919029601000\"> +91 9029601000</a>\n          </li>\n\n        </ul>\n        <div class=\"d-flex justify-content-center \">\n          <div class=\"socials p-2\"><a href=\"\"><img src=\"../../../assets/images/facebook.png\" width=\"30px\" height=\"30px\"></a></div>\n          <div class=\"socials p-2\"><a href=\"https://wa.me/919029601000?text=help\"><img src=\"../../../assets/images/whatsapp.png\" width=\"30px\" height=\"30px\"></a></div>\n          <div class=\"socials p-2\"><a href=\"mailto:applediagnosis@gmail.com?Subject=Apple%20Inquiry\"><img src=\"../../../assets/images/gmail.png\" width=\"30px\" height=\"30px\"></a></div>\n        </div>\n      </div>\n    </div>\n  </div>\n</footer>\n<div class=\"container-fluid text-light bg-secondary text-center\">\n  <p class=\"p-2\" id=\"copyDiv\">Copywright ©️ 2019 Apple Diagnosis</p>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/navbar/navbar.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/navbar/navbar.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg navbar-light\">\n  <div class=\"container\">\n    <a class=\"navbar-brand\" routerLink=\"\" (click)=\"collapseMenu()\" > <img src=\"../../../assets/images/APPLE DIAGNOSIS.png\" class=\"navbar-logo\"></a>\n    <button   class=\"navbar-toggler\" type=\"button\" (click)=\"isMenuCollapsed = !isMenuCollapsed\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\" collapse navbar-collapse\" id=\"navbarSupportedContent\" [ngbCollapse]=\"isMenuCollapsed\">\n      <ul class=\" ml-auto navbar-nav mr-auto\">\n        <li class=\"nav-item\" routerLinkActive=\"active\">\n          <a class=\"nav-link\" routerLink=\"/about\" (click)=\"collapseMenu()\">About</a>\n        </li>\n        <li class=\"nav-item\" ngbDropdown routerLinkActive=\"active\" >\n          <a class=\"nav-link dropdown-toggle\"  aria-haspopup=\"true\" aria-expanded=\"false\" role=\"button\" data-toggle=\"dropdown\" ngbDropdownToggle id=\"ServiceDropdown\">Service</a>\n          <div class=\"dropdown\"  ngbDropdownMenu aria-labelledby=\"ServiceDropdown\">\n            <a class=\"dropdown-item\" routerLink=\"/service/macbook\" (click)=\"collapseMenu()\">Apple Macbook Laptops</a>\n            <a class=\"dropdown-item\" routerLink=\"/service/imac\" (click)=\"collapseMenu()\">Apple iMac / AIO Desktops</a>\n          </div>\n        </li>\n        <li class=\"nav-item\" routerLinkActive=\"active\" >\n          <a class=\"nav-link\" routerLink=\"/partnership\" (click)=\"collapseMenu()\">PartnerShip</a>\n        </li>\n        <li class=\"nav-item\" routerLinkActive=\"active\">\n          <a class=\"nav-link \" routerLink=\"/contact\" (click)=\"collapseMenu()\">Contact</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link btn btn-outline-warning btn-round\" (click)=\"shopClick()\"><span class=\"icon\">🛒</span> Shop</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<section id=\"banner\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-6\">\n        <img src=\"../../assets/images/macbook_problem.svg\" width=\"100%\">\n      </div>\n      <div class=\"col-lg-6\">\n        <h1 class=\"display-3\">Having Problem With Your Apple 😔?</h1>\n        <p class=\"lead\">Call Us Now   <a class=\"btn btn-outline-success\" href=\"tel:919029601000\"><span class=\"icon\">🤙</span> Call Now</a></p>\n        <p class=\"lead\">And get instant diagnostic tips @ call <span class=\"icon-lg\">😃</span></p>\n      </div>\n    </div>\n  </div>\n</section>\n\n<section id=\"intro\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-8\">\n        <h2><span class=\"icon\">🛠️</span>Fixing Macbook Made Easy</h2>\n        <h4 class=\"subtitle\" >Fast,Affordable And Hassle-Free</h4>\n        <p>Our most of work are depended on technologies like Laptops , Macbook and we know whenever we talk about quality and durabality of product Apple products comes first ,\n          but when this mishaps it sucks! Fix your Apple product by professional and get back in the swing of things.\n        </p>\n\n        <h4 class=\"subtitle\">Irrepairable Is Not An Option</h4>\n        <p>APPLE DIAGNOSIS understands this , and has the proven track record of success to ensure you get your macbook, imac\n           in working, quickly and affordably.\n          Don’t waste time with amateurs and risk them making a device in more danger.\n          <b> <em>Sending your Macbook to someone who doesn’t know what they’re doing could result in\n              making your device in more criticle condition.</em></b>\n          with over 20 years of experience in the business , repairing and restoring Multibrand laptops and Macbook and fixed it all.\n        </p>\n\n      </div>\n      <div class=\"col-md-4\">\n        <!--Evaluation Form-->\n        <app-evaluation-steps></app-evaluation-steps>\n      </div>\n    </div>\n  </div>\n</section>\n\n<section id=\"slider\">\n  <div class=\"container\">\n    <ngb-carousel *ngIf=\"images\" interval=\"3000\" >\n      <!-- <ng-template ngbSlide>\n        <div class=\"picsum-img-wrapper\">\n          <div class=\"row\">\n            <div class=\"col-lg-6\">\n              <img src=\"../../assets/images/AppleFamily2.jpg\" width=\"100%\">\n            </div>\n            <div class=\"col-lg-6 text-right p-3\">\n              <h2 class=\"text-shadow text-danger animated bounceInLeft\">👉Go Beyond The Limit !</h2>\n              <h2 class=\"text-shadow text-secondary animated bounceInRight\">👉Expand Storage Capacity</h2>\n              <h2 class=\"text-shadow text-secondary animated bounceInLeft\">👉@ Flexible Price.</h2>\n              <a href=\"#\" class=\"btn btn-outline-success animated bounceInUp\">Get Best Quote Now !</a>\n            </div>\n          </div>\n        </div>\n      </ng-template> -->\n\n\n      <ng-template ngbSlide>\n        <div class=\"picsum-img-wrapper\">\n          <div class=\"row\">\n            <div class=\"col-lg-6 p-3\">\n              <h2 class=\"text-shadow text-danger animated bounceInLeft\">👉Low Battery Backup ?</h2>\n              <h2 class=\"text-shadow text-danger animated bounceInRight\">👉Not Power on Battery ?</h2>\n              <h2 class=\"text-shadow text-secondary animated bounceInLeft\">👉Get Geniune Original Battery</h2>\n              <h2 class=\"text-shadow text-info animated bounceInRight\">@ Dealer Price.</h2>\n              <a href=\"#\" class=\"btn btn-outline-success animated bounceInUp\">Get Quote Now !</a>\n            </div>\n            <div class=\"col-lg-6\">\n              <img src=\"../../assets/images/battery-replace.jpg\" width=\"100%\">\n            </div>\n          </div>\n        </div>\n      </ng-template>\n      <ng-template ngbSlide>\n        <div class=\"picsum-img-wrapper\">\n          <div class=\"row\">\n            <div class=\"col-lg-6\">\n              <img src=\"../../assets/images/macbook_gallery.jpg\" class=\"rounded\" width=\"100%\">\n            </div>\n            <div class=\"col-lg-6 text-right p-3\">\n              <h2 class=\"text-shadow text-danger animated bounceInLeft\">👉Want to purchase Macbook ?</h2>\n              <h2 class=\"text-shadow text-secondary animated bounceInRight\">👉In 100% new condition</h2>\n              <h2 class=\"text-shadow text-secondary animated bounceInLeft\">👉@ Flexible Price.</h2>\n              <a href=\"#\" class=\"btn btn-outline-success animated bounceInUp\">Get Best Quote Now !</a>\n            </div>\n          </div>\n        </div>\n      </ng-template>\n      <ng-template ngbSlide>\n        <div class=\"picsum-img-wrapper\">\n          <div class=\"row\">\n            <div class=\"col-lg-5\">\n              <img src=\"../../assets/images/macbook-broken.jpg\" width=\"100%\">\n            </div>\n            <div class=\"col-lg-7 text-right p-3\">\n              <h2 class=\"text-shadow text-danger animated bounceInLeft\">👉Accidently broked screen / Glass !😰 </h2>\n              <h2 class=\"text-shadow text-success animated bounceInRight\">👉Don't Worry ! We have all</h2>\n              <h2 class=\"text-shadow text-success animated bounceInLeft\">👉solution Under one Roof.</h2>\n              <h2 class=\"text-shadow text-secondary animated bounceInRight\">👉Now Get Geniune Parts @ Dealer Rate.</h2>\n              <a href=\"#\" class=\"btn btn-outline-success animated bounceInUp\">Get Your Quote !</a>\n            </div>\n          </div>\n        </div>\n      </ng-template>\n\n      <ng-template ngbSlide>\n        <div class=\"picsum-img-wrapper\">\n          <div class=\"row\">\n\n            <div class=\"col-lg-7 p-3\">\n              <h2 class=\"text-shadow text-danger animated bounceInLeft\">👉No fix No Fees. No charges For estimate cancelation.</h2>\n              <h2 class=\"text-shadow text-danger animated bounceInRight\">👉Free Diagnosing & support.</h2>\n              <h2 class=\"text-shadow text-danger animated bounceInLeft\">👉Now avail Free Home Diagnosing.</h2>\n              <h2 class=\"text-shadow text-danger animated bounceInRight\">👉Free Pickup & drop Serice</h2>\n            </div>\n\n            <div class=\"col-lg-5 text-center\">\n              <img src=\"../../assets/images/no-fix-no-fee.jpg\" width=\"80%\">\n            </div>\n          </div>\n        </div>\n      </ng-template>\n\n\n    </ngb-carousel>\n  </div>\n</section>\n\n\n<h2 class=\"text-center display-5\">👨‍🔧 Our Services</h2>\n<p class=\"text-center lead\">What We Offer</p>\n<section id=\"service\" class=\"bg-grey\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-6\">\n        <img src=\"../../assets/images/imac_repiar.svg\" width=\"100%\">\n      </div>\n      <div class=\"col-lg-6 service\">\n        <h3 class=\"title\"><span class=\"icon\">🖥️</span> Apple iMac Services: </h3>\n        <ul>\n          <li> iMac wifi problem</li>\n          <li> moisture damage.</li>\n          <li> Hdd/SSD Installation.</li>\n          <li> Buy Geniune part importer.</li>\n          <li> Screen Replacement.</li>\n          <li> Glass Replacement.</li>\n          <li> Speaker Replacement/Repair.</li>\n        </ul>\n        <p>We have all Apple iMac Solution under one Roof. Now No Need to Hassle More.</p>\n      </div>\n    </div><hr>\n    <!-- <div class=\"row\">\n\n      <div class=\"col-lg-6 order-2 order-lg-1 service\">\n        <h3 class=\"title\"><span class=\"icon\">📱</span>Apple iPhone/ Ipad/ iWatch Services: </h3>\n        <ul>\n          <li>Software Updation</li>\n          <li>Screen Replacement</li>\n          <li>Logic Board Repairing</li>\n          <li>charging issue</li>\n          <li>Data recovery</li>\n          <li>Inbuild Storage Expansion</li>\n          <li>Remove Lock</li>\n\n        </ul>\n      </div>\n      <div class=\"col-lg-6 order-1 order-lg-2 service\">\n        <img src=\"../../assets/images/apple_devices.svg\" width=\"100%\">\n      </div>\n    </div><hr> -->\n    <div class=\"row\">\n      <div class=\"col-lg-6\">\n        <img src=\"../../assets/images/macbook_repiar.svg\" width=\"100%\">\n      </div>\n      <div class=\"col-lg-6 service\">\n        <h3 class=\"title\"><span class=\"icon\">💻</span> Apple Macbook Services</h3>\n        <ul>\n          <li>macOs installation</li>\n          <li>iOS software installation</li>\n          <li>Logic board repair/ replacement</li>\n          <li>keyboard replacement</li>\n          <li>Wifi solution</li>\n          <li>Macbook pro/Air Screen Issue</li>\n          <li>Mousepad/Touchpad Issue</li>\n          <li>Power jack Replacement/Repair.</li>\n          <li>Macbook Dull Display.</li>\n          <li>Battery charging.</li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</section>\n<section id=\"slider\">\n  <div class=\"container\">\n    <ngb-carousel *ngIf=\"images\" interval=\"3000\" [pauseOnHover]=\"false\" >\n      <ng-template ngbSlide>\n        <div class=\"picsum-img-wrapper\">\n          <div class=\"row\">\n            <div class=\"col-lg-6\">\n              <img src=\"../../assets/images/apple-macbook-charger-apple-diagonosis.jpg\" width=\"100%\">\n            </div>\n            <div class=\"col-lg-6 text-right pt-5\">\n              <h2 class=\"text-shadow text-danger animated bounceInLeft\">👉Get Geniune Apple Macbook Charger !</h2>\n              <h2 class=\"text-shadow text-secondary animated bounceInRight\">👉Macsafe-1, Macsafe-2, C-Port</h2>\n              <h2 class=\"text-shadow text-secondary animated bounceInLeft\">👉@ Dealer Price.</h2>\n              <a href=\"#\" class=\"btn btn-outline-success animated bounceInUp\">Get Best Quote Now !</a>\n            </div>\n          </div>\n        </div>\n      </ng-template>\n      <ng-template ngbSlide>\n        <div class=\"picsum-img-wrapper\">\n          <div class=\"row\">\n            <div class=\"col-lg-6\">\n              <img src=\"../../assets/images/macbook-air-keyboard-apple-diagnosis.jpg\" width=\"100%\">\n            </div>\n            <div class=\"col-lg-6 text-right pt-5\">\n              <h2 class=\"text-shadow text-danger animated bounceInLeft\">👉Get Geniune Apple Macbook Keyboard !</h2>\n              <h2 class=\"text-shadow text-secondary animated bounceInRight\">👉with Replacement</h2>\n              <h2 class=\"text-shadow text-secondary animated bounceInLeft\">👉@ Dealer Price.</h2>\n              <a href=\"#\" class=\"btn btn-outline-success animated bounceInUp\">Get Best Quote Now !</a>\n            </div>\n          </div>\n        </div>\n      </ng-template>\n      <ng-template ngbSlide>\n        <div class=\"picsum-img-wrapper p-2\">\n          <div class=\"row\">\n            <div class=\"col-lg-6 pt-5\">\n              <img src=\"../../assets/images/catelina-apple-diagnosis.jpg\" class=\"rounded\" width=\"100%\">\n            </div>\n            <div class=\"col-lg-6 text-right pt-5\">\n              <h2 class=\"text-shadow text-danger animated bounceInLeft\">👉Get Desired macOs install!</h2>\n              <h2 class=\"text-shadow text-secondary animated bounceInRight\">👉On your Macbook</h2>\n              <h2 class=\"text-shadow text-secondary animated bounceInLeft\">👉@ Affordable Price.</h2>\n              <a href=\"#\" class=\"btn btn-outline-success animated bounceInUp\">Call Now !</a>\n            </div>\n          </div>\n        </div>\n      </ng-template>\n      <ng-template ngbSlide>\n        <div class=\"picsum-img-wrapper p-2\">\n          <div class=\"row\">\n            <div class=\"col-lg-6 pt-5\">\n              <img src=\"../../assets/images/apple-diagnosis-apple-part-at-dealer-price.jpg\" class=\"rounded\" width=\"100%\">\n            </div>\n            <div class=\"col-lg-6 text-right pt-5\">\n              <h2 class=\"text-shadow text-danger animated bounceInLeft\">👉Get Any Macbook Parts</h2>\n              <h2 class=\"text-shadow text-secondary animated bounceInRight\">👉Speaker, Logic Board, Screen, Charger...</h2>\n              <h2 class=\"text-shadow text-secondary animated bounceInLeft\">👉@ Dealer Price.</h2>\n              <a href=\"#\" class=\"btn btn-outline-success animated bounceInUp\">Call Now !</a>\n            </div>\n          </div>\n        </div>\n      </ng-template>\n      </ngb-carousel>\n    </div>\n  </section>\n<h2 class=\"text-center display-5\">🤔 Why Choose Us</h2>\n<section id=\"whyus\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-3\">\n        <div class=\"card w-100 text-center\">\n          <span class=\"icon-100\">🆓</span>\n          <div class=\"card-body text-center\">\n            <h5 class=\"card-title\">Free Diagnostic</h5>\n            <p class=\"card-text\">We Don't charge if Client cancel the Estimate. <strong>No Fix ! No Fees</strong></p>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-3\">\n        <div class=\"card w-100 text-center\">\n          <span class=\"icon-100\">💯</span>\n          <div class=\"card-body text-center\">\n            <h5 class=\"card-title\">100% SATISFACTION</h5>\n            <p class=\"card-text\">We at Lapplus Believe on Customer First Approch. Pay only when Satisfied.</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-3\">\n        <div class=\"card w-100 text-center\">\n          <span class=\"icon-100\">👨‍🔧</span>\n          <div class=\"card-body text-center\">\n            <h5 class=\"card-title\">Experinced Technicians</h5>\n            <p class=\"card-text\">Well Experinced Technicians with experience of above 10 years.</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-3\">\n        <div class=\"card w-100 text-center\">\n          <span class=\"icon-100\">💲</span>\n          <div class=\"card-body text-center\">\n            <h5 class=\"card-title\">Fast Estimate</h5>\n            <p class=\"card-text\">Get Fast Estimate ASAP for Fixing on Next Day at No Extra Cost.</p>\n          </div>\n        </div>\n      </div>\n\n    </div>\n    <div class=\"row\">\n      <div class=\"col-lg-3\">\n        <div class=\"card w-100 text-center\">\n          <span class=\"icon-100\">🛡️</span>\n          <div class=\"card-body text-center\">\n            <h5 class=\"card-title\">30 Days Warranty & Support</h5>\n            <p class=\"card-text\">We provie Money Back Gaurantee So you only gonna Pay if your problem is resolved.</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-3\">\n        <div class=\"card w-100 text-center\">\n          <span class=\"icon-100\">🚙</span>\n          <div class=\"card-body text-center\">\n            <h5 class=\"card-title\">Free Pickup and Drop</h5>\n            <p class=\"card-text\">We also provide facility to Pickup & Drop your Apple Product @ your Door Step.</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-3\">\n        <div class=\"card w-100 text-center\">\n          <span class=\"icon-100\">👍</span>\n          <div class=\"card-body text-center\">\n            <h5 class=\"card-title\">Affordable Price</h5>\n            <p class=\"card-text\">Fix issue with your Apple Product at Much Much Affordable Price Gauranteed</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-3\">\n        <div class=\"card w-100 text-center\">\n          <span class=\"icon-100\">⚙️</span>\n          <div class=\"card-body text-center\">\n            <h5 class=\"card-title\">Get Any Apple Part</h5>\n            <p class=\"card-text\">Get Any Apple Part Directly from Dealer,<strong> We Import Apple Geniune Parts Directly from Manufacturer.</strong> So No need to pay extra get Any Apple part @ Dealer Price.</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<h2 class=\"text-center display-5\">🌟 What our customers say</h2>\n<br>\n<section id=\"review\" class=\"bg-grey\">\n  <div class=\"container\">\n    <ngb-carousel [showNavigationIndicators]=\"false\">\n\n      <ng-template ngbSlide *ngFor=\"let review of reviews\">\n        <div class=\"picsum-img-wrapper text-center\">\n          <div class=\"d-flex justify-content-center\">\n            <span *ngFor=\"let s of counter(review.rating)\">⭐</span>\n          </div>\n          <blockquote class=\"blockquote\">\n            <p class=\"mb-0 lead\">{{review.comment}}</p>\n            <footer class=\"blockquote-footer\"><cite title=\"Source Title\">{{review.username}}</cite></footer>\n          </blockquote>\n        </div>\n      </ng-template>\n\n    </ngb-carousel>\n  </div>\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/imac-service/imac-service.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/imac-service/imac-service.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<section id=\"banner\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-6 text-center order-2 order-lg-1\">\n        <h1 class=\"display-3 \">Having issue with your Lovely iMac ?</h1>\n        <h2>Then here U are @ right Place 👍</h2>\n        <p class=\"lead\">Fill free to Handover it to Professinal.</p>\n        <a href=\"tel:+918469443014\" class=\"btn btn-outline-success\">🤙 Call Now !</a>\n      </div>\n      <div class=\"col-lg-6 order-1 order-lg-2\">\n        <img src=\"../../assets/images/imac_repiar.svg\" width=\"100%\">\n      </div>\n    </div>\n  </div>\n</section>\n<section id=\"detail\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-8\">\n        <h2 class=\"title\">📌 What services we offer in Apple iMac !</h2><hr>\n        <div class=\"d-flex flex-column\">\n          <div class=\"card border-secondary mb-3 w-100\">\n            <h5 class=\"card-header\">✔️ iMac Glass Replacement</h5>\n            <div class=\"card-body text-secondary\">\n              <p class=\"card-text\">Have Your iMac Glass/Screen accidently broked, Don't worry we provide a gauranteed solution @ Affordable Price. Since we directly importing APPLE GENIUNE PART you will get solution at flexible price.</p>\n            </div>\n          </div>\n          <div class=\"card border-secondary mb-3 w-100\">\n            <h5 class=\"card-header\">✔️ Official macOs installation</h5>\n            <div class=\"card-body text-secondary\">\n              <p class=\"card-text\">You Want to upgrade or install another version of IOS, Fill free to contact us we also provide home installation so that you don't have hassle to carry Big Imac to care. you just have to appoint a technician that's all.</p>\n            </div>\n          </div>\n          <div class=\"card border-secondary mb-3 w-100\">\n            <h5 class=\"card-header\">✔️ iMac Logic Board Repairing</h5>\n            <div class=\"card-body text-secondary\">\n              <p class=\"card-text\">Suddenly your iMac stop turn on, Don't worry we have well experience of solving logic board related issues. Now You Can Book Free Pickup & Drop, so that you don't have to hassle for carrying big imac to care.</p>\n            </div>\n          </div>\n          <div class=\"card border-secondary mb-3 w-100\">\n            <h5 class=\"card-header\">✔️ iMac Harddisk Replacement</h5>\n            <div class=\"card-body text-secondary\">\n              <p class=\"card-text\">We have we carefull hand to safely replace Internal harddisk of imac , which has to be done carefully because of chances of breaking screen. We have successfully repaired more than 40 iMacs across this year. 2018</p>\n            </div>\n          </div>\n\n        </div>\n      </div>\n      <div class=\"col-lg-4\">\n        <app-evaluation-steps></app-evaluation-steps>\n      </div>\n    </div>\n  </div>\n</section>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ipad-service/ipad-service.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ipad-service/ipad-service.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<section id=\"banner\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-6 text-center\">\n        <img src=\"../../assets/images/iphone-ipad.svg\" width=\"80%\">\n      </div>\n      <div class=\"col-lg-6\">\n        <h1 class=\"display-3 \">Having issue with your Lovely iPhone/iPad ?</h1>\n        <h2>Then here U are @ right Place 👍</h2>\n        <p class=\"lead\">Fill free to Handover it to Professinal.</p>\n        <a href=\"tel:+918469443014\" class=\"btn btn-outline-success\">🤙 Call Now !</a>\n      </div>\n    </div>\n  </div>\n</section>\n\n<section id=\"detail\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-8\">\n        <h2 class=\"title\">📌 What Services we offer in Apple iPhones / iPads / iWatchs ?</h2><hr>\n        <div class=\"d-flex flex-column\">\n          <div class=\"card border-secondary mb-3 w-100\">\n            <h5 class=\"card-header\">✔️ iPhone Inbuild Memory Expansion with 100% Gaurantee</h5>\n            <div class=\"card-body text-secondary\">\n              <p class=\"card-text\">Now no need to buy new iPhone for More inbuild memory, We successfully extended upto 100 iphones memory @ affordable and flexible price.Since each iphone model has different type of memory IC,Provide us a exact model number for perfect estimate for same.you can contact us on whatsapp for Whatsapp response or expansion estimate</p>\n            </div>\n          </div>\n          <div class=\"card border-secondary mb-3 w-100\">\n            <h5 class=\"card-header\">✔️ iPhone Logic Board Repairing</h5>\n            <div class=\"card-body text-secondary\">\n              <p class=\"card-text\">Suddenly your iphone stop turn on,low network issue,wifi issue, low battery backup etc.. Don't worry we have well experience of solving logic board related issues.</p>\n            </div>\n          </div>\n          <div class=\"card border-secondary mb-3 w-100\">\n            <h5 class=\"card-header\">✔️ iPhone Screen/Glass/Touch Replacement</h5>\n            <div class=\"card-body text-secondary\">\n              <p class=\"card-text\">Accidently Broked screen/Glass don't suffer from this. We made Screen/Glass Replacement affordable and Geniune original part.</p>\n            </div>\n          </div>\n\n        </div>\n      </div>\n      <div class=\"col-lg-4\">\n        <app-evaluation-steps></app-evaluation-steps>\n      </div>\n    </div>\n  </div>\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/macbook-service/macbook-service.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/macbook-service/macbook-service.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<section id=\"banner\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-6\">\n        <img src=\"../../assets/images/macbook-new.png\" width=\"100%\">\n      </div>\n      <div class=\"col-lg-6 text-center\">\n        <h1 class=\"display-3 \">Having issue with your Lovely Macbook ?</h1>\n        <h2>Then here U are @ right Place 👍</h2>\n        <p class=\"lead\">Fill free to Handover it to Professinal.</p>\n        <a href=\"tel+918469443014\" class=\"btn btn-outline-success\">🤙 Call Now !</a>\n      </div>\n    </div>\n  </div>\n</section>\n\n<section id=\"service\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-8\">\n        <h2 class=\"title\">📌 What We Offer In Apple Macbook Pro/Air !</h2><hr>\n        <div class=\"d-flex flex-column\">\n          <div class=\"card border-secondary mb-3 w-100\">\n            <h5 class=\"card-header\">✔️ macOs installation</h5>\n            <div class=\"card-body text-secondary\">\n              <p class=\"card-text\">Upgrade your macOs to any Desire variant. <strong>Updare to macOS Catalina</strong>. iOS supported software also availabel like Microsoft Office, Adobe , Coral ...</p>\n            </div>\n          </div>\n        </div>\n        <div class=\"d-flex flex-column\">\n          <div class=\"card border-secondary mb-3 w-100\">\n            <h5 class=\"card-header\">✔️ Expand your Macbook Air/Pro SSD @ most Affordable price.</h5>\n            <div class=\"card-body text-secondary\">\n              <p class=\"card-text\">Now Don't suffer from Low memory any more expand the storage(SSD) of your Macbook Air,Pro @ every Affordable price with Warranty.Just inquire for compatible SSD and know the difference.</p>\n            </div>\n          </div>\n        </div>\n        <div class=\"d-flex flex-column\">\n          <div class=\"card border-secondary mb-3 w-100\">\n            <h5 class=\"card-header\">✔️ Logic board repair/ replacement</h5>\n            <div class=\"card-body text-secondary\">\n              <p class=\"card-text\">Suddenly your Macbook stop turn on,wifi issue, low battery backup etc.. Don't worry we have well experience of solving logic board related issues. From last few years we found Humidity, a major cause for most of the logic boards issues. We found a effective solution to prevent humidity/moisture damage to logic board. we apply a special anti-moisture coating to logic board which not only extends its life but prevent it from corrotion also.</p>\n            </div>\n          </div>\n        </div>\n        <div class=\"d-flex flex-column\">\n          <div class=\"card border-secondary mb-3 w-100\">\n            <h5 class=\"card-header\">✔️ keyboard Replacement</h5>\n            <div class=\"card-body text-secondary\">\n              <p class=\"card-text\">Replace Your Macbook keyboard at Most Affordable price Gaurantee</p>\n            </div>\n          </div>\n        </div>\n        <div class=\"d-flex flex-column\">\n          <div class=\"card border-secondary mb-3 w-100\">\n            <h5 class=\"card-header\">✔️ Overheating issue</h5>\n            <div class=\"card-body text-secondary\">\n              <p class=\"card-text\">After some period of time every gadgets need to be serviced to extend its life. Generally over heating can be resolve by general service. General service consists of well cleaning og logic board, Anti-moisture coating to logic board, cleaning ports contact etc...</p>\n            </div>\n          </div>\n        </div>\n        <div class=\"d-flex flex-column\">\n          <div class=\"card border-secondary mb-3 w-100\">\n            <h5 class=\"card-header\">✔️ Macbook pro/Air Screen Issue</h5>\n            <div class=\"card-body text-secondary\">\n              <p class=\"card-text\">Whether Dull Display, Blank Display , Stuck on apple Logo ! Don't Worry we have all solution.</p>\n            </div>\n          </div>\n        </div>\n        <div class=\"d-flex flex-column\">\n          <div class=\"card border-secondary mb-3 w-100\">\n            <h5 class=\"card-header\">✔️ Mousepad/Touchpad Issue</h5>\n            <div class=\"card-body text-secondary\">\n              <p class=\"card-text\">Touchpad Not working, Touchpad hardware not detecting ... We also have Geniune Apple Touchpad.</p>\n            </div>\n          </div>\n        </div>\n        <div class=\"d-flex flex-column\">\n          <div class=\"card border-secondary mb-3 w-100\">\n            <h5 class=\"card-header\">✔️ Power jack Replacement/Repair.</h5>\n            <div class=\"card-body text-secondary\">\n              <p class=\"card-text\">Most common if your power jack is Bad then it will make your Charger pin Burn Which eventually costs you high for changing charger frequently. Replace Power jack to Apple Geniune Power jack @ affordable Price</p>\n            </div>\n          </div>\n        </div>\n        <div class=\"d-flex flex-column\">\n          <div class=\"card border-secondary mb-3 w-100\">\n            <h5 class=\"card-header\">✔️ Battery Not charging.</h5>\n            <div class=\"card-body text-secondary\">\n              <p class=\"card-text\">At us you will find Apple Geniune Battery with warranty and Free Installation into Macbook.</p>\n            </div>\n          </div>\n        </div>\n\n\n      </div>\n      <div class=\"col-lg-4\">\n        <app-evaluation-steps></app-evaluation-steps>\n      </div>\n    </div>\n  </div>\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/partnership/partnership.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/partnership/partnership.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<section id=\"banner\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-5\">\n        <img src=\"../../assets/images/partnership.svg\" width=\"100%\">\n      </div>\n      <div class=\"col-lg-7 text-center\">\n        <h1 class=\"display-3 \">Become our valuable Partner !</h1>\n        <h2>and Earn Extra Income.</h2>\n        <a href=\"tel:+918469443014\" class=\"btn btn-success\">Call Now !</a>\n      </div>\n    </div>\n  </div>\n</section>\n\n<section id=\"detail\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-7\">\n        <h2 class=\"display-5\">What is lapplus partnership program ?</h2>\n        <p class=\"lead\">Lapplus partnership program is opportunity for students as well as various serivice providers where they have to give us customer and get commission in between. Already above 30 Dealers/ serivice center are giving us buisness which makes them to earn extra with no extra cost.\n          Fill our partnership form to get more details for same.</p>\n      </div>\n      <div class=\"col-lg-5\" id=\"partnerShipForm\">\n        <form name=\"partnership\" data-netlify=\"true\" method=\"post\">\n        <div class=\"form\" >\n          <h2 class=\"text-center\">Fill This Form</h2>\n          <p class=\"lead text-center\">Become Our Valuable Partner</p>\n          <div class=\"form-group\">\n            <label>Full Name*</label>\n            <input class=\"form-control\" name=\"name\" type=\"text\" placeholder=\"Name\">\n          </div>\n          <div class=\"form-group\">\n            <label>Shop/Business Name</label>\n            <input class=\"form-control\" name=\"business\" type=\"text\" placeholder=\"Shop/Business Name\">\n          </div>\n          <div class=\"form-group\">\n            <label>Contact No.*</label>\n            <input class=\"form-control\" name=\"phone\" type=\"tel\" placeholder=\"Contact No.\">\n          </div>\n          <div class=\"form-group\">\n            <button class=\"btn btn-success\">Submit</button>\n          </div>\n        </div>\n      </form>\n      </div>\n    </div>\n  </div>\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/review/review.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/review/review.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<section id=\"banner\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-6\">\n        <img src=\"../../assets/images/review.svg\" width=\"100%\">\n      </div>\n      <div class=\"col-lg-6 text-center\">\n        <h1 class=\"display-3\">✏️ Review us to keep us Motivated.</h1>\n      </div>\n    </div>\n  </div>\n</section>\n<section class=\"detail\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-7\">\n        <h2 class=\"display-5\">🌟 Reviews</h2> <hr>\n      </div>\n      <div class=\"col-lg-5\">\n        <div class=\"d-flex justify-content-center\">\n          <div class=\"card form-dark\" style=\"width: 100%;\">\n            <h2 class=\"card-header text-center\" style=\"margin-top: 0%;\">Review Us</h2>\n            <form data-netlify=\"true\" method=\"post\" name=\"review\">\n              <div class=\"card-body\">\n                <div class=\"form-group\">\n                  <h5>Full Name :</h5>\n                  <input class=\"form-control\" name=\"name\" type=\"text\" placeholder=\"Full Name\">\n                </div>\n                <div class=\"form-group row\">\n                  <h5 class=\"col-6\">Ratings :</h5>\n                  <ngb-rating max=\"5\" class=\"col-6\">\n                    <ng-template let-fill=\"fill\" let-index=\"index\">\n                      <span class=\"star\" [class.filled]=\"fill === 100\">&#9733;</span>\n                    </ng-template>\n                  </ngb-rating>\n\n                </div>\n                <div class=\"form-group\">\n                  <h5>Comment :</h5>\n                  <textarea class=\"form-control\" name=\"comment\" placeholder=\"Message or suggestions\"></textarea>\n                </div>\n                <div class=\"form-group\">\n                  <button class=\"btn btn-warning btn-block btn-lg text-light\">Submit</button>\n                </div>\n              </div>\n            </form>\n\n          </div>\n        </div>\n      </div>\n    </div>\n\n\n  </div>\n</section>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#aboutUs,#values{\r\n  padding-top: 10%;\r\n  padding-bottom: 5%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2Fib3V0VXMsI3ZhbHVlc3tcclxuICBwYWRkaW5nLXRvcDogMTAlO1xyXG4gIHBhZGRpbmctYm90dG9tOiA1JTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AboutComponent = class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
};
AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")).default]
    })
], AboutComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _evaluation_form_evaluation_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./evaluation-form/evaluation-form.component */ "./src/app/evaluation-form/evaluation-form.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _imac_service_imac_service_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./imac-service/imac-service.component */ "./src/app/imac-service/imac-service.component.ts");
/* harmony import */ var _ipad_service_ipad_service_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ipad-service/ipad-service.component */ "./src/app/ipad-service/ipad-service.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _macbook_service_macbook_service_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./macbook-service/macbook-service.component */ "./src/app/macbook-service/macbook-service.component.ts");
/* harmony import */ var _partnership_partnership_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./partnership/partnership.component */ "./src/app/partnership/partnership.component.ts");
/* harmony import */ var _review_review_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./review/review.component */ "./src/app/review/review.component.ts");












const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"] },
    { path: 'service/macbook', component: _macbook_service_macbook_service_component__WEBPACK_IMPORTED_MODULE_9__["MacbookServiceComponent"] },
    { path: 'service/iphone', component: _ipad_service_ipad_service_component__WEBPACK_IMPORTED_MODULE_4__["IpadServiceComponent"] },
    { path: 'service/imac', component: _imac_service_imac_service_component__WEBPACK_IMPORTED_MODULE_3__["ImacServiceComponent"] },
    { path: 'partnership', component: _partnership_partnership_component__WEBPACK_IMPORTED_MODULE_10__["PartnershipComponent"] },
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_2__["ContactComponent"] },
    { path: 'evaluation', component: _evaluation_form_evaluation_form_component__WEBPACK_IMPORTED_MODULE_1__["EvaluationFormComponent"] },
    { path: 'review', component: _review_review_component__WEBPACK_IMPORTED_MODULE_11__["ReviewComponent"] },
    { path: '**', redirectTo: '' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let AppComponent = class AppComponent {
    constructor(router) {
        this.router = router;
        this.title = 'Lapplus';
        this.showLoader = true;
        this.router.events.subscribe((routerEvent) => {
            if (routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                this.showLoader = true;
            }
            if (routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                this.showLoader = false;
            }
            window.scrollTo(0, 0);
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./header/navbar/navbar.component */ "./src/app/header/navbar/navbar.component.ts");
/* harmony import */ var _footer_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./footer/footer/footer.component */ "./src/app/footer/footer/footer.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _macbook_service_macbook_service_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./macbook-service/macbook-service.component */ "./src/app/macbook-service/macbook-service.component.ts");
/* harmony import */ var _imac_service_imac_service_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./imac-service/imac-service.component */ "./src/app/imac-service/imac-service.component.ts");
/* harmony import */ var _ipad_service_ipad_service_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ipad-service/ipad-service.component */ "./src/app/ipad-service/ipad-service.component.ts");
/* harmony import */ var _partnership_partnership_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./partnership/partnership.component */ "./src/app/partnership/partnership.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _evaluation_steps_evaluation_steps_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./evaluation-steps/evaluation-steps.component */ "./src/app/evaluation-steps/evaluation-steps.component.ts");
/* harmony import */ var _contact_frm_contact_frm_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./contact-frm/contact-frm.component */ "./src/app/contact-frm/contact-frm.component.ts");
/* harmony import */ var _evaluation_form_evaluation_form_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./evaluation-form/evaluation-form.component */ "./src/app/evaluation-form/evaluation-form.component.ts");
/* harmony import */ var _review_review_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./review/review.component */ "./src/app/review/review.component.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm2015/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");























let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
            _header_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
            _footer_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
            _about_about_component__WEBPACK_IMPORTED_MODULE_11__["AboutComponent"],
            _macbook_service_macbook_service_component__WEBPACK_IMPORTED_MODULE_12__["MacbookServiceComponent"],
            _imac_service_imac_service_component__WEBPACK_IMPORTED_MODULE_13__["ImacServiceComponent"],
            _ipad_service_ipad_service_component__WEBPACK_IMPORTED_MODULE_14__["IpadServiceComponent"],
            _partnership_partnership_component__WEBPACK_IMPORTED_MODULE_15__["PartnershipComponent"],
            _contact_contact_component__WEBPACK_IMPORTED_MODULE_16__["ContactComponent"],
            _evaluation_steps_evaluation_steps_component__WEBPACK_IMPORTED_MODULE_17__["EvaluationStepsComponent"],
            _contact_frm_contact_frm_component__WEBPACK_IMPORTED_MODULE_18__["ContactFrmComponent"],
            _evaluation_form_evaluation_form_component__WEBPACK_IMPORTED_MODULE_19__["EvaluationFormComponent"],
            _review_review_component__WEBPACK_IMPORTED_MODULE_20__["ReviewComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"].withServerTransition({ appId: 'serverApp' }),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrModule"].forRoot(),
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdownModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbCarouselModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbCollapseModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbRatingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_21__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_22__["environment"].production })
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/contact-frm/contact-frm.component.css":
/*!*******************************************************!*\
  !*** ./src/app/contact-frm/contact-frm.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QtZnJtL2NvbnRhY3QtZnJtLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/contact-frm/contact-frm.component.ts":
/*!******************************************************!*\
  !*** ./src/app/contact-frm/contact-frm.component.ts ***!
  \******************************************************/
/*! exports provided: ContactFrmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactFrmComponent", function() { return ContactFrmComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ContactFrmComponent = class ContactFrmComponent {
    constructor() { }
    ngOnInit() {
    }
};
ContactFrmComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact-frm',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact-frm.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact-frm/contact-frm.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact-frm.component.css */ "./src/app/contact-frm/contact-frm.component.css")).default]
    })
], ContactFrmComponent);



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#banner{\r\n  padding-top: 5%;\r\n  padding-bottom: 5%;\r\n  background: #ecf0f1;\r\n  border-bottom-left-radius: 40%;\r\n  border-bottom-right-radius: 40%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsK0JBQStCO0FBQ2pDIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYmFubmVye1xyXG4gIHBhZGRpbmctdG9wOiA1JTtcclxuICBwYWRkaW5nLWJvdHRvbTogNSU7XHJcbiAgYmFja2dyb3VuZDogI2VjZjBmMTtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA0MCU7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDQwJTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ContactComponent = class ContactComponent {
    constructor() { }
    ngOnInit() {
    }
};
ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")).default]
    })
], ContactComponent);



/***/ }),

/***/ "./src/app/evaluation-form/evaluation-form.component.css":
/*!***************************************************************!*\
  !*** ./src/app/evaluation-form/evaluation-form.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V2YWx1YXRpb24tZm9ybS9ldmFsdWF0aW9uLWZvcm0uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/evaluation-form/evaluation-form.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/evaluation-form/evaluation-form.component.ts ***!
  \**************************************************************/
/*! exports provided: EvaluationFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvaluationFormComponent", function() { return EvaluationFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let EvaluationFormComponent = class EvaluationFormComponent {
    constructor() { }
    ngOnInit() {
    }
};
EvaluationFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-evaluation-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./evaluation-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/evaluation-form/evaluation-form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./evaluation-form.component.css */ "./src/app/evaluation-form/evaluation-form.component.css")).default]
    })
], EvaluationFormComponent);



/***/ }),

/***/ "./src/app/evaluation-steps/evaluation-steps.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/evaluation-steps/evaluation-steps.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V2YWx1YXRpb24tc3RlcHMvZXZhbHVhdGlvbi1zdGVwcy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/evaluation-steps/evaluation-steps.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/evaluation-steps/evaluation-steps.component.ts ***!
  \****************************************************************/
/*! exports provided: EvaluationStepsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvaluationStepsComponent", function() { return EvaluationStepsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let EvaluationStepsComponent = class EvaluationStepsComponent {
    constructor() { }
    ngOnInit() {
    }
};
EvaluationStepsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-evaluation-steps',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./evaluation-steps.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/evaluation-steps/evaluation-steps.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./evaluation-steps.component.css */ "./src/app/evaluation-steps/evaluation-steps.component.css")).default]
    })
], EvaluationStepsComponent);



/***/ }),

/***/ "./src/app/footer/footer/footer.component.css":
/*!****************************************************!*\
  !*** ./src/app/footer/footer/footer.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".footer{\r\n  background: #e0e0e0;\r\n  color: #2c3e50;\r\n  padding: 5%;\r\n}\r\n.nav-head{\r\n  font-weight: 700;\r\n  margin-bottom: 30px;\r\n}\r\n.footer-nav{\r\n  padding-left:0px;\r\n}\r\n.footer-nav li{\r\n  list-style: none;\r\n}\r\n.footer-nav li::before{\r\n  content:'- ';\r\n}\r\n.footer-nav li a{\r\n  color: #2c3e50;\r\n  text-decoration: none;\r\n}\r\n.footer-nav li a:hover{\r\n  color: orange;\r\n}\r\n.footer-contact-list li{\r\n  list-style-type: none;\r\n}\r\n.point::before {\r\n  content: '📋';\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsV0FBVztBQUNiO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxjQUFjO0VBQ2QscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFFQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsYUFBYTtBQUNmIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXJ7XHJcbiAgYmFja2dyb3VuZDogI2UwZTBlMDtcclxuICBjb2xvcjogIzJjM2U1MDtcclxuICBwYWRkaW5nOiA1JTtcclxufVxyXG4ubmF2LWhlYWR7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcbi5mb290ZXItbmF2e1xyXG4gIHBhZGRpbmctbGVmdDowcHg7XHJcbn1cclxuLmZvb3Rlci1uYXYgbGl7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG4uZm9vdGVyLW5hdiBsaTo6YmVmb3Jle1xyXG4gIGNvbnRlbnQ6Jy0gJztcclxufVxyXG4uZm9vdGVyLW5hdiBsaSBhe1xyXG4gIGNvbG9yOiAjMmMzZTUwO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4uZm9vdGVyLW5hdiBsaSBhOmhvdmVye1xyXG4gIGNvbG9yOiBvcmFuZ2U7XHJcbn1cclxuXHJcbi5mb290ZXItY29udGFjdC1saXN0IGxpe1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxufVxyXG4ucG9pbnQ6OmJlZm9yZSB7XHJcbiAgY29udGVudDogJ/Cfk4snO1xyXG59XHJcblxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/footer/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/footer/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer/footer.component.css")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/header/navbar/navbar.component.css":
/*!****************************************************!*\
  !*** ./src/app/header/navbar/navbar.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".navbar-brand{\r\n  font-family: 'Montserrat',sans-serif;\r\n  font-size: 1.5rem;\r\n}\r\n.navbar-logo{\r\n  width: 350px;\r\n}\r\n.navbar {\r\n  background: #ecf0f1;\r\n}\r\n.nav-item{\r\n  padding: 1rem 0.6rem;\r\n}\r\n.nav-item a{\r\n  font-size: 1rem;\r\n}\r\n.nav-item, .dropdown-item{\r\n  text-transform: uppercase;\r\n  letter-spacing: 0.1rem;\r\n}\r\n.dropdown-toggle{\r\n  cursor: pointer;\r\n}\r\n.active{\r\n  border-bottom: 3px solid orangered;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9DQUFvQztFQUNwQyxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLGtDQUFrQztBQUNwQyIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyLWJyYW5ke1xyXG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxufVxyXG4ubmF2YmFyLWxvZ297XHJcbiAgd2lkdGg6IDM1MHB4O1xyXG59XHJcbi5uYXZiYXIge1xyXG4gIGJhY2tncm91bmQ6ICNlY2YwZjE7XHJcbn1cclxuLm5hdi1pdGVte1xyXG4gIHBhZGRpbmc6IDFyZW0gMC42cmVtO1xyXG59XHJcbi5uYXYtaXRlbSBhe1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG4ubmF2LWl0ZW0sIC5kcm9wZG93bi1pdGVte1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcclxufVxyXG4uZHJvcGRvd24tdG9nZ2xle1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uYWN0aXZle1xyXG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCBvcmFuZ2VyZWQ7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/header/navbar/navbar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/header/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");



let NavbarComponent = class NavbarComponent {
    constructor(toastService) {
        this.toastService = toastService;
        this.isMenuCollapsed = true;
    }
    ngOnInit() {
    }
    shopClick() {
        this.toastService.warning('Store is Under Construction !', ' We will be Inaugrate Soon');
        this.collapseMenu();
    }
    collapseMenu() {
        this.isMenuCollapsed = true;
    }
};
NavbarComponent.ctorParameters = () => [
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] }
];
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/navbar/navbar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navbar.component.css */ "./src/app/header/navbar/navbar.component.css")).default]
    })
], NavbarComponent);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n#post{\r\n  padding-top: 5%;\r\n  padding-bottom: 5%;\r\n}\r\n#service{\r\n  border-top-right-radius: 20%;\r\n  border-bottom-right-radius: 20%;\r\n}\r\n.service h3{\r\n  font-size: medium;\r\n  margin: 30px 0px;\r\n}\r\n.service ul li{\r\n  font-size: 1.2rem;\r\n  list-style: none;\r\n}\r\n.service ul li::before{\r\n  content: '- 📌';\r\n}\r\n#whyus, #service{\r\n  padding-top : 5%;\r\n  padding-bottom: 10%;\r\n}\r\n.carousel-caption{\r\n  width: 300px;\r\n}\r\nngb-carousel{\r\n  color: black;\r\n}\r\n.picsum-img-wrapper{\r\n  background: transparent !important;\r\n}\r\n#review{\r\n  padding-top: 5%;\r\n  padding-bottom: 10%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsNEJBQTRCO0VBQzVCLCtCQUErQjtBQUNqQztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGtDQUFrQztBQUNwQztBQUNBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiNwb3N0e1xyXG4gIHBhZGRpbmctdG9wOiA1JTtcclxuICBwYWRkaW5nLWJvdHRvbTogNSU7XHJcbn1cclxuI3NlcnZpY2V7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwJTtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjAlO1xyXG59XHJcblxyXG4uc2VydmljZSBoM3tcclxuICBmb250LXNpemU6IG1lZGl1bTtcclxuICBtYXJnaW46IDMwcHggMHB4O1xyXG59XHJcblxyXG4uc2VydmljZSB1bCBsaXtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcbi5zZXJ2aWNlIHVsIGxpOjpiZWZvcmV7XHJcbiAgY29udGVudDogJy0g8J+TjCc7XHJcbn1cclxuI3doeXVzLCAjc2VydmljZXtcclxuICBwYWRkaW5nLXRvcCA6IDUlO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMCU7XHJcbn1cclxuLmNhcm91c2VsLWNhcHRpb257XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG59XHJcbm5nYi1jYXJvdXNlbHtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuLnBpY3N1bS1pbWctd3JhcHBlcntcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcbiNyZXZpZXd7XHJcbiAgcGFkZGluZy10b3A6IDUlO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMCU7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() {
        this.reviews = [
            {
                rating: 5,
                username: 'Amit Sharma',
                comment: 'My macbook had a battery charging issue. As i need urgent fix, Lapplus solved my issue in just one day. @ affordable cost. They have all Apple solutions @ affordable price.'
            },
            {
                rating: 5,
                username: 'Charudatt Dobariya',
                comment: 'Good service, prompt response got my MacBook charging issue fixed a bit costly but not more than authorised service centre. good infra and knowledgeable staff !'
            },
            {
                rating: 5,
                username: 'Ankit Vinchi',
                comment: 'Nice workshop specialy for macbooks.'
            },
            {
                rating: 5,
                username: 'Hemant Gonnade',
                comment: 'Superb service My laptop power problem Within 2 days repair my laptop and laptop is superb condition very fast service and support'
            }
        ];
        this.images = [""];
    }
    ngOnInit() {
    }
    counter(i) {
        return new Array(i);
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/imac-service/imac-service.component.css":
/*!*********************************************************!*\
  !*** ./src/app/imac-service/imac-service.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ltYWMtc2VydmljZS9pbWFjLXNlcnZpY2UuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/imac-service/imac-service.component.ts":
/*!********************************************************!*\
  !*** ./src/app/imac-service/imac-service.component.ts ***!
  \********************************************************/
/*! exports provided: ImacServiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImacServiceComponent", function() { return ImacServiceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ImacServiceComponent = class ImacServiceComponent {
    constructor() { }
    ngOnInit() {
    }
};
ImacServiceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-imac-service',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./imac-service.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/imac-service/imac-service.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./imac-service.component.css */ "./src/app/imac-service/imac-service.component.css")).default]
    })
], ImacServiceComponent);



/***/ }),

/***/ "./src/app/ipad-service/ipad-service.component.css":
/*!*********************************************************!*\
  !*** ./src/app/ipad-service/ipad-service.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2lwYWQtc2VydmljZS9pcGFkLXNlcnZpY2UuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/ipad-service/ipad-service.component.ts":
/*!********************************************************!*\
  !*** ./src/app/ipad-service/ipad-service.component.ts ***!
  \********************************************************/
/*! exports provided: IpadServiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IpadServiceComponent", function() { return IpadServiceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let IpadServiceComponent = class IpadServiceComponent {
    constructor() { }
    ngOnInit() {
    }
};
IpadServiceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ipad-service',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ipad-service.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ipad-service/ipad-service.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ipad-service.component.css */ "./src/app/ipad-service/ipad-service.component.css")).default]
    })
], IpadServiceComponent);



/***/ }),

/***/ "./src/app/macbook-service/macbook-service.component.css":
/*!***************************************************************!*\
  !*** ./src/app/macbook-service/macbook-service.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hY2Jvb2stc2VydmljZS9tYWNib29rLXNlcnZpY2UuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/macbook-service/macbook-service.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/macbook-service/macbook-service.component.ts ***!
  \**************************************************************/
/*! exports provided: MacbookServiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MacbookServiceComponent", function() { return MacbookServiceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MacbookServiceComponent = class MacbookServiceComponent {
    constructor() { }
    ngOnInit() {
    }
};
MacbookServiceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-macbook-service',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./macbook-service.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/macbook-service/macbook-service.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./macbook-service.component.css */ "./src/app/macbook-service/macbook-service.component.css")).default]
    })
], MacbookServiceComponent);



/***/ }),

/***/ "./src/app/partnership/partnership.component.css":
/*!*******************************************************!*\
  !*** ./src/app/partnership/partnership.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#partnerShipForm{\r\n\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFydG5lcnNoaXAvcGFydG5lcnNoaXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FBR0EiLCJmaWxlIjoic3JjL2FwcC9wYXJ0bmVyc2hpcC9wYXJ0bmVyc2hpcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3BhcnRuZXJTaGlwRm9ybXtcclxuXHJcblxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/partnership/partnership.component.ts":
/*!******************************************************!*\
  !*** ./src/app/partnership/partnership.component.ts ***!
  \******************************************************/
/*! exports provided: PartnershipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartnershipComponent", function() { return PartnershipComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PartnershipComponent = class PartnershipComponent {
    constructor() { }
    ngOnInit() {
    }
};
PartnershipComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-partnership',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./partnership.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/partnership/partnership.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./partnership.component.css */ "./src/app/partnership/partnership.component.css")).default]
    })
], PartnershipComponent);



/***/ }),

/***/ "./src/app/review/review.component.css":
/*!*********************************************!*\
  !*** ./src/app/review/review.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".star {\r\n  font-size: 1.5rem;\r\n  color: #ccc091;\r\n}\r\n.filled {\r\n  color: #f1c40f;\r\n}\r\n.bad {\r\n  color: #ccc091;\r\n}\r\n.filled.bad {\r\n  color: #f1c40f;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmV2aWV3L3Jldmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9yZXZpZXcvcmV2aWV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3RhciB7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgY29sb3I6ICNjY2MwOTE7XHJcbn1cclxuLmZpbGxlZCB7XHJcbiAgY29sb3I6ICNmMWM0MGY7XHJcbn1cclxuLmJhZCB7XHJcbiAgY29sb3I6ICNjY2MwOTE7XHJcbn1cclxuLmZpbGxlZC5iYWQge1xyXG4gIGNvbG9yOiAjZjFjNDBmO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/review/review.component.ts":
/*!********************************************!*\
  !*** ./src/app/review/review.component.ts ***!
  \********************************************/
/*! exports provided: ReviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewComponent", function() { return ReviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ReviewComponent = class ReviewComponent {
    constructor() {
        this.currentRate = 6;
    }
    ngOnInit() {
    }
};
ReviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-review',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./review.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/review/review.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./review.component.css */ "./src/app/review/review.component.css")).default]
    })
], ReviewComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
document.addEventListener('DOMContentLoaded', () => {
    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
        .catch(err => console.error(err));
});


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\babin\Desktop\Projects\Lapplus\Laplus on Angular\Lapplus - Mumbai\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
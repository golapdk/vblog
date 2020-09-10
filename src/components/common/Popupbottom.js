import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { Tags } from '@tryghost/helpers-gatsby'

const Popupbottom = () => (
    <div className="popupbottom overlayPop horizontalpopup slideUp" id="bottommodal"> 
        <div className="appdownloadbanner text-center healthforce row d-flex align_items_center innerspace"> <button type="button" className="close buttonpopup close-fd"> <span><svg className="crossico" width="30" height="30" viewBox="0 0 17 17"> <path className="fill_path" fillRule="evenodd" d="M16.293 1.592l-1.3-1.3-6.7 6.701-6.7-6.7-1.3 1.299 6.7 6.7-6.7 6.701 1.3 1.3 6.7-6.7 6.7 6.7 1.3-1.3-6.7-6.7z"></path> </svg></span> </button> <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12"><div className="horizontaltext">Build a Healthy Workforce by downloading Vantage Fit app!</div></div><div className="text-right col-lg-6 col-md-6 col-sm-12 col-xs-12"> <div className="app_downloadbanner index_download"> <div className=" transform button-style dwnload_app"> <a href="https://apps.apple.com/in/app/vantage-fit/id1393594182" target="_blank"> <img src="https://res.cloudinary.com/vantagecircle/image/upload/w_133/v1580904957/VantageFit/website/appstore.png" alt="ios" className="lozad" src="https://res.cloudinary.com/vantagecircle/image/upload/w_133/v1580904957/VantageFit/website/appstore.png"/ ></a> </div><div className=" transform button-style dwnload_app"> <a href="https://play.google.com/store/apps/details?id=com.bargaintechnologies.vantagefit.v_fit" target="_blank"><img data-src="https://res.cloudinary.com/vantagecircle/image/upload/w_133/v1580904957/VantageFit/website/googleplay.png" alt="playstore" className="lozad" src="https://res.cloudinary.com/vantagecircle/image/upload/w_133/v1580904957/VantageFit/website/googleplay.png" data-loaded="true"/></a> </div></div></div></div></div>
)

export default Popupbottom

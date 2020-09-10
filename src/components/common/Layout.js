import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { Link, StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { Navigation } from '.'
import config from '../../utils/siteConfig'

// Styles
// import '../../styles/app.css'

// import '../../js/main.js'
// import '../../js/jquery.js'
// import $ from "jquery";
import '../../styles/all.css'
import '../../styles/mainsite.css'
import '../../styles/responsive.css'

/**
* Main layout component
*
* The Layout component wraps around each page and template.
* It also provides the header, footer as well as the main
* styles, and meta data for each page.
*
*/
const DefaultLayout = ({ data, children, bodyClass, isHome }) => {
    const site = data.allGhostSettings.edges[0].node
    const twitterUrl = site.twitter ? `https://twitter.com/${site.twitter.replace(/^@/, ``)}` : null
    const facebookUrl = site.facebook ? `https://www.facebook.com/${site.facebook.replace(/^\//, ``)}` : null
    // console.log(site)
    // console.log(children)
    // console.log(isHome)
    return (
        <>
            <Helmet>
                <html lang={site.lang} />
                <style type="text/css">{`${site.codeinjection_styles}`}</style>
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.8/css/all.css"/>
                <body className={bodyClass} />
            </Helmet>

            <div className="viewport">
                <div className="viewport-top">
                    <header className="header_area header_stick ">
                        <nav className="navbar navbar-expand-lg menu_center">
                            <div className="container">
                                <a className="navbar-brand ">
                                    {/* <img src="/images/logo.png" width="220" /> */}
                                    <img width="220" src="https://res.cloudinary.com/vantagecircle/image/upload/w_220/v1580904957/VantageFit/website/00-vantagefit-logo.png" alt="Vantage Circle" className=" lozad" data-loaded="true" />
                                </a>
                                <a href="#" data-toggle="modal" data-target="#search" className="search-trigger headertrigger search_iconmob">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56.966 56.966">
                                        <path d="M55.146 51.887L41.588 37.786A22.926 22.926 0 0 0 46.984 23c0-12.682-10.318-23-23-23s-23 10.318-23 23 10.318 23 23 23c4.761 0 9.298-1.436 13.177-4.162l13.661 14.208c.571.593 1.339.92 2.162.92.779 0 1.518-.297 2.079-.837a3.004 3.004 0 0 0 .083-4.242zM23.984 6c9.374 0 17 7.626 17 17s-7.626 17-17 17-17-7.626-17-17 7.626-17 17-17z" fill="#fff">
                                        </path>
                                    </svg>
                                </a>
                                <button className="navbar-toggler collapsed marketinglanding post no-image" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> 
                                    <span className="menu_toggle"> 
                                        <span className="hamburger"> 
                                            <span></span> <span></span> <span></span> 
                                        </span> 
                                        <span className="hamburger-cross"> <span></span> <span></span> </span> 
                                    </span> 
                                </button>
                                <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                                    <ul id="menu-main-menu-global" className="navbar-nav menu  ml-auto">
                                        <li className="nav-home menu-item nav-item" role="menuitem">
                                            <a href="https://www.vantagefit.io/" className="nav-link menu-top">Home</a>
                                        </li>
                                        <li className="nav-features menu-item nav-item" role="menuitem">
                                            <a href="https://www.vantagefit.io/features/" className="nav-link menu-top">Features</a>
                                        </li>
                                        <li className="nav-pricing menu-item nav-item" role="menuitem">
                                            <a href="https://www.vantagefit.io/pricing/" className="nav-link menu-top">Pricing</a>
                                        </li>
                                        <li className="nav-blog nav-current menu-item nav-item" role="menuitem">
                                            <a href="https://blog.vantagefit.io/" className="nav-link menu-top active">Blog</a>
                                        </li>
                                    </ul>
                                    <a href="#" data-toggle="modal" data-target="#search" className="search-trigger headertrigger search_icondesk"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56.966 56.966"><path d="M55.146 51.887L41.588 37.786A22.926 22.926 0 0 0 46.984 23c0-12.682-10.318-23-23-23s-23 10.318-23 23 10.318 23 23 23c4.761 0 9.298-1.436 13.177-4.162l13.661 14.208c.571.593 1.339.92 2.162.92.779 0 1.518-.297 2.079-.837a3.004 3.004 0 0 0 .083-4.242zM23.984 6c9.374 0 17 7.626 17 17s-7.626 17-17 17-17-7.626-17-17 7.626-17 17-17z" fill="#fff"></path></svg></a>
                                    <a href="#" data-toggle="modal" data-target="#bookmark" className="bookmark-trigger headertrigger"><span className="counter hidden"></span><i className="far fa-bookmark"></i><i className="fas fa-bookmark"></i></a>
                                    <a className="menu_cus btn_get btn-meta btn_hover menu-top" href="https://go.vantagefit.io/get-a-demo/">Request Demo </a>
                                </div>
                            </div>
                        </nav>
                        {/* <div className="container">
                            <div className="site-mast">
                                <div className="site-mast-left">
                                    <Link to="/">
                                        {site.logo ?
                                            <img className="site-logo" width="220" src={site.logo} alt={site.title} />
                                            : <Img fixed={data.file.childImageSharp.fixed} alt={site.title} />
                                        }
                                    </Link>
                                </div>
                                <div className="site-mast-right">
                                    { site.twitter && <a href={ twitterUrl } className="site-nav-item" target="_blank" rel="noopener noreferrer"><img className="site-nav-icon" src="/images/icons/twitter.svg" alt="Twitter" /></a>}
                                    { site.facebook && <a href={ facebookUrl } className="site-nav-item" target="_blank" rel="noopener noreferrer"><img className="site-nav-icon" src="/images/icons/facebook.svg" alt="Facebook" /></a>}
                                    <a className="site-nav-item" href={ `https://feedly.com/i/subscription/feed/${config.siteUrl}/rss/` } target="_blank" rel="noopener noreferrer"><img className="site-nav-icon" src="/images/icons/rss.svg" alt="RSS Feed" /></a>
                                </div>
                            </div>
                            { isHome ?
                                <div className="site-banner">
                                    <h1 className="site-banner-title">{site.title}</h1>
                                    <p className="site-banner-desc">{site.description}</p>
                                </div> :
                                null}
                            <nav className="site-nav">
                                <div className="site-nav-left">
                                    <Navigation data={site.navigation} navClass="site-nav-item" />
                                </div>
                                <div className="site-nav-right">
                                    <Link className="site-nav-button" to="/about">About</Link>
                                </div>
                            </nav>
                        </div> */}
                    </header>
                    <div className="main-container">
                        { isHome ?
                            <div className="elementor">
                                <div className="elementor-inner">
                                    <div className="elementor-section-wrap">
                                        <section className="breadcrumb_area breadcrumb_area_two vc-btn-gradient-color vc-btn-gradient-general"> 
                                            <img className="breadcrumb_shap hidden-xs" src="https://res.cloudinary.com/vantagecircle/image/upload/w_500/v1580904957/VantageFit/website/lines.png" alt="lines"/>
                                            <div className="marketinglanding post no-image">
                                                <img className="breadcrumb_pulse hidden-xs" src="https://res.cloudinary.com/vantagecircle/image/upload/w_300/v1580904957/VantageFit/website/heart-lines.png" alt="pulse"/>
                                            </div>
                                            <div className="container">
                                                <div className="breadcrumb_content text-center main_title">
                                                    <div className="site-banner">
                                                        <h1>{site.title}</h1>
                                                        <p className="white">{site.description}</p>
                                                    </div>
                                                </div>
                                            </div> 
                                        </section>
                                    </div>
                                </div>
                            </div> : null
                        }
                        {isHome ? 
                            <main id="content" className="container custom_container main-body " role="main">  
                                <div className="row loop">	
                                    {children}
                                </div>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-12 text-center">
                                            <a href="#" id="load-posts" data-posts_per_page="13" data-last="You have reached the end of the list" className="btn visible">Load more posts...</a>
                                        </div>
                                    </div>	
                                </div>	
                            </main> : 
                            <main id="content" className="single-blog-post maincontainer" role="main">  
                                {children}

                            </main>
                        }
                    </div>

                    {/* <main className="site-main"> */}
                        {/* All the main content gets inserted here, index.js, post.js */}
                        {/* {children} */}
                    {/* </main> */}

                </div>

                {/* <div className="viewport-bottom"> */}
                    {/* The footer at the very bottom of the screen */}
                    {/* <footer className="site-foot">
                        <div className="site-foot-nav container">
                            <div className="site-foot-nav-left">
                                <Link to="/">{site.title}</Link> © 2019 &mdash; Published with <a className="site-foot-nav-item" href="https://ghost.org" target="_blank" rel="noopener noreferrer">Ghost</a>
                            </div>
                            <div className="site-foot-nav-right">
                                <Navigation data={site.navigation} navClass="site-foot-nav-item" />
                            </div>
                        </div>
                    </footer> */}

                {/* </div> */}
            </div>

        </>
    )
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
    bodyClass: PropTypes.string,
    isHome: PropTypes.bool,
    data: PropTypes.shape({
        file: PropTypes.object,
        allGhostSettings: PropTypes.object.isRequired,
    }).isRequired,
}

const DefaultLayoutSettingsQuery = props => (
    <StaticQuery
        query={graphql`
            query GhostSettings {
                allGhostSettings {
                    edges {
                        node {
                            ...GhostSettingsFields
                        }
                    }
                }
                file(relativePath: {eq: "ghost-icon.png"}) {
                    childImageSharp {
                        fixed(width: 30, height: 30) {
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
            }
        `}
        render={data => <DefaultLayout data={data} {...props} />}
    />
)

export default DefaultLayoutSettingsQuery

{/* <header className="header_area header_stick" style={{ ...site.cover_image && { backgroundImage: `url(${site.cover_image})` } }}> */}

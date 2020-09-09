import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { Tags } from '@tryghost/helpers-gatsby'
import { readingTime as readingTimeHelper } from '@tryghost/helpers'

const HeadPost = ({ post }) => {
    const url = `/${post.slug}/`
    const readingTime = readingTimeHelper(post)
    console.log(post)
    return (
        <div className="col-xs-12 item">
            <article className="featured-content post" data-id="5f55249c8c2e99003937ad0e">
                <div className="post-inner-content col-xs-12">
                    <div className="">
                        <div className="img-holder col-xs-12 col-sm-12 col-md-6 col-lg-6">
                            <a href="/smartwatch-for-business-use/" className="featured-image" title="The Advantages Of A Smartwatch for Business Use">
                                <img className="img-responsive" title="The Advantages Of A Smartwatch for Business Use" src={post.feature_image} alt="The Advantages Of A Smartwatch for Business Use"/>
                            </a>
                        </div>
                        <div className="inner col-xs-12 col-sm-12 col-md-6 col-lg-6">
                            <h2 className="post-title"><a href="/smartwatch-for-business-use/" title="The Advantages Of A Smartwatch for Business Use">The Advantages Of A Smartwatch for Business Use</a></h2> 
                            <div className="post-meta">
                            </div>
                            <a href="/smartwatch-for-business-use/" className="excerpt" title="The Advantages Of A Smartwatch for Business Use">
                                <div>With every passing year, technology is evolving by leaps and bounds, transforming the way people live their lives. Things that were unimaginable in the past, are now part of daily life thanks to technological advances.  Take the example of smartwatches. Smartwatches are highly advanced technological devices that users can wear</div>
                            </a>
                            <div>
                                <div className="cont_read">
                                    <div className="moretxt col-xs-12 text-center">
                                        <span>
                                            <a href="/smartwatch-for-business-use/" title="The Advantages Of A Smartwatch for Business Use">Continue reading</a>
                                        </span>
                                    </div>
                                </div>
                                <div className="readtime_wrapper hidden-sm hidden-xs">
                                    <div className="tags">06-09-2020</div><i className="far fa-clock"></i>
                                    <div className="readtime">4 min read</div>
                                </div>
                            </div>
                            <a href="#" className="read-later" data-id="5f55249c8c2e99003937ad0e"><i className="far fa-bookmark" data-toggle="tooltip" data-placement="right" title="" data-original-title="Bookmark article"></i><i className="fas fa-bookmark" data-toggle="tooltip" data-placement="right" title="" data-original-title="Remove bookmark"></i></a>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}

HeadPost.propTypes = {
    post: PropTypes.shape({
        slug: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        feature_image: PropTypes.string,
        featured: PropTypes.bool,
        tags: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string,
            })
        ),
        excerpt: PropTypes.string.isRequired,
        primary_author: PropTypes.shape({
            name: PropTypes.string.isRequired,
            profile_image: PropTypes.string,
        }).isRequired,
    }).isRequired,
}

export default HeadPost

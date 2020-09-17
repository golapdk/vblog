/* eslint-disable */
/**
 * Trust All Scripts
 *
 * This is a dirty little script for iterating over script tags
 * of your Ghost posts and adding them to the document head.
 *
 * This works for any script that then injects content into the page
 * via ids/classnames etc.
 *
 */
const addScript = url => {
    const script = document.createElement("script")
    script.src = url
    script.async = true
    document.body.appendChild(script)
  }


const $ = require("jquery")
const  jQuery  = require("jquery")

$.getScript("https://res.cloudinary.com/dstkxhnrv/raw/upload/v1600331281/con_ukaiay.js", function() {
    // alert("Script loaded but not necessarily executed.");
 });
 $.getScript("https://res.cloudinary.com/dstkxhnrv/raw/upload/v1600328361/gs_c8wv0g.js", function() {
    // alert("Script loaded but not necessarily executed.");
 });
 $.getScript("https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.18.1/moment.min.js", function() {
    // alert("Script loaded but not necessarily executed.");
 });
// addScript("https://res.cloudinary.com/dstkxhnrv/raw/upload/v1600331281/con_ukaiay.js")
// addScript("https://res.cloudinary.com/dstkxhnrv/raw/upload/v1600328361/gs_c8wv0g.js")        
// addScript("https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.18.1/moment.min.js")

setTimeout(function(){ 

var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


let ghostSearch = new GhostSearch({
url: `https://vantagefitblog.ghost.io`,
key: `a5f3bfdf2173b72ad44fbd4e08`,
input: '#search-field',
results: '#results',
api: {
    parameters: { 
        fields: ['title', 'slug', 'published_at', 'primary_tag', 'id', 'feature_image'],
        include: 'tags',
    },
},
on: {
    afterDisplay: function(results){
        console.log(results)

        if (results.length) {

            $('#results').empty();
            
            var tags = [];
            $.each(results, function(index, val) {
                if (val.obj.primary_tag) {
                    // console.log('tag ase')
                    if ($.inArray(val.obj.primary_tag.name, tags) === -1) {
                        tags.push(val.obj.primary_tag.name);
                    };
                }else{
                    // console.log('tag nai')
                    if ($.inArray('Other', tags) === -1) {
                        // console.log('tag nai jodiu')
                        tags.push('Other');
                    };
                };
            });
            // console.log(tags)
            tags.sort();

            $.each(tags, function(index, val) {
                var tag = val;
                console.log(val)
                if (val === 'Other') {
                    tag = $('#results').attr('data-other');
                };

                $('#results').append('<h3>'+ val +'</h3><ul data-tag="'+ val +'" class="list-box loop row"></ul>');
            });
            // return;

            $.each(results, function(index, val) {
                var feature_image = '';
                var classes = '';
                var dateSplit = val.obj.published_at.split('T');
                dateSplit = dateSplit[0].split('-');
                var month = monthNames[dateSplit[1]-1];
                var date = moment(dateSplit[2]+'-'+month+'-'+dateSplit[1], "DD-MM-YYYY").format('DD MMM YYYY');
                if (val.obj.feature_image) {
                    if (val.obj.feature_image.substring(0, 4) == 'http') {
                        // console.log('dd')
                        feature_image = 'style="background-image: url('+ val.obj.feature_image +');"';
                    }else{
                        // val.obj.feature_image = val.obj.feature_image.replace("/images/", "/images/size/w167h125/");
                        feature_image = 'style="background-image: url('+ url + val.obj.feature_image +');"';
                    };
                    classes += 'featured-image';
                    classes += ' image_search';

                    
                }else{
                    classes += 'excerpt';
                };
                if (val.obj.primary_tag) {
                    $('#results ul[data-tag="'+ val.obj.primary_tag.name +'"]').append('<li class="col-md-4 item"><article class="post"><div class="post-inner-content"><div class="img-holder"> <a href="/'+ val.obj.slug +'/" class="'+ classes +'" title="'+ val.obj.title +'"' + feature_image + '></a> </div><div class="inner"><h2><a href="/'+ val.obj.slug +'/">'+ val.obj.title +'</a></h2><time>'+ date +'</time><a href="#" class="read-later" data-id="'+ val.obj.id +'"><i class="far fa-bookmark" data-toggle="tooltip" data-trigger="hover" data-placement="right" title="'+ $('#results').attr('data-bookmark-article') +'"></i><i class="fas fa-bookmark" data-toggle="tooltip" data-trigger="hover" data-placement="right" title="'+ $('#results').attr('data-remove-bookmark') +'"></i></a></div></div></article></li>');
                }else{
                    $('#results ul[data-tag="Other"]').append('<li class="col-md-4 item"><article class="post"><div class="post-inner-content"><div class="img-holder"> <a href="/'+ val.obj.slug +'/" class="'+ classes +'" title="'+ val.obj.title +'"' + feature_image + '></a> </div><div class="inner"><h2><a href="/'+ val.obj.slug +'/">'+ val.obj.title +'</a></h2><time>'+ date +'</time><a href="#" class="read-later" data-id="'+ val.obj.id +'"><i class="far fa-bookmark" data-toggle="tooltip" data-trigger="hover" data-placement="right" title="'+ $('#results').attr('data-bookmark-article') +'"></i><i class="fas fa-bookmark" data-toggle="tooltip" data-trigger="hover" data-placement="right" title="'+ $('#results').attr('data-remove-bookmark') +'"></i></a></div></div></article></li>');
                };
            });

            // $('#results [data-toggle="tooltip"]').tooltip({
            //     trigger: 'hover'
            // });                

            // readLaterPosts = readLater($('#results'), readLaterPosts);
        
        }else if($('#search-field').val().length && !results.length){
            $('#results').append('<h3>'+ $('#results').attr('data-no-results') +'</h3><ul class="list-box loop row"><li class="col-md-12 item">'+ $('#results').attr('data-no-results-description') +'</li></ul>');
        };

    },
}
})

}, 3000);








var customjquery = function(){
jQuery(document).ready(function($) {

    $(".header_stick").length && $(window).scroll(function () {
        $(window).scrollTop() ? $(".header_stick").addClass("navbar_fixed") : $(".header_stick").removeClass("navbar_fixed");
    }),
    $(".bar_menu").length && ($(".bar_menu").on("click", function () {
        $("#menu").toggleClass("show-menu");
    }),
    $(".close_icon").on("click", function () {
        $("#menu").removeClass("show-menu");
    })),
    $(".offcanfas_menu .dropdown").on("show.bs.dropdown", function (n) {
        $(this).find(".dropdown-menu").first().stop(!0, !0).slideDown(400);
    }),
    $(".offcanfas_menu .dropdown").on("hide.bs.dropdown", function (n) {
        $(this).find(".dropdown-menu").first().stop(!0, !0).slideUp(500);
    }),
    $(".box_item").hover(function () {
        $(".mid-activity").find(".active-img").removeClass("active-img"),
            $(".features").find(".active-sec").removeClass("active-sec"),
            $("#" + $(this).attr("data-img") + " img").addClass("active-img"),
            $(this).addClass("active-sec");
    });
    

    $(function (e) {
        $("nav .navbar-nav a").each(function () {
            this.href === window.location.href && $(this).addClass("active");
        });
    });

    $('#searchcall').on('click', function(event){
        $("#search").addClass("dispalyblock");
        $("#search").addClass("show");
    })

    var config = {
        'share-selected-text': true,
        'load-more': true,
        'infinite-scroll': false,
        'infinite-scroll-step': 1,
        'disqus-shortname': 'vantage-circle',
        'content-api-host': 'https://vantagefitblog.ghost.io',
        'content-api-key': 'a5f3bfdf2173b72ad44fbd4e08',
    };

    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
        h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
        readLaterPosts = [],
        lang = $('html').attr('lang'),
        noBookmarksMessage = $('.no-bookmarks').html(),
        monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    // var ghostAPI = new GhostContentAPI({
    //     host: config['content-api-host'],
    //     key: config['content-api-key'],
    //     version: 'v2'
    // });

    // Check 'read later' posts 
    // if (typeof Cookies.get('poveglia-read-later') !== "undefined") {
    //     readLaterPosts = JSON.parse(Cookies.get('poveglia-read-later'));
    // }

    // readLaterPosts = readLater($('#content .loop'), readLaterPosts);
    // readLaterPosts = readLater($('.related-posts loop'), readLaterPosts);
    // readLaterPosts = readLater($('.post-intro'), readLaterPosts);


    $('.search-trigger, .bookmark-trigger').on('click', function(event) {
        event.preventDefault();
    });   

    setGalleryRation(); 

    function closePopover(id){
        $(id).find('.close').on('click', function(event) {
            event.preventDefault();
            $(id).popover('hide');
        });
    }

    $('body').on('click', '.modal-backdrop', function(event) {
        event.preventDefault();
        $('.modal.show .close').click();
    });

    // // Initialize Disqus comments
    // if ($('#content').attr('data-id') && config['disqus-shortname'] != '') {

    //     $('.comments-trigger').on('click', function(event) {
    //         event.preventDefault();
    //         $(this).addClass('hidden');
    //         $('.comments').append('<div id="disqus_thread"></div>');

    //         var url = [location.protocol, '//', location.host, location.pathname].join('');
    //         var disqus_config = function () {
    //             this.page.url = url;
    //             this.page.identifier = $('#content').attr('data-id');
    //         };

    //         (function() {
    //         var d = document, s = d.createElement('script');
    //         s.src = '//'+ config['disqus-shortname'] +'.disqus.com/embed.js';
    //         s.setAttribute('data-timestamp', +new Date());
    //         (d.head || d.body).appendChild(s);
    //         })();
    //     });

    // };

    function getRootUrl(url) {
      return url.toString().replace(/^(.*\/\/[^\/?#]*).*$/,"$1");
    }

    // var ghostSearch = new GhostSearch({
    //     host: config['content-api-host'],
    //     key: config['content-api-key'],
    //     input: '#search-field',
    //     results: '#results',
    //     api: {
    //         parameters: { 
    //             fields: ['title', 'slug', 'published_at', 'primary_tag', 'id', 'feature_image'],
    //             include: 'tags',
    //         },
    //     },
    //     on: {
    //         afterDisplay: function(results){

    //             if (results.length) {

    //                 $('#results').empty();
                    
    //                 var tags = [];
    //                 $.each(results, function(index, val) {
    //                     if (val.obj.primary_tag) {
    //                         if ($.inArray(val.obj.primary_tag.name, tags) === -1) {
    //                             tags.push(val.obj.primary_tag.name);
    //                         };
    //                     }else{
    //                         if ($.inArray('Other', tags) === -1) {
    //                             tags.push('Other');
    //                         };
    //                     };
    //                 });

    //                 tags.sort();

    //                 $.each(tags, function(index, val) {
    //                     var tag = val;
    //                     if (val == 'Other') {
    //                         tag = $('#results').attr('data-other');
    //                     };
    //                     $('#results').append('<h3>'+ tag +'</h3><ul data-tag="'+ val +'" class="list-box loop row"></ul>');
    //                 });

    //                 $.each(results, function(index, val) {
    //                     var feature_image = '';
    //                     var classes = '';
    //                     var dateSplit = val.obj.published_at.split('T');
    //                     dateSplit = dateSplit[0].split('-');
    //                     var month = monthNames[dateSplit[1]-1];
    //                     var date = moment(dateSplit[2]+'-'+month+'-'+dateSplit[1], "DD-MM-YYYY").format('DD MMM YYYY');
    //                     if (val.obj.feature_image) {
    //                         if (val.obj.feature_image.substring(0, 4) == 'http') {
    //                             feature_image = 'style="background-image: url('+ val.obj.feature_image +');"';
    //                         }else{
    //                             val.obj.feature_image = val.obj.feature_image.replace("/images/", "/images/size/w167h125/");
    //                             feature_image = 'style="background-image: url('+ url + val.obj.feature_image +');"';
    //                         };
    //                         classes += 'featured-image';
    //                     }else{
    //                         classes += 'excerpt';
    //                     };
    //                     if (val.obj.primary_tag) {
    //                         $('#results ul[data-tag="'+ val.obj.primary_tag.name +'"]').append('<li class="col-md-4 item"><article class="post"><div class="post-inner-content"><div class="img-holder"> <a href="/'+ val.obj.slug +'/" class="'+ classes +'" title="'+ val.obj.title +'"' + feature_image + '></a> </div><div class="inner"><h2><a href="/'+ val.obj.slug +'/">'+ val.obj.title +'</a></h2><time>'+ date +'</time><a href="#" class="read-later" data-id="'+ val.obj.id +'"><i class="far fa-bookmark" data-toggle="tooltip" data-trigger="hover" data-placement="right" title="'+ $('#results').attr('data-bookmark-article') +'"></i><i class="fas fa-bookmark" data-toggle="tooltip" data-trigger="hover" data-placement="right" title="'+ $('#results').attr('data-remove-bookmark') +'"></i></a></div></div></article></li>');
    //                     }else{
    //                         $('#results ul[data-tag="Other"]').append('<li class="col-md-4 item"><article class="post"><div class="post-inner-content"><div class="img-holder"> <a href="/'+ val.obj.slug +'/" class="'+ classes +'" title="'+ val.obj.title +'"' + feature_image + '></a> </div><div class="inner"><h2><a href="/'+ val.obj.slug +'/">'+ val.obj.title +'</a></h2><time>'+ date +'</time><a href="#" class="read-later" data-id="'+ val.obj.id +'"><i class="far fa-bookmark" data-toggle="tooltip" data-trigger="hover" data-placement="right" title="'+ $('#results').attr('data-bookmark-article') +'"></i><i class="fas fa-bookmark" data-toggle="tooltip" data-trigger="hover" data-placement="right" title="'+ $('#results').attr('data-remove-bookmark') +'"></i></a></div></div></article></li>');
    //                     };
    //                 });

    //                 $('#results [data-toggle="tooltip"]').tooltip({
    //                     trigger: 'hover'
    //                 });                

    //                 readLaterPosts = readLater($('#results'), readLaterPosts);
                
    //             }else if($('#search-field').val().length && !results.length){
    //                 $('#results').append('<h3>'+ $('#results').attr('data-no-results') +'</h3><ul class="list-box loop row"><li class="col-md-12 item">'+ $('#results').attr('data-no-results-description') +'</li></ul>');
    //             };

    //         },
    //     }
    // })

    function readLater(content, readLaterPosts){

        if (typeof Cookies.get('poveglia-read-later') !== "undefined") {
            $.each(readLaterPosts, function(index, val) {
                $('.read-later[data-id="'+ val +'"]').addClass('active');
            });
            bookmarks(readLaterPosts);
        }
        
        $(content).find('.read-later').each(function(index, el) {
            $(this).on('click', function(event) {
                event.preventDefault();
                var id = $(this).attr('data-id');
                if ($(this).hasClass('active')) {
                    removeValue(readLaterPosts, id);
                }else{
                    readLaterPosts.push(id);
                };
                $('.read-later[data-id="'+ id +'"]').each(function(index, el) {
                    $(this).toggleClass('active');
                });
                $('header .counter').addClass('shake');
                setTimeout(function() {
                    $('header .counter').removeClass('shake');
                }, 300);
                Cookies.set('poveglia-read-later', readLaterPosts, { expires: 365 });
                bookmarks(readLaterPosts);
            });
        });

        return readLaterPosts;

    }

    function bookmarks(readLaterPosts){

        $('.bookmark-container').empty();

        readLaterPosts = readLaterPosts.filter(Boolean);

        if (readLaterPosts.length) {

            var url = [location.protocol, '//', location.host].join('');

            $('header .counter').removeClass('hidden').text(readLaterPosts.length);

            var filter = readLaterPosts.toString();
            filter = "id:["+filter+"]";

            ghostAPI.posts
                .browse({limit: 'all', filter: filter, include: 'tags'})
                .then((results) => {

                    $('.bookmark-container').empty();

                    var tags = [];
                    $.each(results, function(index, val) {
                        if (val.primary_tag) {
                            if ($.inArray(val.primary_tag.name, tags) === -1) {
                                tags.push(val.primary_tag.name);
                            };
                        }else{
                            if ($.inArray('Other', tags) === -1) {
                                tags.push('Other');
                            };
                        };
                    });
    
                    tags.sort();

                    $.each(tags, function(index, val) {
                        var tag = val;
                        if (val == 'Other') {
                            tag = $('.bookmark-container').attr('data-other');
                        };
                        $('.bookmark-container').append('<h3>'+ tag +'</h3><ul data-tag="'+ val +'" class="list-box loop row"></ul>');
                    });
    
                    $.each(results, function(index, val) {
                        var feature_image = '';
                        var classes = '';
                        var dateSplit = val.published_at.split('T');
                        dateSplit = dateSplit[0].split('-');
                        var month = monthNames[dateSplit[1]-1];
                        var date = moment(dateSplit[2]+'-'+month+'-'+dateSplit[1], "DD-MM-YYYY").format('DD MMM YYYY');
                        if (val.feature_image) {
                            if (val.feature_image.substring(0, 4) == 'http') {
                                feature_image = 'style="background-image: url('+ val.feature_image +');"';
                            }else{
                                val.feature_image = val.feature_image.replace("/images/", "/images/size/w167h125/");
                                feature_image = 'style="background-image: url('+ url + val.feature_image +');"';
                            };
                            classes += 'featured-image';
                        }else{
                            classes += 'excerpt';
                        };
                        if (val.primary_tag) {
                            $('.bookmark-container ul[data-tag="'+ val.primary_tag.name +'"]').append('<li class="col-md-4 item"><article class="post"><div class="post-inner-content"><div class="img-holder"> <a href="/'+ val.slug +'/" class="'+ classes +'" title="'+ val.title +'"' + feature_image + '></a> </div><div class="inner"><h2><a href="/'+ val.slug +'/">'+ val.title +'</a></h2><time>'+ date +'</time><a href="#" class="read-later active" data-id="'+ val.id +'"><i class="far fa-bookmark" data-toggle="tooltip" data-trigger="hover" data-placement="right" title="'+ $('#results').attr('data-bookmark-article') +'"></i><i class="fas fa-bookmark" data-toggle="tooltip" data-trigger="hover" data-placement="right" title="'+ $('#results').attr('data-remove-bookmark') +'"></i></a></div></div></article></li>');
                        }else{
                            $('.bookmark-container ul[data-tag="Other"]').append('<li class="col-md-4 item"><article class="post"><div class="post-inner-content"><div class="img-holder"> <a href="/'+ val.slug +'/" class="'+ classes +'" title="'+ val.title +'"' + feature_image + '></a> </div><div class="inner"><h2><a href="/'+ val.slug +'/">'+ val.title +'</a></h2><time>'+ date +'</time><a href="#" class="read-later active" data-id="'+ val.id +'"><i class="far fa-bookmark" data-toggle="tooltip" data-trigger="hover" data-placement="right" title="'+ $('#results').attr('data-bookmark-article') +'"></i><i class="fas fa-bookmark" data-toggle="tooltip" data-trigger="hover" data-placement="right" title="'+ $('#results').attr('data-remove-bookmark') +'"></i></a></div></div></article></li>');
                        };
                    });

                    $('.bookmark-container').find('.read-later').each(function(index, el) {
                        $(this).on('click', function(event) {
                            event.preventDefault();
                            var id = $(this).attr('data-id');
                            if ($(this).hasClass('active')) {
                                removeValue(readLaterPosts, id);
                            }else{
                                readLaterPosts.push(id);
                            };
                            $('.read-later[data-id="'+ id +'"]').each(function(index, el) {
                                $(this).toggleClass('active');
                            });
                            Cookies.set('poveglia-read-later', readLaterPosts, { expires: 365 });
                            bookmarks(readLaterPosts);
                        });
                    });

                    if (results) {
                        $('header .counter').removeClass('hidden').text(results.length);
                    }else{
                        $('header .counter').addClass('hidden');
                        $('.bookmark-container').append('<p class="no-bookmarks"></p>');
                        $('.no-bookmarks').html(noBookmarksMessage)
                    };

                })
                .catch((err) => {
                    console.error(err);
                });

        }else{
            $('header .counter').addClass('hidden');
            $('.bookmark-container').append('<p class="no-bookmarks"></p>');
            $('.no-bookmarks').html(noBookmarksMessage)
        };

    }

    function removeValue(arr) {
        var what, a = arguments, L = a.length, ax;
        while (L > 1 && arr.length) {
            what = a[--L];
            while ((ax= arr.indexOf(what)) !== -1) {
                arr.splice(ax, 1);
            }
        }
        return arr;
    }

    // On click outside popover, close it

    $(document).on('click', function (e) {
        $('[data-toggle="popover"],[data-original-title]').each(function () {
            if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {                
                // (($(this).popover('hide').data('bs.popover')||{}).inState||{}).click = false
            }
        });
    });

    var didScroll,
        lastScrollTop = 0,
        delta = 5;

    // Execute on load
    $(window).on('load', function(event) {

        setGalleryRation();

        $('.editor-content img, .inner-featured-image').each(function(index, el) {
            if (!$(this).parent().is("a")) {
                $( "<a href='" + $(this).attr('src') + "' class='zoom'></a>" ).insertAfter( $(this) );
                $(this).appendTo($(this).next("a"));
            };
        });

        // $('.zoom').fluidbox();

        $(window).on('scroll', function(event) {
            // $('.zoom').fluidbox('close');
        });

        var currentPage = 1;
        var pathname = window.location.pathname;
        var $result = $('.post');
        var step = 0;

        // remove hash params from pathname
        pathname = pathname.replace(/#(.*)$/g, '').replace('/\//g', '/');

        if ($('body').hasClass('paged')) {
            currentPage = parseInt(pathname.replace(/[^0-9]/gi, ''));
        }

        // Load more posts on click
        if (config['load-more'] && typeof maxPages !== 'undefined') {

            $('#load-posts').addClass('visible').removeClass('hidden');

            if (currentPage == maxPages) {
                $('#load-posts').addClass('finish').text($('#load-posts').attr('data-last'));
                return;
            };

            $('#load-posts').on('click', function(event) {
                event.preventDefault();

                var $this = $(this);

                // next page
                currentPage++;

                if ($('body').hasClass('paged')) {
                    pathname = '/';
                };

                // Load more
                var nextPage = pathname + 'page/' + currentPage + '/';

                if ($this.hasClass('step')) {
                    setTimeout(function() {
                       $this.removeClass('step');
                       step = 0;
                    }, 1000);
                };

                $.get(nextPage, function (content) {
                    step++;
                    var post = $(content).find('.item');
                    $('#content .loop').append( post );
                    $.each(post, function(index, val) {
                        var $this = $(this);
                        var id = $(this).find('.post').addClass('no-opacity').attr('data-id');
                        $('#content .loop').imagesLoaded( function() {
                            var animeOpts = {
                                duration: 800,
                                easing: [0.1,1,0.3,1],
                                delay: function(t,i) {
                                    return i*35;
                                },
                                opacity: {
                                    value: [0,1],
                                    duration: 600,
                                    easing: 'linear'
                                },
                                translateY: [200,0],
                                translateZ: [300,0],
                                rotateX: [75,0]
                            }
                            animeOpts.targets = '.item:not(.post-featured) .post[data-id="'+ id +'"]';
                            anime.remove(animeOpts.targets);
                            anime(animeOpts);

                            $('[data-toggle="tooltip"]').tooltip({
                                trigger : 'hover'
                            });

                            readLaterPosts = readLater($this, readLaterPosts);

                            if (currentPage == maxPages) {
                                $('#load-posts').addClass('finish').text('You\'ve reached the end of the list');
                                return;
                            };

                        });
                    });
                });
            });
        };

        if (config['infinite-scroll'] && config['load-more']) {
            var checkTimer = 'on';
            if ($('#load-posts').length > 0) {
                $(window).on('scroll', function(event) {
                    var timer;
                    if (isScrolledIntoView('#load-posts') && checkTimer == 'on' && step < config['infinite-scroll-step']) {
                        $('#load-posts').click();
                        checkTimer = 'off';
                        timer = setTimeout(function() {
                            checkTimer = 'on';
                            if (step == config['infinite-scroll-step']) {
                                $('#load-posts').addClass('step');
                            };
                        }, 1000);
                    };
                });
            };
        };
    });



    $('#search').on('shown.bs.modal', function () {
        $('#search-field').focus();
    })

    // Initialize Highlight.js
    $('pre code, pre').each(function(i, block) {
        hljs.highlightBlock(block);
    });

    // Execute on scroll
    var shareHeight = $('.content-inner .share ul').height();
    if ($(this).scrollTop() > 0) {
        $('body').addClass('scroll');
    }

    if ($('.post-template').length) {
        progressBar();
    };

    $('.go-up').on('click', function(event) {
        event.preventDefault();
        $('body,html').animate({
            scrollTop : 0
        }, 500);
    });

    $(window).on('scroll', function(event) {
        
        if ($(this).scrollTop() > 0) {
            $('body').addClass('scroll');
        }else{
            $('body').removeClass('scroll');
        };

        if ($('.post-template').length) {
            progressBar();
        };

    });

    // $('header .progress').tooltip({
    //     title: function(){
    //         return $('header .progress').attr('data-original-title');
    //     },
    //     trigger: 'hover',
    //     placement: 'bottom'
    // });

    // Progress bar for inner post
    function progressBar(){
        var postContentOffsetTop = $('.editor-content').offset().top;
        var postContentHeight = $('.editor-content').height();
        if ($(window).scrollTop() > postContentOffsetTop && $(window).scrollTop() < (postContentOffsetTop + postContentHeight)) {
            var heightPassed = $(window).scrollTop() - postContentOffsetTop;
            var percentage = heightPassed * 100/postContentHeight;
            $('.progress').css({
                width: percentage + '%'
            });
            $('.progress').parent().addClass('visible');
            $('.progress').attr('data-original-title', parseInt(percentage) + '% ' + $('.progress').attr('data-read'));
            if ($('.progress').attr('aria-describedby')) {
                $('#' + $('.progress').attr('aria-describedby')).find('.tooltip-inner').text(parseInt(percentage) + '% ' + $('.progress').attr('data-read'));
            };
        }else if($(window).scrollTop() < postContentOffsetTop){
            $('.progress').css({
                width: '0%'
            });
            $('.progress').parent().removeClass('visible');
        }else{
            $('.progress').css({
                width: '100%'
            });
            $('.progress').attr('data-original-title', '100% ' + $('.progress').attr('data-read'));
            if ($('.progress').attr('aria-describedby')) {
                $('#' + $('.progress').attr('aria-describedby')).find('.tooltip-inner').text('100% ' + $('.progress').attr('data-read'));
            };
        };
    }

    // Check if element is into view when scrolling
    function isScrolledIntoView(elem){
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();

        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();

        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }

    // Initialize bootstrap tootlip
    // $('[data-toggle="tooltip"]').tooltip({
    //     trigger : 'hover'
    // });

    // Validate subscribe form
    $(".gh-signin").each(function(index, el) {
        $(this).validate({
            rules: {
                email: {
                    required: true,
                    email: true
                },
            },
            submitHandler: function (form) {
                $(form).submit();              
            }
        });
    });

    // Validate formspree form
    $("form[action*='https://formspree.io/']").each(function(index, el) {
        $(this).validate({
            rules: {
                email: {
                    required: true,
                    email: true
                },
                message: {
                    required: true,
                },
            }
        });
    });

    // Initialize shareSelectedText
    // if (config['share-selected-text']) {
    //     shareSelectedText('.post-template .editor-content', {
    //         sanitize: true,
    //         buttons: [
    //             'twitter',
    //         ],
    //         tooltipTimeout: 250
    //     });
    // }; 

    if ($('.error-title').length) {
        $('body').addClass('error');
    };

    if ($('.tweets').length) {
        var twitter = $('.tweets').attr('data-twitter').substr(1);
        $('.tweets').append('<a class="twitter-timeline" data-width="100%" data-height="800" data-tweet-limit="3" data-chrome="noborders noheader nofooter transparent" href="https://twitter.com/'+ twitter +'?ref_src=twsrc%5Etfw"></a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>');
    };

    // function setMenu(w){
    //     if (w < 992) {
    //         $('header .nav').appendTo('#menu .modal-nav');
    //     }else{
    //         $('#menu .modal-nav .nav').appendTo('header .navigation');
    //         $('#menu').modal('hide');
    //     };
    // }

    // setMenu(w);

    $(window).on('resize', function(event) {
        w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        // setMenu(w);
    });

    // Set the right proportion for images inside the gallery
    function setGalleryRation(){
        $('.kg-gallery-image img').each(function(index, el) {
            var container = $(this).closest('.kg-gallery-image');
            var width = $(this)[0].naturalWidth;
            var height = $(this)[0].naturalHeight;
            var ratio = width / height;
            container.attr('style', 'flex: ' + ratio + ' 1 0%');
        });
    }
});
}


var trustAllScripts = function () {
    var scriptNodes = document.querySelectorAll('.load-external-scripts script');

    for (var i = 0; i < scriptNodes.length; i += 1) {
        var node = scriptNodes[i];
        var s = document.createElement('script');
        s.type = node.type || 'text/javascript';

        if (node.attributes.src) {
            s.src = node.attributes.src.value;
        } else {
            s.innerHTML = node.innerHTML;
        }

        document.getElementsByTagName('head')[0].appendChild(s);
    }
};

var ghostsearch = function(callback){
/**
 * ghost-search 1.1.0 (https://github.com/HauntedThemes/ghost-search)
 * A simple but powerful search library for Ghost Blogging Platform.
 * Copyright 2019 Haunted Themes (https://www.hauntedthemes.com)
 * Released under MIT License
 * Released on: 15 Nov 2019
 */

/*
WHAT: SublimeText-like Fuzzy Search

USAGE:
  fuzzysort.single('fs', 'Fuzzy Search') // {score: -16}
  fuzzysort.single('test', 'test') // {score: 0}
  fuzzysort.single('doesnt exist', 'target') // null

  fuzzysort.go('mr', ['Monitor.cpp', 'MeshRenderer.cpp'])
  // [{score: -18, target: "MeshRenderer.cpp"}, {score: -6009, target: "Monitor.cpp"}]

  fuzzysort.highlight(fuzzysort.single('fs', 'Fuzzy Search'), '<b>', '</b>')
  // <b>F</b>uzzy <b>S</b>earch
*/

// UMD (Universal Module Definition) for fuzzysort
;(function(root, UMD) {
    if(typeof define === 'function' && define.amd) define([], UMD)
    else if(typeof module === 'object' && module.exports) module.exports = UMD()
    else root.fuzzysort = UMD()
  })(this, function UMD() { function fuzzysortNew(instanceOptions) {
  
    var fuzzysort = {
  
      single: function(search, target, options) {
        if(!search) return null
        if(!isObj(search)) search = fuzzysort.getPreparedSearch(search)
  
        if(!target) return null
        if(!isObj(target)) target = fuzzysort.getPrepared(target)
  
        var allowTypo = options && options.allowTypo!==undefined ? options.allowTypo
          : instanceOptions && instanceOptions.allowTypo!==undefined ? instanceOptions.allowTypo
          : true
        var algorithm = allowTypo ? fuzzysort.algorithm : fuzzysort.algorithmNoTypo
        return algorithm(search, target, search[0])
        // var threshold = options && options.threshold || instanceOptions && instanceOptions.threshold || -9007199254740991
        // var result = algorithm(search, target, search[0])
        // if(result === null) return null
        // if(result.score < threshold) return null
        // return result
      },
  
      go: function(search, targets, options) {
        if(!search) return noResults
        search = fuzzysort.prepareSearch(search)
        var searchLowerCode = search[0]
  
        var threshold = options && options.threshold || instanceOptions && instanceOptions.threshold || -9007199254740991
        var limit = options && options.limit || instanceOptions && instanceOptions.limit || 9007199254740991
        var allowTypo = options && options.allowTypo!==undefined ? options.allowTypo
          : instanceOptions && instanceOptions.allowTypo!==undefined ? instanceOptions.allowTypo
          : true
        var algorithm = allowTypo ? fuzzysort.algorithm : fuzzysort.algorithmNoTypo
        var resultsLen = 0; var limitedCount = 0
        var targetsLen = targets.length
  
        // This code is copy/pasted 3 times for performance reasons [options.keys, options.key, no keys]
  
        // options.keys
        if(options && options.keys) {
          var scoreFn = options.scoreFn || defaultScoreFn
          var keys = options.keys
          var keysLen = keys.length
          for(var i = targetsLen - 1; i >= 0; --i) { var obj = targets[i]
            var objResults = new Array(keysLen)
            for (var keyI = keysLen - 1; keyI >= 0; --keyI) {
              var key = keys[keyI]
              var target = getValue(obj, key)
              if(!target) { objResults[keyI] = null; continue }
              if(!isObj(target)) target = fuzzysort.getPrepared(target)
  
              objResults[keyI] = algorithm(search, target, searchLowerCode)
            }
            objResults.obj = obj // before scoreFn so scoreFn can use it
            var score = scoreFn(objResults)
            if(score === null) continue
            if(score < threshold) continue
            objResults.score = score
            if(resultsLen < limit) { q.add(objResults); ++resultsLen }
            else {
              ++limitedCount
              if(score > q.peek().score) q.replaceTop(objResults)
            }
          }
  
        // options.key
        } else if(options && options.key) {
          var key = options.key
          for(var i = targetsLen - 1; i >= 0; --i) { var obj = targets[i]
            var target = getValue(obj, key)
            if(!target) continue
            if(!isObj(target)) target = fuzzysort.getPrepared(target)
  
            var result = algorithm(search, target, searchLowerCode)
            if(result === null) continue
            if(result.score < threshold) continue
  
            // have to clone result so duplicate targets from different obj can each reference the correct obj
            result = {target:result.target, _targetLowerCodes:null, _nextBeginningIndexes:null, score:result.score, indexes:result.indexes, obj:obj} // hidden
  
            if(resultsLen < limit) { q.add(result); ++resultsLen }
            else {
              ++limitedCount
              if(result.score > q.peek().score) q.replaceTop(result)
            }
          }
  
        // no keys
        } else {
          for(var i = targetsLen - 1; i >= 0; --i) { var target = targets[i]
            if(!target) continue
            if(!isObj(target)) target = fuzzysort.getPrepared(target)
  
            var result = algorithm(search, target, searchLowerCode)
            if(result === null) continue
            if(result.score < threshold) continue
            if(resultsLen < limit) { q.add(result); ++resultsLen }
            else {
              ++limitedCount
              if(result.score > q.peek().score) q.replaceTop(result)
            }
          }
        }
  
        if(resultsLen === 0) return noResults
        var results = new Array(resultsLen)
        for(var i = resultsLen - 1; i >= 0; --i) results[i] = q.poll()
        results.total = resultsLen + limitedCount
        return results
      },
  
      goAsync: function(search, targets, options) {
        var canceled = false
        var p = new Promise(function(resolve, reject) {
          if(!search) return resolve(noResults)
          search = fuzzysort.prepareSearch(search)
          var searchLowerCode = search[0]
  
          var q = fastpriorityqueue()
          var iCurrent = targets.length - 1
          var threshold = options && options.threshold || instanceOptions && instanceOptions.threshold || -9007199254740991
          var limit = options && options.limit || instanceOptions && instanceOptions.limit || 9007199254740991
          var allowTypo = options && options.allowTypo!==undefined ? options.allowTypo
            : instanceOptions && instanceOptions.allowTypo!==undefined ? instanceOptions.allowTypo
            : true
          var algorithm = allowTypo ? fuzzysort.algorithm : fuzzysort.algorithmNoTypo
          var resultsLen = 0; var limitedCount = 0
          function step() {
            if(canceled) return reject('canceled')
  
            var startMs = Date.now()
  
            // This code is copy/pasted 3 times for performance reasons [options.keys, options.key, no keys]
  
            // options.keys
            if(options && options.keys) {
              var scoreFn = options.scoreFn || defaultScoreFn
              var keys = options.keys
              var keysLen = keys.length
              for(; iCurrent >= 0; --iCurrent) { var obj = targets[iCurrent]
                var objResults = new Array(keysLen)
                for (var keyI = keysLen - 1; keyI >= 0; --keyI) {
                  var key = keys[keyI]
                  var target = getValue(obj, key)
                  if(!target) { objResults[keyI] = null; continue }
                  if(!isObj(target)) target = fuzzysort.getPrepared(target)
  
                  objResults[keyI] = algorithm(search, target, searchLowerCode)
                }
                objResults.obj = obj // before scoreFn so scoreFn can use it
                var score = scoreFn(objResults)
                if(score === null) continue
                if(score < threshold) continue
                objResults.score = score
                if(resultsLen < limit) { q.add(objResults); ++resultsLen }
                else {
                  ++limitedCount
                  if(score > q.peek().score) q.replaceTop(objResults)
                }
  
                if(iCurrent%1000/*itemsPerCheck*/ === 0) {
                  if(Date.now() - startMs >= 10/*asyncInterval*/) {
                    isNode?setImmediate(step):setTimeout(step)
                    return
                  }
                }
              }
  
            // options.key
            } else if(options && options.key) {
              var key = options.key
              for(; iCurrent >= 0; --iCurrent) { var obj = targets[iCurrent]
                var target = getValue(obj, key)
                if(!target) continue
                if(!isObj(target)) target = fuzzysort.getPrepared(target)
  
                var result = algorithm(search, target, searchLowerCode)
                if(result === null) continue
                if(result.score < threshold) continue
  
                // have to clone result so duplicate targets from different obj can each reference the correct obj
                result = {target:result.target, _targetLowerCodes:null, _nextBeginningIndexes:null, score:result.score, indexes:result.indexes, obj:obj} // hidden
  
                if(resultsLen < limit) { q.add(result); ++resultsLen }
                else {
                  ++limitedCount
                  if(result.score > q.peek().score) q.replaceTop(result)
                }
  
                if(iCurrent%1000/*itemsPerCheck*/ === 0) {
                  if(Date.now() - startMs >= 10/*asyncInterval*/) {
                    isNode?setImmediate(step):setTimeout(step)
                    return
                  }
                }
              }
  
            // no keys
            } else {
              for(; iCurrent >= 0; --iCurrent) { var target = targets[iCurrent]
                if(!target) continue
                if(!isObj(target)) target = fuzzysort.getPrepared(target)
  
                var result = algorithm(search, target, searchLowerCode)
                if(result === null) continue
                if(result.score < threshold) continue
                if(resultsLen < limit) { q.add(result); ++resultsLen }
                else {
                  ++limitedCount
                  if(result.score > q.peek().score) q.replaceTop(result)
                }
  
                if(iCurrent%1000/*itemsPerCheck*/ === 0) {
                  if(Date.now() - startMs >= 10/*asyncInterval*/) {
                    isNode?setImmediate(step):setTimeout(step)
                    return
                  }
                }
              }
            }
  
            if(resultsLen === 0) return resolve(noResults)
            var results = new Array(resultsLen)
            for(var i = resultsLen - 1; i >= 0; --i) results[i] = q.poll()
            results.total = resultsLen + limitedCount
            resolve(results)
          }
  
          isNode?setImmediate(step):step()
        })
        p.cancel = function() { canceled = true }
        return p
      },
  
      highlight: function(result, hOpen, hClose) {
        if(result === null) return null
        if(hOpen === undefined) hOpen = '<b>'
        if(hClose === undefined) hClose = '</b>'
        var highlighted = ''
        var matchesIndex = 0
        var opened = false
        var target = result.target
        var targetLen = target.length
        var matchesBest = result.indexes
        for(var i = 0; i < targetLen; ++i) { var char = target[i]
          if(matchesBest[matchesIndex] === i) {
            ++matchesIndex
            if(!opened) { opened = true
              highlighted += hOpen
            }
  
            if(matchesIndex === matchesBest.length) {
              highlighted += char + hClose + target.substr(i+1)
              break
            }
          } else {
            if(opened) { opened = false
              highlighted += hClose
            }
          }
          highlighted += char
        }
  
        return highlighted
      },
  
      prepare: function(target) {
        if(!target) return
        return {target:target, _targetLowerCodes:fuzzysort.prepareLowerCodes(target), _nextBeginningIndexes:null, score:null, indexes:null, obj:null} // hidden
      },
      prepareSlow: function(target) {
        if(!target) return
        return {target:target, _targetLowerCodes:fuzzysort.prepareLowerCodes(target), _nextBeginningIndexes:fuzzysort.prepareNextBeginningIndexes(target), score:null, indexes:null, obj:null} // hidden
      },
      prepareSearch: function(search) {
        if(!search) return
        return fuzzysort.prepareLowerCodes(search)
      },
  
  
  
      // Below this point is only internal code
      // Below this point is only internal code
      // Below this point is only internal code
      // Below this point is only internal code
  
  
  
      getPrepared: function(target) {
        if(target.length > 999) return fuzzysort.prepare(target) // don't cache huge targets
        var targetPrepared = preparedCache.get(target)
        if(targetPrepared !== undefined) return targetPrepared
        targetPrepared = fuzzysort.prepare(target)
        preparedCache.set(target, targetPrepared)
        return targetPrepared
      },
      getPreparedSearch: function(search) {
        if(search.length > 999) return fuzzysort.prepareSearch(search) // don't cache huge searches
        var searchPrepared = preparedSearchCache.get(search)
        if(searchPrepared !== undefined) return searchPrepared
        searchPrepared = fuzzysort.prepareSearch(search)
        preparedSearchCache.set(search, searchPrepared)
        return searchPrepared
      },
  
      algorithm: function(searchLowerCodes, prepared, searchLowerCode) {
        var targetLowerCodes = prepared._targetLowerCodes
        var searchLen = searchLowerCodes.length
        var targetLen = targetLowerCodes.length
        var searchI = 0 // where we at
        var targetI = 0 // where you at
        var typoSimpleI = 0
        var matchesSimpleLen = 0
  
        // very basic fuzzy match; to remove non-matching targets ASAP!
        // walk through target. find sequential matches.
        // if all chars aren't found then exit
        for(;;) {
          var isMatch = searchLowerCode === targetLowerCodes[targetI]
          if(isMatch) {
            matchesSimple[matchesSimpleLen++] = targetI
            ++searchI; if(searchI === searchLen) break
            searchLowerCode = searchLowerCodes[typoSimpleI===0?searchI : (typoSimpleI===searchI?searchI+1 : (typoSimpleI===searchI-1?searchI-1 : searchI))]
          }
  
          ++targetI; if(targetI >= targetLen) { // Failed to find searchI
            // Check for typo or exit
            // we go as far as possible before trying to transpose
            // then we transpose backwards until we reach the beginning
            for(;;) {
              if(searchI <= 1) return null // not allowed to transpose first char
              if(typoSimpleI === 0) { // we haven't tried to transpose yet
                --searchI
                var searchLowerCodeNew = searchLowerCodes[searchI]
                if(searchLowerCode === searchLowerCodeNew) continue // doesn't make sense to transpose a repeat char
                typoSimpleI = searchI
              } else {
                if(typoSimpleI === 1) return null // reached the end of the line for transposing
                --typoSimpleI
                searchI = typoSimpleI
                searchLowerCode = searchLowerCodes[searchI + 1]
                var searchLowerCodeNew = searchLowerCodes[searchI]
                if(searchLowerCode === searchLowerCodeNew) continue // doesn't make sense to transpose a repeat char
              }
              matchesSimpleLen = searchI
              targetI = matchesSimple[matchesSimpleLen - 1] + 1
              break
            }
          }
        }
  
        var searchI = 0
        var typoStrictI = 0
        var successStrict = false
        var matchesStrictLen = 0
  
        var nextBeginningIndexes = prepared._nextBeginningIndexes
        if(nextBeginningIndexes === null) nextBeginningIndexes = prepared._nextBeginningIndexes = fuzzysort.prepareNextBeginningIndexes(prepared.target)
        var firstPossibleI = targetI = matchesSimple[0]===0 ? 0 : nextBeginningIndexes[matchesSimple[0]-1]
  
        // Our target string successfully matched all characters in sequence!
        // Let's try a more advanced and strict test to improve the score
        // only count it as a match if it's consecutive or a beginning character!
        if(targetI !== targetLen) for(;;) {
          if(targetI >= targetLen) {
            // We failed to find a good spot for this search char, go back to the previous search char and force it forward
            if(searchI <= 0) { // We failed to push chars forward for a better match
              // transpose, starting from the beginning
              ++typoStrictI; if(typoStrictI > searchLen-2) break
              if(searchLowerCodes[typoStrictI] === searchLowerCodes[typoStrictI+1]) continue // doesn't make sense to transpose a repeat char
              targetI = firstPossibleI
              continue
            }
  
            --searchI
            var lastMatch = matchesStrict[--matchesStrictLen]
            targetI = nextBeginningIndexes[lastMatch]
  
          } else {
            var isMatch = searchLowerCodes[typoStrictI===0?searchI : (typoStrictI===searchI?searchI+1 : (typoStrictI===searchI-1?searchI-1 : searchI))] === targetLowerCodes[targetI]
            if(isMatch) {
              matchesStrict[matchesStrictLen++] = targetI
              ++searchI; if(searchI === searchLen) { successStrict = true; break }
              ++targetI
            } else {
              targetI = nextBeginningIndexes[targetI]
            }
          }
        }
  
        { // tally up the score & keep track of matches for highlighting later
          if(successStrict) { var matchesBest = matchesStrict; var matchesBestLen = matchesStrictLen }
          else { var matchesBest = matchesSimple; var matchesBestLen = matchesSimpleLen }
          var score = 0
          var lastTargetI = -1
          for(var i = 0; i < searchLen; ++i) { var targetI = matchesBest[i]
            // score only goes down if they're not consecutive
            if(lastTargetI !== targetI - 1) score -= targetI
            lastTargetI = targetI
          }
          if(!successStrict) {
            score *= 1000
            if(typoSimpleI !== 0) score += -20/*typoPenalty*/
          } else {
            if(typoStrictI !== 0) score += -20/*typoPenalty*/
          }
          score -= targetLen - searchLen
          prepared.score = score
          prepared.indexes = new Array(matchesBestLen); for(var i = matchesBestLen - 1; i >= 0; --i) prepared.indexes[i] = matchesBest[i]
  
          return prepared
        }
      },
  
      algorithmNoTypo: function(searchLowerCodes, prepared, searchLowerCode) {
        var targetLowerCodes = prepared._targetLowerCodes
        var searchLen = searchLowerCodes.length
        var targetLen = targetLowerCodes.length
        var searchI = 0 // where we at
        var targetI = 0 // where you at
        var matchesSimpleLen = 0
  
        // very basic fuzzy match; to remove non-matching targets ASAP!
        // walk through target. find sequential matches.
        // if all chars aren't found then exit
        for(;;) {
          var isMatch = searchLowerCode === targetLowerCodes[targetI]
          if(isMatch) {
            matchesSimple[matchesSimpleLen++] = targetI
            ++searchI; if(searchI === searchLen) break
            searchLowerCode = searchLowerCodes[searchI]
          }
          ++targetI; if(targetI >= targetLen) return null // Failed to find searchI
        }
  
        var searchI = 0
        var successStrict = false
        var matchesStrictLen = 0
  
        var nextBeginningIndexes = prepared._nextBeginningIndexes
        if(nextBeginningIndexes === null) nextBeginningIndexes = prepared._nextBeginningIndexes = fuzzysort.prepareNextBeginningIndexes(prepared.target)
        var firstPossibleI = targetI = matchesSimple[0]===0 ? 0 : nextBeginningIndexes[matchesSimple[0]-1]
  
        // Our target string successfully matched all characters in sequence!
        // Let's try a more advanced and strict test to improve the score
        // only count it as a match if it's consecutive or a beginning character!
        if(targetI !== targetLen) for(;;) {
          if(targetI >= targetLen) {
            // We failed to find a good spot for this search char, go back to the previous search char and force it forward
            if(searchI <= 0) break // We failed to push chars forward for a better match
  
            --searchI
            var lastMatch = matchesStrict[--matchesStrictLen]
            targetI = nextBeginningIndexes[lastMatch]
  
          } else {
            var isMatch = searchLowerCodes[searchI] === targetLowerCodes[targetI]
            if(isMatch) {
              matchesStrict[matchesStrictLen++] = targetI
              ++searchI; if(searchI === searchLen) { successStrict = true; break }
              ++targetI
            } else {
              targetI = nextBeginningIndexes[targetI]
            }
          }
        }
  
        { // tally up the score & keep track of matches for highlighting later
          if(successStrict) { var matchesBest = matchesStrict; var matchesBestLen = matchesStrictLen }
          else { var matchesBest = matchesSimple; var matchesBestLen = matchesSimpleLen }
          var score = 0
          var lastTargetI = -1
          for(var i = 0; i < searchLen; ++i) { var targetI = matchesBest[i]
            // score only goes down if they're not consecutive
            if(lastTargetI !== targetI - 1) score -= targetI
            lastTargetI = targetI
          }
          if(!successStrict) score *= 1000
          score -= targetLen - searchLen
          prepared.score = score
          prepared.indexes = new Array(matchesBestLen); for(var i = matchesBestLen - 1; i >= 0; --i) prepared.indexes[i] = matchesBest[i]
  
          return prepared
        }
      },
  
      prepareLowerCodes: function(str) {
        var strLen = str.length
        var lowerCodes = [] // new Array(strLen)    sparse array is too slow
        var lower = str.toLowerCase()
        for(var i = 0; i < strLen; ++i) lowerCodes[i] = lower.charCodeAt(i)
        return lowerCodes
      },
      prepareBeginningIndexes: function(target) {
        var targetLen = target.length
        var beginningIndexes = []; var beginningIndexesLen = 0
        var wasUpper = false
        var wasAlphanum = false
        for(var i = 0; i < targetLen; ++i) {
          var targetCode = target.charCodeAt(i)
          var isUpper = targetCode>=65&&targetCode<=90
          var isAlphanum = isUpper || targetCode>=97&&targetCode<=122 || targetCode>=48&&targetCode<=57
          var isBeginning = isUpper && !wasUpper || !wasAlphanum || !isAlphanum
          wasUpper = isUpper
          wasAlphanum = isAlphanum
          if(isBeginning) beginningIndexes[beginningIndexesLen++] = i
        }
        return beginningIndexes
      },
      prepareNextBeginningIndexes: function(target) {
        var targetLen = target.length
        var beginningIndexes = fuzzysort.prepareBeginningIndexes(target)
        var nextBeginningIndexes = [] // new Array(targetLen)     sparse array is too slow
        var lastIsBeginning = beginningIndexes[0]
        var lastIsBeginningI = 0
        for(var i = 0; i < targetLen; ++i) {
          if(lastIsBeginning > i) {
            nextBeginningIndexes[i] = lastIsBeginning
          } else {
            lastIsBeginning = beginningIndexes[++lastIsBeginningI]
            nextBeginningIndexes[i] = lastIsBeginning===undefined ? targetLen : lastIsBeginning
          }
        }
        return nextBeginningIndexes
      },
  
      cleanup: cleanup,
      new: fuzzysortNew,
    }
    return fuzzysort
  } // fuzzysortNew
  
  // This stuff is outside fuzzysortNew, because it's shared with instances of fuzzysort.new()
  var isNode = typeof require !== 'undefined' && typeof window === 'undefined'
  // var MAX_INT = Number.MAX_SAFE_INTEGER
  // var MIN_INT = Number.MIN_VALUE
  var preparedCache = new Map()
  var preparedSearchCache = new Map()
  var noResults = []; noResults.total = 0
  var matchesSimple = []; var matchesStrict = []
  function cleanup() { preparedCache.clear(); preparedSearchCache.clear(); matchesSimple = []; matchesStrict = [] }
  function defaultScoreFn(a) {
    var max = -9007199254740991
    for (var i = a.length - 1; i >= 0; --i) {
      var result = a[i]; if(result === null) continue
      var score = result.score
      if(score > max) max = score
    }
    if(max === -9007199254740991) return null
    return max
  }
  
  // prop = 'key'              2.5ms optimized for this case, seems to be about as fast as direct obj[prop]
  // prop = 'key1.key2'        10ms
  // prop = ['key1', 'key2']   27ms
  function getValue(obj, prop) {
    var tmp = obj[prop]; if(tmp !== undefined) return tmp
    var segs = prop
    if(!Array.isArray(prop)) segs = prop.split('.')
    var len = segs.length
    var i = -1
    while (obj && (++i < len)) obj = obj[segs[i]]
    return obj
  }
  
  function isObj(x) { return typeof x === 'object' } // faster as a function
  
  // Hacked version of https://github.com/lemire/FastPriorityQueue.js
  var fastpriorityqueue=function(){var r=[],o=0,e={};function n(){for(var e=0,n=r[e],c=1;c<o;){var f=c+1;e=c,f<o&&r[f].score<r[c].score&&(e=f),r[e-1>>1]=r[e],c=1+(e<<1)}for(var a=e-1>>1;e>0&&n.score<r[a].score;a=(e=a)-1>>1)r[e]=r[a];r[e]=n}return e.add=function(e){var n=o;r[o++]=e;for(var c=n-1>>1;n>0&&e.score<r[c].score;c=(n=c)-1>>1)r[n]=r[c];r[n]=e},e.poll=function(){if(0!==o){var e=r[0];return r[0]=r[--o],n(),e}},e.peek=function(e){if(0!==o)return r[0]},e.replaceTop=function(o){r[0]=o,n()},e};
  var q = fastpriorityqueue() // reuse this, except for async, it needs to make its own
  
  return fuzzysortNew()
  }) // UMD
  
  // TODO: (performance) wasm version!?
  
  // TODO: (performance) layout memory in an optimal way to go fast by avoiding cache misses
  
  // TODO: (performance) preparedCache is a memory leak
  
  // TODO: (like sublime) backslash === forwardslash
  
  // TODO: (performance) i have no idea how well optizmied the allowing typos algorithm is
  
  'use strict';
  /**
   * @requires ../node_modules/fuzzysort/fuzzysort.js
   */
  
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  
  function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
  
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
  
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
  
  var GhostSearch =
  /*#__PURE__*/
  function () {
    function GhostSearch(args) {
      _classCallCheck(this, GhostSearch);
  
      this.check = false;
      var defaults = {
        url: '',
        key: '',
        version: 'v3',
        input: '#ghost-search-field',
        results: '#ghost-search-results',
        button: '',
        defaultValue: '',
        template: function template(result) {
          var url = [location.protocol, '//', location.url].join('');
          return '<a href="' + url + '/' + result.slug + '/">' + result.title + '</a>';
        },
        trigger: 'focus',
        options: {
          keys: ['title'],
          limit: 10,
          threshold: -3500,
          allowTypo: false
        },
        api: {
          resource: 'posts',
          parameters: {
            limit: 'all',
            fields: ['title', 'slug'],
            filter: '',
            include: '',
            order: '',
            formats: '',
            page: ''
          }
        },
        on: {
          beforeDisplay: function beforeDisplay() {},
          afterDisplay: function afterDisplay(results) {},
          beforeFetch: function beforeFetch() {},
          afterFetch: function afterFetch(results) {}
        }
      };
      var merged = this.mergeDeep(defaults, args);
      Object.assign(this, merged);
      this.init();
    }
  
    _createClass(GhostSearch, [{
      key: "mergeDeep",
      value: function mergeDeep(target, source) {
        var _this = this;
  
        if (target && _typeof(target) === 'object' && !Array.isArray(target) && target !== null && source && _typeof(source) === 'object' && !Array.isArray(source) && source !== null) {
          Object.keys(source).forEach(function (key) {
            if (source[key] && _typeof(source[key]) === 'object' && !Array.isArray(source[key]) && source[key] !== null) {
              if (!target[key]) Object.assign(target, _defineProperty({}, key, {}));
  
              _this.mergeDeep(target[key], source[key]);
            } else {
              Object.assign(target, _defineProperty({}, key, source[key]));
            }
          });
        }
  
        return target;
      }
    }, {
      key: "fetch",
      value: function fetch() {
        var _this2 = this;
  
        this.on.beforeFetch();
        var ghostAPI = new GhostContentAPI({
          url: this.url,
          key: this.key,
          version: this.version
        });
        var browse = {};
        var parameters = this.api.parameters;
  
        for (var key in parameters) {
          if (parameters[key] != '') {
            browse[key] = parameters[key];
          }
        }
  
        ghostAPI[this.api.resource].browse(browse).then(function (data) {
          _this2.search(data);
        })["catch"](function (err) {
          console.error(err);
        });
      }
    }, {
      key: "createElementFromHTML",
      value: function createElementFromHTML(htmlString) {
        var div = document.createElement('div');
        div.innerHTML = htmlString.trim();
        return div.firstChild;
      }
    }, {
      key: "displayResults",
      value: function displayResults(data) {
        if (document.querySelectorAll(this.results)[0].firstChild !== null && document.querySelectorAll(this.results)[0].firstChild !== '') {
          while (document.querySelectorAll(this.results)[0].firstChild) {
            document.querySelectorAll(this.results)[0].removeChild(document.querySelectorAll(this.results)[0].firstChild);
          }
        }
  
        ;
        var inputValue = document.querySelectorAll(this.input)[0].value;
  
        if (this.defaultValue != '') {
          inputValue = this.defaultValue;
        }
  
        var results = fuzzysort.go(inputValue, data, {
          keys: this.options.keys,
          limit: this.options.limit,
          allowTypo: this.options.allowTypo,
          threshold: this.options.threshold
        });
  
        for (var key in results) {
          if (key < results.length) {
            document.querySelectorAll(this.results)[0].appendChild(this.createElementFromHTML(this.template(results[key].obj)));
          }
  
          ;
        }
  
        this.on.afterDisplay(results);
        this.defaultValue = '';
      }
    }, {
      key: "search",
      value: function search(data) {
        var _this3 = this;
  
        this.on.afterFetch(data);
        this.check = true;
  
        if (this.defaultValue != '') {
          this.on.beforeDisplay();
          this.displayResults(data);
        }
  
        if (this.button != '') {
          var button = document.querySelectorAll(this.button)[0];
  
          if (button.tagName == 'INPUT' && button.type == 'submit') {
            button.closest('form').addEventListener("submit", function (e) {
              e.preventDefault();
            });
          }
  
          ;
          button.addEventListener('click', function (e) {
            e.preventDefault();
  
            _this3.on.beforeDisplay();
  
            _this3.displayResults(data);
          });
        } else {
          document.querySelectorAll(this.input)[0].addEventListener('keyup', function (e) {
            _this3.on.beforeDisplay();
  
            _this3.displayResults(data);
          });
        }
  
        ;
      }
    }, {
      key: "checkArgs",
      value: function checkArgs() {
        if (!document.querySelectorAll(this.input).length) {
          console.log('Input not found.');
          return false;
        }
  
        if (!document.querySelectorAll(this.results).length) {
          console.log('Results not found.');
          return false;
        }
  
        ;
  
        if (this.button != '') {
          if (!document.querySelectorAll(this.button).length) {
            console.log('Button not found.');
            return false;
          }
  
          ;
        }
  
        if (this.url == '') {
          console.log('Content API Client Library host missing. Please set the host. Must not end in a trailing slash.');
          return false;
        }
  
        ;
  
        if (this.key == '') {
          console.log('Content API Client Library key missing. Please set the key. Hex string copied from the "Integrations" screen in Ghost Admin.');
          return false;
        }
  
        ;
        return true;
      }
    }, {
      key: "validate",
      value: function validate() {
        if (!this.checkArgs()) {
          return false;
        }
  
        ;
        return true;
      }
    }, {
      key: "init",
      value: function init() {
        var _this4 = this;
  
        if (!this.validate()) {
          return;
        }
  
        if (this.defaultValue != '') {
          document.querySelectorAll(this.input)[0].value = this.defaultValue;
  
          window.onload = function () {
            if (!_this4.check) {
              _this4.fetch();
            }
  
            ;
          };
        }
  
        if (this.trigger == 'focus') {
          document.querySelectorAll(this.input)[0].addEventListener('focus', function (e) {
            if (!_this4.check) {
              _this4.fetch();
            }
  
            ;
          });
        } else if (this.trigger == 'load') {
          window.onload = function () {
            if (!_this4.check) {
              _this4.fetch();
            }
  
            ;
          };
        }
      }
    }]);
  
    return GhostSearch;
  }();
  //# sourceMappingURL=ghost-search.js.map
}

exports.onRouteUpdate = function () {

       
    
    //     addScript("https://res.cloudinary.com/dstkxhnrv/raw/upload/v1600331281/con_ukaiay.js")
    //     addScript("https://res.cloudinary.com/dstkxhnrv/raw/upload/v1600328361/gs_c8wv0g.js")        
    //     addScript("https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.18.1/moment.min.js")

    //     setTimeout(function(){ 
        
    //     var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


    //     let ghostSearch = new GhostSearch({
    //     url: `https://vantagefitblog.ghost.io`,
    //     key: `a5f3bfdf2173b72ad44fbd4e08`,
    //     input: '#search-field',
    //     results: '#results',
    //     api: {
    //         parameters: { 
    //             fields: ['title', 'slug', 'published_at', 'primary_tag', 'id', 'feature_image'],
    //             include: 'tags',
    //         },
    //     },
    //     on: {
    //         afterDisplay: function(results){
    //             console.log(results)

    //             if (results.length) {

    //                 $('#results').empty();
                    
    //                 var tags = [];
    //                 $.each(results, function(index, val) {
    //                     if (val.obj.primary_tag) {
    //                         console.log('tag ase')
    //                         if ($.inArray(val.obj.primary_tag.name, tags) === -1) {
    //                             tags.push(val.obj.primary_tag.name);
    //                         };
    //                     }else{
    //                         console.log('tag nai')
    //                         if ($.inArray('Other', tags) === -1) {
    //                             // console.log('tag nai jodiu')
    //                             tags.push('Other');
    //                         };
    //                     };
    //                 });
    //                 console.log(tags)
    //                 tags.sort();

    //                 $.each(tags, function(index, val) {
    //                     var tag = val;
    //                     console.log(val)
    //                     if (val === 'Other') {
    //                         tag = $('#results').attr('data-other');
    //                     };

    //                     $('#results').append('<h3>'+ val +'</h3><ul data-tag="'+ val +'" class="list-box loop row"></ul>');
    //                 });
    //                 // return;

    //                 $.each(results, function(index, val) {
    //                     var feature_image = '';
    //                     var classes = '';
    //                     var dateSplit = val.obj.published_at.split('T');
    //                     dateSplit = dateSplit[0].split('-');
    //                     var month = monthNames[dateSplit[1]-1];
    //                     var date = moment(dateSplit[2]+'-'+month+'-'+dateSplit[1], "DD-MM-YYYY").format('DD MMM YYYY');
    //                     if (val.obj.feature_image) {
    //                         if (val.obj.feature_image.substring(0, 4) == 'http') {
    //                             console.log('dd')
    //                             feature_image = 'style="background-image: url('+ val.obj.feature_image +');"';
    //                         }else{
    //                             // val.obj.feature_image = val.obj.feature_image.replace("/images/", "/images/size/w167h125/");
    //                             feature_image = 'style="background-image: url('+ url + val.obj.feature_image +');"';
    //                         };
    //                         classes += 'featured-image';
    //                         classes += ' image_search';

                            
    //                     }else{
    //                         classes += 'excerpt';
    //                     };
    //                     if (val.obj.primary_tag) {
    //                         $('#results ul[data-tag="'+ val.obj.primary_tag.name +'"]').append('<li class="col-md-4 item"><article class="post"><div class="post-inner-content"><div class="img-holder"> <a href="/'+ val.obj.slug +'/" class="'+ classes +'" title="'+ val.obj.title +'"' + feature_image + '></a> </div><div class="inner"><h2><a href="/'+ val.obj.slug +'/">'+ val.obj.title +'</a></h2><time>'+ date +'</time><a href="#" class="read-later" data-id="'+ val.obj.id +'"><i class="far fa-bookmark" data-toggle="tooltip" data-trigger="hover" data-placement="right" title="'+ $('#results').attr('data-bookmark-article') +'"></i><i class="fas fa-bookmark" data-toggle="tooltip" data-trigger="hover" data-placement="right" title="'+ $('#results').attr('data-remove-bookmark') +'"></i></a></div></div></article></li>');
    //                     }else{
    //                         $('#results ul[data-tag="Other"]').append('<li class="col-md-4 item"><article class="post"><div class="post-inner-content"><div class="img-holder"> <a href="/'+ val.obj.slug +'/" class="'+ classes +'" title="'+ val.obj.title +'"' + feature_image + '></a> </div><div class="inner"><h2><a href="/'+ val.obj.slug +'/">'+ val.obj.title +'</a></h2><time>'+ date +'</time><a href="#" class="read-later" data-id="'+ val.obj.id +'"><i class="far fa-bookmark" data-toggle="tooltip" data-trigger="hover" data-placement="right" title="'+ $('#results').attr('data-bookmark-article') +'"></i><i class="fas fa-bookmark" data-toggle="tooltip" data-trigger="hover" data-placement="right" title="'+ $('#results').attr('data-remove-bookmark') +'"></i></a></div></div></article></li>');
    //                     };
    //                 });

    //                 // $('#results [data-toggle="tooltip"]').tooltip({
    //                 //     trigger: 'hover'
    //                 // });                

    //                 // readLaterPosts = readLater($('#results'), readLaterPosts);
                
    //             }else if($('#search-field').val().length && !results.length){
    //                 $('#results').append('<h3>'+ $('#results').attr('data-no-results') +'</h3><ul class="list-box loop row"><li class="col-md-12 item">'+ $('#results').attr('data-no-results-description') +'</li></ul>');
    //             };

    //         },
    //     }
    // })
        
    //     }, 3000);

    trustAllScripts();
    customjquery();
};


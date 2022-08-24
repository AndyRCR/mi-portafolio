import React, { useEffect } from 'react'
import './BlastText.css'
import $ from 'jquery'
import Blast from 'blast-vanilla'

const BlastText = ({ text }) => {

    new Blast('.blast-root', {
        returnGenerated: true,
        delimiter: 'character',
        search: false,
        customClass: '',
        aria: true,
        debug: false,
        name: 'blast'
    })
    
    for (let i = 1; i <= 4; i++) {
        let a = 0;

        $(`.home-page-${i} .blast`).each(function () {
            if (a === 300) {
                a = 400;
            }

            if (a === 1200) {
                a = 1400;
            }

            var el = $(this);

            setTimeout(function () {
                el.addClass("animated bounceIn");
            }, a);

            if (a < 1200) {
                a = a + 50;
            } else {
                a = a + 35;
            }
        });
        setTimeout(function () {
            $(`.home-page-${i} .blast`).removeClass("animated bounceIn");
            $(`.home-page-${i} .blast`).css("opacity", 1);

            $(`.home-page-${i} .blast`).mouseenter(function () {
                var el = $(this);

                $(this).addClass("animated rubberBand");
                $(this).one(
                    "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
                    function () {
                        el.removeClass("animated rubberBand");
                    }
                );
            });
        }, 3000);

        setTimeout(function () {
            $(`.home-page-${i} .flat-button`).addClass("animated bounceIn");
            $(`.home-page-${i} .flat-button`).one(
                "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
                function () {
                    $(`.home-page-${i} .flat-button`).removeClass("animated bounceIn");
                    $(`.home-page-${i} .flat-button`).css("opacity", 1);
                }
            );
        }, 2000);

        $(`.home-page-${i} .flat-button`).mouseenter(function () {
            var el = $(this);

            $(this).addClass("animated rubberBand");
            $(this).one(
                "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
                function () {
                    el.removeClass("animated rubberBand");
                }
            );
        });
    }

    useEffect(() => {
        
    }, [])


    return (
        <>
            {text === 'main' && (
                <h1 aria-label={text} className="blast-root">
                    Hi! I'm Andy Canales,<br />a web developer
                </h1>
            )}

            {text === 'about' && (
                <h1 aria-label={text} className="blast-root">
                    A little<br />about me...
                </h1>
            )}

            {text === 'moreabout' && (
                <h1 aria-label={text} className="blast-root">
                    A little<br />more about me...
                </h1>
            )}

            {text === 'skills' && (
                <h1 aria-label={text} className="blast-root">
                    Skills and<br />experience
                </h1>
            )}

            {text === 'projects' && (
                <h1 aria-label={text} className="blast-root">
                    Latest projects
                </h1>
            )}

            {text === 'contact' && (
                <h1 aria-label={text} className="blast-root">
                    Contact me!
                </h1>
            )}
        </>

    )
}

export default BlastText
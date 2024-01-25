import React from 'react'
import Awansom from '../components/Awansom';
import Backtotop from '../components/Backtotp';
import Footersec from '../components/Footersec';
import Hosting from '../components/Hosting';
import Lamon from '../components/Lamon';
import Navsec from '../components/Navsec';
import Preloader from '../components/Preloader';
import Premium from '../components/Premium';
import Stories from '../components/Stories';
import Timemap from '../components/Timemap';
import Websites from '../components/Websites';

function Services() {
    return (
        <div>
            <Preloader/>
            <Navsec />
            <Premium />
            <Hosting />
            <Timemap />
            <Lamon />
            <Stories />
            <Websites />
            <Awansom />
            <Footersec />
            <Backtotop />
        </div>
    )
}

export default Services

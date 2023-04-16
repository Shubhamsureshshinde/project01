import React from 'react'
import './HomeScreen.css'
import Nav from './Nav'
import Banner from './Banner';
import requests from './Requests';
import Row from './Row'
import profileScreen from './ProfileScreen';
function HomeScreen() {
    return (
        <div >
            <Nav />
            <profileScreen />

            <Banner />
            <Row isLargeRow title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} />
            <Row title="NETFLIX TRENDINGS" fetchUrl={requests.fetchTrending} />
            <Row title="TOP RATED" fetchUrl={requests.fetchTopRated} />
            <Row title="UPCOMING" fetchUrl={requests.fetchUpComing} />
            <Row title="POPULAR" fetchUrl={requests.fetchPopular} />
            <Row title="ACTION" fetchUrl={requests.fetchTopRated} />
            <Row title="COMEDY" fetchUrl={requests.fetchNetflixOriginals} />
            <Row title="DOCUMENTRIES" fetchUrl={requests.fetchTrending} />
            <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchTopRated} />

        </div>
    )
}

export default HomeScreen
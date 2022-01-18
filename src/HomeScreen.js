import React from 'react'
import Banner from './Banner';
import "./HomeScreen.css";
import Nav from './Nav';
import requests from './Requests';
import Row from './Row';

function HomeScreen(){
    return  <div className='homeScreen'>
        <Nav />
  
        <Banner />
        
        <Row 
            title = 'NETFLIX ORIGINALS'
            fetchUrl = {requests.fetchNetflixOriginals}
            isLargeRow
        />
        <Row 
            title = 'Trending Now'
            fetchUrl = {requests.fetchTrending}
            
        />
        <Row 
            title = 'Top Rated'
            fetchUrl = {requests.fetchTopRated}
            
        />
        <Row 
            title = 'Action Movie'
            fetchUrl = {requests.fetchAction}
            
        />
        <Row 
            title = 'Comedy Movies'
            fetchUrl = {requests.fetchComedy}
            
        />
        <Row 
            title = 'Horror Movies'
            fetchUrl = {requests.fetchHorror}
            
        />
        <Row 
            title = 'Romance Movies'
            fetchUrl = {requests.fetchRomance}
            
        />
        <Row 
            title = 'Documentaries'
            fetchUrl = {requests.fetchDocumentaries}
            
        />

        </div>;
    
}

export default HomeScreen
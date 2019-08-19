import React, { Component } from 'react';
import SeriesList from '../../components/SeriesList';
import Loader from '../../components/Loader'
import Intro from '../../components/Intro';

class Series extends Component {

  state = {
    series: [],
    seriesName: '',
    isFetching: false
  }

  componentDidMount() {
    /*const series = ["Vikings","Game of Thrones"];

    setTimeout(() => {
      this.setState({series});
    },2000)

    fetch('http://api.tvmaze.com/search/shows?q=Vikings')
         .then(response => response.json())
         .then(json => this.setState({ series: json}))*/
  }

  onSeriesInputChange = e => {

    this.setState({ seriesName: e.target.value, isFetching: true})

    fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
        .then(response => response.json())
        .then(json => this.setState({ series: json,isFetching: false}));
  }

    render() {
      const { series,seriesName,isFetching} =this.state;

        return (
            <div>
                <Intro message="Here you can find all of yours most loved series"/> 
                <div>
                  <input type="text" value={seriesName} onChange={this.onSeriesInputChange}/>
                </div>
                { 
                  !isFetching && series.length === 0 && seriesName.trim() === ''
                  &&
                   <p>Please enter the series name into the input</p>
                }
                {
                  !isFetching && series.length === 0 && seriesName.trim() !== ''
                  &&
                  <p>No TV series have been found with this name</p>
                }
                {
                  isFetching && <Loader/>
                }
                {
                  !isFetching && <SeriesList list={this.state.series}/>
                }
                
            </div>
        )
    }
}

export default Series;
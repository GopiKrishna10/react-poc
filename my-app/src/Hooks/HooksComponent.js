import React, { Fragment, useState } from 'react';
import { UserProvider } from './contextTypes';
import DataToDisplayComponent from './DataToDisplay';
import axios from 'axios';

const HooksComponent = () => {
    const [data, setData] = useState([]);

    function getData() {
        axios.get(`https://newsapi.org/v1/articles?source=cnn&apiKey=c39a26d9c12f48dba2a5c00e35684ecc`)
            .then(res => {
                const news = res.data.articles;
                console.log('========',news);
                setData(news);
            })
    }
    return (
        <Fragment>
            <div>
                <button onClick={getData}>Click to get Data</button>
            </div>
            <UserProvider value={data}>
                <DataToDisplayComponent />
            </UserProvider>
        </Fragment>
    )
}

export default HooksComponent;
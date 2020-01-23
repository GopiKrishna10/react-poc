import React, { Fragment, useState } from 'react';
import { UserProvider } from './contextTypes';
import DataToDisplayComponent from './DataToDisplay';
import axios from 'axios';
import { url } from '../sharedContent';
import { dataReducer, initialData } from './DataReducer';
import { btnStyles, btnBlock, loadingStyles } from '../sharedContent'


const HooksComponent = () => {
    const [loading, setLoading] = useState(false);
    const [content, dispatch] = React.useReducer(dataReducer, initialData);

    function deleteThing(selectedItem) {
        const filteredItems = content.list.filter(item => item.title !== selectedItem.title)
        dispatch({ type: 'SET_LIST', list: filteredItems });
    }

    function getData() {
        setLoading(true);
        axios.get(url)
            .then(res => {
                const news = res.data.articles;
                if (news.length) {
                    dispatch({ type: 'SET_LIST', list: news });
                    setLoading(false);
                }
            })
    }

    const Loading = () => (

        loading ?
            <div style={loadingStyles}>
                <h1>LOADING...</h1>
            </div> :
            null
    );
    const Button = () => (
        <div style={btnBlock}>
            <button style={btnStyles} onClick={getData}>Get Data By Hooks</button>
        </div>
    );
    return (
        <Fragment>
            <Button />
            <UserProvider value={content.list}>
                <DataToDisplayComponent deleteThing={deleteThing} />
                <Loading />
            </UserProvider>
        </Fragment>
    )
}

export default HooksComponent;
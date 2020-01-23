import React, { Fragment } from 'react';
import UserContext from './contextTypes';

const DataToDisplayComponent = (props) => {
    const news = React.useContext(UserContext);
    function deleteArticle(article) {
        props.deleteThing(article);
    }
    const renderData = () => {
        return (<ul>
            {news && news.map((article,index) => {
                return article.title && <li key={article.title + index}><div >
                    <h5>{article.title} <button onClick={() => deleteArticle(article)}>X</button></h5>                    
                </div></li>
            })}
        </ul>
        )
    }
    return (
        <Fragment>
            {renderData()}
        </Fragment>

    )
};

export default DataToDisplayComponent;
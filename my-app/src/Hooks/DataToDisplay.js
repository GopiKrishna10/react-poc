import React, { Fragment } from 'react';
import UserContext from './contextTypes';

const imgStyle = {
    hight: '40%',
    width: '40%',
    border: '4px solid RebeccaPurple ',
    borderRadius: '5%'
};
const DataToDisplayComponent = (props) => {
    const news = React.useContext(UserContext);
    function deleteArticle() {

    }
    const renderData = () => {
        return (<ul>
            {news && news.map(article => {
                return article.title && <li key={article.title}><div >
                    <h5>{article.title}</h5>
                    <img style={imgStyle} src={article.urlToImage} alt="" />
                    <button onClick={deleteArticle}>Delete Atricle</button>
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
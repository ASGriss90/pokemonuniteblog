import {Link} from 'react-router-dom';

const NotFoundPage = ()=>{

    return(
        <div>
            <h1>404</h1>
            <p>It seems like a pokemon lost its trainer.. </p>
            <Link to="/" >
            <p>Please return hom</p>
            </Link>
        </div>
    )

}

export default NotFoundPage;
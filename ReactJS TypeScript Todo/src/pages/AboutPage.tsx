import React, {FC} from "react";
import {useHistory} from 'react-router-dom';

export const AboutPage: FC = () => {

    const history = useHistory();

    return (
        <div>
            <h1>About Page</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Architecto aut consequuntur cumque delectus distinctio ducimus et labore,
                molestias mollitia quam.
            </p>
            <button className='btn' onClick={() => history.push('/')}>back to todo</button>
        </div>
    )
}
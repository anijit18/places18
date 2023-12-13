import React from "react";

import {Link} from 'react-router-dom'; //wraps and renders the anchor tag but it also adds the extra block tha navigation logic
import Avatar from "../../shared/components/UIElements/Avatar";
import Card from "../../shared/components/UIElements/Card";
import './UserItem.css';

const UserItem = props => {
    return (
        <li className="user-item">
            <Card className="useritem__content">
                <Link to={`/${props.id}/places`}> 
                {/* so that we have different link for different users */}
                    <div className="user-item__image">
                        <Avatar image={props.image} alt={props.name}/>
                    </div>
                    <div className="user-item__info">
                        <h2>{props.name}</h2>
                        <h3>{props.placeCount} {props.placeCount === 1 ? 'Place' : 'Places'}</h3>
                    </div>
                </Link>
            </Card>
        </li>
    )
}

export default UserItem;
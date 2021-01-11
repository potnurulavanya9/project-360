import React, { useState } from 'react';

const ProductInfo = ({user}) => {

    return (
        <div>
            <ul>
                {user?.map((person, i) => (
                    <li key={person.id.value} className="list-group-item">
                        <img
                            alt=""
                            src={person.picture.large}
                            width="30"
                            height="30"
                            className="d-inline-block align-top user-image"
                        />
                        <strong>{person.name.first} {person.name.last}</strong>
                        <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
                            <div class="d-flex w-100 justify-content-between">
                            <h5 class="mb-1">
                                {person.location.street.name} {person.location.street.number} {person.location.city} {person.location.state} {person.location.country} 
                            </h5>
                            <small class="text-muted">{person.dob.age} yrs</small>
                            </div>
                            <p class="mb-1">{person.email}</p>
                            <small class="text-muted">{person.phone}</small>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductInfo;
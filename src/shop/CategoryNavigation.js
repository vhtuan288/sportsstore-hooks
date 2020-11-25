import React, { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import getData from '../utils/api';

export default function CategoryNavigation ({baseUrl}) {
    const [categories, setCategories] = useState();
    const [error, setError] = useState(false);

    useEffect(() => {
        getData('http://localhost:3001/categories')
            .then(data => setCategories(data))
            .catch(e => setError(e));
    }, []);

    if (error) {
        return <h4 className="p-2">{error.message}</h4>
    }

    return (
        <Fragment>
            <Link className="btn btn-secondary btn-block" to={baseUrl}>All</Link>
            {categories && categories.map(cat =>
                <Link className="btn btn-secondary btn-block" key={cat} to={`${baseUrl}/${cat.toLowerCase()}`}>
                    {cat}
                </Link>
            )}
        </Fragment>
    );
}

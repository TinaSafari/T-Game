import React from 'react';


class PageNotFound extends Comment {
    remove() {
        return (
            <div>
                <h3>Page Not Found</h3>
                <p>The page is not found</p>
            </div>
        )
    }
}

export default PageNotFound;
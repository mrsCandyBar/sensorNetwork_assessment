import React from 'react';

const Pagination = (props) => {

    const {
        paginationCount,
        count,
        maxResults,
        updateCountProp,
        updateResultsAction
    } = props;

    function updateCount(increase, index) {
        let updateCount = count;
        if (increase) {
            updateCount = updateCount + 1;
        } else {
            if (index) {
                updateCount = index
            } else {
                updateCount = updateCount - 1;
            }
        }

        updateCountProp(updateCount);
        updateResultsAction(updateCount)
    }

    const maxResultCount = Math.floor(paginationCount / maxResults);
    const maxResultCountUnder10 = maxResultCount > 10 ? 10 : maxResultCount;
    const maxResultCountUnderOnward = count + 5 > maxResultCount ? maxResultCount : count + 5;
    return (
        <>
            {count > 1 && (
                <input
                    className="button is-black mt-5 mb-5 mr-3"
                    type="submit"
                    value="Prev"
                    onClick={() => updateCount()}
                />
            )}

            {(count < 5) ? (
                [...Array(maxResultCountUnder10)].map((x, i) =>
                (i > 0) && (<input
                    className="button is-black mt-5 mb-5 ml-1 mr-1"
                    type="submit"
                    value={i}
                    onClick={() => updateCount(undefined, i)}
                />)
                )
            ) : (
                <>
                    {[...Array(maxResultCountUnderOnward)].map((x, i) =>
                    (i > (count - 5)) && (<input
                        className="button is-black mt-5 mb-5 ml-1 mr-1"
                        type="submit"
                        value={i}
                        onClick={() => updateCount(undefined, i)}
                    />)
                    )}
                </>
            )
            }

            {paginationCount && (count !== maxResultCount) && (
                <input
                    className="button is-black mt-5 mb-5 ml-3"
                    type="submit"
                    value="Next"
                    onClick={() => updateCount(true)}
                />
            )}

        </>
    )
}

export default Pagination;
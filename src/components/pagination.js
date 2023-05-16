import React from 'react';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/20/solid'

const Pagination = (props) => {

    const {
        paginationCount,
        count,
        maxResults,
        paginationOptions,
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

    let maxResultCount = Math.ceil(paginationCount / maxResults);
    const maxResultCountUnderPaginationCount = 
        maxResultCount > paginationOptions ? 
            paginationOptions : 
            (paginationCount <= maxResults) ? maxResultCount: maxResultCount + 1;
    const maxResultCountUnderOnward = count + (paginationOptions / 2) > maxResultCount ? maxResultCount : count + (paginationOptions / 2);

    return (
        <div>
            <nav className="pagination is-rounded is-centered" role="navigation" aria-label="pagination">

                {(maxResultCount > 1) && (
                    <>
                        <button
                            disabled={count === 1}
                            className="pagination-previous"
                            onClick={() => (count > 1 ? updateCount() : console.log("nope!"))}>
                            <ArrowLeftIcon className='mr-2' style={{ width: "20px", height: "20px" }} /> Back
                        </button>

                        <button
                            disabled={count === maxResultCount}
                            className="pagination-next"
                            onClick={() => (paginationCount && (count !== maxResultCount) ? updateCount(true) : console.log("nope!"))}>
                            Next <ArrowRightIcon className='ml-2' style={{ width: "20px", height: "20px" }} />
                        </button>
                    </>
                )}

                <ul className="pagination-list">
                    {(count < ((paginationOptions / 2) + 1)) ? (
                        <>
                            {[...Array(maxResultCountUnderPaginationCount)].map((x, i) =>
                                (i > 0) && (<li key={i}><input
                                    className={"pagination-link" + (count === i ? " is-current" : "")}
                                    aria-label={"Goto page " + i}
                                    type="submit"
                                    value={i}
                                    onClick={() => updateCount(undefined, i)}
                                /></li>)
                            )}

                            {maxResultCount > paginationCount && (
                                <>
                                    <li><span class="pagination-ellipsis">&hellip;</span></li>
                                    <li>
                                        <input
                                            className={"pagination-link"}
                                            aria-label={"Goto last page"}
                                            type="submit"
                                            value={maxResultCount}
                                            onClick={() => updateCount(undefined, maxResultCount)}
                                        />
                                    </li>
                                </>
                            )}
                        </>
                    ) : (
                        <>
                            <li>
                                <input
                                    className={"pagination-link"}
                                    aria-label={"Goto page 1"}
                                    type="submit"
                                    value={1}
                                    onClick={() => updateCount(undefined, 1)}
                                />
                            </li>
                            <li><span class="pagination-ellipsis">&hellip;</span></li>
                            {[...Array(maxResultCountUnderOnward)].map((x, i) =>
                                (i > (count - (paginationOptions / 2))) && (<li key={i}><input
                                    className={"pagination-link" + (count === i ? " is-current" : "")}
                                    aria-label={"Goto page " + i}
                                    type="submit"
                                    value={i}
                                    onClick={() => updateCount(undefined, i)}
                                /></li>)
                            )}
                            <li><span class="pagination-ellipsis">&hellip;</span></li>
                            <li>
                                <input
                                    className={"pagination-link"}
                                    aria-label={"Goto last page"}
                                    type="submit"
                                    value={maxResultCount}
                                    onClick={() => updateCount(undefined, maxResultCount)}
                                />
                            </li>
                        </>
                    )
                    }
                </ul>
            </nav>
        </div>
    )
}

export default Pagination;
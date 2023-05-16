import React from 'react';

const UserRepo = (props) => {
    const {
        html_url,
        name,
        description,
        created_at,
        forks_count,
        open_issues_count,
        watchers
    } = props.repo;

    return (
        <div className='repo-entry p-5 mr-5'>
            {(forks_count || open_issues_count || watchers) && (
                <div className='icon-holder'>
                    {forks_count && (<>fork count : {forks_count}<br /></>)}
                    {open_issues_count && (<>open issues : {open_issues_count}<br /></>)}
                    {watchers && (<>watchers : {watchers}</>)}
                </div>
            )}

            <div className="columns mb-0">
                <div className="column">
                    <p>
                        <a
                            className='title is-5'
                            href={html_url}
                            target="_blank"
                            rel="noopener noreferrer">{name}</a>
                    </p>
                </div>
                <div className="column">
                    <small>started: {created_at}</small>
                </div>
            </div>
            {description && (<p>{description}</p>)}
        </div>
    )
}

export default UserRepo;
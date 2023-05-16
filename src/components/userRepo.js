import React from 'react';
import { UserIcon, ClipboardDocumentIcon, ShareIcon } from '@heroicons/react/20/solid';

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
        <div className='theme_repo-entry p-5'>
            {(forks_count || open_issues_count || watchers) && (
                <div className='theme_icon-holder'>
                    {forks_count && (<>&nbsp;<ShareIcon style={{ width: "20px", height: "20px", verticalAlign: "sub"}} /> {forks_count}&nbsp;</>)}
                    {open_issues_count && (<>&nbsp;<ClipboardDocumentIcon style={{ width: "20px", height: "20px", verticalAlign: "sub"}} /> {open_issues_count}&nbsp;</>)}
                    {watchers && (<>&nbsp;<UserIcon style={{ width: "20px", height: "20px", verticalAlign: "sub"}} /> {watchers}&nbsp;</>)}
                </div>
            )}

            <div className="columns mb-0">
                <div className="column">
                    <p>
                        <a
                            className='title is-5'
                            href={html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            >{name}</a>
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
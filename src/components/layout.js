import React from 'react';

const Layout = (props) => {

    const { 
        mainSidebar,
        mainContainer,
        selectedContentToggle,
        selectedContent
    } = props;

    return (
        <React.Fragment>
            <div className="columns is-fullheight is-vcentered p-0 m-0">
                {mainSidebar && (
                    <div className="column is-one-third is-maxheight border-right">
                        <div className='columns p-5 is-vcentered is-maxheight m-0'>
                            <div className='column'>
                                {mainSidebar}
                            </div>
                        </div>
                    </div>
                )}

                {mainContainer && (
                    <div className="column pt-0 pb-0 pl-5 pr-0 is-two-thirds">
                        {mainContainer}
                    </div>
                )}

                <div className={"column is-two-thirds is-maxheight border-left is-absolute p-0 " + (selectedContentToggle ? "is-visible" : "is-visually-hidden")} >
                    <div className='columns p-0 is-vcentered is-maxheight m-0'>
                        <div className='column'>
                            {selectedContent && selectedContent}
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    );
}

export default Layout;
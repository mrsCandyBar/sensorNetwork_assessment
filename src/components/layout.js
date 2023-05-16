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
                    <div className={"column is-one-third is-maxheight border-right " + (selectedContentToggle ? "is-hidden-on-mobile" : "")}>
                        <div className='columns p-5 is-vcentered is-maxheight m-0'>
                            <div className='column'>
                                {mainSidebar}
                            </div>
                        </div>
                    </div>
                )}

                <div id="userBio" className={"column is-two-thirds is-maxheight border-left is-absolute p-0 " + (selectedContentToggle ? "is-visible" : "is-visually-hidden")} >
                    <div className='columns p-0 is-vcentered is-maxheight m-0'>
                        <div className='column'>
                            {selectedContent && selectedContent}
                        </div>
                    </div>
                </div>

                {mainContainer && (
                    <div className={"column p-0 is-two-thirds " + (selectedContentToggle ? "is-hidden-on-mobile" : "")}>
                        {mainContainer}
                    </div>
                )}
            </div>

        </React.Fragment>
    );
}

export default Layout;
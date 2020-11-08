import React from 'react';
import Header from './Header';
import Home from '../screens/Home';
import Footer from './Footer';
import Photos from '../screens/Photos';

import { connect } from 'react-redux';

const CustomRouter = ({ screen }) => {
    return (
        <>
            <Header />
            {
                screen === 'home' && <Home />
            }
            {
                screen === 'photos' && <Photos />
            }
            <Footer />
        </>
    )
}

const mapStateToProps = (state) => ({
    screen: state.screen
})

export default connect(mapStateToProps)(CustomRouter);
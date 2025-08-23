import React from 'react';
import { Spinner } from 'react-bootstrap';

const LoaderComponent = () => {
return (
    <div
    style={{
        width: '100%',
        height: '85vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5' 
        }}
    >
    <Spinner
        animation="grow"
        style={{ color: '#2f1174', width: '3rem', height: '3rem' }}
        />
    </div>
    );
};

export default LoaderComponent;

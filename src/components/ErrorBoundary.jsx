import React, { Component } from 'react';

class ErrorBoundary extends Component {
    state = {
        errorInfo: null,
    };
    componentDidCatch(error, errorInfo) {
        this.setState({
            ...this.state,
            errorInfo,
        });
    }
    // Render a response to the error
    render() {
        return (
            <>
                {this.state.errorInfo ? (
                    <h1 style={{ textAlign: 'center' }}>Something went wrong</h1>
                ) : (
                    // eslint-disable-next-line react/prop-types
                    this.props.children
                )}
            </>
        );
    }
}

export default ErrorBoundary;

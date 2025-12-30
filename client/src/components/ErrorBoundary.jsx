import React from "react";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        console.error("Uncaught error:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen flex flex-col items-center justify-center bg-[#0f0e13] text-white p-10">
                    <h1 className="text-4xl font-bold mb-4">Something went wrong.</h1>
                    <p className="text-lg text-gray-400 mb-8 text-center max-w-lg">
                        An unexpected error occurred. This might be due to a MetaMask connection issue or a blockchain interaction error.
                    </p>
                    <div className="bg-red-900/20 border border-red-500 rounded-lg p-4 mb-8 w-full max-w-2xl overflow-auto">
                        <code className="text-red-400">{this.state.error && this.state.error.toString()}</code>
                    </div>
                    <button
                        onClick={() => window.location.reload()}
                        className="bg-[#2952e3] py-2 px-8 rounded-full hover:bg-[#2546bd] transition-colors"
                    >
                        Reload Page
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;

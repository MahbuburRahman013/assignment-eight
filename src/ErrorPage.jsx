

const ErrorPage = () => {
    return (
        <div className="h-screen flex flex-col gap-y-7 justify-center items-center">
            <div className="md:text-7xl text-2xl font-bold text-red-400">
                  404
            </div>
            <h1 className="md:text-7xl text-2xl font-bold text-gray-400">Page Is Not Found.</h1>
        </div>
    );
};

export default ErrorPage;
export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-1/3 flex flex-col items-center p-8">
                <div className="w-full min-w-[300px] max-w-[500px] h-[200px] overflow-hidden rounded-xl mb-8 flex items-center justify-center bg-gray-300">
                    <img
                        src="/404.gif"
                        alt="404 gif"
                        className="w-full h-full object-cover opacity-80 rounded-xl"
                    />
                </div>
                <h1 className="text-4xl m-0">404</h1>
                <p className="mt-4 text-center text-xl text-gray-700">
                    Yikes we've hit a snag finding that page
                </p>
            </div>
        </div>
    );
}

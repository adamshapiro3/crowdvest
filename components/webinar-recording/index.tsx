import React from "react";

export default function FrontierPlazaWebinar() {
    return (
        <div className="w-full flex flex-col items-center bg-white text-[#1a1a1a] font-sans p-8">
            {/* Video Section */}
            {/* <div className="w-full max-w-4xl mb-10 relative rounded-2xl overflow-hidden shadow-lg">
                <video
                    src="https://demio-accounts-s3-cdn.demio.com/2ef45102-e676-40cc-933d-b82f6a7e4b7d/recordings/5759277/recording-ec-5759277.mp4"
                    className="w-full rounded-2xl"
                    muted
                    autoPlay
                    loop
                    playsInline
                    onLoadedMetadata={(e) => { e.currentTarget.currentTime = e.currentTarget.duration / 2; }}
                />
                <a
                    href="https://my.demio.com/recording/HIXFWzsd"
                    target="_blank"
                    className="absolute bottom-4 right-4 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold px-4 py-2 rounded-lg shadow-md backdrop-blur-md bg-opacity-80"
                >
                    More Details
                </a>
            </div> */}

            {/* Header Tag */}
            <div className="bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4 transform transition-all hover:scale-105 hover:shadow-lg">
                EXCLUSIVE WEBINAR
            </div>

            {/* Title */}
            <h1 className="text-4xl font-bold text-center mb-2 transition-all duration-300 hover:text-red-600">
                Frontier Plaza Webinar Recording
            </h1>
            <p className="text-xl font-semibold text-center text-yellow-600 mb-6">
                10.8% Cap - 26% IRR - 2.9x Multiple
            </p>

            {/* Registration closing */}
            <div className="text-center text-red-600 text-sm font-semibold mb-2 transform transition-all hover:scale-105">
                ⚠️ This deal is closing soon, final allocations are being filled now.
            </div>
            <p className="text-xs text-gray-500 mb-6">
                The webinar has ended, and we’re wrapping up commitments.
                If you’re planning to come in, now is the time.
            </p>

            {/* Countdown */}
            {/* Add Countdown Timer here if needed */}

            {/* Main Section */}
            <div className="w-full max-w-5xl grid md:grid-cols-2 gap-8">
                {/* Left Section */}
                <div className="transition-all transform hover:scale-105 hover:shadow-lg p-6 rounded-xl border">
                    <h2 className="text-2xl font-bold mb-4 transition-all duration-300 hover:text-red-600">
                        Ready to Discover One of Ohio's Strongest Cash-Flowing Retail Investments?
                    </h2>
                    <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                        Discover one of Ohio's strongest cash-flowing retail investments from the comfort of your own home. Real estate expert Ken Chapman breaks down the Frontier Plaza opportunity, a Giant Eagle–anchored, high-performing retail center in Marietta, Ohio, delivering 10.8% Cap Rate, 26% IRR, and a 2.9x Equity Multiple.
                    </p>

                    {/* Button */}
                    <a
                        href="https://my.demio.com/recording/HIXFWzsd"
                        target="_blank"
                        className="bg-red-600 text-white px-2 py-3 rounded-md shadow-md text-sm font-semibold hover:bg-red-700 transition-all duration-300 hover:shadow-xl transform hover:scale-105 text-wrap"
                    >
                        🎥 Watch Webinar Recording!
                    </a>
                </div>

                {/* Right Section */}
                <div className="bg-gray-100 border border-gray-300 rounded-xl p-6 transition-all transform hover:scale-105 hover:shadow-lg">
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                        <span className="text-orange-500">✔</span> What You'll Learn:
                    </h3>

                    <ul className="space-y-4 text-sm text-gray-700">
                        <li className="flex gap-3 items-start">
                            <span className="text-orange-500 mt-1">🟠</span>
                            How a profit-sharing grocery anchor boosts investor income
                        </li>
                        <li className="flex gap-3 items-start">
                            <span className="text-orange-500 mt-1">🟠</span>
                            The power of NNN lease structures to minimize risk
                        </li>
                        <li className="flex gap-3 items-start">
                            <span className="text-orange-500 mt-1">🟠</span>
                            Why multi-parcel exit strategies maximize disposition flexibility
                        </li>
                        <li className="flex gap-3 items-start">
                            <span className="text-orange-500 mt-1">🟠</span>
                            How Frontier Plaza delivers exceptional cash flow and long-term upside
                        </li>
                    </ul>

                    <p className="text-xs text-gray-500 mt-4 leading-relaxed">
                        With 97% occupancy and national tenants like Giant Eagle, Dollar General, and Memorial Hospital, this stabilized asset offers predictable income in a resilient regional market.
                    </p>
                </div>
            </div>

            {/* Speaker Section */}
            <div className="mt-10 w-full max-w-5xl bg-gray-100 border border-gray-300 rounded-xl p-6 flex gap-4 items-center transition-all transform hover:scale-105 hover:shadow-lg">
                <div>
                    <h4 className="font-bold text-lg">Ken Chapman</h4>
                    <p className="text-sm text-gray-600">Managing Director</p>
                    <p className="text-xs text-gray-500 mt-1">
                        15+ years in real estate with credentials from Cornell University. Led growth from $200M to $1.6B in under 4 years.
                    </p>
                </div>
            </div>
        </div>
    );
}

import bannerImg from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div>
            <div className="hero bg-base-200 rounded-lg min-h-[554px]">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src={bannerImg}
                        className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Books to freshen up your bookshelf.</h1>
                        <p className="py-6">
                            
                        </p>
                        <button className="btn bg-green-700 text-white">View the list</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
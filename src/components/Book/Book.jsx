import { Link } from "react-router-dom";


const Book = ({ book }) => {
    const { bookId,image, bookName, author, tags, category, rating } = book;
    return (
        <Link to={`/books/${bookId}`}>
            <div>
                <div className="card bg-base-100 w-96 border-2 rounded-2xl p-6">
                    <figure className="bg-base-200 py-8 rounded-2xl">
                        <img className="h-[166px]"
                            src={image}
                            alt="Books" />
                    </figure>
                    <div className="card-body">
                        <div className="flex justify-center gap-4">
                            {
                                tags.map((tag,idx) => <button key={idx} className="btn btn-xs bg-green-200 text-green-500">{tag}</button>)
                            }
                        </div>

                        <h2 className="card-title">
                            {bookName}
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>By: {author}</p>
                        <div className="border-t-2 border-dashed"></div>
                        <div className="card-actions justify-between">
                            <div className="badge badge-outline">{category}</div>
                            <div className="rating flex gap-1 align-center">
                                <p>{rating}</p>
                                <input type="radio" name="rating-1" className="mask mask-star" defaultChecked />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;
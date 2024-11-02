import { useLoaderData, useParams } from "react-router-dom";
import { addToStoreReadList, addToStoreWishList } from "../../utility/addToDb";


const BookDetail = () => {
    const { bookId } = useParams();
    const id = parseInt(bookId);

    const data = useLoaderData();


    const book = data.find(book => book.bookId === id)

    const handleMarkAsRead = (id) => {
        // 1.understand what to store or save: => bookId
        // 2.Where to store : database
        // 3.array, list , collection:
        // 4.check: if the book is already in the readList
        // 5.if not , then add the book to the list
        // 6. if yes, do not add the book

        addToStoreReadList(id);


    }

    const handleWishList = (id) =>{

        addToStoreWishList(id);
    }

    console.log(book, bookId, id);
    const { image, bookName, author, review, tags, totalPages, rating, category, publisher, yearOfPublishing } = book;


    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6  my-10">

            <div className=" bg-base-200 border-2 rounded-xl flex items-center
             justify-center align-center">
                <img className="h-6/7 w-2/3  " src={image} alt={bookName} /><div></div>
            </div>
            <div>
                <h1 className="text-3xl">{bookName}</h1>
                <p>By: {author}</p>
                <div className="divider"></div>
                <p>{category}</p>
                <div className="divider"></div>
                <div>
                    <p><span className="text-lg font-bold">Review: </span>{review}</p>
                </div>
                <div className="flex justify-start gap-4"> <span className="text-lg font-semibold">Tag : </span>
                    {
                        tags.map((tag, idx) => <button key={idx} className="btn btn-xs bg-green-200 text-green-500">{tag}</button>)
                    }
                </div>
                <div className="divider"></div>
                <div >
                    <div className="grid grid-cols-2 w-2/3">
                        <p>Number of pages : </p>
                        <p className="font-semibold">{totalPages}</p>
                    </div>
                    <div className="grid grid-cols-2 w-2/3">
                        <p>Publisher : </p>
                        <p className="font-semibold">{publisher}</p>
                    </div>
                    <div className="grid grid-cols-2 w-2/3">
                        <p>Year of publishing : </p>
                        <p className="font-semibold">{yearOfPublishing}</p>
                    </div>
                    <div className="grid grid-cols-2 w-2/3">
                        <p>Rating : </p>
                        <p className="font-semibold">{rating}</p>

                    </div>

                </div>
                <button onClick={() => handleMarkAsRead(id)} className="btn btn-outline btn-accent mr-4 mt-6">Mark as Read</button>
                <button onClick={() => handleWishList(id)} className="btn btn-accent mt-6">Add to Wish list</button>
            </div>
        </div>
    );
};

export default BookDetail;
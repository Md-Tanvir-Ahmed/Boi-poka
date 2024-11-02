import { toast } from "react-toastify";

const getStoredReadList = () => {
    const storedListStr = localStorage.getItem('read-list');
    if (storedListStr) {
        const storedList = JSON.parse(storedListStr);
        return storedList;

    } else {
        return [];

    }

}

const addToStoreReadList = (id) => {
    const storedList = getStoredReadList();
    if (storedList.includes(id)) {
        // already exists. do not add it
        console.log(id, 'already exists in the read list')
    } else {
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('read-list', storedListStr);
        toast('This book is added to your read list.')

    }
}

const getStoredWishList = () =>{
    const storedWishListStr = localStorage.getItem('wish-list') ;
    if(storedWishListStr){
        const storedWishList = JSON.parse(storedWishListStr);
        return storedWishList;
    }else{
        
        return [];

    }
}

const addToStoreWishList = (id) =>{
    const storedWishList = getStoredWishList();
    if(storedWishList.includes(id)){
        console.log( id, 'already exists in the wish to read list');
    }
    else
    {
        storedWishList.push(id);
        const storedWishListStr = JSON.stringify(storedWishList);
        localStorage.setItem('wish-list',storedWishListStr);
    }
}

export { addToStoreReadList, addToStoreWishList, getStoredReadList }

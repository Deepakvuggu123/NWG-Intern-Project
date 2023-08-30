import Cookies from "js-cookie";


const getCartItems = () =>{
    const cartItems = Cookies.get('cartItems');
    return cartItems ? JSON.parse(cartItems):[];//checks if there are any cartitems in cookie,if there  return the full items ,else return empty array
}

const setCartItems = (cartItems) => {  // we set the data into cookies
    Cookies.set("cartItems",JSON.stringify(cartItems) )
}

const addToCart = (product, quantity)=>{
    const cartItems = getCartItems();// checks for the items in cartitems
    const existingItem = cartItems.find((item) => item.id === product.id); //checks for the existence of the product added, by checking whether the item id is == product id
    if(existingItem){
        existingItem.qty += quantity; //if the product is exisiting, then the quantity wil be updated i.e pushed into the new array.
    }
    else{ 
        cartItems.push({id: product?.id, title: product?.title, price: product?.price, image: product.thumbnail, qty: quantity})// if not ,then a new product will be added and updated
    }
    setCartItems(cartItems);
}


const removeFromCart=(productId)=>{
        const cartItems = getCartItems().filter((item) => item.id !== productId);
        setCartItems(cartItems);

}

const updateCartItems=(productId,quantity)=>{
    const cartItems=getCartItems().map((item)=>{

    if (item.id == productId ){
        return { ...item, qty: quantity}
    }   else{
        return item
    } 
    });

    setCartItems(cartItems);
}


export{getCartItems, addToCart, removeFromCart, updateCartItems}
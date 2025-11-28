import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ShoppingCart } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';
import Button from '../components/common/Button';
import Card from '../components/common/Card';

const Wishlist = () => {
    const { wishlistItems, removeFromWishlist } = useWishlist();
    const { addToCart } = useCart();

    if (wishlistItems.length === 0) {
        return (
            <div className="container mx-auto px-4 py-16 text-center">
                <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Your Wishlist is Empty</h1>
                <p className="text-gray-600 dark:text-gray-400 mb-8">Looks like you haven't saved any items yet.</p>
                <Link to="/shop">
                    <Button size="lg">Start Shopping</Button>
                </Link>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">My Wishlist</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {wishlistItems.map((item) => (
                    <Card key={item.id} className="group overflow-hidden">
                        <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 dark:bg-gray-800">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute top-2 right-2">
                                <button
                                    onClick={() => removeFromWishlist(item.id)}
                                    className="p-2 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-full text-red-500 hover:bg-red-500 hover:text-white transition-colors"
                                    title="Remove from Wishlist"
                                >
                                    <Trash2 size={18} />
                                </button>
                            </div>
                        </div>

                        <div className="p-4">
                            <Link to={`/product/${item.id}`}>
                                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2 hover:text-primary transition-colors line-clamp-1">
                                    {item.name}
                                </h3>
                            </Link>
                            <p className="text-gray-500 dark:text-gray-400 text-sm mb-3 line-clamp-2">
                                {item.description}
                            </p>
                            <div className="flex items-center justify-between mt-4">
                                <span className="text-xl font-bold text-primary">${item.price}</span>
                                <Button
                                    onClick={() => addToCart(item)}
                                    size="sm"
                                    className="flex items-center space-x-2"
                                >
                                    <ShoppingCart size={16} />
                                    <span>Add to Cart</span>
                                </Button>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default Wishlist;

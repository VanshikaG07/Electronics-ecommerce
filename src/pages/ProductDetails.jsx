import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Heart, ShoppingCart, Truck, Shield, ArrowLeft } from 'lucide-react';
import Button from '../components/common/Button';
import Card from '../components/common/Card';
import Badge from '../components/common/Badge';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

const ProductDetails = () => {
    const { id } = useParams();
    const { addToCart } = useCart();
    const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
    const [product, setProduct] = useState(null);
    const [relatedProducts, setRelatedProducts] = useState([]);
    const [activeImage, setActiveImage] = useState(0);

    useEffect(() => {
        const foundProduct = products.find(p => p.id === parseInt(id));
        if (foundProduct) {
            setProduct(foundProduct);
            setRelatedProducts(products.filter(p => p.category === foundProduct.category && p.id !== foundProduct.id).slice(0, 4));
            window.scrollTo(0, 0);
        }
    }, [id]);

    if (!product) {
        return (
            <div className="flex flex-col items-center justify-center h-96">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Product not found</h2>
                <Link to="/shop">
                    <Button>Back to Shop</Button>
                </Link>
            </div>
        );
    }

    const inWishlist = isInWishlist(product.id);

    const handleWishlistToggle = () => {
        if (inWishlist) {
            removeFromWishlist(product.id);
        } else {
            addToWishlist(product);
        }
    };

    return (
        <div className="space-y-12">
            {/* Breadcrumb */}
            <nav className="flex text-sm text-gray-500 dark:text-gray-400">
                <Link to="/" className="hover:text-primary">Home</Link>
                <span className="mx-2">/</span>
                <Link to="/shop" className="hover:text-primary">Shop</Link>
                <span className="mx-2">/</span>
                <span className="text-gray-900 dark:text-white font-medium">{product.name}</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Product Images */}
                <div className="space-y-4">
                    <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                        <img
                            src={product.images ? product.images[activeImage] : product.image}
                            alt={product.name}
                            className="w-full h-full object-contain p-4"
                        />
                    </div>
                    {product.images && product.images.length > 1 && (
                        <div className="grid grid-cols-4 gap-4">
                            {product.images.map((img, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setActiveImage(idx)}
                                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-colors ${activeImage === idx ? 'border-primary' : 'border-transparent hover:border-gray-300 dark:hover:border-gray-600'}`}
                                >
                                    <img src={img} alt="" className="w-full h-full object-cover" />
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* Product Info */}
                <div>
                    {product.isNew && <Badge variant="primary" className="mb-4">New Arrival</Badge>}
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">{product.name}</h1>

                    <div className="flex items-center space-x-4 mb-6">
                        <div className="flex items-center text-yellow-400">
                            <Star fill="currentColor" size={20} />
                            <span className="ml-1 font-bold text-gray-900 dark:text-white">{product.rating}</span>
                        </div>
                        <span className="text-gray-400">|</span>
                        <span className="text-gray-500 dark:text-gray-400">{product.reviews} reviews</span>
                    </div>

                    <div className="text-3xl font-bold text-primary mb-6">${product.price}</div>

                    <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed text-lg">
                        {product.description}
                    </p>

                    {/* Key Features */}
                    {product.features && (
                        <div className="mb-8">
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Key Features:</h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                                {product.features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    <div className="space-y-4 mb-8">
                        <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                            <Truck size={18} className="mr-2" />
                            Free shipping on orders over $50
                        </div>
                        <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                            <Shield size={18} className="mr-2" />
                            2-year warranty included
                        </div>
                    </div>

                    <div className="flex space-x-4 mb-12">
                        <Button size="lg" className="flex-1" onClick={() => addToCart(product)}>
                            <ShoppingCart size={20} className="mr-2" />
                            Add to Cart
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            onClick={handleWishlistToggle}
                            className={`px-4 ${inWishlist ? 'text-red-500 border-red-200 bg-red-50 dark:bg-red-900/20' : ''}`}
                        >
                            <Heart size={20} fill={inWishlist ? "currentColor" : "none"} />
                        </Button>
                    </div>

                    {/* Specs */}
                    <div className="border-t border-gray-200 dark:border-gray-800 pt-8">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Technical Specifications</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                            {Object.entries(product.specs).map(([key, value]) => (
                                <div key={key} className="flex justify-between border-b border-gray-100 dark:border-gray-800 pb-2">
                                    <span className="text-gray-500 dark:text-gray-400 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                                    <span className="font-medium text-gray-900 dark:text-white text-right">{value}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* In the Box */}
                    {product.inBox && (
                        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">What's in the Box</h3>
                            <div className="flex flex-wrap gap-2">
                                {product.inBox.map((item, index) => (
                                    <Badge key={index} variant="secondary">{item}</Badge>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Related Products */}
            {relatedProducts.length > 0 && (
                <section>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Related Products</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {relatedProducts.map((related) => (
                            <Card key={related.id} className="group overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 dark:bg-gray-800">
                                    <img
                                        src={related.image}
                                        alt={related.name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <Button
                                            onClick={() => addToCart(related)}
                                            className="rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                                        >
                                            Add to Cart
                                        </Button>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="font-bold text-lg text-gray-900 dark:text-white line-clamp-1 mb-2">{related.name}</h3>
                                    <div className="flex justify-between items-center">
                                        <span className="text-lg font-bold text-primary">${related.price}</span>
                                        <Link to={`/product/${related.id}`} className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                                            View
                                        </Link>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </section>
            )}
        </div>
    );
};

export default ProductDetails;

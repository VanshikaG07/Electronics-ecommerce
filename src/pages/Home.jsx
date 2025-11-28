import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import Button from '../components/common/Button';
import Card from '../components/common/Card';
import Badge from '../components/common/Badge';
import { products, categories } from '../data/products';
import { useCart } from '../context/CartContext';

const Home = () => {
    const { addToCart } = useCart();
    const featuredProducts = products.filter(p => p.isBestSeller).slice(0, 4);
    const newArrivals = products.filter(p => p.isNew).slice(0, 4);

    return (
        <div className="space-y-16">
            {/* Hero Section */}
            <section className="relative rounded-2xl overflow-hidden bg-gray-900 text-white h-[500px] flex items-center">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                        alt="Hero Background"
                        className="w-full h-full object-cover opacity-40"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent"></div>
                </div>

                <div className="relative container mx-auto px-8 z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-2xl"
                    >
                        <Badge variant="primary" className="mb-4">New Arrival</Badge>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                            The Future of <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Tech is Here</span>
                        </h1>
                        <p className="text-xl text-gray-300 mb-8">
                            Discover the latest gadgets and electronics that elevate your lifestyle. Premium quality, unbeatable prices.
                        </p>
                        <div className="flex space-x-4">
                            <Link to="/shop">
                                <Button size="lg" className="rounded-full">
                                    Shop Now <ArrowRight className="ml-2" size={20} />
                                </Button>
                            </Link>
                            <Link to="/shop?category=laptops">
                                <Button variant="outline" size="lg" className="rounded-full border-white text-white hover:bg-white hover:text-gray-900">
                                    View Laptops
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Categories Section */}
            <section>
                <div className="flex justify-between items-end mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Shop by Category</h2>
                    <Link to="/shop" className="text-primary hover:text-secondary font-medium flex items-center">
                        View All <ArrowRight size={16} className="ml-1" />
                    </Link>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {categories.map((category, index) => (
                        <Link key={category.id} to={`/shop?category=${category.id}`}>
                            <motion.div
                                whileHover={{ y: -5 }}
                                className="group cursor-pointer"
                            >
                                <div className="relative rounded-xl overflow-hidden aspect-square mb-3">
                                    <img
                                        src={category.image}
                                        alt={category.name}
                                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                                </div>
                                <h3 className="text-center font-medium text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                                    {category.name}
                                </h3>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Featured Products */}
            <section>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Best Sellers</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {featuredProducts.map((product) => (
                        <Card key={product.id} className="group overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 dark:bg-gray-800">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                {product.isNew && (
                                    <span className="absolute top-3 left-3 bg-primary text-white text-xs font-bold px-2 py-1 rounded-full">
                                        NEW
                                    </span>
                                )}
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                                    <Button
                                        onClick={() => addToCart(product)}
                                        className="rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                                    >
                                        Add to Cart
                                    </Button>
                                </div>
                            </div>
                            <div className="p-4">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="font-bold text-lg text-gray-900 dark:text-white line-clamp-1">{product.name}</h3>
                                    <div className="flex items-center text-yellow-400 text-sm">
                                        <Star size={14} fill="currentColor" />
                                        <span className="ml-1 text-gray-600 dark:text-gray-400">{product.rating}</span>
                                    </div>
                                </div>
                                <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 line-clamp-2">{product.description}</p>
                                <div className="flex justify-between items-center">
                                    <span className="text-xl font-bold text-primary">${product.price}</span>
                                    <Link to={`/product/${product.id}`} className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Promo Section */}
            <section className="rounded-2xl overflow-hidden bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 md:p-16 flex flex-col md:flex-row items-center justify-between">
                <div className="md:w-1/2 mb-8 md:mb-0">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Enhance Your Digital Life</h2>
                    <p className="text-indigo-100 text-lg mb-8 max-w-md">
                        Get 20% off on all smart home accessories this week. Upgrade your living space with the latest tech.
                    </p>
                    <Button variant="secondary" size="lg" className="bg-white text-indigo-600 hover:bg-gray-100">
                        Explore Deals
                    </Button>
                </div>
                <div className="md:w-1/2 flex justify-center">
                    <img
                        src="https://images.unsplash.com/photo-1558089687-f282ffcbc0d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                        alt="Smart Home"
                        className="rounded-xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500"
                    />
                </div>
            </section>
        </div>
    );
};

export default Home;

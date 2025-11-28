import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Filter, Star, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../components/common/Button';
import Input from '../components/common/Input';
import Card from '../components/common/Card';
import { products, categories } from '../data/products';
import { useCart } from '../context/CartContext';

const Shop = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const { addToCart } = useCart();

    const [filteredProducts, setFilteredProducts] = useState(products);
    const [sortBy, setSortBy] = useState('popular');
    const [priceRange, setPriceRange] = useState([0, 3000]);
    const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
    const [searchQuery, setSearchQuery] = useState('');
    const [showFilters, setShowFilters] = useState(false);

    useEffect(() => {
        let result = [...products];

        // Filter by Category
        if (selectedCategory !== 'all') {
            result = result.filter(p => p.category === selectedCategory);
        }

        // Filter by Price
        result = result.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

        // Filter by Search
        if (searchQuery) {
            result = result.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()));
        }

        // Sort
        if (sortBy === 'price-low') {
            result.sort((a, b) => a.price - b.price);
        } else if (sortBy === 'price-high') {
            result.sort((a, b) => b.price - a.price);
        } else if (sortBy === 'rating') {
            result.sort((a, b) => b.rating - a.rating);
        }

        setFilteredProducts(result);
    }, [selectedCategory, priceRange, searchQuery, sortBy]);

    useEffect(() => {
        const categoryParam = searchParams.get('category');
        if (categoryParam) {
            setSelectedCategory(categoryParam);
        }
    }, [searchParams]);

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setSearchParams({ category });
    };

    return (
        <div className="flex flex-col md:flex-row gap-8">
            {/* Mobile Filter Toggle */}
            <div className="md:hidden flex justify-between items-center mb-4">
                <Button variant="outline" onClick={() => setShowFilters(!showFilters)} className="flex items-center">
                    <Filter size={18} className="mr-2" /> Filters
                </Button>
                <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="rounded-lg border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm p-2"
                >
                    <option value="popular">Popular</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Top Rated</option>
                </select>
            </div>

            {/* Sidebar Filters */}
            <aside className={`md:w-64 space-y-8 ${showFilters ? 'block' : 'hidden md:block'}`}>
                {/* Search */}
                <div>
                    <h3 className="font-bold mb-4 text-gray-900 dark:text-white">Search</h3>
                    <div className="relative">
                        <Input
                            placeholder="Search products..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="pl-10"
                        />
                        <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
                    </div>
                </div>

                {/* Categories */}
                <div>
                    <h3 className="font-bold mb-4 text-gray-900 dark:text-white">Categories</h3>
                    <div className="space-y-2">
                        <button
                            onClick={() => handleCategoryChange('all')}
                            className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${selectedCategory === 'all' ? 'bg-primary text-white' : 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400'}`}
                        >
                            All Products
                        </button>
                        {categories.map(cat => (
                            <button
                                key={cat.id}
                                onClick={() => handleCategoryChange(cat.id)}
                                className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${selectedCategory === cat.id ? 'bg-primary text-white' : 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400'}`}
                            >
                                {cat.name}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Price Range */}
                <div>
                    <h3 className="font-bold mb-4 text-gray-900 dark:text-white">Price Range</h3>
                    <div className="px-2">
                        <input
                            type="range"
                            min="0"
                            max="3000"
                            step="100"
                            value={priceRange[1]}
                            onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                        />
                        <div className="flex justify-between mt-2 text-sm text-gray-600 dark:text-gray-400">
                            <span>$0</span>
                            <span>${priceRange[1]}</span>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Product Grid */}
            <div className="flex-1">
                <div className="hidden md:flex justify-between items-center mb-6">
                    <p className="text-gray-500 dark:text-gray-400">
                        Showing {filteredProducts.length} results
                    </p>
                    <div className="flex items-center space-x-2">
                        <span className="text-gray-600 dark:text-gray-400 text-sm">Sort by:</span>
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="rounded-lg border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm p-2 focus:ring-2 focus:ring-primary outline-none"
                        >
                            <option value="popular">Popular</option>
                            <option value="price-low">Price: Low to High</option>
                            <option value="price-high">Price: High to Low</option>
                            <option value="rating">Top Rated</option>
                        </select>
                    </div>
                </div>

                {filteredProducts.length === 0 ? (
                    <div className="text-center py-20">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">No products found</h3>
                        <p className="text-gray-500 dark:text-gray-400">Try adjusting your filters or search query.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <AnimatePresence>
                            {filteredProducts.map((product) => (
                                <motion.div
                                    key={product.id}
                                    layout
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                >
                                    <Card className="group overflow-hidden h-full flex flex-col border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
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
                                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                                <Button
                                                    onClick={() => addToCart(product)}
                                                    className="rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                                                >
                                                    Add to Cart
                                                </Button>
                                            </div>
                                        </div>
                                        <div className="p-4 flex-grow flex flex-col">
                                            <div className="flex justify-between items-start mb-2">
                                                <h3 className="font-bold text-lg text-gray-900 dark:text-white line-clamp-1">{product.name}</h3>
                                                <div className="flex items-center text-yellow-400 text-sm">
                                                    <Star size={14} fill="currentColor" />
                                                    <span className="ml-1 text-gray-600 dark:text-gray-400">{product.rating}</span>
                                                </div>
                                            </div>
                                            <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 line-clamp-2 flex-grow">{product.description}</p>
                                            <div className="flex justify-between items-center mt-auto">
                                                <span className="text-xl font-bold text-primary">${product.price}</span>
                                                <Link to={`/product/${product.id}`} className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                                                    View Details
                                                </Link>
                                            </div>
                                        </div>
                                    </Card>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Shop;

import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import Button from '../common/Button';
import Input from '../common/Input';

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Brand Info */}
                    <div>
                        <Link to="/" className="flex items-center space-x-2 mb-4">
                            <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white font-bold text-xl">
                                T
                            </div>
                            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                                TechStore
                            </span>
                        </Link>
                        <p className="text-gray-600 dark:text-gray-400 mb-6">
                            Your one-stop destination for premium electronics. We bring the latest tech right to your doorstep with best-in-class service.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Facebook size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Twitter size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Instagram size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Linkedin size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link to="/shop" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">Shop All</Link></li>
                            <li><Link to="/shop?category=laptops" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">Laptops</Link></li>
                            <li><Link to="/shop?category=phones" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">Smartphones</Link></li>
                            <li><Link to="/shop?category=accessories" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">Accessories</Link></li>
                            <li><Link to="/about" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">About Us</Link></li>
                        </ul>
                    </div>

                    {/* Customer Support */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Support</h3>
                        <ul className="space-y-2">
                            <li><Link to="/contact" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">Contact Us</Link></li>
                            <li><Link to="/faq" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">FAQs</Link></li>
                            <li><Link to="/shipping" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">Shipping Policy</Link></li>
                            <li><Link to="/returns" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">Returns & Refunds</Link></li>
                            <li><Link to="/privacy" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Stay Updated</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            Subscribe to our newsletter for the latest tech news and exclusive deals.
                        </p>
                        <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
                            <Input placeholder="Enter your email" type="email" />
                            <Button className="w-full">Subscribe</Button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 md:mb-0">
                        &copy; {new Date().getFullYear()} TechStore. All rights reserved.
                    </p>
                    <div className="flex space-x-6 text-sm text-gray-500 dark:text-gray-400">
                        <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
                        <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
                        <Link to="/cookies" className="hover:text-primary transition-colors">Cookie Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

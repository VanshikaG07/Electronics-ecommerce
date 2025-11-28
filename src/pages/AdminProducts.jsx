import React, { useState } from 'react';
import { Plus, Edit, Trash2, Search } from 'lucide-react';
import Button from '../components/common/Button';
import Input from '../components/common/Input';
import Card from '../components/common/Card';
import Badge from '../components/common/Badge';
import { products as initialProducts } from '../data/products';

const AdminProducts = () => {
    const [products, setProducts] = useState(initialProducts);
    const [searchTerm, setSearchTerm] = useState('');

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this product?')) {
            setProducts(products.filter(p => p.id !== id));
        }
    };

    const filteredProducts = products.filter(p =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Products</h1>
                <Button>
                    <Plus size={20} className="mr-2" /> Add Product
                </Button>
            </div>

            <Card className="p-4">
                <div className="relative mb-6">
                    <Input
                        placeholder="Search products..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                    />
                    <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="border-b border-gray-200 dark:border-gray-700">
                                <th className="pb-3 font-semibold text-gray-600 dark:text-gray-400">Product</th>
                                <th className="pb-3 font-semibold text-gray-600 dark:text-gray-400">Category</th>
                                <th className="pb-3 font-semibold text-gray-600 dark:text-gray-400">Price</th>
                                <th className="pb-3 font-semibold text-gray-600 dark:text-gray-400">Status</th>
                                <th className="pb-3 font-semibold text-gray-600 dark:text-gray-400 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                            {filteredProducts.map((product) => (
                                <tr key={product.id} className="group hover:bg-gray-50 dark:hover:bg-gray-800/50">
                                    <td className="py-4 flex items-center space-x-3">
                                        <div className="w-10 h-10 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-700">
                                            <img src={product.image} alt="" className="w-full h-full object-cover" />
                                        </div>
                                        <span className="font-medium text-gray-900 dark:text-white">{product.name}</span>
                                    </td>
                                    <td className="py-4 text-gray-600 dark:text-gray-400 capitalize">{product.category}</td>
                                    <td className="py-4 text-gray-900 dark:text-white font-medium">${product.price}</td>
                                    <td className="py-4">
                                        <Badge variant={product.isNew ? 'success' : 'gray'}>
                                            {product.isNew ? 'New' : 'Active'}
                                        </Badge>
                                    </td>
                                    <td className="py-4 text-right space-x-2">
                                        <button className="p-2 text-gray-500 hover:text-primary transition-colors">
                                            <Edit size={18} />
                                        </button>
                                        <button
                                            onClick={() => handleDelete(product.id)}
                                            className="p-2 text-gray-500 hover:text-red-500 transition-colors"
                                        >
                                            <Trash2 size={18} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Card>
        </div>
    );
};

export default AdminProducts;

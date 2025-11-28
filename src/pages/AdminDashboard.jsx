import React from 'react';
import { DollarSign, ShoppingBag, Users, Package } from 'lucide-react';
import Card from '../components/common/Card';

const AdminDashboard = () => {
    const stats = [
        { label: 'Total Sales', value: '$12,450', icon: DollarSign, color: 'bg-green-100 text-green-600' },
        { label: 'Total Orders', value: '156', icon: ShoppingBag, color: 'bg-blue-100 text-blue-600' },
        { label: 'Total Users', value: '2,450', icon: Users, color: 'bg-purple-100 text-purple-600' },
        { label: 'Total Products', value: '45', icon: Package, color: 'bg-orange-100 text-orange-600' },
    ];

    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Dashboard</h1>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <Card key={index} className="p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{stat.label}</p>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</h3>
                            </div>
                            <div className={`p-3 rounded-full ${stat.color}`}>
                                <stat.icon size={24} />
                            </div>
                        </div>
                    </Card>
                ))}
            </div>

            {/* Recent Activity Placeholder */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="p-6">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Recent Orders</h2>
                    <div className="space-y-4">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="flex justify-between items-center border-b border-gray-100 dark:border-gray-700 pb-2 last:border-0">
                                <div>
                                    <p className="font-medium text-gray-900 dark:text-white">Order #ORD-{1000 + i}</p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">2 mins ago</p>
                                </div>
                                <span className="text-green-600 font-medium">+$129.99</span>
                            </div>
                        ))}
                    </div>
                </Card>

                <Card className="p-6">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Top Products</h2>
                    <div className="space-y-4">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="flex items-center space-x-4 border-b border-gray-100 dark:border-gray-700 pb-2 last:border-0">
                                <div className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-lg"></div>
                                <div className="flex-1">
                                    <p className="font-medium text-gray-900 dark:text-white">Product Name {i}</p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">24 sales</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default AdminDashboard;

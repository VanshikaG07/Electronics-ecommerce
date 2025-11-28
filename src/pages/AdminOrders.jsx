import React from 'react';
import { Eye } from 'lucide-react';
import Card from '../components/common/Card';
import Badge from '../components/common/Badge';

const AdminOrders = () => {
    const orders = [
        { id: '#ORD-1234', user: 'John Doe', date: 'Oct 24, 2023', total: 1299.00, status: 'Delivered' },
        { id: '#ORD-5678', user: 'Jane Smith', date: 'Nov 02, 2023', total: 59.99, status: 'Processing' },
        { id: '#ORD-9012', user: 'Mike Johnson', date: 'Nov 05, 2023', total: 249.50, status: 'Pending' },
    ];

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Orders</h1>

            <Card className="p-4">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="border-b border-gray-200 dark:border-gray-700">
                                <th className="pb-3 font-semibold text-gray-600 dark:text-gray-400">Order ID</th>
                                <th className="pb-3 font-semibold text-gray-600 dark:text-gray-400">Customer</th>
                                <th className="pb-3 font-semibold text-gray-600 dark:text-gray-400">Date</th>
                                <th className="pb-3 font-semibold text-gray-600 dark:text-gray-400">Total</th>
                                <th className="pb-3 font-semibold text-gray-600 dark:text-gray-400">Status</th>
                                <th className="pb-3 font-semibold text-gray-600 dark:text-gray-400 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                            {orders.map((order) => (
                                <tr key={order.id} className="group hover:bg-gray-50 dark:hover:bg-gray-800/50">
                                    <td className="py-4 font-medium text-gray-900 dark:text-white">{order.id}</td>
                                    <td className="py-4 text-gray-600 dark:text-gray-400">{order.user}</td>
                                    <td className="py-4 text-gray-600 dark:text-gray-400">{order.date}</td>
                                    <td className="py-4 text-gray-900 dark:text-white font-medium">${order.total.toFixed(2)}</td>
                                    <td className="py-4">
                                        <Badge
                                            variant={
                                                order.status === 'Delivered' ? 'success' :
                                                    order.status === 'Processing' ? 'secondary' : 'warning'
                                            }
                                        >
                                            {order.status}
                                        </Badge>
                                    </td>
                                    <td className="py-4 text-right">
                                        <button className="p-2 text-gray-500 hover:text-primary transition-colors">
                                            <Eye size={18} />
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

export default AdminOrders;

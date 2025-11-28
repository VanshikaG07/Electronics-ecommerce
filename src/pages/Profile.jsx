import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Button from '../components/common/Button';
import Card from '../components/common/Card';
import Badge from '../components/common/Badge';

const Profile = () => {
    const { user, isAuthenticated, logout } = useAuth();

    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    // Mock Order History
    const orders = [
        { id: '#ORD-1234', date: 'Oct 24, 2023', total: 1299.00, status: 'Delivered', items: 2 },
        { id: '#ORD-5678', date: 'Nov 02, 2023', total: 59.99, status: 'Processing', items: 1 },
    ];

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">My Profile</h1>
                <Button variant="outline" onClick={logout}>Logout</Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* User Info */}
                <Card className="md:col-span-1 p-6 h-fit">
                    <div className="flex flex-col items-center text-center">
                        <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center text-white text-3xl font-bold mb-4">
                            {user.name.charAt(0)}
                        </div>
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white">{user.name}</h2>
                        <p className="text-gray-500 dark:text-gray-400 mb-4">{user.email}</p>
                        <Badge variant={user.role === 'admin' ? 'secondary' : 'primary'}>
                            {user.role === 'admin' ? 'Administrator' : 'Customer'}
                        </Badge>
                    </div>
                </Card>

                {/* Order History */}
                <div className="md:col-span-2 space-y-6">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white">Order History</h2>

                    {orders.map((order) => (
                        <Card key={order.id} className="p-6">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="font-bold text-gray-900 dark:text-white">{order.id}</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">{order.date}</p>
                                </div>
                                <Badge
                                    variant={order.status === 'Delivered' ? 'success' : 'warning'}
                                >
                                    {order.status}
                                </Badge>
                            </div>
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-gray-600 dark:text-gray-400">{order.items} items</span>
                                <span className="font-bold text-gray-900 dark:text-white">${order.total.toFixed(2)}</span>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Profile;

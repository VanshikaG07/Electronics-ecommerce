import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        // Check local storage for persisted user
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            try {
                const parsedUser = JSON.parse(storedUser);
                setUser(parsedUser);
                setIsAuthenticated(true);
                setIsAdmin(parsedUser.role === 'admin');
            } catch (error) {
                console.error("Failed to parse user from local storage:", error);
                localStorage.removeItem('user');
            }
        }
    }, []);

    const login = (email, password) => {
        // Mock login logic
        // In a real app, this would make an API call
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (email === 'admin@techstore.com' && password === 'admin123') {
                    const adminUser = { id: 1, name: 'Admin User', email, role: 'admin' };
                    setUser(adminUser);
                    setIsAuthenticated(true);
                    setIsAdmin(true);
                    localStorage.setItem('user', JSON.stringify(adminUser));
                    resolve(adminUser);
                } else if (email === 'user@techstore.com' && password === 'user123') {
                    const normalUser = { id: 2, name: 'John Doe', email, role: 'user' };
                    setUser(normalUser);
                    setIsAuthenticated(true);
                    setIsAdmin(false);
                    localStorage.setItem('user', JSON.stringify(normalUser));
                    resolve(normalUser);
                } else {
                    reject(new Error('Invalid credentials'));
                }
            }, 1000);
        });
    };

    const logout = () => {
        setUser(null);
        setIsAuthenticated(false);
        setIsAdmin(false);
        localStorage.removeItem('user');
    };

    const signup = (name, email, password) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const newUser = { id: Date.now(), name, email, role: 'user' };
                setUser(newUser);
                setIsAuthenticated(true);
                setIsAdmin(false);
                localStorage.setItem('user', JSON.stringify(newUser));
                resolve(newUser);
            }, 1000);
        });
    };

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, isAdmin, login, logout, signup }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);

import React, { useEffect, useState } from 'react';
import { FadeLoader } from 'react-spinners';

type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
};

type UserListProps = {
    endpoint?: string;
};

const UserList: React.FC<UserListProps> = ({
    endpoint = 'https://jsonplaceholder.typicode.com/users',
}) => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch(endpoint);

                if (!response.ok) {
                    throw new Error('Failed to fetch users');
                }

                const data = await response.json();
                setUsers(data);
                setLoading(false);
            } catch (error) {
                setError((error as Error).message);
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center">
                <FadeLoader />
            </div>
        );
    }

    if (error) {
        return (
            <div className="py-8 text-center">
                <h1 className="text-xl">Error: {error}</h1>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-4">Users List</h1>
            <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {users.map((user) => (
                    <li
                        key={user.id}
                        className="bg-gray-100 p-4 rounded-md shadow"
                    >
                        <p className="text-lg">{user.id}</p>
                        <p className="text-lg font-semibold">{user.name}</p>
                        <p className="text-sm font-semibold">{user.username}</p>
                        <p className="text-gray-500">{user.email}</p>
                        <p className="text-gray-500">{user.phone}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;

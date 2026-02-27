import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import api from '../services/api';

const GenericPage = () => {
    const location = useLocation();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchContent = async () => {
            setLoading(true);
            try {
                // Pass the current pathname to the API
                const response = await api.get(`/content?path=${location.pathname}`);
                setData(response.data);
            } catch (error) {
                console.error('Error fetching page content:', error);
                setData({
                    title: 'Page Not Found',
                    content: '<p>Current Path: ' + location.pathname + '<br/>This page has not been populated with content yet.</p>'
                });
            } finally {
                setLoading(false);
            }
        };

        fetchContent();
    }, [location.pathname]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-10">
            <div className="container bg-white p-8 rounded-lg shadow-md min-h-[500px]">
                <h1 className="text-3xl font-bold text-primary mb-6 border-b pb-4">{data.title}</h1>
                <div
                    className="prose max-w-none text-gray-700"
                    dangerouslySetInnerHTML={{ __html: data.content }}
                />
            </div>
        </div>
    );
};

export default GenericPage;

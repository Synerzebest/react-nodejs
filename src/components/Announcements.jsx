import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { LoadingOutlined } from '@ant-design/icons';
import { Card, Spin } from 'antd';

const Announcements = () => {
    const [loading, setLoading] = useState(true);
    const [announcements, setAnnouncements] = useState([]);

    const antIcon = <LoadingOutlined spin />

    useEffect(() => {
        // Get announcements
        axios.get('http://localhost:4000/announcements')
            .then(response => {
                const formattedAnnouncements = response.data.map(announcement => {
                    const date = new Date(announcement.date);
                    const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
                    return { ...announcement, date: formattedDate };
                });

                setAnnouncements(formattedAnnouncements);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, []);

    return (
        <div className="relative top-44 w-11/12 m-auto flex flex-col gap-4">
            <p className="text-4xl">Découvrez les nouveautés</p>

            {/* Afficher les annonces */}
            {loading ? (
                <Spin indicator={antIcon} />
            ) : (
                announcements.map((announcement, index) => (
                    <Card title={announcement.author} key={index} className="w-1/2">
                        <p className='text-xl'>{announcement.text}</p>
                        <p className='text-sm'>{announcement.date}</p>
                    </Card>
                ))
            )}
        </div>
    );
}

export default Announcements;

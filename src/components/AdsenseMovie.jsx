import React, { useEffect, useState } from 'react';

const AdSenseMovie = () => {
    const [isAdLoaded, setIsAdLoaded] = useState(false);

    useEffect(() => {
        // ฟังก์ชันในการโหลด AdSense
        const loadAdSense = () => {
            if (isAdLoaded) return; // หากโหลดแล้วไม่ต้องโหลดใหม่
            const script = document.createElement('script');
            script.async = true;
            script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4356102593773307';
            script.crossOrigin = 'anonymous';
            document.head.appendChild(script);

            script.onload = () => {
                (window.adsbygoogle = window.adsbygoogle || []).push({});
                setIsAdLoaded(true);
            };
        };

        // ฟังก์ชันที่ใช้ติดตามการขยับเมาส์และการเลื่อน
        const handleUserAction = () => {
            loadAdSense();
        };

        // เพิ่ม event listeners สำหรับการขยับเมาส์และ scroll
        window.addEventListener('mousemove', handleUserAction);
        window.addEventListener('scroll', handleUserAction);

        // ลบ event listeners เมื่อ component ถูกลบออก
        return () => {
        window.removeEventListener('mousemove', handleUserAction);
        window.removeEventListener('scroll', handleUserAction);
        };
    }, [isAdLoaded]);

    return (
        <ins
        className="adsbygoogle"
        style={{ display: 'inline-block', width: '336px', height: '280px' }}
        data-ad-client="ca-pub-4356102593773307"
        data-ad-slot="9591821159"
        ></ins>
    );
};

export default AdSenseMovie;
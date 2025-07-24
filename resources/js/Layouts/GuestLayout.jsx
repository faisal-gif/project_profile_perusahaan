import { useEffect } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Footer from '@/Components/Footer';
import Navigation from '@/Components/Navigation';

export default function GuestLayout({ children }) {

    return (
        <div className="min-h-screen bg-white">

            <Navigation />
            {children}
            <Footer />

        </div>
    );
}

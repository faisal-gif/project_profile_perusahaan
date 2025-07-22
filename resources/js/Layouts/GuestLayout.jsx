import { useEffect } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Footer from '@/Components/Footer';
import Navigation from '@/Components/Navigation';
import GTranslateWidget from '@/Components/GTranslateWidget';

export default function GuestLayout({ children }) {

    return (
        <div className="min-h-screen bg-white">
            
          <GTranslateWidget />
            <Navigation />
            {children}
            <Footer />

        </div>
    );
}

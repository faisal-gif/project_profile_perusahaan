import About from '@/Components/About';
import Contact from '@/Components/Contact';
import Hero from '@/Components/Hero';
import News from '@/Components/News';
import Services from '@/Components/Serveices';
import Strengths from '@/Components/Strengths';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link } from '@inertiajs/react';

export default function Welcome({news}) {

    return (
        <>
            <Head title="Welcome" />
            <GuestLayout>
                <Hero />
                <About />
                <Services />
                <Strengths />
                <News newsItems={news} />
                <Contact />

            </GuestLayout>

        </>
    );
}

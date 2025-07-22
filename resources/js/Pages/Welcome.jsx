import About from '@/Components/About';
import Contact from '@/Components/Contact';
import Hero from '@/Components/Hero';
import News from '@/Components/News';
import Services from '@/Components/Serveices';
import Strengths from '@/Components/Strengths';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link } from '@inertiajs/react';

export default function Welcome({ news, kerjasama, layanan, visiMisi, kontak, heroData }) {

    return (
        <>
            <Head title="Welcome" />
            <GuestLayout>
                <Hero hero={heroData} />
                <About visimisi={visiMisi} />
                <Services services={layanan} />
                <Strengths kerjasama={kerjasama} />
                <News newsItems={news} />
                <Contact kontakLokasi={kontak} />

            </GuestLayout>

        </>
    );
}

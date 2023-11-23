import Link from 'next/link';
import '../app/css/style.css'
import { Inter, Architects_Daughter } from 'next/font/google'
import Header from '@/components/ui/header'
import VideoCard from "@/components/videoCard";
import Footer from "@/components/ui/footer";

interface VideoData {
    etag?: string;
    snippet: {
        resourceId: {
            videoId: string;
        };
        thumbnails: {
            medium: {
                url: string;
            };
        };
        title: string;
    };
    // Add more properties based on the actual structure of your data
}

interface PlaylistData {
    items: VideoData[];
    // Add more properties based on the actual structure of your data
}

interface VideosProps {
    playlistsData: PlaylistData[];
}

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap'
})

const architects_daughter = Architects_Daughter({
    subsets: ['latin'],
    variable: '--font-architects-daughter',
    weight: '400',
    display: 'swap'
})

export const metadata = {
    title: 'Videos Page title',
    description: 'Videos Page description',
}

const YOUTUBE_PLAYLIST_ITEMS_API = 'https://www.googleapis.com/youtube/v3/playlistItems';

const playlistIds = [
    'PLemT5y7xZpD6LozWrWmXQn4FG6Tg_ZUyA',
    'PLemT5y7xZpD6FKX-7_jaUJxpIc43r4Wig'
];

export async function getServerSideProps() {
    const promises = playlistIds.map(async (playlistId) => {
        const response = await fetch(`${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&playlistId=${playlistId}&maxResults=50&key=${process.env.YOUTUBE_API_KEY}`);
        const data = await response.json();
        return data;
    });

    const playlistsData = await Promise.all(promises);

    return {
        props: {
            playlistsData,
        },
    };
}

export default function Videos({ playlistsData }: VideosProps) {
    const combinedData = playlistsData.flatMap((data) => data.items);

    return (
        <div className={`${inter.variable} ${architects_daughter.variable} font-inter antialiased bg-gray-900 text-gray-200 tracking-tight`}>
            <div className="flex flex-col min-h-screen overflow-hidden">
                <Header />
                <section className="relative content-none">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6">
                        <div className="pt-32 md:pt-40">
                            {/* Page header */}
                            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                                <h1 className="h1">German Classes Videos</h1>
                            </div>
                            {/* Card */}
                            <ul className={'grid grid-cols-2 lg:grid-cols-4 gap-4'}>
                                {combinedData.map((item) => (
                                    <VideoCard data={item} key={item?.etag} />
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        </div>
    );
}

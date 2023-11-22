import Link from "next/link";


interface VideoCardProps {
    data: {
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
    };
}

export default function VideoCard({data}:VideoCardProps) {
    return (
        <li>
            <Link href={`https://www.youtube.com/watch?v=${data?.snippet.resourceId?.videoId}`} target={'_blank'}>
                <img src={data?.snippet?.thumbnails?.medium?.url} />
                <h2 className={'font-bold mt-1'}>{data?.snippet?.title}</h2>
            </Link>
        </li>
    )
}

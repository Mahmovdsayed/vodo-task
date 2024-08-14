
import { notFound, useRouter } from 'next/navigation';
import { useAppSelector } from "@/redux/hooks";
import { selectFilms } from "@/redux/slices/filmsSlice";
import MainInfo from "@/components/Sections/FilmInfo/MainInfo";
import { getFilmData, getMovieCasts } from '@/utils/api';
import ActorsCard from '@/components/UI/ActorsCard';
import { Metadata } from "next";

interface PageProps {
    params: {
        slug: string;
    };
}

export async function generateMetadata({
    params,
}: {
    params: { slug: string };
}): Promise<Metadata> {
    const id = params.slug;
    const data = await getFilmData(id);

    return {
        title: data.title,
        description: data.overview,
        keywords: [data.title],
        openGraph: {
            images: [`https://image.tmdb.org/t/p/original${data.backdrop_path}`],
            title: data.title,
            description: data.overview,
        },
        twitter: {
            card: "summary_large_image",
            creator: '@mahmovdsayed',
            title: data.title,
            description: data.overview,
            images: [`https://image.tmdb.org/t/p/original${data.backdrop_path}`],
        },
        robots: {
            index: false,
            follow: true,
            nocache: true,
            googleBot: {
                index: true,
                follow: false,
                noimageindex: true,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
    };
}


const FilmPage = async ({ params }: PageProps) => {


    const { slug } = params;
    const film = await getFilmData(slug);
    if (!film) return notFound();
    const actors = await getMovieCasts(slug)
    return (
        <main className="min-h-screen px-4">
            <div className="container mx-auto">
                <MainInfo film={film} />
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 py-5">
                    {actors.cast.map((actor: any, index: number) =>
                        <ActorsCard key={index} image={actor.profile_path} name={actor.name} character={actor.character} />
                    )}
                </div>
            </div>
        </main>
    );
};

export default FilmPage;

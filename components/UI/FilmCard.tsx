import { formatVoteAverage } from '@/functions/numberUtils';
import { truncateText } from '@/functions/textUtils';
import { IMAGE_BASE_URL } from '@/utils/constants';
import { Card, CardBody, CardFooter, CardHeader, Chip, Image } from '@nextui-org/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface FilmCardProps {
    id: number;
    title: string;
    overview: string;
    poster_path: string;
    vote_average: number;
    release_date: string;
}

const FilmCard = ({ id, title, overview, poster_path, vote_average, release_date }: FilmCardProps) => {
    const truncatedOverview = truncateText(overview, 100);
    const router = useRouter()
    return <>
        <Card isPressable className='bg-gray-200 dark:bg-[#181818]' shadow='none' onClick={() => router.push(`/films/${id}`)}>
            <CardHeader className='p-0 z-20'>
                <Image loading='lazy' isZoomed src={`${IMAGE_BASE_URL}${poster_path}`} className='object-cover object-center' alt={title} draggable={"false"} />
            </CardHeader>
            <CardBody className='flex-col'>
                <div>
                    <div className='flex items-center justify-between pb-3'>
                        <h4 className='font-bold text-lg'>{title}</h4>
                        <Chip size='sm' radius='sm' color='primary'>{formatVoteAverage(vote_average)}</Chip>
                    </div>
                    <p className='text-tiny md:text-sm text-default-600'>{truncatedOverview}</p>
                </div>
            </CardBody>
            <CardFooter className='pt-0'>
                <span className='font-bold text-sm text-default-600'>{release_date}</span>
            </CardFooter>
        </Card>
    </>

};

export default FilmCard;

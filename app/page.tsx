'use client'
import React, { useEffect, useState } from 'react';
import { fetchAllMovies, selectFilms } from '../redux/slices/filmsSlice';
import FilmCard from '@/components/UI/FilmCard';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { motion } from 'framer-motion';
import LoadingScreen from '@/components/UI/LoadingScreen';
import { Pagination } from '@nextui-org/react';

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const { films, loading, error } = useAppSelector(selectFilms);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(fetchAllMovies(currentPage));
  }, [dispatch, currentPage]);

  if (loading) {
    return <LoadingScreen />
  }

  return (
    <main>
      <div className="min-h-screen flex flex-col container mx-auto">
        <div className="flex-grow p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {films.map((film, index) => (
            <motion.div
              key={film.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }} //, delay: index * 0.1
            >
              <FilmCard {...film} />
            </motion.div>
          ))}
        </div>
        <div className="overflow-hidden py-4 flex  justify-center align-middle">
          <Pagination

            showControls
            total={500}
            page={currentPage}
            onChange={setCurrentPage}
            color="primary"
            initialPage={1}
          />

        </div>
      </div >
    </main>
  );
};

export default Home;

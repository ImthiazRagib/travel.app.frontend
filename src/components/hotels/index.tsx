import React from 'react';
import HotelList from './hotel-list';
import HotelFilters from './hotel-filters';
import HotelSearch from './hotel-search';
import Paginations from '../primary/paginations/paginations';

const Hotels: React.FC = () => {
    return (
        <section className='flex flex-col gap-2'>
            <div className='w-full'>
                <HotelSearch />
            </div>

            <div className='flex flex-col md:flex-row gap-2'>
                <div className='w-full md:w-1/4'>
                    <HotelFilters />
                </div>
                <div className='w-full md:w-3/4'>
                    <HotelList />
                </div>

            </div>

            <Paginations currentPage={1} totalPages={10} onPageChange={() => { }} />
        </section>
    );
};

export default Hotels;

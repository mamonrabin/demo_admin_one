import CategoryCreate from '@/src/components/category/CategoryCreate';
import CategoryList from '@/src/components/category/CategoryList';
import React from 'react';

const page = () => {
    return (
       <div className='lg:p-6 my-4'>
            <div className='flex flex-col gap-6'>
                <CategoryCreate/>
                <CategoryList/>
            </div>
        </div>
    );
};

export default page;
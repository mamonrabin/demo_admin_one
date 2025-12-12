import CategoryCreate from '@/src/components/category/CategoryCreate';
import React from 'react';

const page = () => {
    return (
       <div className='lg:p-6  my-4'>
            <div>
                <CategoryCreate/>
            </div>
        </div>
    );
};

export default page;
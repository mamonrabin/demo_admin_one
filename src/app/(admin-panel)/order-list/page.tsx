import OPagination from '@/src/components/order/OPagination';
import OrderTab from '@/src/components/order/OrderTab';
import OrderTable from '@/src/components/order/OrderTable';
import React from 'react';

const page = () => {
    return (
        <div className='lg:p-6 border rounded mt-4'>
            <h1 className='text-base capitalize font-medium'>order managment</h1>
            <OrderTab/>
            <div className='mt-6'>
                <OrderTable/>
            </div>
            <div className='py-4 '>
                <OPagination/>
            </div>
        </div>
    );
};

export default page;
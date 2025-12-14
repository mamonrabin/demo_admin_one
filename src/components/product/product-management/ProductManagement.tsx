import { FilePlus } from 'lucide-react';
import React from 'react';
import ProductTabs from './ProductTabs';
import Link from 'next/link';
import ProductsTable from './ProductsTable';

const ProductManagement = () => {
    return (
        <div>
            <div className='flex md:flex-row flex-col gap-2 md:items-center justify-between'>
                <h2 className='text-lg font-medium'>Products Management</h2>
                <Link href="products/add-product">
                <div className='px-6 py-3 text-center flex items-center justify-center rounded bg-[#2B748A] hover:bg-[#0f5d75] duration-300 text-white text-sm cursor-pointer'>
                    <button className='uppercase text-center font-medium flex items-center gap-1 cursor-pointer'>Add Product <span><FilePlus size={16} /></span></button>
                </div>
                </Link>
            </div>

            <div>
                <ProductTabs/>
            </div>

            <div>
                <ProductsTable/>
            </div>
        </div>
    );
};

export default ProductManagement;
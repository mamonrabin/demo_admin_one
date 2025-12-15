
import CategoryList from '@/src/components/category/CategoryList';
import CcreateCoupon from '@/src/components/coupon/CcreateCoupon';


const page = () => {
    return (
       <div className='lg:p-6 my-4'>
            <div className='flex flex-col gap-6'>
                <CcreateCoupon/>
                <CategoryList/>
            </div>
        </div>
    );
};

export default page;
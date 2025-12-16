
import CreateCampaing from '@/src/components/campaign/CreateCampaing';
import CouponList from '@/src/components/coupon/CouponList';


const page = () => {
    return (
       <div className='lg:p-6 my-4'>
            <div className='flex flex-col gap-6'>
                <CreateCampaing/>
                <CouponList/>
            </div>
        </div>
    );
};

export default page;
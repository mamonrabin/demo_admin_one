import BannerList from '@/src/components/banners/BannerList';
import CreateBanner from '@/src/components/banners/CreateBanner';


const page = () => {
    return (
       <div className='lg:p-6 my-4'>
            <div className='flex flex-col gap-6'>
               <CreateBanner/>
                <BannerList/>
            </div>
        </div>
    );
};

export default page;
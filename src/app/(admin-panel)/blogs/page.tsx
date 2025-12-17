import BannerList from '@/src/components/banners/BannerList';
import CreateBlogs from '@/src/components/blogs/CreateBlogs';


const page = () => {
    return (
       <div className='lg:p-6 my-4'>
            <div className='flex flex-col gap-6'>
               <CreateBlogs/>
                <BannerList/>
            </div>
        </div>
    );
};

export default page;
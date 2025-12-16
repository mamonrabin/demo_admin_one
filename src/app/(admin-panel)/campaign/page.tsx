
import CampaignList from '@/src/components/campaign/CampaignList';
import CreateCampaing from '@/src/components/campaign/CreateCampaing';


const page = () => {
    return (
       <div className='lg:p-6 my-4'>
            <div className='flex flex-col gap-6'>
                <CreateCampaing/>
                <CampaignList/>
            </div>
        </div>
    );
};

export default page;
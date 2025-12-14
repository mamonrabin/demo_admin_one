
import ChildsCategoryList from "@/src/components/child-category/ChildsCategoryList";
import CreateChildCategory from "@/src/components/child-category/CreateChildCategory";



const page = () => {
  return (
    <div className="lg:p-6 my-4">
      <div className="flex flex-col gap-6">
        <CreateChildCategory/>
        <ChildsCategoryList/>
      </div>
    </div>
  );
};

export default page;

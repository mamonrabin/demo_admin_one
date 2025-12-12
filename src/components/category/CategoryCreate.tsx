import React from 'react';

const CategoryCreate = () => {
    return (
        <div className='rounded border p-8'>
            <h2 className='text-xl font-medium'>Create Category</h2>

            <form>
                <div>
                    <label>Category Name <span>*</span></label>
                    <input type="text" placeholder='Enter Category Name' />
                </div>
                <div>
                    <label>Image<span>*</span></label>
                    <input type="file" />
                </div>
                <div>
                    <button type='submit'>Create Category</button>
                </div>
            </form>
        </div>
    );
};

export default CategoryCreate;
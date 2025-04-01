import React from 'react'

const HomeSectionCard = () => {
    return (
        <div className='cursor-pointer flex flex-col itmes-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3' >
            <div className='h-[13rem] w-[10rem]'>
                <img className='object-cover object-top w-full h-full' src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fveirdo.in%2Fproducts%2Fcork-plain-full-sleeves-regular-fit-t-shirt&psig=AOvVaw3eOx0C9AQ0cjZtekK46qxR&ust=1743347544323000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPDMp-zJr4wDFQAAAAAdAAAAABAE" alt="" />
            </div>
            <div className='p-4'>
                <h3 className='text-lg font-medium text-gray-900'>Nofilter</h3>
                <p className='mt-2 text-sm text-gray-500'>Mn Soild Pure Cotton Straight Kurta</p>
            </div>
        </div>
    )
}

export default HomeSectionCard

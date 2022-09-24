import React from 'react'


const PageHeading = ({pageTitle, totalItems}) => {
  return (
    <div className='mt-5 mb-7 bg-primary rounded-md  w-fit tracking-tighter '>
        <p className='p-2.5 text-lg'>
            {totalItems<10? `0${totalItems}` : totalItems} {pageTitle}
        </p>
    </div>
  )
}

export default PageHeading
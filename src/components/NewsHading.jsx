import Marquee from 'react-fast-marquee';

const NewsHading = () => {
    return (
        <div className='bg-[#403F3F] py-1 lg:py-2 px-1 lg:px-2 flex gap-2 lg:gap-3 mt-3 lg:mt-6'>
            <h2 className='bg-[#D72050] px-4 py-1 font-Poppins text-base lg:text-xl'>Latest</h2>
            <Marquee className='font-Poppins text-sm lg:text-lg space-x-7'>
                <h2>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</h2>
                <h2>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</h2>
            </Marquee>
        </div>
    );
};

export default NewsHading;
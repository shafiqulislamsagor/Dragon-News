import Title from './Title';
import Theme from './Theme';

const TitleHeader = () => {
    return (
        <div >
            <div className='relative'>
                <Title />
                <div className='absolute'>
                <Theme />
            </div>
            </div>
            
        </div>
    );
};

export default TitleHeader;
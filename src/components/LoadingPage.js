import explorer from '../img/explorer.png';

const Loading = () => {

    return (
        <div className='h-screen flex flex-col justify-center pb-48 xl:pb-20'>
            <div className='zoom-in-box flex justify-center'>
                <img src={explorer} alt='loading...' />
            </div>
        </div>
    );
}; 

export default Loading;
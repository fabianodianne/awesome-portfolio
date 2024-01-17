
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import CopyrightRoundedIcon from '@mui/icons-material/CopyrightRounded';

const Footer = () => {
    return (
        <div className="flex flex-col md:flex-row md:justify-between gap-3 text-center md:text-left">

            <div className="md:w-1/2 w-full flex md:justify-start">
                <p className="text-xs font-medium w-full">
                    <span><CopyrightRoundedIcon className='px-1 pb-1' /></span>
                    2024 DIANNE FABIANO
                </p>
            </div>

            <div className="md:w-1/2 w-full flex md:justify-end justify-center md:gap-4 gap-4 pb-2">
                <a href='https://www.instagram.com/yhianiee' target='_blank' className='hover:text-primary zoom'>
                    <InstagramIcon />
                </a>
                <a href='mailto:fabianodianne@gmail.com' target='_blank' className='hover:text-primary zoom'>
                    <EmailRoundedIcon />
                </a>
                <a href='https://www.linkedin.com/in/dianne-fabiano/' target='_blank' className='hover:text-primary zoom'>
                    <LinkedInIcon />
                </a>
                <a href='https://github.com/fabianodianne' target='_blank' className='hover:text-primary zoom'>
                    <GitHubIcon />
                </a>
            </div>

        </div>
    );
};

export default Footer;

import Container from './Container';
import {FaGithub, FaInstagram, FaTwitter, FaYoutube} from 'react-icons/fa';

const Footer = (): JSX.Element => {
  return (
    <Container>
      <hr className="w-100 divide my-4 border-slate-200 dark:border-slate-800"></hr>
      <footer className="mt-4 pb-12 flex justify-between">
        <p className="text-base text-slate-600 dark:text-slate-500">@{new Date().getFullYear()} by Brian Ruiz</p>
        <div className="flex flex-row gap-4 items-center">

          <a href="twitter.com/brianruizy" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="text-lg text-slate-600 dark:text-slate-500" />
          </a>
          <a href="instagram.com/brianruizy" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-lg text-slate-600 dark:text-slate-500" />
          </a>
          <a href="github.com/brianruizy" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-lg text-slate-600 dark:text-slate-500" />
          </a>

          <a href="twitter.com/brianruizy" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-lg text-slate-600 dark:text-slate-500" />
          </a>

        </div>
      </footer>
    </Container>
  );
};

export default Footer;

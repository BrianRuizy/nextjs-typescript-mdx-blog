import Container from './Container';
import { FaGithub, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = (): JSX.Element => {
  return (
    <Container className='pb-20'>
      <hr className="w-100 divide my-4 border-slate-900/10 dark:border-slate-300/10"></hr>
      <footer className="mt-4 pb-12 flex justify-between">
        <p className="text-sm leading-6 text-slate-500">
          ©{new Date().getFullYear()}{' '}
          <a
            className="text-slate-500 hover:text-slate-900 dark:text-slate-500 dark:hover:text-slate-300"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/brianruizy"
          >
            Brian Ruiz
          </a>{' '}
          |{' '}
          <a
            className="text-slate-500 hover:text-slate-900 dark:text-slate-500 dark:hover:text-slate-300"
            href="https://github.com/BrianRuizy/nextjs-typescript-mdx-blog/blob/main/LICENSE"
            target="_blank"
            rel="noopener noreferrer"
          >
            MIT License
          </a>
        </p>
        <div className="flex flex-row gap-4 items-center">
          <a
            href="github.com/brianruizy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-lg text-slate-500" />
          </a>
          <a
            href="twitter.com/brianruizy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube className="text-lg text-slate-500" />
          </a>
          <a
            href="instagram.com/brianruizy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-lg text-slate-500" />
          </a>

          <a
            href="twitter.com/brianruizy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="text-lg text-slate-500" />
          </a>
        </div>
      </footer>
    </Container>
  );
};

export default Footer;

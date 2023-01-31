import { FaGithub, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = (): JSX.Element => {
  return (
    <footer className='container max-w-6xl mx-auto px-5 mt-8 md:mt-12 py-20'>
      <hr className="w-100 divide my-4 border-neutral-900/10 dark:border-neutral-300/10"></hr>
      <div className="mt-4 pb-12 flex justify-between">
        <p className="text-sm leading-6 text-neutral-500">
          ©{new Date().getFullYear()}{' '}
          <a
            className="text-neutral-500 hover:text-neutral-900 dark:text-neutral-500 dark:hover:text-neutral-300"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/brianruizy"
          >
            Brian Ruiz
          </a>{' '}
          |{' '}
          <a
            className="text-neutral-500 hover:text-neutral-900 dark:text-neutral-500 dark:hover:text-neutral-300"
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
            <FaGithub className="text-lg text-neutral-500" />
          </a>
          <a
            href="twitter.com/brianruizy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube className="text-lg text-neutral-500" />
          </a>
          <a
            href="instagram.com/brianruizy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-lg text-neutral-500" />
          </a>

          <a
            href="twitter.com/brianruizy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="text-lg text-neutral-500" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

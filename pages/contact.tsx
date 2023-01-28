import React from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Container from '../components/Container';

export const Contact = (): JSX.Element => {
  return (
    <Layout
      customMeta={{
        title: 'Contact - Hunter Chang',
      }}
    >
      <Header title="Contact" description={'Reach out anytime!'} />
      <Container className="flex flex-col gap-8 md:gap-12">
        <p className="text-base text-slate-500 dark:text-slate-400">
          Whether you have a question about my work, a suggestion for a new
          article or video topic, or just want to say hello and chat, — don&apos;t
          hesitate — I&apos;d love to hear from you! I aim to respond to all
          inquiries in a timely manner, and I look forward to connecting with
          you soon.
        </p>
        <div className="grid grid-cols-2 gap-6">
          <div className="col-span-2 md:col-span-1">
            <label
              htmlFor="email"
              className="block mb-2 text-lg font-medium text-slate-900 dark:text-white"
            >
              Your name
            </label>
            <input
              type="email"
              id="email"
              className="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-800 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@flowbite.com"
              required
            />
          </div>

          <div className="col-span-2 md:col-span-1">
            <label
              htmlFor="email"
              className="block mb-2 text-lg font-medium text-slate-900 dark:text-white"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-800 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@flowbite.com"
              required
            />
          </div>

          <div className="col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-lg font-medium text-slate-900 dark:text-white"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={6}
              className="block p-2.5 w-full text-sm text-slate-900 bg-slate-50 rounded-lg border border-slate-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-800 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Something nice 😅"
            ></textarea>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default Contact;

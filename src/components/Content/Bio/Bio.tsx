import Image from 'next/image';
import React from 'react';
import { FaEnvelope, FaFileAlt, FaLinkedin } from 'react-icons/fa';

import Button from '@/components/Button';

function BioContent() {
  return (
    <>
      <div className="flex max-w-3xl flex-col gap-8 text-xl">
        <div className="w-full">
          <Image
            src="/me2.png"
            width={200}
            height={200}
            className="my-0 mx-auto block md:hidden"
            alt="avatar"
          />
        </div>

        <div className="text-justify">
          Hi, my name is Paul Colandrea. I am a...
        </div>

        <ul className="flex list-none flex-col gap-4">
          <li>
            🖥 Computer Science Graduate from the{' '}
            <b>University of Central Florida</b>
          </li>

          <li>
            👨🏼‍💼 Lead Software Engineer @ <b>Byte Federal, Inc.</b>
          </li>
        </ul>

        <div className="text-justify">
          At the moment, I am thoroughly enjoying my work as a{' '}
          <b>Software Engineer</b> in the fintech industry. The dynamic nature
          of the field presents various challenges, which I find stimulating and
          rewarding to overcome.
        </div>

        <div className="my-4 mx-0 flex gap-3">
          <Button href={'/resume'}>
            Resume <FaFileAlt />
          </Button>
          <Button href={'https://www.linkedin.com/in/pdcolandrea/'}>
            Linkedin <FaLinkedin />
          </Button>
          <Button href={'mailto://colandreapaul@gmail.com'}>
            Email Me <FaEnvelope />
          </Button>
        </div>
      </div>
    </>
  );
}

export default BioContent;

import Image from 'next/image';
import React from 'react';
import { FaEnvelope, FaFileAlt, FaLinkedin } from 'react-icons/fa';

import Button from '@/components/Button';

function ExperienceContent() {
  return (
    <>
      <div className="flex max-w-3xl flex-col gap-8 text-xl">
        <div className="w-full">
          <Image
            src="/me.png"
            width={200}
            height={200}
            className="my-0 mx-auto hidden"
            alt="avatar"
          />
        </div>

        <div className="text-justify">My experience</div>

        <ul className="flex list-none flex-col gap-4">
          <li>
            🖥 Computer Science Graduate from University of Central Florida
          </li>

          <li>👨🏼‍💼 Lead Software Engineer @ Byte Federal, Inc. </li>
        </ul>

        <div className="text-justify">
          I am an aspiring <b>full-stack developer</b> and I will be seeking
          employment opportunities starting Summer 2023. If you or someone you
          know are hiring, I would love to hear from you!
        </div>

        <div className="my-4 mx-0 flex gap-3">
          <Button href={'https://nickchubb.github.io/resume/'}>
            Resume <FaFileAlt />
          </Button>
          <Button href={'https://www.linkedin.com/in/nickrchubb/'}>
            Linkedin <FaLinkedin />
          </Button>
          <Button href={'mailto://nick@nickchubb.ca'}>
            Email Me <FaEnvelope />
          </Button>
        </div>
      </div>
    </>
  );
}

export default ExperienceContent;

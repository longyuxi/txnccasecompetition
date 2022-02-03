/**
 * Copyright 2020 Vercel Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import cn from 'classnames';
import styleUtils from './utils.module.css';
import styles from './contact.module.css';
import contentstyles from './homepage-info.module.css';
import Break from './break';
import { REPO } from '@lib/constants';
import Link from 'next/link'
import Image from 'next/image'

export default function Info() {
  return (
    <div className={cn(styleUtils.appear, styleUtils['appear-second'], styles.info, contentstyles.contentblock)}>
      <div className={styles['description-separator']} />
      <h1>
        Home – 2022 Texas-North Carolina Competition
      </h1>
      <Break />

      <div className={cn(contentstyles.maintext)}>
        <div className={cn(contentstyles.emph)}>
          <p>CASE COMPETITION: Register for the 2022 Texas-North Carolina Competition</p>
          <p> (<Link href='https://docs.google.com/forms/d/e/1FAIpQLSfDXuflOuNSg5AGnTkq0NcIa4lYW5ilw3XINy9wWgStrd4m2w/viewform'>Group Registration</Link>) (<Link href='https://docs.google.com/spreadsheets/d/1pLhmPJqd_oF7pGFv5ocHhEyvSCw3s5aCvk6d4pK4GGw/edit?usp=sharing'>Look for team</Link>)</p>
        </div>
        <Break />

        <p>
          The Duke Advanced Professional Degree Consulting Club (APDCC), UNC Graduate Business and Consulting Club (GBCC), and the Consulting Club at Texas Medical Center will be co-hosting the 2022 Texas-North Carolina Competition virtually on Friday, April 22, 2022. You may <Link href='https://docs.google.com/forms/d/e/1FAIpQLSfDXuflOuNSg5AGnTkq0NcIa4lYW5ilw3XINy9wWgStrd4m2w/viewform'> register </Link>
          as a team of 3-5 people with a maximum of 1 MBA student per team, or you may <Link href='https://docs.google.com/spreadsheets/d/1pLhmPJqd_oF7pGFv5ocHhEyvSCw3s5aCvk6d4pK4GGw/edit?usp=sharing'>register</Link> as an individual, in which case we will help you to find a team.
        </p>
        <Break />

        <p>The final round of the competition will take place on Friday, April 9th over Zoom, and the first round will take place asynchronously from March 26th-April 2nd. The Case Competition Committee will notify teams accepted into the first round by March 25th.</p>
        <Break />

        <div className={cn(contentstyles.emph)}>
          <p>Schedule of April 9th (All times in Eastern Standard Time:</p>
        </div>
        <Break />
        <p>
          <li>10:00-11:30 – First Round Q&amp;A</li>
          <li>11:30-1:00  – Lunch break</li>
          <li>1:45-3:30  – Live Final Round</li>
          <li>3:45-4:00  – Awards Ceremony</li>
          <li>4:30-5:30  – Networking Event</li>
        </p>
        <Break />

        <p>
          Our competition will bring together graduate students (Master’s, PhD, JD, MD) and provide them the opportunity to apply their analytical skills and creativity in a real-world context, by solving a real-world business problem. For introductory material about business cases, see the lecture series from the Duke APDCC here. They will also have the opportunity to learn about the field of consulting from and network with consultants currently working for a number of firms, including McKinsey, BCG, Bain, and many others, and to meet other students looking to make the transition from advanced degrees to consulting.</p>
        <Break />

        <div className={cn(contentstyles.emph)}>
            <p>Hosted by :</p>
          <Image src='/dukecc-logo.png'
            alt="Duke"
            width={200}
            height={100} />
          <Image src='/tmccc-logo-whitebg.png'
            alt="Texas"
            width={200}
            height={100} />
          <Image src='/unccc-logo.png'
            alt="UNC"
            width={200}
            height={100} />
        </div>

      </div>
    </div>
  );
}

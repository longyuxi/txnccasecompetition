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

export const SITE_URL = 'https://demo.vercel.events';
export const SITE_ORIGIN = process.env.NEXT_PUBLIC_SITE_ORIGIN || new URL(SITE_URL).origin;
export const TWITTER_USER_NAME = 'vercel';
export const BRAND_NAME = 'TX-NC Case Competition';
export const SITE_NAME_MULTILINE = ['TX-NC', 'Case', 'Competition'];
export const SITE_NAME = 'TX-NC Case Competition';
// Don't know what this META_DESCRIPTION is
export const META_DESCRIPTION =
  '2022 Texas-North Carolina Competition';
export const SITE_DESCRIPTION =
  'An excellent platform for graduate and professional students to showcase their consulting skills.';
export const DATE = 'Friday, April 22, 2022';
export const SHORT_DATE = 'Apr 22 10am EST';
export const FULL_DATE = 'April 22 10am EST';
export const TWEET_TEXT = META_DESCRIPTION;
export const COOKIE = 'user-id';

// Remove process.env.NEXT_PUBLIC_... below and replace them with
// strings containing your own privacy policy URL and copyright holder name
export const LEGAL_URL = process.env.NEXT_PUBLIC_PRIVACY_POLICY_URL;
export const COPYRIGHT_HOLDER = process.env.NEXT_PUBLIC_COPYRIGHT_HOLDER;

export const CODE_OF_CONDUCT =
  'https://www.notion.so/vercel/Code-of-Conduct-Example-7ddd8d0e9c354bb597a0faed87310a78';
export const REPO = 'https://github.com/longyuxi/txnccasecompetition';
export const SAMPLE_TICKET_NUMBER = 1234;
export const NAVIGATION = [
  // {
  //   name: 'Stage A',
  //   route: '/stage/a'
  // },
  // {
  //   name: 'Stage C',
  //   route: '/stage/c'
  // },
  // {
  //   name: 'Stage M',
  //   route: '/stage/m'
  // },
  // {
  //   name: 'Stage E',
  //   route: '/stage/e'
  // },
  // {
  //   name: 'Schedule',
  //   route: '/schedule'
  // },
  // {
  //   name: 'Speakers',
  //   route: '/speakers'
  // },
  // {
  //   name: 'Expo',
  //   route: '/expo'
  // },
  // {
  //   name: 'Jobs',
  //   route: '/jobs'
  // }
  {
    name: 'Home',
    route: '/'
  },
  {
    name: 'Our Committee',
    route: '/committee'
  }
];

export type TicketGenerationState = 'default' | 'loading';

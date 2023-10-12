/* eslint-disable prettier/prettier */
import axios from 'axios';

const getTimeStamp = () => new Date().getTime();

export async function getNotes(): Promise<string> {
  const response = await axios.get(
    'https://api.dontpad.com/appNotes@xxx.body.json?lastModified=0',
    {
      headers: {
        'Accept-Encoding': 'application/json',
      },
    },
  );

  return response.data.body;
}

export async function postNote(note: string) {
  const data = `text=${note}&captcha-token-v2=&lastModified=${getTimeStamp()}&force=false`;

  const headers = {
    accept: 'application/json, text/javascript, */*; q=0.01',
    'accept-language': 'en-US,en;q=0.9,pt;q=0.8',
    'content-type': 'application/x-www-form-urlencoded;charset=UTF-8',
    'sec-ch-ua':
      '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-site',
    Referer: 'https://dontpad.com/',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
  };

  const response = await axios.post(
    'https://api.dontpad.com/appNotes@xxx',
    data,
    { headers },
  );

  console.log('POST', response.data);
}

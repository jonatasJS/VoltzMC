import { NextApiRequest, NextApiResponse } from 'next';

class DATAS {
  host: string;
  online: boolean;
  version: string;
  onlinePlayers: number;
  maxPlayers: number;
  description: string;
  favicon: string;
}

const GetData: DATAS = {
  host: '',
  online: false,
  version: '',
  onlinePlayers: 0,
  maxPlayers: 0,
  description: '',
  favicon: '',
};

function apiData() {
  fetch('https://voltzmc-api.herokuapp.com/').then(data => data.json().then(async response => {
      GetData.host = response.host ? response.host : '';
      GetData.online = response.host ? true : false;
      GetData.version = 'Minecraft Java 1.8.x-1.16.x';
      GetData.onlinePlayers = response.host ? response.onlinePlayers : 0;
      GetData.maxPlayers = response.host ? response.maxPlayers : 0;
      GetData.description = response.host ? response.description.descriptionText : '';
      GetData.favicon = response.host ? response.favicon : '';
    
    }).catch((err) => {
      return console.error(err);
    }))
}

apiData();

setInterval(apiData, 60000);

export default GetData;
import { NextApiRequest, NextApiResponse } from 'next';

class DATAS {
  host: string;
  version: string;
  onlinePlayers: number;
  maxPlayers: number;
  description: string;
  favicon: string;
}

const GetData: DATAS = {
  host: '',
  version: '',
  onlinePlayers: 0,
  maxPlayers: 0,
  description: '',
  favicon: '',
};

function apiData() {
  fetch('https://voltzmc-api.herokuapp.com/').then(data => data.json().then(async response => {
      GetData.host = response.host;
      GetData.version = 'Minecraft Java 1.8.x-1.16.x';
      GetData.onlinePlayers = response.onlinePlayers;
      GetData.maxPlayers = response.maxPlayers;
      GetData.description = response.description.descriptionText;
      GetData.favicon = response.favicon;
    
    }).catch((err) => {
      return console.error(err);
    }))
}

apiData();

setInterval(apiData, 60000);

export default GetData;
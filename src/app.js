const DiscordRPC = require('discord-rpc');
const fs = require('fs');
const child_process = require('child_process');
const chalk = require(`chalk`);


const CLIENT_ID = 'ENTER YOUR KEY HERE';


const rpc = new DiscordRPC.Client({ transport: 'ipc' });


let activity = {
  state: 'https//:projectfrost.net',
  details: 'Idle',
  largeImageKey: 'PASTE CUSTOM IMAGE HERE',
  startTimestamp: new Date(),
  largeImageText: 'SLOGAN OR WHATEVER U WANT',
  smallImageKey: 'https://i.imgur.com/qHfpGxL.gif',
  smallImageText: 'Finding Game',
  buttons: [
    {
      label: 'Made By Project Frost',
      url: 'https://projectfrost.net/'
    },
    {
      label: 'COOL TEXT HERE',
      url: 'COOL LINK HERE'
    }
  ]
};


function updatePresence() {
  rpc.setActivity(activity);
}


setInterval(() => {

  let exeNames = {
    'VRChat.exe': {
      logo: 'https://i.imgur.com/Rqh9JVH.png',
      text: 'VRChat <3 Mods',
      details: 'Playing VRChat',
      buttons: [
        {
          label: 'MADE BY PROJECT FROST',
          url: 'https://projectfrost.net/'
        },
        {
          label: 'Tupper',
          url: 'https://www.youtube.com/watch?v=bSnAXziBdyY'
        }
      ]
    },
    'PapersPlease.exe': {
      logo: 'https://i.imgur.com/z8uj7BV.png',
      text: 'Accepting All Bombers',
      details: 'Playing PapersPlease',
    },
    'People Playground.exe': {
      logo: 'https://i.imgur.com/ABuI1a7.png',
      text: 'Fixing The World',
      details: 'Playing People Playground'
    },
    'cod.exe': {
      logo: 'https://i.imgur.com/jJATwoe.png',
      text: 'Trying To Not Crash',
      details: 'Playing Call Of Duty: Morden Warfare 2',
      buttons: [
        {
          label: 'MADE BY PROJECT FROST',
          url: 'https://projectfrost.net/'
        },
        {
          label: 'Old Times',
          url: 'https://www.youtube.com/watch?v=UX8ZrlEsf4Y&t=3s'
        }
      ]
    },
    'BrawlhallaGame.exe': {
      logo: 'https://i.imgur.com/lyY2s3M.png',
      text: 'beating people like their dad did',
      details: 'Playing Brawlhalla'
    },
    'hl2.exe': {
      logo: 'https://i.imgur.com/xdfoPgG.png',
      text: 'Yes Im playing A 17 Year Old Game',
      details: 'Playing Garrys Mod'
    },
    'Warframe.x64.exe': {
      logo: 'https://i.imgur.com/me7lwER.png',
      text: 'Being Board',
      details: 'Playing Warframe'
    },
    'teardown.exe': {
      logo: 'https://i.imgur.com/lbvuHYx.png',
      text: 'Causing Mayhem',
      details: 'Playing Teardown'
    },
    'r5apex.exe': {
      logo: 'https://i.imgur.com/mc6FY0R.jpg',
      text: 'Trying Not To Shoot A Bald Wraith Player',
      details: 'Playing Apex Legends'
    },
    'GTAIV.exe': {
      logo: 'https://i.imgur.com/zlEv3Y2.jpg',
      text: 'Prob Using A Mod Menu',
      details: 'Playing Grand Theft Auto IV',
      buttons: [
        {
          label: 'MADE BY PROJECT FROST',
          url: 'https://projectfrost.net/'
        },
        {
          label: 'Mod Menu',
          url: 'https://www.youtube.com/watch?v=ezOfRxVGnP4&t=168s'
        }
      ]
    }
  };
  let running = false;
  let processes = child_process.execSync('tasklist').toString().split('\n');
  processes.forEach((process) => {
    Object.keys(exeNames).forEach((exeName) => {
      if (process.startsWith(exeName)) {
        running = true;

        activity.smallImageKey = exeNames[exeName].logo;
        activity.smallImageText = exeNames[exeName].text;
        activity.state = 'ᴬˡˡ ˢᵏᶦˡˡ ᴺᵒ ᴸᵘᶜᵏ';
        activity.details = exeNames[exeName].details;;
        activity.buttons = exeNames[exeName].buttons;
      }
    });
  });

  // Update the presence based on whether any of the executable files are running or not
  if (!running) {
    activity.state = 'https://projectfrost.net';
    activity.details = 'Idle';
    // Reset the smallImageKey and smallImageText
    activity.smallImageKey = 'https://i.imgur.com/qHfpGxL.gif';
    activity.smallImageText = 'Finding Game';
    activity.buttons = [
      {
        label: 'MADE BY PROJECTFROST',
        url: 'https://projectfrost.net/'
      },
      {
        label: 'COOL TEXT HERE',
        url: 'COOL URL HERE'
      }
    ]
  }

  updatePresence();
}, 5000);

// Log in to Discord
rpc.login({ clientId: CLIENT_ID }).catch(console.error);


console.clear;
console.log(chalk.magenta('██████╗░██████╗░░█████╗░░░░░░██╗███████╗░█████╗░████████╗  ███████╗██████╗░░█████╗░░██████╗████████╗'));
console.log(chalk.magenta('██╔══██╗██╔══██╗██╔══██╗░░░░░██║██╔════╝██╔══██╗╚══██╔══╝  ██╔════╝██╔══██╗██╔══██╗██╔════╝╚══██╔══╝'));
console.log(chalk.magenta('██████╔╝██████╔╝██║░░██║░░░░░██║█████╗░░██║░░╚═╝░░░██║░░░  █████╗░░██████╔╝██║░░██║╚█████╗░░░░██║░░░'));
console.log(chalk.magenta('██╔═══╝░██╔══██╗██║░░██║██╗░░██║██╔══╝░░██║░░██╗░░░██║░░░  ██╔══╝░░██╔══██╗██║░░██║░╚═══██╗░░░██║░░░'));
console.log(chalk.magenta('██║░░░░░██║░░██║╚█████╔╝╚█████╔╝███████╗╚█████╔╝░░░██║░░░  ██║░░░░░██║░░██║╚█████╔╝██████╔╝░░░██║░░░'));
console.log(chalk.magenta('╚═╝░░░░░╚═╝░░╚═╝░╚════╝░░╚════╝░╚══════╝░╚════╝░░░░╚═╝░░░  ╚═╝░░░░░╚═╝░░╚═╝░╚════╝░╚═════╝░░░░╚═╝░░░'));
console.log(chalk.red('                                     DiscordRPC By Project Frost#4429                               '));
console.log(chalk.red('                                             projectfrost.net                                       '));
console.log('                                                                                                                  ');
console.log(chalk.green('                                  [DiscordRPC Has Loaded Successfully]                              '));

# DiscordRPC-Withe-Game-Detection

## Setup

First Go To [Discord Develper Portal](https://discord.com/developers/applications).

Make a new application and name it to whatever u want the title name to be for the RPC

Press onto bot and turn it into a bot appliaction then copy the key then paste it in this section ``` const CLIENT_ID = 'ENTER YOUR KEY HERE'; ```

And when trying to run the code u can open terminal and do node . or npm test to make it more easy to load it up chuck it into your run file loaction ```C:\Users\Admin\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup```
And Make A Bat File That opens the folder in CMD and runs the command node . or npm test You can look on youtube on how to do that [EXAMPLE](https://www.youtube.com/watch?v=nF9TiL34FT0&t=84s)

## Adding New Games To The "WATCH LIST"

What U First need to grab its the exe name the game is running from you can easily find that by looking in the game files i already have some games done for u in the code :)

### Game "Watch List" with buttons
```
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
```

### Game "Watch List" Without Buttons
```
    'r5apex.exe': {
      logo: 'https://i.imgur.com/mc6FY0R.jpg',
      text: 'Trying Not To Shoot A Bald Wraith Player',
      details: 'Playing Apex Legends'
```

# Credits
[MY WEBSITE](https://projectfrost.net/)

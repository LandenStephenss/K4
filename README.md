# About
K4 is a bot designed with everyone in mind. With its simplistic features and looks.

# Features
- Moderation
- Information
- Utility
- Leveling System
- Currency System
- NSFW

# Upcoming Features
- Music
- Per-Guild Configuration

# Setup
- If you decide to not use a package manager you can use the following to start the bot, but when you use the restart command you will have to manually start the bot again.
```bash
node app.js
```
- If you are using a package manager like pm2 you can use this to start the bot, once started it will restart when it crashes.
```bash
pm2 start app.js --name K4
```
- __settings.json__ should look something like this.
```json
{
      "token" : "YourToken",
      "prefix" : ">",
      "EmbedColor" : 5521613,
      "ownerID" : "ID",
      "errors" : {
            "MissingArgs" : "You are missing an argument!",
            "Error" : "It seems an error occured.",
            "MissingMention" : "Please mention a user!",
            "NoUser" : "I could not find that user.",
            "MissingPermission" : "I do not have permission to do that.",
            "UserPerm" : "You do not have permission to do that."
      }
}
```


 # FAC
 - Can i add custom commands?
            Yes! But you will need to know some Discord.JS


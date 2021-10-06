# Captain's Log
This software is designed to be a daily log for software developers.  I've found that at the end of each day, writing everything down that happened, explanations of root causes, and solutions (including what you tried that didn't work) allows you to more easily remember how to solve the same or similar problems when they occur again; or at very least you have a search-able set of notes catalogued alongside a calendar.

There are other tools I've used for this.  I really liked Agenda, but it's only available on the MacOS and IOS platforms.  After my mac suffered a catastrophic failure I was left with only my tablet, which is sometimes sufficient, but sometimes I need to make notes when I don't have the tablet with me.

Evernote started off great many years ago, but now its bloated and the UI changes frequently.  I simply don't like Microsoft's OneNote.

Another honorable mention is "Red Notebook" which is an older program which has a good concept but a terrible editor.  I want to be able to edit my notes with markdown, link to different notes, etc.  An older version of Red Notebook shows a word cloud which I thought might be interesting but it was taken out in later versions.  This tool uses a local database and so has no cloud synchronization.

## Design Goals

I want something that might be made available on any device or operating system, and something that stores, or at least syncs its data in the cloud, such that if I make notes on my tablet, they appear in my desktop copy on another machine, and vice versa.  I should be able to use a browser on any computer to make and search notes.

Since this is just the start of this project, the simplest way to realize these goals is to build a web app.  This is that app.  Later, I can make a native version of the app for desktops with Electron, and perhaps even make tablet / mobile versions with React Native.

## Tech Stack

This is written in JavaScript using Node with Express, GraphQL, and a React front-end.  The database used is MongoDB accessed using the Mongoose ODM.  I intend to deploy it on Heroku with the database hosted by MongoDB Atlas.
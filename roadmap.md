THE NEW IDEA FOR THE WEB GAME

Welcome to the manor!

We’ve been expecting you. We hope you enjoy this dinner party.

Unfortunately, it seems as if someone has shown up uninvited…someone with murderous intentions.

We do not want anyone to panic, though: we’ve contacted the authorities and they have arrived. However, to avoid detection by the murderer, they are disguised as a regular civilian.

A few other interesting characters have also shown up: A medium who can see dead people, a Jester

Feel free to explore the manor, but to ensure everyone’s safety, we are issuing the following ground rules:

-All guests must reconvene in the main room after two minutes of exploration.
-Guests must remain in the main room for three minutes to discuss who they believe the killer is.

Things to consider:

Killers: You may kill one person per round. This is not required, and your victim will know that you killed them.
You win if the number of guests equals the number of killers alive. 
You can lock a room for ten seconds. No one will be able to enter or leave while it is locked. This can only be done once per room per round (i.e. you can lock the kitchen, then go to the billiard room and lock that, but you cannot re-lock the kitchen until next round).
Locking rooms is secret - no one will know you did it, but if you lock a room and the person with you survives to the meetup, then they’ll know you’re a killer.

Accomplice: You do not have killing power, but are on the same team as the killers. Your goal is to assist the murderers in their crimes.
You are on the murderers team, but do not count towards the murderers numbers - if six or five players are left and you are alive with two murderers, then

Detective: You have been sent to investigate the murderers. Each round, you can secretly investigate one person to see if they are a murderer - they will not know you investigated them.
The minion and jester will show up as “suspicious, but not murderous”.

Jester: Some men just want to watch the world burn. In the Jester’s case, he wants to get voted out by the 

Medium: You can sense when you’re in the same room as a ghost, and can converse with them. 

There are secret passageways, but like Among Us, they’re only accessible to the murderers - initially. Use of these is public knowledge.

MY GOAL:My goal for this app is, in short, mafia with more. I’ve realized that pure mafia isn’t actually that great as a standalone app

Due to the limitations of not having a video game style interface, this won’t just be an Among Us knockoff. It will kinda feel like it, but I will eventually figure out how to 
(I mean, having extra roles 

Leveraging at least voice chat would be nice, but I’ll start with text. Until I can integrate voice, Discord will be the way to go.

EACH ROOM:

You are in {room}. {players} are with you.

>Converse
>Move

if(medium){
You are in {room}. {players} are with you, and you can feel the spirit of {dead}.

>converse
>Move
>}

onPlayerEnter{
{player} has entered the room.}

onPlayerLeave{
{player} has left the room.}

KILL:



For the victim:
{killer} approaches you, brandishes their weapon, and kills you!

You are now dead. You are still free to explore the mansion, but you may not converse with the living.
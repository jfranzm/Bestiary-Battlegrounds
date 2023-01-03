# Beastiary Battlegrounds
### By [Jeffrey Martinez](https://github.com/jfranzm)

## Description:

A turn-based RPG that draws inspiration from games like Pokemon and Dragon Quest - utilizing unit based battling.

![Title Screen and Game UI](assets/GIFs/Title_Screen.gif)

## Battle System:

The battle system follows the generic formula of turn-based RPGs where the goal is to deplete your opponants HP before they deplete yours. This can be achieved in several ways:

### Attack:

A generic attack action that bases the damage output on the units 'atkStat' or 'Attack Status'. Furthermore, the overall damage output incorperates the opposing units 'defStat' or 'defensive status', in addition to whether the opposing unit has taken a 'defensive stance'.

![Attack](assets/GIFs/Attacking.gif)

### Defend:

When used, the unit takes on a defensive stance which reduces overall damage taken by 1/3 for that turn.

![Defend](assets/GIFs/Defend.gif)

### Skills:

When selected, a pop up menu appears displaying skills that the player unit can use in battle. Skills can differ from the attack action by doing more damage or by changing the status of the units in the battle. Some examples include:

![Skills Menu](assets/GIFs/Skills%20Menu.gif)

### Heal:

Heals the unit's HP by 1/4 of their total HP at the cost of 10 MP.

![Healing](assets/GIFs/heal.gif)

### Double-Hit:

A skill that damages the opposing unit twice in one turn costing the user 4 MP.

![double-hit skill](assets/GIFs/Doublehit.gif)

### Focus:

When selected, the unit heightens their focus and begins to restore used MP to use more skills at the cost of the risk of taking more damage.

![focus action](assets/GIFs/focus.gif)

## Technologies Used:

This browser-based game was built entirely from using JavaScript, HTML, and CSS.

The functionality of the game was entirely built through JavaScript - utilizing object-oriented programming to perform the player's actions in response to their inputs. It was further utilized to perform the necessary calculations to properly distribute the damage to the appropriate units and integrate skill utility. Additionally, this program made it possible to bring life to the game by granting animations to the units actions and incorperating music and sound effects to the scene.

HTML was used to build the layout of the webpage and to implement the assets for the game such as character models, soundfx, and the canvas in which the game runs in.

CSS was used to style the webpage and give life to the characters. All the animations that were used in the game - from the UI to the characters movements - was made from CSS.

## Getting Started:

### Demo:
[Checkout the game here!](https://jfranzm.github.io/Bestiary-Battlegrounds/)

### Instructions:
The objective of the game is to deplete your opponent's HP before they can deplete your's by damaging them. A good tip is to manage your MP appropriately and to perform heals sparringly to not run out of MP too quickly!

### Rules:
* Player unit always moves first.
* The turns alternate.
* Skills cannot be performed if they do not have the sufficient amount of MP to use them - the unit's turn is skipped otherwise (keep track of your MP!)

## Next Steps: Planned future enhancements
* Incorperate an overworld that allows you to engage in battles.
* Include a 'Run' option to allow players to skip unneccessary battles or consever HP when in the overworld.
* Add more skills that vary in effect (e.g., skipping opponents turn, inflicting a status that drains HP over time (i.e., poison), more damage!!!).
* Create a speed stat to change up turn order - faster units go first!
* Create new units that vary in stats, skills, and design.
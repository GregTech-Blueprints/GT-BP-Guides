---
date: 2025-12-13
tiers: ['EV', 'IV']
mods: ['Blood Magic']
author: "SeanSilva"
pack_version: 2.8.1
image: 
---

# One Altar Slate Automation
Automating the blood altar is a part of building runes for large powerful altars capable of summoning the best meteors in GTNH. However unlike gregtech machines the altar does not output items when crafts are finshed or move them to a different inventory. Instead, the input items change to the output items inside the altar, which needs to be detected to extract the contents of the altar.

The simplest way to do this is to have a conduit that extracts finished products from the altar into AE. This unfortunately has conflicts with slates: The finished product 'Blank Slate' is an input for 'Reinforced Slate'. 

![NEI image of blood slate recipes showing blank slate as both an input and output](/img/gtnh/guides/magic/blood-magic/one-altar-slate-automation/01.png)

You can use two altars to get around this, but that requires more slates for the high tier altar and a second Well of Suffering ritual, which is much more manual labor.

To break this conflict you can use a name mold in a forming press to rename the input 'Blank Slate'. When the altar produces the reinforced slates, it does not preserve the name, so now any name sensitive filtering can distinguish between inputs and outputs on the altar.

![Using Tinkers Tool forge/station to rename a Mold (name) for use in a forming press](/img/gtnh/guides/magic/blood-magic/one-altar-slate-automation/02.png)
![AE2 pattern for renaming blank slates into Rename1](/img/gtnh/guides/magic/blood-magic/one-altar-slate-automation/03.png)
![AE2 pattern for using renamed blank slates to produce reinforced slates](/img/gtnh/guides/magic/blood-magic/one-altar-slate-automation/04.png)



A very clean setup uses a small subnet (Blue) to manage the altar. The two kissing interfaces are where patterns from main net (White) are inserted. Above is a storage bus onto the blood altar. Since the only storage is the single stack on the altar, no advanced blocking card is needed.

![Blood altar subnet (blue) interfaced with two main net ME interfaces](/img/gtnh/guides/magic/blood-magic/one-altar-slate-automation/05.png)
![The main net patterns into the altar subnet](/img/gtnh/guides/magic/blood-magic/one-altar-slate-automation/06.png)

To remove the final products from the altar, the interface facing the machine hull is requesting all unnamed altar outputs, and the machine hull has two conveyor belts to pull the stocked outputs into main net, you may use other methods to extract from the interface. 

![Stocking the unnamed altar outputs in the subnet](/img/gtnh/guides/magic/blood-magic/one-altar-slate-automation/07.png)
![Using an export and import conveyor on a machine hull to move outputs from subnet to main net](/img/gtnh/guides/magic/blood-magic/one-altar-slate-automation/08.png)

If you need more then 9 outputs from the altar, then you can add more interfaces facing the machine hull and add an extra conveyor.

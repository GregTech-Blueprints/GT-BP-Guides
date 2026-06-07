---
date: 2026-06-07
tiers: ['Stone Age']
mods: ['Forestry','Magic Bees']
author: "mister_nibbles"
pack_version: "2.8.4"
image: ""
---
# Manually Statting Bees

One of the core mechanics of bee breeding, especially before having access to the Genetics or Gendustry machines, is manually manipulating the genetic code of the bees to your desire.

# Reading the alleles

Each bee has 14 different stats each with an active and inactive version for a potential total of 28 different alleles for each bee.  In order to easily choose the ones we want we must first have a way to determine which ones we currently have.

- Cheap n Cheaty
  - The easiest way to see what alleles a bee currently has is by hovering it in your inventroy and hitting the NEI "Usage" key.  Choosing the Genetic Sampler tab will show all possible gene samples that this bee could produce.  Please note that this does not show which trait is active and which is inactive.  Please also note that some folks consider this an exploit, so use your own judgement on whether or not to use it.
- No circuits yet? Use some steel!
  - If you're attempting to breed bees pre LV you can obtain a Field Kit for the low low price of some Steel, 6 Flint, 1 Diamond and 1 Glass.  Each analysis costs a single piece of paper, and not only doesn't tell you which traits are active and which are inactive, it doesn't tell you about the inactive trats at all (you will still get to know the inactive species of the bee by examining the tooltip after the bee is analyzed).
- Finally some real information
  - At last we arrive at the standard suggested way to analyze bees: the Beealyzer.  This will set you back several LV circuits, but it's more than worth it!  For the low low cost of a single drop of honey you will get all 28 alleles laid out in a conveient and easy to read format.

# What to do with all this information

Now that we know what genes the bees have, we can start manipulating them to suit our needs.  Before we go blindly changing the genes, let's first get an idea of why we might want to do this.

### Single gene manipulation: purebred species.

Just bred a new species of bee, but didn't get quest credit?  This means that the bee's species isn't pure, which is to say the Active and Inactive species don't match.  Analyze the drones you have counting up the desireable traits each drone has and adding them up.

The drone could have:
- The desired species as both the active and inactive gene (+2)
- The desired species as the active gene and an unwanted species as the inactive gene (+1)
- An unwanted species as both the active and inactive gene (+0).

Now analyze the princess and apply the same math and combine them as follows:
- Princess +2 with Drone +2.  You're done! You have both a princess and drone with a pure species.
- Princess +1 with Drone +2.  This is valid, but if you have a +2 drone and a +1 drone, consider saving the +2 drone for when you get a +2 princess.
- Princess +1 with Drone +1.  The most common scenario.  I have no hard proof, but it _feels_ like combining bees with the desirable trait on the same side (active/inactive) is less likely to give the desired outcome. If possible combine a princess and drone with the desired trade on oppisite sides.
- Princess +1 with Drone +0.  Danger danger. Cross your fingers and hope for a +1 princess and +1 drone
- Princess +0 with Drone +1.  Even more danger.  Good luck!
- Princess +0 with Drone +0.  You didn't really think this would do anything did you?


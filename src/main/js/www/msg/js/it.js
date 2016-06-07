var MSG = {
    title: "Codice",
    blocks: "Blocchi",
    linkTooltip: "Salva e collega ai blocchi.",
    deployTooltip: "Esegui il programma definito dai blocchi nell'area di lavoro.",
    badCode: "Errore programma:\n%1",
    timeout: "È stato superato il numero massimo consentito di interazioni eseguite.",
    trashTooltip: "Elimina tutti i blocchi.",
    catLogic: "Logica",
    catLoops: "Cicli",
    catMath: "Matematica",
    catText: "Testo",
    catLists: "Elenchi",
    catColour: "Colore",
    catVariables: "Variabili",
    catDrone: "Drone",
    catInventory: "Inventory",
    listVariable: "elenco",
    textVariable: "testo",
    httpRequestError: "La richiesta non è stata soddisfatta.",
    linkAlert: "Condividi i tuoi blocchi con questo collegamento:\n\n%1",
    hashError: "Mi spiace, '%1' non corrisponde ad alcun programma salvato.",
    xmlError: "Non è stato possibile caricare il documento.  Forse è stato creato con una versione diversa di Blockly?",
    badXml: "Errore durante l'analisi XML:\n%1\n\nSeleziona 'OK' per abbandonare le modifiche o 'Annulla' per continuare a modificare l'XML."
};

Blockly.Msg.DRONE = "Drone";
Blockly.Msg.MATERIALS = "Materiale";
Blockly.Msg.MOUVEMENT = "Movimento";
Blockly.Msg.RECTANGLE = "Rettangolo";
Blockly.Msg.DELETE = "cancellare";
Blockly.Msg.CIRCLE = "Cerchio";
Blockly.Msg.WIDTH = "Larghezza";
Blockly.Msg.HEIGHT = "Altezza";
Blockly.Msg.LENGTH = "Lughezza";
Blockly.Msg.RADIUS = "raggio";
Blockly.Msg.FULL = "Pieno";
Blockly.Msg.EMPTY = "Vuoto";
Blockly.Msg.INVENTORY = "Inventario";
Blockly.Msg.ITEMS_TOOLS = "Utensili";
Blockly.Msg.ITEMS_FOOD = "Mangiare";
Blockly.Msg.ITEMS_TRANSPORTATION = "Trasporto";
Blockly.Msg.ITEMS_WEAPONS_ARMOR = "Armi e Armature";
Blockly.Msg.ANIMALS = "Animali";
Blockly.Msg.MOUVEMENT_UP = "su";
Blockly.Msg.MOUVEMENT_DOWN = "giu";
Blockly.Msg.MOUVEMENT_FWD = "in avanti";
Blockly.Msg.MOUVEMENT_BACK = "in dietro";
Blockly.Msg.MOUVEMENT_RIGHT = "destra";
Blockly.Msg.MOUVEMENT_LEFT = "sinistra";
Blockly.Msg.MOUVEMENT_TURN_RIGHT = "gira a destra";
Blockly.Msg.MOUVEMENT_TURN_LEFT = "gira a sinistra";
Blockly.Msg.MOUVEMENT_BACKTOSTART = "ritorna alla partenza";
Blockly.Msg.MOUVEMENT_SAVESTART = "salva questa partenza";

Blockly.Msg.DEPLOY_SUCCESS = "OK, ora puoi provare il tuo comando in minecraft.";
Blockly.Msg.MISSING_NAME = "Il tuo comando non ha un nome valido";

Blockly.Msg.TOOLTIP_DRONE = "Construct a Drone Object";
Blockly.Msg.TOOLTIP_MATERIALS = "Naturally generated and created material blocks.";
Blockly.Msg.TOOLTIP_ANIMALS = "Spawn passive and pameable animals.";
Blockly.Msg.TOOLTIP_DRONEMOVE = "Control the Drone's movement using any of the following methods.";
Blockly.Msg.TOOLTIP_RECTANGLE = "'A convenience method for building things.'";
Blockly.Msg.TOOLTIP_CIRCLE = "A convenience method for building cylinders. Building begins radius blocks to the right and forward.";
Blockly.Msg.TOOLTIP_DELETE = "A convenience method to delete things or areas.";
Blockly.Msg.TOOLTIP_INVENTORY = "Provides functions to add items to, remove items from and check the contents of a player's inventory";
Blockly.Msg.TOOLTIP_TOOLS = "Tools are items used by the player while held to perform actions faster and more efficiently.";
Blockly.Msg.TOOLTIP_FOOD = "Foods are consumable items that when eaten restore hunger points and sometimes cause status effects.";
Blockly.Msg.TOOLTIP_TRANSPORTATION = "Transportation involves the methods by which players move around the world.";
Blockly.Msg.TOOLTIP_WEAPONS_ARMOR = "Armor is used to reduce damage from mobs, players, lava, and explosions. Weapons are mostly used to kill mobs and players faster strategically.";

Blockly.Msg.ANIMALS_NAMES = []; // init blocks array
Blockly.Msg.ANIMALS_NAMES.BAT = 'pipistrello';
Blockly.Msg.ANIMALS_NAMES.CHICKEN = 'pollo';
Blockly.Msg.ANIMALS_NAMES.COW = 'mucca';
Blockly.Msg.ANIMALS_NAMES.PIG = 'maiale';
Blockly.Msg.ANIMALS_NAMES.RABBIT = 'coniglio';
Blockly.Msg.ANIMALS_NAMES.WOLF = 'lupo';
Blockly.Msg.ANIMALS_NAMES.SHEEP = 'pecora';
Blockly.Msg.ANIMALS_NAMES.HORSE = 'cavallo';
Blockly.Msg.ANIMALS_NAMES.OCELOT = 'ocelot';

Blockly.Msg.ITEMS_NAMES = []; // init items array
//tools
Blockly.Msg.ITEMS_NAMES.diamondAxe = "Diamond Axe";
Blockly.Msg.ITEMS_NAMES.diamondHoe = "Diamond Hoe";
Blockly.Msg.ITEMS_NAMES.diamondSpade = "Diamond Shovel";
Blockly.Msg.ITEMS_NAMES.diamondPickaxe = "Diamond Pickaxe";
Blockly.Msg.ITEMS_NAMES.shears = "Shears";
Blockly.Msg.ITEMS_NAMES.flintAndSteel = "Flint and Steel";
Blockly.Msg.ITEMS_NAMES.fishingRod = "Fishing Rod";
Blockly.Msg.ITEMS_NAMES.bed = "Bed";
Blockly.Msg.ITEMS_NAMES.torch = "Torch";

//food
Blockly.Msg.ITEMS_NAMES.carrot = "Carrot";
Blockly.Msg.ITEMS_NAMES.potato = "Potatoe";
Blockly.Msg.ITEMS_NAMES.cocoa = "Cocoa Beans";
Blockly.Msg.ITEMS_NAMES.apple = "Apple";
Blockly.Msg.ITEMS_NAMES.melon = "Melon";
Blockly.Msg.ITEMS_NAMES.sugar = "Sugar";
Blockly.Msg.ITEMS_NAMES.milkBucket = "Milk bucket";
Blockly.Msg.ITEMS_NAMES.egg = "Egg";
Blockly.Msg.ITEMS_NAMES.wheat = "Wheat";
Blockly.Msg.ITEMS_NAMES.pumpkin = "Pumpkin";

//transportation
Blockly.Msg.ITEMS_NAMES.rails = "Rail";
Blockly.Msg.ITEMS_NAMES.minecart = "Minecart";
Blockly.Msg.ITEMS_NAMES.poweredRail = "Rail (Powered)";
Blockly.Msg.ITEMS_NAMES.redstoneTorchOn = "Redstone Torch (active)";

//weapons & armor
Blockly.Msg.ITEMS_NAMES.bow = "Bow";
Blockly.Msg.ITEMS_NAMES.arrow = "Arrow";
Blockly.Msg.ITEMS_NAMES.diamondBoots = "Diamond Boots";
Blockly.Msg.ITEMS_NAMES.diamondChestplate = "Diamond Chestplate";
Blockly.Msg.ITEMS_NAMES.diamondHelmet = "Diamond Helmet";
Blockly.Msg.ITEMS_NAMES.diamondLeggings = "Diamond Leggings";
Blockly.Msg.ITEMS_NAMES.tnt = "tnt";

Blockly.Msg.OBJNAMES = []; // init blocks array
Blockly.Msg.OBJNAMES[0] = "aria";
Blockly.Msg.OBJNAMES[1] = "pietra";
Blockly.Msg.OBJNAMES[2] = "erba";
Blockly.Msg.OBJNAMES[3] = "terra";
Blockly.Msg.OBJNAMES[4] = "pietrisco";
Blockly.Msg.OBJNAMES[5] = "oak";
Blockly.Msg.OBJNAMES[6] = "sapling oak";
Blockly.Msg.OBJNAMES[7] = "bedrock";
Blockly.Msg.OBJNAMES[8] = "acqua";
Blockly.Msg.OBJNAMES[9] = "acqua ferma";
Blockly.Msg.OBJNAMES[10] = "lava";
Blockly.Msg.OBJNAMES[11] = "lava ferma";
Blockly.Msg.OBJNAMES[12] = "sabbia";
Blockly.Msg.OBJNAMES[13] = "ghiaia";
Blockly.Msg.OBJNAMES[14] = "oro grezzo";
Blockly.Msg.OBJNAMES[15] = "ferro grezzo";
Blockly.Msg.OBJNAMES[16] = "carbone grezzo";
Blockly.Msg.OBJNAMES[17] = "legno";
Blockly.Msg.OBJNAMES[18] = "foglie";
Blockly.Msg.OBJNAMES[19] = "spugna";
Blockly.Msg.OBJNAMES[20] = "vetro";
Blockly.Msg.OBJNAMES[21] = "lapis_lazuli grezzo";
Blockly.Msg.OBJNAMES[22] = "lapis_lazuli_block";
Blockly.Msg.OBJNAMES[23] = "dispenser";
Blockly.Msg.OBJNAMES[24] = "sandstone";
Blockly.Msg.OBJNAMES[25] = "note";
Blockly.Msg.OBJNAMES[26] = "bed";
Blockly.Msg.OBJNAMES[27] = "rotaie elettriche";
Blockly.Msg.OBJNAMES[28] = "detector_rail";
Blockly.Msg.OBJNAMES[29] = "sticky_piston";
Blockly.Msg.OBJNAMES[30] = "ragnatela";
Blockly.Msg.OBJNAMES[31] = "grass_tall";
Blockly.Msg.OBJNAMES[32] = "dead_bush";
Blockly.Msg.OBJNAMES[33] = "piston";
Blockly.Msg.OBJNAMES[34] = "piston_extn";
Blockly.Msg.OBJNAMES[35] = "wool white";
Blockly.Msg.OBJNAMES[37] = "fiore giallo";
Blockly.Msg.OBJNAMES[38] = "rose";
Blockly.Msg.OBJNAMES[38] = "flower_red";
Blockly.Msg.OBJNAMES[39] = "mushroom_brown";
Blockly.Msg.OBJNAMES[40] = "mushroom_red";
Blockly.Msg.OBJNAMES[41] = "gold";
Blockly.Msg.OBJNAMES[42] = "iron";
Blockly.Msg.OBJNAMES[46] = "tnt";
Blockly.Msg.OBJNAMES[47] = "bookshelf";
Blockly.Msg.OBJNAMES[48] = "moss_stone";
Blockly.Msg.OBJNAMES[49] = "ossidiana";
Blockly.Msg.OBJNAMES[50] = "torcia";
Blockly.Msg.OBJNAMES[51] = "fuoco";
Blockly.Msg.OBJNAMES[52] = "monster_spawner";
Blockly.Msg.OBJNAMES[53] = "stairs oak";
Blockly.Msg.OBJNAMES[67] = "stairs cobblestone";
Blockly.Msg.OBJNAMES[54] = "cassa";
Blockly.Msg.OBJNAMES[55] = "pietrarossa cavo";
Blockly.Msg.OBJNAMES[56] = "diamante grezzo";
Blockly.Msg.OBJNAMES[57] = "diamante";
Blockly.Msg.OBJNAMES[58] = "banco da lavoro";
Blockly.Msg.OBJNAMES[59] = "wheat_seeds";
Blockly.Msg.OBJNAMES[60] = "farmland";
Blockly.Msg.OBJNAMES[61] = "fornace";
Blockly.Msg.OBJNAMES[62] = "furnace_burning";
Blockly.Msg.OBJNAMES[63] = "sign_post";
Blockly.Msg.OBJNAMES[64] = "porta di legno";
Blockly.Msg.OBJNAMES[65] = "scala a pioli";
Blockly.Msg.OBJNAMES[66] = "rotaie";
Blockly.Msg.OBJNAMES[68] = "cartello";
Blockly.Msg.OBJNAMES[69] = "lever";
Blockly.Msg.OBJNAMES[70] = "pressure_plate_stone";
Blockly.Msg.OBJNAMES[71] = "door_iron";
Blockly.Msg.OBJNAMES[72] = "pressure_plate_wood";
Blockly.Msg.OBJNAMES[73] = "pietrarossa grezza";
Blockly.Msg.OBJNAMES[74] = "pietrarossa grezza luminosa";
Blockly.Msg.OBJNAMES[75] = "torch_redstone";
Blockly.Msg.OBJNAMES[76] = "torch_redstone_active";
Blockly.Msg.OBJNAMES[77] = "stone_button";
Blockly.Msg.OBJNAMES[79] = "ghiaccio";
Blockly.Msg.OBJNAMES[80] = "neve";
Blockly.Msg.OBJNAMES[81] = "cactus";
Blockly.Msg.OBJNAMES[82] = "clay";
Blockly.Msg.OBJNAMES[83] = "sugar_cane";
Blockly.Msg.OBJNAMES[84] = "jukebox";
Blockly.Msg.OBJNAMES[85] = "fence";
Blockly.Msg.OBJNAMES[86] = "pumpkin";
Blockly.Msg.OBJNAMES[87] = "netherrack";
Blockly.Msg.OBJNAMES[88] = "soulsand";
Blockly.Msg.OBJNAMES[89] = "pietraluce";
Blockly.Msg.OBJNAMES[90] = "netherportal";
Blockly.Msg.OBJNAMES[91] = "jackolantern";
Blockly.Msg.OBJNAMES[92] = "torta";
Blockly.Msg.OBJNAMES[93] = "redstone_repeater";
Blockly.Msg.OBJNAMES[94] = "redeston_repeater_active";
Blockly.Msg.OBJNAMES[95] = "stained_glass white";
Blockly.Msg.OBJNAMES[96] = "trapdoor";
Blockly.Msg.OBJNAMES[97] = "monster_egg";
Blockly.Msg.OBJNAMES[98] = "brick stone";
Blockly.Msg.OBJNAMES[45] = "brick red";
Blockly.Msg.OBJNAMES[99] = "mushroom_brown_huge";
Blockly.Msg.OBJNAMES[100] = "mushroom_red_huge";
Blockly.Msg.OBJNAMES[101] = "iron_bars";
Blockly.Msg.OBJNAMES[102] = "glass_pane";
Blockly.Msg.OBJNAMES[103] = "melone";
Blockly.Msg.OBJNAMES[104] = "pumpkin_stem";
Blockly.Msg.OBJNAMES[105] = "melon_stem";
Blockly.Msg.OBJNAMES[106] = "vines";
Blockly.Msg.OBJNAMES[107] = "fence_gate";
Blockly.Msg.OBJNAMES[110] = "mycelium";
Blockly.Msg.OBJNAMES[111] = "lily_pad";
Blockly.Msg.OBJNAMES[112] = "nether";
Blockly.Msg.OBJNAMES[113] = "nether_fence";
Blockly.Msg.OBJNAMES[115] = "netherwart";
Blockly.Msg.OBJNAMES[116] = "table_enchantment";
Blockly.Msg.OBJNAMES[117] = "brewing_stand";
Blockly.Msg.OBJNAMES[118] = "cauldron";
Blockly.Msg.OBJNAMES[119] = "endportal";
Blockly.Msg.OBJNAMES[120] = "endportal_frame";
Blockly.Msg.OBJNAMES[121] = "endstone";
Blockly.Msg.OBJNAMES[122] = "dragon_egg";
Blockly.Msg.OBJNAMES[123] = "redstone_lamp";
Blockly.Msg.OBJNAMES[124] = "redstone_lamp_active";
Blockly.Msg.OBJNAMES[43] = "double_slab stone";
Blockly.Msg.OBJNAMES[78] = "slab snow";
Blockly.Msg.OBJNAMES[44] = "slab stone";
Blockly.Msg.OBJNAMES[126] = "slab oak";
Blockly.Msg.OBJNAMES[127] = "cocoa";
Blockly.Msg.OBJNAMES[129] = "smeraldo grezzo";
Blockly.Msg.OBJNAMES[130] = "enderchest";
Blockly.Msg.OBJNAMES[131] = "tripwire_hook";
Blockly.Msg.OBJNAMES[132] = "tripwire";
Blockly.Msg.OBJNAMES[133] = "emerald";
Blockly.Msg.OBJNAMES[137] = "command";
Blockly.Msg.OBJNAMES[138] = "beacon";
Blockly.Msg.OBJNAMES[139] = "cobblestone_wall";
Blockly.Msg.OBJNAMES[140] = "flowerpot";
Blockly.Msg.OBJNAMES[141] = "carote";
Blockly.Msg.OBJNAMES[142] = "patate";
Blockly.Msg.OBJNAMES[143] = "button_wood";
Blockly.Msg.OBJNAMES[144] = "mobhead";
Blockly.Msg.OBJNAMES[145] = "anvil";
Blockly.Msg.OBJNAMES[146] = "chest_trapped";
Blockly.Msg.OBJNAMES[147] = "pressure_plate_weighted_light";
Blockly.Msg.OBJNAMES[148] = "pressure_plate_weighted_heavy";
Blockly.Msg.OBJNAMES[149] = "redstone_comparator";
Blockly.Msg.OBJNAMES[150] = "redstone_comparator_active";
Blockly.Msg.OBJNAMES[151] = "daylight_sensor";
Blockly.Msg.OBJNAMES[152] = "redstone";
Blockly.Msg.OBJNAMES[153] = "netherquartzore";
Blockly.Msg.OBJNAMES[154] = "hopper";
Blockly.Msg.OBJNAMES[155] = "quartz";
Blockly.Msg.OBJNAMES[157] = "rail_activator";
Blockly.Msg.OBJNAMES[158] = "dropper";
Blockly.Msg.OBJNAMES[159] = "stained_clay white";
Blockly.Msg.OBJNAMES[161] = "acacia leaves";
Blockly.Msg.OBJNAMES[162] = "acacia wood";
Blockly.Msg.OBJNAMES[170] = "hay";
Blockly.Msg.OBJNAMES[171] = "carpet white";
Blockly.Msg.OBJNAMES[172] = "hardened_clay";
Blockly.Msg.OBJNAMES[173] = "coal_block";
Blockly.Msg.OBJNAMES[174] = "packed_ice";
Blockly.Msg.OBJNAMES[175] = "girasole";

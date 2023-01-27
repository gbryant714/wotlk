import{bS as t,L as n,q as e,r as a,dI as i,d4 as s,dJ as r,dK as o,cW as l,G as d,bs as h,bv as m,bx as g,bJ as c,A as u,T as f,d as p,a3 as S,a as T,aj as b,aV as E,ag as y,F as w,ak as C}from"./detailed_results-71928620.chunk.js";import{B as P,m as v,j as A,i as R,u as W,b as x,c as k,a as O,I as N,a4 as M,T as B,t as D}from"./individual_sim_ui-acc75452.chunk.js";const H={name:"Arms",data:t.create({talentsString:"3022032023335100102012213231251-305-2033",glyphs:n.create({major1:e.GlyphOfRending,major2:e.GlyphOfMortalStrike,major3:e.GlyphOfExecution,minor1:a.GlyphOfThunderClap,minor2:a.GlyphOfCommand,minor3:a.GlyphOfCharge})})},I={name:"Fury",data:t.create({talentsString:"32002301233-305053000520310053120500351",glyphs:n.create({major1:e.GlyphOfWhirlwind,major2:e.GlyphOfHeroicStrike,major3:e.GlyphOfExecution,minor1:a.GlyphOfBattle,minor2:a.GlyphOfBloodrage,minor3:a.GlyphOfCharge})})},G=i.create({useRend:!1,useMs:!0,useCleave:!1,prioritizeWw:!0,sunderArmor:s.SunderArmorNone,msRageThreshold:35,hsRageThreshold:30,rendHealthThresholdAbove:20,rendRageThresholdBelow:100,slamRageThreshold:25,rendCdThreshold:0,useHsDuringExecute:!0,useBtDuringExecute:!0,useWwDuringExecute:!0,useSlamOverExecute:!0,spamExecute:!0,stanceOption:r.DefaultStance}),F=i.create({useRend:!0,useMs:!0,useCleave:!1,sunderArmor:s.SunderArmorNone,msRageThreshold:355,slamRageThreshold:25,hsRageThreshold:50,rendCdThreshold:0,useHsDuringExecute:!0,spamExecute:!0,stanceOption:r.DefaultStance}),U=o.create({startingRage:0,useRecklessness:!0,useShatteringThrow:!0,shout:l.WarriorShoutCommanding}),j=d.create({flask:h.FlaskOfEndlessRage,food:m.FoodSpicedWormBurger,defaultPotion:g.IndestructiblePotion,prepopPotion:g.PotionOfSpeed}),J={name:"P1 Pre-Raid Fury Preset",tooltip:P,enableWhen:t=>0!=t.getTalentTree(),gear:c.fromJsonString('{"items": [\n\t\t{\n\t\t\t"id": 41386,\n\t\t\t"enchant": 3817,\n\t\t\t"gems": [\n\t\t\t\t41398,\n\t\t\t\t42702\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 42645,\n\t\t\t"gems": [\n\t\t\t\t40003\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 44195,\n\t\t\t"enchant": 3808\n\t\t},\n\t\t{\n\t\t\t"id": 37647,\n\t\t\t"enchant": 3605\n\t\t},\n\t\t{\n\t\t\t"id": 39606,\n\t\t\t"enchant": 3832,\n\t\t\t"gems": [\n\t\t\t\t40003,\n\t\t\t\t40003\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 44203,\n\t\t\t"enchant": 3845,\n\t\t\t"gems": [\n\t\t\t\t0\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 39609,\n\t\t\t"enchant": 3604,\n\t\t\t"gems": [\n\t\t\t\t40037,\n\t\t\t\t0\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40694,\n\t\t\t"gems": [\n\t\t\t\t42149,\n\t\t\t\t42149\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 44205,\n\t\t\t"enchant": 3823\n\t\t},\n\t\t{\n\t\t\t"id": 44306,\n\t\t\t"enchant": 3606,\n\t\t\t"gems": [\n\t\t\t\t40037,\n\t\t\t\t40037\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 42642,\n\t\t\t"gems": [\n\t\t\t\t42149\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 37642\n\t\t},\n\t\t{\n\t\t\t"id": 42987\n\t\t},\n\t\t{\n\t\t\t"id": 40684\n\t\t},\n\t\t{\n\t\t\t"id": 37852,\n\t\t\t"enchant": 3789\n\t\t},\n\t\t{\n\t\t\t"id": 37852,\n\t\t\t"enchant": 3789\n\t\t},\n\t\t{\n\t\t\t"id": 37191\n\t\t}\n\t]}')},z={name:"P1 Fury Preset",tooltip:P,enableWhen:t=>0!=t.getTalentTree(),gear:c.fromJsonString('{ "items": [\n\t\t{\n\t\t\t"id": 44006,\n\t\t\t"enchant": 3817,\n\t\t\t"gems": [\n\t\t\t\t41285,\n\t\t\t\t42702\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 44664,\n\t\t\t"gems": [\n\t\t\t\t39996\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40530,\n\t\t\t"enchant": 3808,\n\t\t\t"gems": [\n\t\t\t\t40037\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40403,\n\t\t\t"enchant": 3605\n\t\t},\n\t\t{\n\t\t\t"id": 40539,\n\t\t\t"enchant": 3832,\n\t\t\t"gems": [\n\t\t\t\t42142\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 39765,\n\t\t\t"enchant": 3845,\n\t\t\t"gems": [\n\t\t\t\t39996,\n\t\t\t\t0\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40541,\n\t\t\t"enchant": 3604,\n\t\t\t"gems": [\n\t\t\t\t0\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40205,\n\t\t\t"gems": [\n\t\t\t\t42142\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40529,\n\t\t\t"enchant": 3823,\n\t\t\t"gems": [\n\t\t\t\t39996,\n\t\t\t\t40022\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40591,\n\t\t\t"enchant": 3606\n\t\t},\n\t\t{\n\t\t\t"id": 43993,\n\t\t\t"gems": [\n\t\t\t\t42142\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40717\n\t\t},\n\t\t{\n\t\t\t"id": 42987\n\t\t},\n\t\t{\n\t\t\t"id": 40256\n\t\t},\n\t\t{\n\t\t\t"id": 40384,\n\t\t\t"enchant": 3789\n\t\t},\n\t\t{\n\t\t\t"id": 40384,\n\t\t\t"enchant": 3789\n\t\t},\n\t\t{\n\t\t\t"id": 40385\n\t\t}\n\t]}')},K={name:"P2 Fury Preset",tooltip:P,enableWhen:t=>0!=t.getTalentTree(),gear:c.fromJsonString('{ "items": [\n\t\t{\n\t\t\t"id": 46151,\n\t\t\t"enchant": 3817,\n\t\t\t"gems": [\n\t\t\t\t41398,\n\t\t\t\t39996\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 45517,\n\t\t\t"gems": [\n\t\t\t\t39996\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 46149,\n\t\t\t"enchant": 3808,\n\t\t\t"gems": [\n\t\t\t\t39996\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 46032,\n\t\t\t"enchant": 3605\n\t\t},\n\t\t{\n\t\t\t"id": 46146,\n\t\t\t"enchant": 3832,\n\t\t\t"gems": [\n\t\t\t\t39996,\n\t\t\t\t42702\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 45611,\n\t\t\t"enchant": 3845,\n\t\t\t"gems": [\n\t\t\t\t40037,\n\t\t\t\t0\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 46148,\n\t\t\t"enchant": 3604,\n\t\t\t"gems": [\n\t\t\t\t40058\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 46095,\n\t\t\t"gems": [\n\t\t\t\t42154,\n\t\t\t\t42142,\n\t\t\t\t42142\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 45536,\n\t\t\t"enchant": 3823,\n\t\t\t"gems": [\n\t\t\t\t39996,\n\t\t\t\t39996,\n\t\t\t\t39996\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40591,\n\t\t\t"enchant": 3606\n\t\t},\n\t\t{\n\t\t\t"id": 45608,\n\t\t\t"gems": [\n\t\t\t\t39996\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 45534\n\t\t},\n\t\t{\n\t\t\t"id": 42987\n\t\t},\n\t\t{\n\t\t\t"id": 45931\n\t\t},\n\t\t{\n\t\t\t"id": 45516,\n\t\t\t"enchant": 3789,\n\t\t\t"gems": [\n\t\t\t\t39996,\n\t\t\t\t39996\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 45516,\n\t\t\t"enchant": 3789,\n\t\t\t"gems": [\n\t\t\t\t39996,\n\t\t\t\t39996\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 45296,\n\t\t\t"gems": [\n\t\t\t  39996\n\t\t\t]\n\t\t}\n\t]}')},_={name:"P1 Pre-Raid Arms Preset",tooltip:P,enableWhen:t=>0==t.getTalentTree(),gear:c.fromJsonString('{ "items": [\n\t\t{\n\t\t\t"id": 41386,\n\t\t\t"enchant": 3817,\n\t\t\t"gems": [\n\t\t\t\t41285,\n\t\t\t\t42702\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 42645,\n\t\t\t"gems": [\n\t\t\t\t40002\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 44195,\n\t\t\t"enchant": 3808\n\t\t},\n\t\t{\n\t\t\t"id": 37647,\n\t\t\t"enchant": 3605\n\t\t},\n\t\t{\n\t\t\t"id": 39606,\n\t\t\t"enchant": 3832,\n\t\t\t"gems": [\n\t\t\t\t40002,\n\t\t\t\t40002\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 41355,\n\t\t\t"enchant": 3845,\n\t\t\t"gems": [\n\t\t\t\t0\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 39609,\n\t\t\t"enchant": 3604,\n\t\t\t"gems": [\n\t\t\t\t40037,\n\t\t\t\t0\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40694,\n\t\t\t"gems": [\n\t\t\t\t42149,\n\t\t\t\t42149\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 37193,\n\t\t\t"enchant": 3823,\n\t\t\t"gems": [\n\t\t\t\t40002,\n\t\t\t\t40037\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 44306,\n\t\t\t"enchant": 3606,\n\t\t\t"gems": [\n\t\t\t\t40086,\n\t\t\t\t40002\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 42642,\n\t\t\t"gems": [\n\t\t\t\t42149\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 37642\n\t\t},\n\t\t{\n\t\t\t"id": 42987\n\t\t},\n\t\t{\n\t\t\t"id": 40684\n\t\t},\n\t\t{\n\t\t\t"id": 37852,\n\t\t\t"enchant": 3789\n\t\t},\n\t\t{},\n\t\t{\n\t\t\t"id": 37191\n\t\t}\n\t]}')},q={name:"P1 Arms Preset",tooltip:P,enableWhen:t=>0==t.getTalentTree(),gear:c.fromJsonString('{"items": [\n\t\t{\n\t\t\t"id": 40528,\n\t\t\t"enchant": 3817,\n\t\t\t"gems": [\n\t\t\t\t41398,\n\t\t\t\t42153\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 44664,\n\t\t\t"gems": [\n\t\t\t\t39996\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40530,\n\t\t\t"enchant": 3808,\n\t\t\t"gems": [\n\t\t\t\t40038\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40403,\n\t\t\t"enchant": 3605\n\t\t},\n\t\t{\n\t\t\t"id": 40539,\n\t\t\t"enchant": 3832,\n\t\t\t"gems": [\n\t\t\t\t42153\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40330,\n\t\t\t"enchant": 3845,\n\t\t\t"gems": [\n\t\t\t\t40002,\n\t\t\t\t0\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40541,\n\t\t\t"enchant": 3604,\n\t\t\t"gems": [\n\t\t\t\t0\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40205,\n\t\t\t"gems": [\n\t\t\t\t42153\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40318,\n\t\t\t"enchant": 3823,\n\t\t\t"gems": [\n\t\t\t\t49110,\n\t\t\t\t40038\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40591,\n\t\t\t"enchant": 3606\n\t\t},\n\t\t{\n\t\t\t"id": 43993,\n\t\t\t"gems": [\n\t\t\t\t40002\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40474\n\t\t},\n\t\t{\n\t\t\t"id": 42987\n\t\t},\n\t\t{\n\t\t\t"id": 40256\n\t\t},\n\t\t{\n\t\t\t"id": 40384,\n\t\t\t"enchant": 3789\n\t\t},\n\t\t{},\n\t\t{\n\t\t\t"id": 40385\n\t\t}\n\t]}')},L={name:"P2 Arms Preset",tooltip:P,enableWhen:t=>0==t.getTalentTree(),gear:c.fromJsonString('{"items": [\n\t\t  {\n\t\t\t"id": 46151,\n\t\t\t"enchant": 3817,\n\t\t\t"gems": [\n\t\t\t  41398,\n\t\t\t  42153\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 45459,\n\t\t\t"gems": [\n\t\t\t  40002\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 46149,\n\t\t\t"enchant": 3808,\n\t\t\t"gems": [\n\t\t\t  42153\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 46032,\n\t\t\t"enchant": 3605,\n\t\t\t"gems": [\n\t\t\t  39996,\n\t\t\t  40037\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 46146,\n\t\t\t"enchant": 3832,\n\t\t\t"gems": [\n\t\t\t  42153,\n\t\t\t  39996\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 45663,\n\t\t\t"enchant": 3845,\n\t\t\t"gems": [\n\t\t\t  39996,\n\t\t\t  0\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 46148,\n\t\t\t"enchant": 3604,\n\t\t\t"gems": [\n\t\t\t  40037,\n\t\t\t  0\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 45241,\n\t\t\t"gems": [\n\t\t\t  49110,\n\t\t\t  40037,\n\t\t\t  40002\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 45536,\n\t\t\t"enchant": 3823,\n\t\t\t"gems": [\n\t\t\t  39996,\n\t\t\t  39996,\n\t\t\t  39996\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 45599,\n\t\t\t"enchant": 3606,\n\t\t\t"gems": [\n\t\t\t  40002,\n\t\t\t  40002\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 45608,\n\t\t\t"gems": [\n\t\t\t  40002\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 46322,\n\t\t\t"gems": [\n\t\t\t  40002\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 46038\n\t\t  },\n\t\t  {\n\t\t\t"id": 45931\n\t\t  },\n\t\t  {\n\t\t\t"id": 45533,\n\t\t\t"enchant": 3789,\n\t\t\t"gems": [\n\t\t\t  39996,\n\t\t\t  39996\n\t\t\t]\n\t\t  },\n\t\t  {},\n\t\t  {\n\t\t\t"id": 45296,\n\t\t\t"gems": [\n\t\t\t  40002\n\t\t\t]\n\t\t  }\n\t]}')},V=v({fieldName:"useRecklessness",id:u.fromSpellId(1719)}),Q=v({fieldName:"useShatteringThrow",id:u.fromSpellId(64382)}),X=A({fieldName:"startingRage",label:"Starting Rage",labelTooltip:"Initial rage at the start of each iteration."}),Y=R({fieldName:"munch",label:"Munching",labelTooltip:'Apply "munching" to Deep Wounds'}),Z=W({fieldName:"shout",values:[{color:"c79c6e",value:l.WarriorShoutNone},{actionId:u.fromSpellId(2048),value:l.WarriorShoutBattle},{actionId:u.fromSpellId(469),value:l.WarriorShoutCommanding}]}),$={inputs:[x({fieldName:"useMs",label:"Use Mortal Strike",labelTooltip:"Use Mortal Strike when rage threshold is met.",changeEmitter:t=>f.onAny([t.rotationChangeEmitter,t.talentsChangeEmitter]),showWhen:t=>t.getTalents().mortalStrike}),x({fieldName:"useCleave",label:"Use Cleave",labelTooltip:"Use Cleave instead of Heroic Strike."}),x({fieldName:"useRend",label:"Use Rend",labelTooltip:"Use Rend when rage threshold is met and the debuff duration is less than refresh time.",changeEmitter:t=>f.onAny([t.rotationChangeEmitter,t.talentsChangeEmitter])}),x({fieldName:"prioritizeWw",label:"Prioritize WW",labelTooltip:"Prioritize Whirlwind over Bloodthirst.",changeEmitter:t=>f.onAny([t.rotationChangeEmitter,t.talentsChangeEmitter]),showWhen:t=>t.getTalents().bloodthirst}),k({fieldName:"msRageThreshold",label:"Mortal Strike rage threshold",labelTooltip:"Mortal Strike when rage is above:",changeEmitter:t=>f.onAny([t.rotationChangeEmitter,t.talentsChangeEmitter]),showWhen:t=>t.getTalents().mortalStrike}),k({fieldName:"slamRageThreshold",label:"Slam rage threshold",labelTooltip:"Slam when rage is above:",changeEmitter:t=>f.onAny([t.rotationChangeEmitter,t.talentsChangeEmitter]),showWhen:t=>t.getTalents().mortalStrike}),k({fieldName:"hsRageThreshold",label:"HS rage threshold",labelTooltip:"Heroic Strike when rage is above:"}),k({fieldName:"rendHealthThresholdAbove",label:"Rend health threshold (%)",labelTooltip:"Rend will only be used when boss health is above this value in %.",changeEmitter:t=>f.onAny([t.rotationChangeEmitter,t.talentsChangeEmitter]),showWhen:t=>1==t.getRotation().useRend&&t.getTalents().bloodthirst}),k({fieldName:"rendRageThresholdBelow",label:"Rend rage threshold below",labelTooltip:"Rend will only be used when rage is smaller than this value.",changeEmitter:t=>f.onAny([t.rotationChangeEmitter,t.talentsChangeEmitter]),showWhen:t=>1==t.getRotation().useRend&&t.getTalents().bloodthirst}),k({fieldName:"rendCdThreshold",label:"Rend Refresh Time",labelTooltip:"Refresh Rend when the remaining duration is less than this amount of time (seconds).",changeEmitter:t=>f.onAny([t.rotationChangeEmitter,t.talentsChangeEmitter]),showWhen:t=>1==t.getRotation().useRend}),x({fieldName:"useHsDuringExecute",label:"HS during Execute Phase",labelTooltip:"Use Heroic Strike during Execute Phase."}),x({fieldName:"useBtDuringExecute",label:"BT during Execute Phase",labelTooltip:"Use Bloodthirst during Execute Phase.",changeEmitter:t=>f.onAny([t.rotationChangeEmitter,t.talentsChangeEmitter]),showWhen:t=>t.getTalents().bloodthirst}),x({fieldName:"useWwDuringExecute",label:"WW during Execute Phase",labelTooltip:"Use Whirlwind during Execute Phase.",changeEmitter:t=>f.onAny([t.rotationChangeEmitter,t.talentsChangeEmitter]),showWhen:t=>t.getTalents().bloodthirst}),x({fieldName:"useSlamOverExecute",label:"Slam Over Execute",labelTooltip:"Use Slam Over Execute when Bloodsurge Procs in Execute Phase.",changeEmitter:t=>f.onAny([t.rotationChangeEmitter,t.talentsChangeEmitter]),showWhen:t=>t.getTalents().bloodthirst}),x({fieldName:"spamExecute",label:"Spam Execute",labelTooltip:"Use Execute whenever possible during Execute Phase.",changeEmitter:t=>f.onAny([t.rotationChangeEmitter,t.talentsChangeEmitter]),showWhen:t=>t.getTalents().mortalStrike}),O({fieldName:"sunderArmor",label:"Sunder Armor",values:[{name:"Never",value:s.SunderArmorNone},{name:"Help Stack",value:s.SunderArmorHelpStack},{name:"Maintain Debuff",value:s.SunderArmorMaintain}]}),O({fieldName:"stanceOption",label:"Stance Option",labelTooltip:"Stance to stay on. The default for Fury (Bloodthirst) is Berserker Stance and Battle Stance for everything else.",values:[{name:"Default",value:r.DefaultStance},{name:"Battle Stance",value:r.BattleStance},{name:"Berserker Stance",value:r.BerserkerStance}]}),x({fieldName:"maintainDemoShout",label:"Maintain Demo Shout",labelTooltip:"Keep Demo Shout active on the primary target."}),x({fieldName:"maintainThunderClap",label:"Maintain Thunder Clap",labelTooltip:"Keep Thunder Clap active on the primary target."})]};class tt extends N{constructor(t,n){super(t,n,{cssClass:"warrior-sim-ui",cssScheme:"warrior",knownIssues:[],epStats:[p.StatStrength,p.StatAgility,p.StatAttackPower,p.StatExpertise,p.StatMeleeHit,p.StatMeleeCrit,p.StatMeleeHaste,p.StatArmorPenetration,p.StatArmor],epPseudoStats:[S.PseudoStatMainHandDps,S.PseudoStatOffHandDps],epReferenceStat:p.StatAttackPower,displayStats:[p.StatHealth,p.StatStamina,p.StatStrength,p.StatAgility,p.StatAttackPower,p.StatExpertise,p.StatMeleeHit,p.StatMeleeCrit,p.StatMeleeHaste,p.StatArmorPenetration,p.StatArmor],modifyDisplayStats:t=>{let n=new T;return t.getInFrontOfTarget()||(n=n.addStat(p.StatExpertise,4*t.getTalents().weaponMastery*M)),{talents:n}},defaults:{gear:K.gear,epWeights:T.fromMap({[p.StatStrength]:2.72,[p.StatAgility]:1.82,[p.StatAttackPower]:1,[p.StatExpertise]:2.55,[p.StatMeleeHit]:.79,[p.StatMeleeCrit]:2.12,[p.StatMeleeHaste]:1.72,[p.StatArmorPenetration]:2.17,[p.StatArmor]:.03},{[S.PseudoStatMainHandDps]:6.29,[S.PseudoStatOffHandDps]:3.58}),consumes:j,rotation:G,talents:I.data,specOptions:U,raidBuffs:b.create({giftOfTheWild:E.TristateEffectImproved,swiftRetribution:!0,strengthOfEarthTotem:E.TristateEffectImproved,icyTalons:!0,abominationsMight:!0,leaderOfThePack:E.TristateEffectRegular,sanctifiedRetribution:!0,bloodlust:!0,devotionAura:E.TristateEffectImproved,stoneskinTotem:E.TristateEffectImproved}),partyBuffs:y.create({heroicPresence:!1}),individualBuffs:w.create({blessingOfKings:!0,blessingOfMight:E.TristateEffectImproved}),debuffs:C.create({bloodFrenzy:!0,heartOfTheCrusader:!0,mangle:!0,sunderArmor:!0,curseOfWeakness:E.TristateEffectRegular,faerieFire:E.TristateEffectImproved})},playerIconInputs:[Z,V,Q],rotationInputs:$,includeBuffDebuffInputs:[],excludeBuffDebuffInputs:[],otherInputs:{inputs:[X,Y,B,D]},encounterPicker:{showExecuteProportion:!0},presets:{talents:[H,I],gear:[J,z,K,_,q,L]}})}}export{F as A,U as D,I as F,q as P,tt as W,H as a,j as b,L as c,G as d,z as e,K as f};
//# sourceMappingURL=sim-0decc570.chunk.js.map

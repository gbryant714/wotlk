import { Consumes } from '../core/proto/common.js';
import { EquipmentSpec } from '../core/proto/common.js';
import { Flask } from '../core/proto/common.js';
import { Food } from '../core/proto/common.js';
import { Glyphs } from '../core/proto/common.js';
import { Potions } from '../core/proto/common.js';
import { SavedTalents } from '../core/proto/ui.js';

import {
	TankDeathknight_Rotation as TankDeathKnightRotation,
	TankDeathknight_Options as TankDeathKnightOptions,
	DeathknightMajorGlyph,
	DeathknightMinorGlyph,
  TankDeathknight_Rotation_Opener as Opener,
  TankDeathknight_Rotation_OptimizationSetting as OptimizationSetting,
  TankDeathknight_Rotation_BloodSpell as BloodSpell,
  TankDeathknight_Rotation_Presence as Presence,
} from '../core/proto/deathknight.js';

import * as Tooltips from '../core/constants/tooltips.js';

// Preset options for this spec.
// Eventually we will import these values for the raid sim too, so its good to
// keep them in a separate file.

// Default talents. Uses the wowhead calculator format, make the talents on
// https://wotlk.wowhead.com/talent-calc and copy the numbers in the url.
export const BloodTalents = {
	name: 'Balanced',
	data: SavedTalents.create({
		talentsString: '005510153330330220102013-3050505100023101-002',
		glyphs: Glyphs.create({
			major1: DeathknightMajorGlyph.GlyphOfDisease,
			major2: DeathknightMajorGlyph.GlyphOfVampiricBlood,
			major3: DeathknightMajorGlyph.GlyphOfDarkCommand,
			minor1: DeathknightMinorGlyph.GlyphOfHornOfWinter,
			minor2: DeathknightMinorGlyph.GlyphOfBloodTap,
			minor3: DeathknightMinorGlyph.GlyphOfRaiseDead,
		}),
	}),
};


export const DefaultRotation = TankDeathKnightRotation.create({
  opener: Opener.Threat,
  optimizationSetting: OptimizationSetting.Hps,
  bloodSpell: BloodSpell.BloodStrike,
  presence: Presence.Frost,
});

export const DefaultOptions = TankDeathKnightOptions.create({
	startingRunicPower: 0,
});

export const DefaultConsumes = Consumes.create({
	flask: Flask.FlaskOfStoneblood,
	food: Food.FoodDragonfinFilet,
	defaultPotion: Potions.IndestructiblePotion,
	prepopPotion: Potions.IndestructiblePotion,
});

export const P1_BLOOD_BIS_PRESET = {
	name: 'P1 BiS Blood',
	tooltip: Tooltips.BASIC_BIS_DISCLAIMER,
	gear: EquipmentSpec.fromJsonString(`{ "items": [
		{
			"id": 40565,
			"enchant": 3878,
			"gems": [
				41380,
				36767
			]
		},
		{
			"id": 40387
		},
		{
			"id": 39704,
			"enchant": 3852,
			"gems": [
				40008
			]
		},
		{
			"id": 40252,
			"enchant": 3605
		},
		{
			"id": 40559,
			"gems": [
				40008,
				40022
			]
		},
		{
			"id": 40306,
			"enchant": 3850,
			"gems": [
				40008,
				0
			]
		},
		{
			"id": 40563,
			"enchant": 3860,
			"gems": [
				40008,
				0
			]
		},
		{
			"id": 39759,
			"gems": [
				40008,
				40008
			]
		},
		{
			"id": 40567,
			"enchant": 3822,
			"gems": [
				40008,
				40008
			]
		},
		{
			"id": 40297,
			"enchant": 3232
		},
		{
			"id": 40718
		},
		{
			"id": 40107
		},
		{
			"id": 44063,
			"gems": [
				36767,
				36767
			]
		},
		{
			"id": 42341,
			"gems": [
				40008,
				40008
			]
		},
		{
			"id": 40406,
			"enchant": 3847
		},
		{},
		{
			"id": 40207
		}
  ]}`),
};

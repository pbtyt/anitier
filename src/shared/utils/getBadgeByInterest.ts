//TODO: Think about better solution

import { BADGE_CONFIG, BadgeType } from '../config/badge.config';

export function getBadgeByInterest(interest: number): BadgeType {
	for (const badgeSetting of BADGE_CONFIG) {
		if (
			badgeSetting.maxInterest >= interest &&
			badgeSetting.minInterest <= interest
		) {
			return badgeSetting;
		}
	}

	return BADGE_CONFIG.at(-1)!;
}

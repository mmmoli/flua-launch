ALTER TABLE `room` ADD `externalId` text NOT NULL;--> statement-breakpoint
CREATE UNIQUE INDEX `room_externalId_unique` ON `room` (`externalId`);
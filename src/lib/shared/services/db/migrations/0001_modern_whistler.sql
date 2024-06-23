CREATE TABLE `customer` (
	`id` text PRIMARY KEY NOT NULL,
	`stripe_customer_id` text NOT NULL,
	FOREIGN KEY (`id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE no action
);

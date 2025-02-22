/*
  Warnings:

  - The primary key for the `Client` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Raffle` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `clientId` on the `Raffle` table. All the data in the column will be lost.
  - Added the required column `date` to the `Raffle` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Raffle` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Raffle` table without a default value. This is not possible if the table is not empty.
  - Added the required column `urlBanner` to the `Raffle` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Raffle` DROP FOREIGN KEY `Raffle_clientId_fkey`;

-- DropIndex
DROP INDEX `Raffle_clientId_fkey` ON `Raffle`;

-- AlterTable
ALTER TABLE `Client` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `Raffle` DROP PRIMARY KEY,
    DROP COLUMN `clientId`,
    ADD COLUMN `date` DATETIME(3) NOT NULL,
    ADD COLUMN `description` VARCHAR(191) NOT NULL,
    ADD COLUMN `name` VARCHAR(191) NOT NULL,
    ADD COLUMN `urlBanner` VARCHAR(191) NOT NULL,
    MODIFY `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- CreateTable
CREATE TABLE `RaffleClient` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `clientId` VARCHAR(191) NOT NULL,
    `raffleId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `RaffleClient` ADD CONSTRAINT `RaffleClient_raffleId_fkey` FOREIGN KEY (`raffleId`) REFERENCES `Raffle`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RaffleClient` ADD CONSTRAINT `RaffleClient_clientId_fkey` FOREIGN KEY (`clientId`) REFERENCES `Client`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

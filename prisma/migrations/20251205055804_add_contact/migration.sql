/*
  Warnings:

  - You are about to drop the column `Message` on the `Contact` table. All the data in the column will be lost.
  - Added the required column `message` to the `Contact` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Contact" DROP COLUMN "Message",
ADD COLUMN     "message" TEXT NOT NULL;

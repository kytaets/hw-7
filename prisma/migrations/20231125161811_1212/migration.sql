/*
  Warnings:

  - You are about to drop the column `totalCost` on the `Customers` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Customers" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "middleName" TEXT,
    "email" TEXT NOT NULL,
    "birthDate" TEXT NOT NULL
);
INSERT INTO "new_Customers" ("birthDate", "email", "firstName", "id", "lastName", "middleName") SELECT "birthDate", "email", "firstName", "id", "lastName", "middleName" FROM "Customers";
DROP TABLE "Customers";
ALTER TABLE "new_Customers" RENAME TO "Customers";
CREATE UNIQUE INDEX "Customers_email_key" ON "Customers"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

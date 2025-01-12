-- CreateTable
CREATE TABLE "BatchItem" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "batch_id" TEXT NOT NULL,
    "item_code" TEXT NOT NULL,
    "expiry_date" DATETIME NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "BatchItem_item_code_fkey" FOREIGN KEY ("item_code") REFERENCES "Item" ("item_code") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "StockEntry" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "entry_id" TEXT NOT NULL,
    "tanggal" DATETIME NOT NULL,
    "type" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "StockEntryDetail" (
    "entry_detail_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "entry_id" TEXT NOT NULL,
    "item_code" TEXT NOT NULL,
    "batch_id" TEXT NOT NULL,
    "expiry_date" DATETIME NOT NULL,
    "qty" INTEGER NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "StockEntryDetail_entry_id_fkey" FOREIGN KEY ("entry_id") REFERENCES "StockEntry" ("entry_id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "StockEntryDetail_item_code_fkey" FOREIGN KEY ("item_code") REFERENCES "Item" ("item_code") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "StockEntryDetail_batch_id_fkey" FOREIGN KEY ("batch_id") REFERENCES "BatchItem" ("batch_id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "StockLedger" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "item_code" TEXT NOT NULL,
    "batch_id" TEXT NOT NULL,
    "tanggal" DATETIME NOT NULL,
    "last_stock" INTEGER NOT NULL,
    "qty_in" INTEGER NOT NULL,
    "qty_out" INTEGER NOT NULL,
    "current_stock" INTEGER NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "StockLedger_item_code_fkey" FOREIGN KEY ("item_code") REFERENCES "Item" ("item_code") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "StockLedger_batch_id_fkey" FOREIGN KEY ("batch_id") REFERENCES "BatchItem" ("batch_id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Item" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "item_code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "uom" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Item" ("id", "item_code", "name", "uom") SELECT "id", "item_code", "name", "uom" FROM "Item";
DROP TABLE "Item";
ALTER TABLE "new_Item" RENAME TO "Item";
CREATE UNIQUE INDEX "Item_item_code_key" ON "Item"("item_code");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "BatchItem_batch_id_key" ON "BatchItem"("batch_id");

-- CreateIndex
CREATE UNIQUE INDEX "StockEntry_entry_id_key" ON "StockEntry"("entry_id");

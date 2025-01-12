-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_StockEntry" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "entry_id" TEXT NOT NULL,
    "tanggal" DATETIME NOT NULL,
    "type" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_StockEntry" ("entry_id", "id", "tanggal", "type") SELECT "entry_id", "id", "tanggal", "type" FROM "StockEntry";
DROP TABLE "StockEntry";
ALTER TABLE "new_StockEntry" RENAME TO "StockEntry";
CREATE UNIQUE INDEX "StockEntry_entry_id_key" ON "StockEntry"("entry_id");
CREATE TABLE "new_StockLedger" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "item_code" TEXT NOT NULL,
    "batch_id" TEXT NOT NULL,
    "tanggal" DATETIME NOT NULL,
    "last_stock" INTEGER NOT NULL,
    "qty_in" INTEGER,
    "qty_out" INTEGER,
    "current_stock" INTEGER NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "StockLedger_item_code_fkey" FOREIGN KEY ("item_code") REFERENCES "Item" ("item_code") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "StockLedger_batch_id_fkey" FOREIGN KEY ("batch_id") REFERENCES "BatchItem" ("batch_id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_StockLedger" ("batch_id", "current_stock", "id", "item_code", "last_stock", "qty_in", "qty_out", "tanggal") SELECT "batch_id", "current_stock", "id", "item_code", "last_stock", "qty_in", "qty_out", "tanggal" FROM "StockLedger";
DROP TABLE "StockLedger";
ALTER TABLE "new_StockLedger" RENAME TO "StockLedger";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

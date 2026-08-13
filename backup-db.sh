#!/bin/bash
# MirrorBook SQLite backup -> private GitHub repo
set -e

DB_PATH=/opt/mirrorbook/prisma/dev.db
BACKUP_DIR=/opt/mirrorbook-backup
TOKEN_FILE=/opt/mirrorbook-backup/.github_token
REPO="olegal17/mirrorbook-backup"
BRANCH=main
KEEP=7   # how many backups to keep

mkdir -p "$BACKUP_DIR"
cd "$BACKUP_DIR"

# Read token
if [ ! -f "$TOKEN_FILE" ]; then
  echo "ERROR: $TOKEN_FILE not found. Put your GitHub PAT there."
  exit 1
fi
TOKEN=$(cat "$TOKEN_FILE" | tr -d ' \n\r')

# Init repo once
if [ ! -d .git ]; then
  git init
  git config user.email "backup@mirrorbook.local"
  git config user.name "MirrorBook Backup"
fi

# Copy DB with timestamp
TS=$(date +%Y%m%d_%H%M%S)
cp "$DB_PATH" "dev-$TS.db"

# Rotate: keep last KEEP files
ls -1t dev-*.db 2>/dev/null | tail -n +$((KEEP+1)) | xargs -r rm -f

# Commit and push
git add -A
git commit -m "backup $TS" --allow-empty -q || true
git push "https://x-access-token:$TOKEN@github.com/$REPO.git" "$BRANCH" 2>&1 | tail -3

echo "Backup OK: dev-$TS.db"

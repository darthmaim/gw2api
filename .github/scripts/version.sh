#!/sh
set -ex

printf 'machine github.com\nlogin gw2treasures-release-bot[bot]\npassword %s\n' "$GITHUB_TOKEN" > "$HOME/.netrc"

cat .git/config

npx changeset version

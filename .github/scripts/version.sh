#!/sh
set -ex

find "$HOME" -name ".netrc"
find . -name ".netrc"

rm -f "$HOME/.netrc"
npx changeset version

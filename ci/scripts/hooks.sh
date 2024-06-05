echo "Preparing hooks..."

chmod +x ci/hooks/install-hooks.sh && sh ci/hooks/install-hooks.sh

yarn

echo "Hooks configured"
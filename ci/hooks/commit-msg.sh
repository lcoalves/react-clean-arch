commit_regex='(\#[0-9]+ \#[0-9]+ (feature|fix|docs|test|build|perf|style|refactor|chore|ci)|merge)'
error_msg="ERROR! Commit message should follow the pattern [AZUREID-123][AZUREID-456] [TAG:], where 123 is the code of the story and 456 is the code of the task, TAG can be replaced by following tags: feature|fix|docs|test|build|perf|style|refactor|chore|ci. Check documentation at https://dev.azure.com"

if ! grep -iqE "$commit_regex" "$1"; then
    echo "$error_msg" >&2
    exit 1
fi

exit 0

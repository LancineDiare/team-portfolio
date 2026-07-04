# Release Process

Releases are postponed for now.

## Future Release Flow

feature branch
↓
dev
↓
testing
↓
main
↓
GitHub release



## Release Manager

LD is responsible for:

Reviewing completed work
Merging approved code to dev
Testing dev
Merging stable code to main
Creating release tags
Publishing GitHub releases

## Example Release Commands
git checkout main
git pull origin main
git tag -a v0.1.0-alpha -m "Sprint foundation release"
git push origin v0.1.0-alpha




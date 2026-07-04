# Branching Strategy

## Branches

```txt
main
dev
feature/ld-portfolio
feature/ja-portfolio
feature/hg-portfolio
feature/pd-portfolio
feature/sg-portfolio


## Workflow
Feature branches are used for individual work.

feature branch → Pull Request → dev → testing → main → release

## Rules
Team members work only on their assigned feature branch.
Pull Requests should target dev.
main is reserved for stable code.
LD manages merges to main and releases.
Releases are postponed until the project is production-ready.
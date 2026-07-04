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

For production releases, use semantic versioning without `-alpha` or `-beta`.

### First Production Release

```powershell
git checkout main
git pull origin main

git tag -a v1.0.0 -m "Initial production release"

git push origin main
git push origin v1.0.0
```

---

### Future Releases

#### New Features (Minor Release)

```powershell
git checkout main
git pull origin main

git tag -a v1.1.0 -m "Add Dark Mode and UI enhancements"

git push origin main
git push origin v1.1.0
```

#### Bug Fixes (Patch Release)

```powershell
git checkout main
git pull origin main

git tag -a v1.1.1 -m "Bug fixes and performance improvements"

git push origin main
git push origin v1.1.1
```

#### Major Release

```powershell
git checkout main
git pull origin main

git tag -a v2.0.0 -m "Major platform upgrade"

git push origin main
git push origin v2.0.0
```

---

## Recommended Versioning Strategy for TriTechPlus

Use **Semantic Versioning (SemVer)**:

| Version  | Meaning                                 | Example                                  |
| -------- | --------------------------------------- | ---------------------------------------- |
| `v1.0.0` | First stable production release         | Initial public release                   |
| `v1.1.0` | New features added, backward compatible | Dark Mode, animations                    |
| `v1.2.0` | More features                           | Team dashboard, contact form             |
| `v1.3.0` | Additional enhancements                 | Project gallery, analytics               |
| `v1.4.0` | UI/UX improvements                      | Accessibility, mobile optimization       |
| `v1.5.0` | Performance and optimization            | SEO, lazy loading                        |
| `v2.0.0` | Major redesign or architecture changes  | New design system or backend integration |

This approach keeps release history clean, professional, and easy for the team to understand. It also aligns well with GitHub Releases and standard software development practices.





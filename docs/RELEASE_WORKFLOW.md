# TriTechPlus Release Workflow

## Development Flow

feature/*

↓

dev

↓

main

---

## Feature Development

```bash
git checkout feature/your-feature

git pull origin feature/your-feature
```

---

## Merge into Development

```bash
git checkout dev

git pull origin dev

git merge feature/your-feature

git push origin dev
```

---

## Merge into Main

```bash
git checkout main

git pull origin main

git merge dev

git push origin main
```

---

## Create Release

```bash
git tag -a v1.0.0 -m "TriTechPlus Portfolio v1.0.0"

git push origin v1.0.0
```

---

## GitHub Release

1. Open GitHub Releases

2. Draft New Release

3. Select tag

4. Title

```
TriTechPlus Portfolio v1.0.0
```

5. Release Notes

- New Features
- Improvements
- Bug Fixes
- Documentation
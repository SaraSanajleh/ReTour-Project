# ReTour AI Brain

AI-powered Smart Tourism Package Builder developed as part of the ReTour project.

The system aims to generate personalized tourism packages using Large Language Models (LLMs), Retrieval-Augmented Generation (RAG), and contextual information to support tourists and tourism SMEs in Jordan.

---

# Project Goals

- Build an intelligent tourism assistant.
- Generate personalized tourism itineraries.
- Integrate tourism knowledge with AI.
- Support explainable AI recommendations.
- Enable future multi-agent architecture.

---

# Technology Stack

- Python
- FastAPI
- Claude API (LLM)
- RAG
- ChromaDB / FAISS
- Docker
- GitHub
- React (Frontend)

---

# Team

## Team Alpha — AI Brain

- Developer A (Lead) : Sara Alsanajleh
- Developer B : Ghada Abu Shaqra

---

## Team Beta — Knowledge & Platform

- Developer C (Lead) : Rahaf AlQura'an
- Developer D : Sara Jaradat


---

# Git Workflow

We follow a feature-branch workflow.

```
main
│
develop
│
├── Team/feature
├── Team/feature
├──  Team/feature
├──  Team/feature
└──  Team/feature
```

Rules:

- Never push directly to `main`.
- Create a new branch for every feature.
- Open a Pull Request before merging.
- Wait for review before merging into `develop`.

---

# Creating a New Branch

```bash
git checkout develop
git pull origin develop
git checkout -b Team/<feature-name>
```

---

# Development Rules

- Write clean and readable code.
- Keep functions small and clear.
- Add comments when necessary.
- Do not modify another developer's branch.
- Update documentation when adding new features.

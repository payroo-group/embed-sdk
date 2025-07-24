# Changesets

https://github.com/changesets/changesets

The changesets workflow is designed to help when people are making changes, all the way through to publishing.
It lets contributors declare how their changes should be released, then we automate updating package versions, and changelogs, and publishing new versions of packages based on the provided information.

Changesets has a focus on solving these problems for multi-package repositories, and keeps packages that rely on each other within the multi-package repository up-to-date, as well as making it easy to make changes to groups of packages.

## What is a changeset?

A changeset is a piece of information about changes made in a branch or commit. It holds three bits of information:

- What we need to release
- What version we are releasing packages at (using a semver bump type)
- A changelog entry for the released packages

### Changeset file

A changeset file is a markdown file that contains the information about the changeset. It is created in the `.changeset` directory of your repository.
The filename is randomly generated, and usually looks like this: `three-foxes-cry.md`.

**Example changeset file:**

```markdown
---
'@payroo-group/sdk': patch
---

feat: added support for new leave balance component

The new Leave balance component is now available via the sdk.
To use the leave balance component, check example code below:

<code snippet here>
```

## Changeset guidelines

- Changesets should be created for all changes that are made to the codebase.
- Follow the [conventional commit](https://www.conventionalcommits.org/en/v1.0.0/) format for the commit message.
- Describe the changes made in the pull request in the changeset file.
- Use the `patch`, `minor`, or `major` version bump type for the changeset following the [semver](https://semver.org/) versioning scheme.
- First line of the changeset file should be a summary of the changes made.
- Next paragraph should be a description of the changes made.
- Use markdown syntax for the changeset file and use code blocks for code snippets.
- Avoid unnecessary jargon and technical terms.
- Use clear and concise language to describe the changes made.
- Use bullet points to list the changes made if there are multiple changes.
- Each changeset file should be self-contained and not rely on other changeset files.
- Each package should have its own changeset file.
- Avoid creating changeset files for small changes that do not require a release (example: refactor variable name or file rename).
- Avoid creating changeset files for changes that are not related to the codebase (example: documentation changes).
- Avoid creating changeset files for changes that are not related to the package (example: changes to the README file).
- Avoid creating changeset files for changes that are not related to the repository (example: changes to the CI/CD pipeline).
- Avoid creating changeset files for changes that are not related to the project (example: changes to the project structure).
- Avoid explaining code changes in the changeset file.
- Changeset should be from the perspective of the user, not the developer. (something like "added a new feature" instead of "added a new function")
- Sometimes other team's developers can be the users of the package. Show example usage of package and API as a code snippet in the changeset file.
- Avoid using first person pronouns (I, we, us) in the changeset file.
- Avoid using second person pronouns (you, your) in the changeset file.
- Avoid using third person pronouns (he, she, they) in the changeset file.



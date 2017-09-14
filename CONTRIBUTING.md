## How to contribute to FabricElements

* Fork the repository and clone it locally.
* Install dependencies with `npm install` and `bower install`.
* Create your feature branch running `git checkout -b my-new-feature`.
* Check that tests are passing running `polymer test`.
* Commit your changes running `git commit -m 'Add some feature'`.
* Push to the branch running `git push origin my-new-feature`.
* Submit a pull request.
* Wait for response from one of the team members.

## Filing Issues

**If you are filing an issue to request a feature**, please provide a clear description of the feature. It can be helpful to describe answers to the following questions:

* Who will use the feature?
* When will they use the feature?
* What is the user’s goal?

Or... If you are filing an issue to report a bug, be sure to provide:

* A clear description of the bug and related expectations.
* A reduced test case that demonstrates the problem.

## Submitting Pull Requests

**Before creating a pull request**, ensure that an issue exists for the corresponding change in the PR that you intend to make. If an issue does not exist, please create one providing:

* A reference to the corresponding issue or issues that will be closed by the pull request.
* A succinct description of the design used to fix any related issues.
* At least one test for each bug fixed or feature added as part of the pull request.

If a proposed change contains multiple commits, please **squash commits to as few as is necessary** to succinctly express the change. 

We really appreciate your interest in contributing and improving the project.

## Squashing commits

To squash four commits into one, do the following:

    $ git rebase -i HEAD~4

In the text editor that comes up, replace the words "pick" with "squash" next to the commits you want to squash into the commit before it. Save and close the editor, and git will combine the "squash"'ed commits with the one before it. Git will then give you the opportunity to change your commit message to something like, "Issue #100: Fixed retweet bug."

**Important**: If you've already pushed commits to GitHub, and then squash them locally, you will have to force the push to your branch.

    $ git push origin branch-name --force

Helpful hint: You can always edit your last commit message, before pushing, by using:

    $ git commit --amend

### See also:
[Git Book Chapter 6.4: Git Tools - Rewriting History](http://git-scm.com/book/en/Git-Tools-Rewriting-History)

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'header-max-length': [2, 'always', 255],
    'header-min-length': [2, 'always', 20],
    'type-enum': [
      2,
      'always',
      [
        'fix',
        'feat',
        'perf',
        'breaking',
        'style',
        'makeup',
        'test',
        'chore',
        'wip',
        'docs',
        'build',
        'ci',
        'refactor',
        'revert',
      ],
    ],
  },
  wildcards: {
    merge: ['^(Merge pull request)|(Merge (.*?) into (.*?)|(Merge branch (.*?))$)'],
    revert: ['^revert: (.*)'],
  },
};

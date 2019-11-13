# Insert Random Hashtags

Inserts a 7 character string like `#r4nd0m`.

## Why?

Including these in test names, log messages, metric names, etc makes it easy to go from a log message, test failure, or metrics dashboard to the precise place in the code where this was generated. Without depending on source maps, or hoping the code hasn't been updated, or trying to figure out which parts of the output are a single string.

A little work to insert and a ton of time saving to use.

## Demo

![demo](demo.gif)

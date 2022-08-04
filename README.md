# A/B testing web app

This React application was developed to serve as a working example of an AB-testing-ready web app, implementing common experimentation pre-requisites such as event tracking and feature flag management.

## Experiment details

The hypothetical experiment implemented in this app is related to a new screen, called Tasks, which introduces some guidance to users based on their step of the journey with the platform. There are three types of tasks: "Getting started", "Our suggestions" and "Becoming a PRO". Each of these categories may contain one or more tasks.

### Hypothesis

The hypothesis that gave birth to the experiment itself is the idea that creating guidance on how to use the product, users will have most obstacles removed and, consequently, will engage more with the product and stay longer.

### Variants

In a good A/B fashion, the variations were split into two groups: control and test. The Control group continues to use the platform as is, without seeing the "To-do button" that takes them to the tasks, whereas the Test group has the feature displayed in full.

### Traffic distribution and allocation

Considering the setup above, usually the traffic distribution would be a simple 50% / 50% split.

### Measurements of success

One of best ways to measure whether a given experiment was a success or not is by analyzing key business metrics, such as user engagement (extremely relative to the type of business, in this case), conversion (subscription rates, purchasing rates, etc), etc.

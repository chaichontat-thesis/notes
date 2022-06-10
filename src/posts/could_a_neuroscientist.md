---
title: Example Post
subtitle: An exemplary post.
date: 2021-03-27
tags: ["neuro"]
---


<aside>

Understand > Explain > Describe

</aside>

First, what does it mean to _understand_?
We must first define several other terms.
A phenomenon can be _described_.
For example, the fact that an ant is an insect is a description.
An _explanation_ is a special type of description typically
involving the "why" question with the specific criteria depending on the philosopher.
For example, a unificationist would argue that
scientific explanation is a unified account of a range of different phenomena.

From these definitions, an understanding is a cognitive state when one
is in possession of a satisfactory explanation.
However, this does not guarantee that an explanation is correct.
As Craver wrote,

> "All scientists are motivated in part by the pleasure of understanding.
> Unfortunately, the pleasure of understanding is
> often indistinguishable from the pleasure of misunderstanding.
> The sense of understanding is at best an unreliable indicator
> of the quality and depth of an explanation"

## Computational explanations

<aside>

Computational models are typically benchmarked based on their statistical variance _explained_ of the data. In our discussion, this term should be thought of variance _described_.

</aside>

Computational neuroscientists routinely build mathematical models
in hopes of explaining the brain.
However, on their own, these models are merely descriptive.
A framework is needed for a model to rise to the level of an explanation.
We adopt the Kaplan's model-to-mechanism mapping (3M) theory,
which states that a model is explanatory when

> (a) the variables in the model correspond to identifiable components, activities, and organizational features of the target mechanism that produces, maintains, or underlies the phenomenon
>
> (b) the (perhaps mathematical) dependencies posited among these (perhaps mathematical) variables in the model correspond to causal relations among the components of the target mechanism.
> [@kaplanExplanatoryForce2011]

In this sense, A model's "explanatoriness" rests on
its faithful description of the mechanisms that leads to the phenomenon of interest
and can be both causal and functional.
3M theory, however, is not the whole story as a model can be explanatory without being causal.

### Imagine

<aside>

A Gabor filter optimally preserves a combination of spatial information and orientation-frequency information [@gaborTheoryCommunication1946].

![](./Gabor_filter_function.png)

</aside>

Imagine we have a system akin to the brain
but with complete knowledge of how it works.
Would we be able to understand such system using current techniques in neuroscience?
Jonas and Kording explored this question in this aptly named paper
[@jonasCouldNeuroscientist2017] by analyzing
and running a complete simulation of the MOS 6502, a microprocessor from the 70s.
Similar to neuroscience experiments,
they restricted the chip's "behavior" by running specific arcade games:
Space Invaders and Donkey Kong.
The activity of all transistors was recorded and transformed into
"spikes" based on off-to-on transitions of the transistors.

## References

[^ref]

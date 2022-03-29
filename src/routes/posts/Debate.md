---
title: Could a Neuroscientist Understand a Microprocessor?
subtitle: An exploration and critique of current quantitative methods in neuroscience.
date: 2021/03/27
bibliography: [references.bib]
---

## Introduction

Advances in recording technologies and computational power have led
to an explosion of tools used in cognitive and computational neuroscience.
We can now record the entire brain in some model animals [@bretteCodingRelevant2019]
and tens of thousands, and soon, millions of neurons, in mammals.
A full understanding of the brain should be possible soon.
Or so the story goes.

<aside>
Epistemology is the study of knowledge
</aside>

First, what does it mean to _understand_?
In epistemology, the study of knowledge,
knowledge is canonically defined as "justified true belief".
Understanding is intertwined with our cognitive state.
False explanations generate an equally potent feeling of understanding
and vice versa [@grimmUnderstanding2021].

> "Scientific understanding provides a far richer terrain than does scientific explanation
> and the latter is best viewed as a vehicle to understanding, rather than an end in itself."
> [@humphreysAnalyticSynthetic2019]

## [Could a Neuroscientist Understand a Microprocessor?](https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1005268)

> TLDR, No.

<aside>

This article follows in the tradition of [Can a biologist fix a radio?](<https://www.cell.com/cancer-cell/fulltext/S1535-6108(02)00133-2>)
by Yuri Lazebnik in 2002.

Modern computers are based on the von Neumann architecture,
which works through the [fetch-decode-execute](https://en.wikipedia.org/wiki/Instruction_cycle) cycle.
The processor fetches instructions from the memory,
decodes such instructions to basic operations,
and executes such operations.
The results are then written back to the memory.

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
"spikes" based on off-to-on transitions.

### Experiments

By lesioning transistors,
they could identify specific transistors that are necessary for game function.
However, these transistors are not specialized to the game that are being run,
rather they are simply adders or logic gates.
The complexity that is the game only emerges
when these elementary circuits work together.

<aside>
_Dimension_ refers to the number of parameters required to describe a phenomenon.
</aside>

These high-level abstractions could be revealed using dimensionality reduction techniques,
which is based on the assumption that there exist some parsimonious ways
of describing the information in the signal.
Jonas and Kording chose non-negative matrix factorization (NMF)
and recovered multiple time-varying dimensions.
These were later shown to correlate with the clock
and memory read-write signal of the processor.
These signals, although critical to the processor's operation,
do not describe how the game works or other details of the chip.

### Rebuke

A neuroscientist may have a litany of critiques of this "study" already.
Why were spikes based on off-to-on transitions?
Of course the tools do not work, a chip is not the brain.
The brain works differently.
Even the authors themselves admitted as much.
Yet these critiques also apply to current practices in neuroscience
and illuminate the inductive biases that we have.

For example, off-to-on transition as spikes may be completely artificial,
but the action potentials are also vast simplifications of the brain's activity.
It completely ignores dendritic computations, voltage summations, or even glial contributions.

NMF would not be expected to work yield useful information about the fetch-decode-execute architecture
as it is linear and non-hierarchical.
However, adding non-linearity to models require more inductive biases
to prevent the problem from being ill-posed and tame its complexity [@ramaswamyAlgorithmicBarrier2019].
The brain may function in ways that are more amenable to this form of analysis,
but how could we know that?
Artificial neural networks might be a biologically plausible model and will be discussed below.

Without a teleological understanding of what a brain ought to do.
Current methods a largely reductionist, sidestepping multiple rich layers of emergence in between.
We are told that statistical tools like dimensionality reduction decodes the "neural code"
and outputs "representations" of the environment.
The brain must care about these values as it is encoded.
However, even the existence of the neural code is far from resolved [@bretteCodingRelevant2019].
Not to mention the philosophical complexities arising from the use of representations.

Although it is highly unlikely that the brain operates in this manner.

Premature acceptance of a canonical model could crowd out equally valid yet less salient models.
For example, neurons in the primary visual cortex are typically thought of as pattern detectors.
But the same results that led to that idea could be explained by neurons performing future inputs predictions [@raoPredictiveCoding1999].

It is, therefore, not the point of this paper to perform a rigorous study of the microprocessor.
Rather, it is through this absurdity that we see the weaknesses in our current conceptual framework.
Unlike the microprocessor, we do not know how the brain works.
Yet, we do not validate our models on unexpected systems and see how they break.
This practice is common in the physics community yet not in the biological sciences [@lyonsStatisticalIssues2018].
All models rely on some form of inductive biases and being aware of such features is critical to avoid confirmation bias [@gershmanJustLooking2021].

## Assumptions

Tuning curves, a function between some property of a stimulus and a neuron's firing rate, are described as representing some information within the brain. These are most commonly known in orientation-specific neurons in the primary visual cortex. The problem is we do not know what information is being decoded.

As we investigate more complex experiments, we started using population codes and use statistics to find patterns. Often, these are tools that attempt to map multivariate recordings into some features of interest, referred to as "representations".

However, researchers often draw a further inference: If there is decodable information, then there is strong evidence that the information is represented by the patterns of activity used as the basis for the decoding.

The problem with neuroscience stems from

They didn't find "Donkey Kong transistors" or "Space Invaders transistors"; instead, they found components that carry out basic processes that just so happen to be important for those particular games.

Consider the neural network, even though we know all the parameters and details, they are often considered a black box. Yet to believe so consign us to hopelessness. Rather, we should attempt to understand. Neural networks can predict neural activity better than traditional models [@kellTaskOptimizedNeural2018]. Since these representations are learned, there is no base to which to indicate that it represents.

The fetch-decode-execute cycle of a modern processor probably does not have an analogue in the brain. Fortunately, even if the brain has that kind of architecture, the sensory cortices spent the majority of its time performing its own sensory function.

### Hype

In 2013, the Human Brain Project launched and imploded, primarily due to poor management practices [@abbottDocumentaryFollows2020]. Regardless, in this age of big science, we must ask ourselves if we are promising too much.

This all assumes that we have infinite resolution. fMRI data analysis is notoriously an art form [@botvinik-nezerVariabilityAnalysis2020] Just a few weeks ago, associations between brain structure or function with cognition requires at least thousands of participants [@marekReproducibleBrainwide2022].

## What do we do now

This sobering finding does not render all neuroscience moot. We have made a lot of useful knowledge, many of which directly led to the current AI revolution [@hassabisNeuroscienceInspiredArtificial2017]. To make future progress, we need better discipline in our use of models.

But what can we do to build insights are useful? Sure, we can capture rotation dynamics that map nicely to hand-grasping motion, but how does that help us understand or recreate the circuits leading to those behaviors?

### ANNs as a potential solution

A clear step forward would be to test our models on synthetic dataset and make sure that our models can capture the phenomena of interest while also detecting unexpected results. This could be done by applying our tools to artificial neural networks [@lindsayTestingTools2022], which in many cases provide the best correspondence between real neural data, better than all handcrafted models [@kellTaskOptimizedNeural2018; @barakRecurrentNeural2017].

Using ANNs also allow for knowledge sharing between disciplines: a lot more people are studying ANNs and their insights are very likely to contribute back to neuroscience.

In the end, understanding the brain is a complex problem
and complexity could only be tackled through useful abstractions
with disciplined reasoning.

## References

[^ref]

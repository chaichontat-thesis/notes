---
title: Could a Neuroscientist Understand a Microprocessor?
subtitle: An exploration and critique of current quantitative methods in neuroscience.
date: 2021-03-27
---

## Introduction

Advances in recording technologies and computational power have led
to an explosion of tools used in cognitive and computational neuroscience.
We can now routinely record tens of thousands of neurons
and even the entire brain of some model animals [@bretteCodingRelevant2019].
With the power of data, a full understanding of the brain would be available soon.

At least that is the story.

We have ever more complicated models and papers.
We have ever more grand initiatives and promises of breakthroughs.
But are we _actually_ understanding more of the brain?
Or are we blinding ourselves with our pretty figures.

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
> [@craverExplainingBrain2007]

I must disclose that I am not a philosopher of science
and this discussion is the result of a cursory walk in this rich field.
In this sense, I am ignoring the psychological aspect of understanding
and focus entirely on our ability to generate a coherent family of good explanations.
We now focus more on what it means to explain.

### (A sample of) Forms of Explanation

Multiple theories of scientific explanations exist and are not mutually exclusive to one another.
The most relevant ones to neuroscience are listed below [@thompsonFormsExplanation2021].

#### Causal explanations

Causal explanations relate to how a phenomenon is related to the causal graph of the world.

- Constitutive explanation:
  to explain via description of causal relationships among component parts and their activities.
  An example includes the interactions between membrane voltage and ion channel that result in action potentials.
- Etiological explanation:
  to explain in terms of antecedent causes.
  For example, COVID-19 is caused from a SARS-CoV-2 infection.

#### Functional explanations

Based in psychology,
functional explanations attempt to explain _capacities_.
For example, the capacity to see, to hear, and to have cognition.
Generating a functional explanation necessitates showing
how the functions of each part come together to produce the capacities to be explained.
As such, these are only "how-possibly" but not "how-actually" a capacity comes to exist.

The relative lack of precision led causal mechanists to
derisively refer functional explanations as "mechanism sketches" [@piccininiIntegratingPsychology2011].
Functionalists argue that the lack of precision allows for better generality which is a trade-off worthy of making.

#### Computational explanations

<aside>

Computational models are typically benchmarked based on their statistical variance _explained_ of the data. In our discussion, this term should be thought of variance _described_.

</aside>

Computational neuroscientists routinely build mathematical models
in hopes of explaining the brain.
However, on their own, these models are merely descriptive.
A framework is needed for a model to rise to the level of an explanation.
We adopt the Kaplan's model-to-mechanism mapping (3M) theory,
which states that a model is explanatory when

> "(a) the variables in the model correspond to identifiable components, activities, and organizational features of the target mechanism that produces, maintains, or underlies the phenomenon
>
> (b) the (perhaps mathematical) dependencies posited among these (perhaps mathematical) variables in the model correspond to causal relations among the components of the target mechanism."
> [@kaplanExplanatoryForce2011]

In this sense, A model's "explanatoriness" rests on
its faithful description of the mechanisms that leads to the phenomenon of interest
and can be both causal and functional.
3M theory, however, is not the whole story as a model can be explanatory without being causal.

<aside>

A Gabor filter optimally preserves a combination of spatial information and orientation-frequency information [@gaborTheoryCommunication1946].

![](https://upload.wikimedia.org/wikipedia/commons/0/00/Gabor_filter_function.png)

</aside>

A clear example is the Gabor model of V1 receptive fields (RFs).
The model is simply a mathematical description of the shape of the RFs
that completely ignores the biophysics generating those shapes.
Yet, by relying on an information-theoretic explanation,
we can explain why RFs are Gabor-shaped [@chirimuutaExplanationComputational2018].
This issue is claimed to be solved by an extension of the 3M model,
the 3M++ [@caoExplanatoryModels2021], which is beyond the scope of this discussion.

As we have seen, there is not a single correct definition for an explanation,
which means that there are typically multiple explanations for any phenomenon.
We must instead accept that understanding the brain relies on scientific pluralism,
a multiple account approach to science as shown next [@krakauerNeuroscienceNeeds2017].

## [Could a Neuroscientist Understand a Microprocessor?](https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1005268)

> TLDR, No. Not even close.

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
"spikes" based on off-to-on transitions of the transistors.

### Experiments

By lesioning transistors,
they could identify and describe specific transistors that are necessary for game function.
However, these transistors are not "Donkey Kong transistors" or "Space Invaders transistors"
They are simply adders or logic gates that just so happen to be important for those particular games.
The complexity that is the game only emerges when these elementary circuits work together.

<aside>

_Dimension_ refers to the number of parameters required to describe a system.

</aside>

To capture these higher-level abstractions,
we typically turn to dimensionality reduction techniques,
which is based on the assumption that there exist some parsimonious ways
of describing the information in the signal.
Jonas and Kording chose non-negative matrix factorization (NMF)
and recovered multiple dimensions with rich time-varying characteristics.
These were later shown to correlate with the clock
and memory read-write signal of the processor.

These signals indeed explain a critical low-level function
of the processor yet they do not describe, let alone explain,
how the game works or other details of the chip.
We might be able to explain the synchronicity pattern
in the chip but not any of the "behavioral" aspects
that we care about.

### Rebuke

A neuroscientist may have a litany of critiques of this "study" already.
Why were spikes based on off-to-on transitions?
Of course the tools do not work, a chip is not the brain.
Even the authors themselves admitted as much.
Yet these critiques also apply to current practices in neuroscience
and illuminate the inductive biases that we have.

For example, off-to-on transition as spikes may be completely artificial,
but the action potentials are also vast simplifications of the brain's activity.
It completely ignores dendritic computations, voltage summations, to name a few.
NMF would not be expected to work yield useful information
about the fetch-decode-execute architecture
as it is linear and non-hierarchical.
However, adding non-linearity to models require more inductive biases
to prevent the problem from being ill-posed [@ramaswamyAlgorithmicBarrier2019].
Information we do not reliably possess.

The authors made it clear that it is not the point of this paper
to perform a rigorous study of the microprocessor.
Rather, it is through this absurdity that we see weaknesses in our conceptual framework.
This is a call to action as we do not routinely validate our models
on unexpected systems and see how they break.
Unlike the microprocessor, we do not know how the brain works.
This practice is common in the physics community yet not in the biological sciences [@lyonsStatisticalIssues2018].

## Hidden Assumptions

All models rely on some form of inductive biases and
being aware of those is critical to avoid confirmation bias [@gershmanJustLooking2021].
As Craver wrote, aesthetic and intuition alone cannot reliably discern good explanations and bad ones.
Premature acceptance of a canonical model could crowd out equally valid yet less salient models.
For example, neurons in the primary visual cortex are typically thought of as pattern detectors.
But the same experimental results that led to that idea
could also be explained by neurons performing future input predictions [@raoPredictiveCoding1999].

The fetch-decode-execute cycle of a modern processor probably does not have an analogue in the brain.
Fortunately, even if the brain has that kind of architecture,
the sensory cortices spent the majority of its time performing its own sensory function
as extracted variables from dimensionality reduction techniques
often happen to be the ones we care about.

It is often claimed that these statistical tools decodes the "neural code",
which are "representations" of the environment.
The argument is that the brain must care about these values as it is encoded.
However, even the existence of the neural code is far from resolved [@bretteCodingRelevant2019].
Not to mention the philosophical complexities arising of "representations".

Even more so, detected features may only be an epiphenomenon,
an artifact that has no causal role in the brain.
Class selectivity, commonly observed in the brain, is known to emerge during ANN training.
One may presuppose that this selectivity is essential to how the brain performs classification tasks.
Yet, regularizing the training process
_against_ class selectivity does not reduce test performance,
but regularizing _for_ it lowers performance [@leavittSelectivityConsidered2020].

The preceding discussion assumes that we have infinite resolution.
fMRI data analysis is notoriously an art form [@botvinik-nezerVariabilityAnalysis2020]
Just a few weeks ago, a study reported that reliable detection of associations
between brain structure or function with cognition
requires at least thousands of participants [@marekReproducibleBrainwide2022],
a number prohibitive to most studies.

## What do we do now

These sobering thoughts do not render all neuroscience moot.
We have made a lot of useful knowledge,
many of which directly led to the current AI revolution [@hassabisNeuroscienceInspiredArtificial2017].
To make future progress, we need better discipline in our use of models.

A clear step forward would be to test our models on reliable synthetic dataset
and make sure that our models can capture the phenomena of interest while also detecting unexpected results.
This could be done by applying our tools to artificial neural networks [@lindsayTestingTools2022].
Still, ANNs are often considered a black box.
Why are we replacing one black box with another?
Yet to believe so consign us to hopelessness.
ANNs are useful models that in many cases provide the best correspondence between real neural data,
better than all handcrafted models [@kellTaskOptimizedNeural2018; @barakRecurrentNeural2017].

ANNs, being a complete mathematical construct, will force us to be more explicit of our goals.
If our methods cannot attain such goals in a system that we have complete knowledge,
we may need to adjust our goal posts. Using ANNs also allow for knowledge sharing between disciplines:
a lot more people from diverse backgrounds are studying ANNs
and their insights are very likely to contribute back to neuroscience.

## Conclusion

I hope that this non-exhaustive overview of the problem of explanation and understanding
demonstrate the usefulness of philosophy to the practicing scientist.
Embracing its insight can point us toward better solutions and breakthroughs.
Understanding the brain is a complex problem
and complexity could only be tackled through useful abstractions
with disciplined reasoning.

## References

[^ref]

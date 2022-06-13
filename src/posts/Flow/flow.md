---
title: A flow-based latent state generative model of neural population responses to natural images
date: June 6th, 2022
citekey: bashiriFlowbasedLatent2021
tags: ["representation"]
---

<script>
  import Graph from "$src/lib/components/graph.svelte"
  import Flow from "./flow.json"
</script>

**Models neural activity by combining stimulus information with factor analysis of noise correlation.**
Better performance at activity prediction conditioned on all other neurons.

## Problem

Model $p(\br \mid \bx)$ of population activity $\br \in ℝ^n$ to an arbitrary stimulus $\bx$.
Two main sources of variance:

- **Stimulus-driven activity**: $\bf_θ(\bx) = 𝔼[\br \mid \bx]$, responses dependent on an _arbitrary_ stimulus.
  Assumes conditional independence among neurons.
- **Stimulus-conditioned variability**: $\mathrm{Var}[\br \mid \bx]$, responses to repeated presentations of an _identical_ stimulus.
  - Variability to the repeated presentations of identical stimuli, called _noise correlations_.
  - Dependent on stimulus, behavioral task, attention, brain state.
  - Others fit $p(\br\mid\bx)$ separately for each unique stimulus and require repeated presentations of said stimulus.

This paper introduces a model that accounts for both.

## Model

![](./g3368.svg)

$$
p(\br \mid \bx) = \N( T_φ(\br); \bf_θ(\bx), \mathbf{C} \mathbf{C}^\T + Ψ) ⋅ |\det ∇_\br \, T_φ(r)|
$$

- Spiking data is transformed using a trained normalizing flow $T_φ(\br)$
  $$
  T_φ(\br) = \mathrm{Affine} ∘ \exp ∘ \mathrm{Affine} ∘ \mathrm{ELU} ∘ \mathrm{Affine} ∘ \mathrm{ELU} ∘ \mathrm{Affine} ∘ \log ∘ \mathrm{Affine}
  $$
  where only the affine transformations are trainable.
  The flow acts on each dimension independently,
  that is $T_φ(\br) = [T_{φ_1}(r_1), \dots, T_{φ_n}(r_n)]^\T$.
  - ZIFFA includes a zero-inflated component to capture zero spikes.

<aside>

For the differences between PCA and factor analysis, see this excellent [answer](https://stats.stackexchange.com/a/288646).
Roughly, FA is PCA with a low-rank probabilistic component.

</aside>

- **Stimulus-conditioned variability:**: The second-order variability is captured using a factor analysis model,
  which is a covariance matrix with rank equal to the number of latent variables $\bz$.
  The self-variance $Ψ_i$ is distinct for each neuron.
- **Stimulus-driven activity**: The means of the Gaussian transformed spikes $\E[\br\mid\bx] = \bf_θ(\bx)$ are modeled based on their previous paper [@lurzGeneralizationDatadriven2021].

### Rationale

Factor analysis assumes Gaussianity.
However, spike rates are strictly positive and are distributed like a zero-inflated overdispersed Poisson distribution.

For each stimulus, perform factor analysis and share the covariance matrix across all stimuli.

## Performance

### Flow Transformation Performance

<aside>

**Normalizing flow fit**.
FlowFA is flexible enough to fit these transformations.

Numbers in the table are KL-divergence.

</aside>

![](./g6255.svg)

### Comparisons

FA models outperform independent models.
Although **fixed transformations work better for conditional correlation.**

<aside>

![](./g9700.svg)

**Likelihood of model fit.**
ZIFFA can fit with a higher log-likelihood.

**Conditional correlation**
$\E[r_i \mid \bx, \br_{/i}]$.
FA models fit better than independent models.

</aside>

![](./fig2.svg)

## Latent variables

The latent variables describe **noise correlations** (neuron-neuron correlations) from FA.
Although these are supposedly independent from the **stimulus-driven activity**,
nonlinear flow transforms can indirectly link the two.

Correlations of the extracted latent variables ($k=3$) to various values.
Position does seem to be a significant contributor to intrinsic variability,
in addition to pupil size.

<aside>

Latent variables as a function of **cortex position**.

</aside>

![](./latentcortex.svg)

<aside>

Latent variables as a function of **RF position**.

</aside>

![](./latentrf.svg)

<aside>

Latent variables as a function of **pupil dilation**.

</aside>

![](./latentpupil.svg)

## References

[^ref]

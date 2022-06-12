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

## Goal

Model $p(\br \mid \bx)$ of population activity $\br \in ℝ^n$ to an arbitrary stimulus $\bx$.

## Problems

- **Stimulus-driven activity**: $\bf_θ(\bx) = 𝔼[\br \mid \bx]$ responses dependent on an arbitrary stimulus.
  Assumes conditional independence among neurons.
- **Stimulus-conditioned variability**: responses to repeated presentations of an identical stimulus.
  - Variability to the repeated presentations of identical stimuli, called _noise correlations_.
  - Dependent on stimulus, behavioral task, attention, brain state.
  - Fit $p(r\mid x)$ separately for each unique stimulus and require responses to repeated presentations of the stimulus

**Combine DNN-based models of stimulus-driven activity with a latent state model that accounts for shared stimulus-conditioned variability.**

Typical models use

<aside>

For the differences between PCA and factor analysis, see this excellent [answer](https://stats.stackexchange.com/a/288646).

</aside>

## Model

$$
p(\br \mid \bx) = \N( T_φ(\br); \bf_θ(\bx), \mathbf{C} \mathbf{C}^\T + Ψ) ⋅ \det ∇_\br \, T_φ(r)
$$

- The mean untransformed response $\E[\br\mid\bx] = \bf_θ(\bx)$ is the response from the image encoding model.
- The second-order variability is captured using a factor analysis model,
  which is a covariance matrix with rank equal to the number of latent variables.
  The self-variance $Ψ_i$ is distinct for each neuron.
- The response is transformed using a trained normalizing flow $T_φ(\br)$ that acts on one dimension,
  that is $T_φ(\br) = [T_{φ_1}(r_1), \dots, T_{φ_n}(r_n)]^\T$.
  This results in a diagonal Jacobian.
  $$
  T_φ(\br) = \mathrm{Affine} ∘ \exp ∘ \mathrm{Affine} ∘ \mathrm{ELU} ∘ \mathrm{Affine} ∘ \mathrm{ELU} ∘ \mathrm{Affine} ∘ \log ∘ \mathrm{Affine}
  $$
  where only the affine transformations are trainable.

### Rationale

Factor analysis assumes Gaussianity. However, neural responses are strictly positive with

For each stimulus, perform factor analysis and share the covariance matrix across all stimuli.

<Graph spec="{Flow}">
  A graph
</Graph>

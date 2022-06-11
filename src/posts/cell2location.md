---
title: Cell2location
date: 2022-03-30
---

> Cell2location is a Bayesian model that is aimed at decomposing location-level gene expression counts into a set of pre-defined signatures of reference cell types.

### Step 2 -- Mapping

A negative binomial model with $μ_{s,g}$

$$
d_{s,g} \sim \mathrm{NB}(μ_{s,g}, α_{e,g})
$$

or

$$
\mu \sim \mathrm{Gamma}(α) \\
d_{s,g} \sim \mathrm{Poisson}(\mu)
$$

<aside>

$S$: number of spots<br>
$G$: number of genes<br>
$D$: an $S\times G$ spatial count matrix.<br>
$s = \{1, \dots, S\}$

</aside>

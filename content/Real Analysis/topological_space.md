---
title: "Topological Spaces"
section: "Real Analysis"
author: "Chaichontat Sriworarat"
date: 2020-01-20
tags: ["real analysis"]
---

## Topological Spaces

Let's start by working with the 2D plane.
- The crudest mathematical representation of the plane is a set $X = \set{p, \dots}$.
- We could define a function $F: X → \real$.
- We could also define a distance or metric, which will transform this into a _metric space_.
- We could define the connectedness of points in this plane _without_ defining a metric.

The intuition is drawing little lines between planes that are infinitesimally close to each other.

Define the _topological space_ $(X, τ)$ where $τ$ is the _topology_.
- $τ ⊆ \mathcal{P}(X)$ where $\mathcal{P}(X)$ is the power set of $X$.

### Axioms of a Topology
1. $∅, X ∈ τ$. The empty set and the full set must be in the topology.
2. $⋂_ {i=1}^n U_i ∈ τ, \ ∀ U_i ∈ τ$.
3. $⋃_ α U_ α ∈ τ$. The index $α$ could be in $\real$ to deal with uncountable sets.

There can be multiple possible topologies for a set.

### Opened and closed
- If $U ⊆ X$ and $U \in τ$, then $U$ is _opened_.
- If $A ⊆ X$ and $X ∖ A ∈ τ$, then $A$ is _closed_.
- $∅, X$ are both open and closed or _clopened_.

#### Example
Let $X = \set{1, 2, 3}$.
- $τ = \set{∅, X}$. Note that $τ$ is a topology for any set, also called a _chaotic topology_.
- $τ = \mathcal{P}(X)$ is also a topology for any set, called a _discrete topology_.

We could draw a line between two things if both are in a subset together for every subset that contains both of them.

Then, in the chaotic topology, everything is connected, whereas nothing is connected in the discrete topology.

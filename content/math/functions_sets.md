---
title: "Sets and Functions"
section: "Real Analysis"
author: "Chaichontat Sriworarat"
date: 2020-01-24
tags: ["real analysis"]
---

# Functions

### Domains

$f$ is a function if to each element $a$ for all $a \in A$, $f$ assigns one element in $B$.
$$
\begin{align}
  f: A → B
\end{align}
$$
where $A$ is the **domain** and $B$ is the **codomain**.

Let $X ⊆ A$. The **image** of $f$ is
$$
\begin{align}
  f(X) = \set{b \in B \mid f(a)=b, a ∈ X}.
\end{align}
$$
The image is a subset of the codomain that the function actually uses.

Similarly, the **preimage** is a subset of the domain that the function actually uses. Let $W ⊆ B$. This is not the same as the domain when the function is NOT injective.
$$
\begin{align}
  f^{-1}(W) = \set{a \in A \mid f(a) \in W}.
\end{align}
$$

### Mappings

* Injective: one-to-one. Use everything in domain. $f(x) = e^x$
  * $∀a, b \in X, f(a) = f(b) ⟹ a = b$.
* Surjective: onto. Use everything in codomain. $f(x) = \tan(x)$.
  * $∀ b ∈ B, ∃ a ∈ A : f(a) = b$.
* Bijective: both injective and surjective. $f(x) = 2x$.


# Countability

A set $A$ is countable if there is a bijection between $\nat$ and $A$.

# Topological Definitions


#### Metric Spaces
A metric space $X$ is a set with function $d:X × X → \real$ such that for any element $p, q,$ and $r$ in $X$, the following properties hold.
1. $d(p,q) > 0$ if $p ≠ q$ else $d(p,q) = 0$.
2. $d(p,q) = d(q,p)$.
3. $d(p,q) ≦ d(p,r) + d(q,r)$


#### Bounded Set

A subset $E$ of a metric space $X$ is bounded if there exists some point in $q$ in $X$ such that the distance between $q$ and any point of $E$ is less than **or equal to** some fixed, finite real number $M$.
$$
\begin{align}
  ∃q ∈ X, ∃M ∈ \real : ∀p ∈ E, \, d(p, q) ≤ M.
\end{align}
$$

The set $[-3,3]$ in $\real$ is bounded by the point $q=3$ with $M=6$.


#### Neighborhood

A neighborhood $N_r(p)$ of radius $r>0$ around a point $p$ in metric space $X$ is the set of all points in $X$ whose distance from $p$ is less **(NOT or equal to)** than $r$.
$$
\begin{align}
  N_r(p) = \set{q \in X : d(p,q) < r}.
\end{align}
$$


#### Limit point
A point $p$ is a limit point of a subset $E$ of a metric space $X$ if **every neighborhood** of $p$ is **partially or fully contained** in $E$ (not $p$ itself).
$$
\begin{align}
  ∀r > 0, \pp{N_r(p) ∩ E} ≠ \set{p} \text{and}\ ∅.
\end{align}
$$

Usually, it means that there're numbers infinitesimally close to $p$.

Every non-limit point is called an **isolated point** of $E$.


#### Closed set
A subset $E$ of a metric space $X$ is closed if it contains all of $E$ limit points.
$$
\begin{align}
  \set{x ∈ X : x\ \text{is a limit point of}\ E} ⊂ E.
\end{align}
$$


#### Dense set
A subset $E$ of a metric space $X$ is dense in $X$ if every point of $X$ is a point of $E$ and/or a limit point of $E$.
$$
\begin{align}
  \set{x ∈ X : x \in E \ \text{or}\ x \ \text{is a limit point of}\ E} ⊂ E.
\end{align}
$$


#### Interior point
A point $p$ is a interior point of a subset $E$ of a metric space $X$ if **some neighborhood** of $p$ is **fully contained** in $E$. There must exists at least one $r$ such that everything inside that $r$ is contained in $E$.
$$
\begin{align}
  ∃r > 0 : N_r(p) ⊂ E
\end{align}
$$

Given $E=(-3,3) ⊂ \real$, all points in $(-3,3)$ are inferior points. The points $3$ and $-3$ are not, as there are numbers on one side that are not in $E$.


#### Open set
A subset $E$ of a metric space $X$ is open if all of its points are interior points of that set.
$$
\begin{align}
  ∀p \in E,\ ∃r>0:N_r(p) ⊂ E.
\end{align}
$$

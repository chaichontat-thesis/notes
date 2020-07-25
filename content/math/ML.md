---
title: "Rosenberg ML"
section: "Real Analysis"
author: "Chaichontat Sriworarat"
date: 2020-03-16
tags: ["real analysis"]
---

# Lecture 9

## Convex Optimization
A set $C$ is **convex** if $∀x_1,x_2 ∈ C$ and $0 ≤ θ≤ 1$,

$$
\begin{align*}
  θx_1+(1-θ)x_2∈C.
\end{align*}
$$

A function $f$ is convex if $∀x,y ∈\on{dom}(f)$,

$$
\begin{align*}
  f(θx+(1-θ)y)≤θf(x) + (1-θ)f(y).
\end{align*}
$$

* Convex $⟹$ local minima are global minima.
* Strictly convex $⟹$ local minimum is unique.

### Standard Optimization Form

$$
\begin{align*}
  \min \quad &f_0(x) \\\\
  \mathrm{s.t.} \quad &f_i(x) ≤ 0 \\\\
  &h_i(x) = 0.
\end{align*}
$$

* A point $x$ satisfying all constraints is called a **feasible point**.
* A **Feasible set** is the set of feasible points.
* $x$ is feasible and $f_i(x) = 0 ⟹ f_i(x)≤0$ is **active** at $x$.
* An **optimal value** $p^∗ = \inf\set{f_0(x): x \text{ satisfies all constraints.}}$.
* $x^∗$ is an **optimal point** if $x^∗$ is feasible and $f(x^∗)=p^∗$.


## Lagrangian Duality

The **Lagrangian** for a standard optimization problem is

$$
\begin{align}
  L(x,λ) = f_0(x) + \sum_{i=1}^m λ_if_i(x).
\end{align}
$$

$λ$ is called the **Lagrange multipliers**.

Taking the supremum over the Lagrangian gives back encoding of objective and constraints,

$$
\begin{align}
  \sup_{λ⪰0} L(x,λ) &= \sup_{λ⪰0}\pp{f_0(x) + \sum_{i=1}^m λ_i f_i(x)} \\\\
  &= \begin{cases}
    f_0(x) & f_i(x)≤0 \text{ all } i \\\\
    ∞ & \text{otherwise}
  \end{cases}.
\end{align}
$$

Equivalently, in **primal form**,

$$
\begin{align}
  p^∗ &= \inf_x \, \sup_{λ⪰0} L(x,λ)
\end{align}
$$

The Lagrangian dual problem is

$$
\begin{align}
  d^∗ &= \sup_{λ⪰0} \, \inf_x  L(x,λ) \\\\
  &= \sup_{λ⪰0} g(λ)
\end{align}
$$

where $g$ is the **dual function**.

Have **weak duality** if $p^∗≥d^∗$.

* $p^∗-d^∗$ is called the **duality gap**.
* Duality gap is 0 when the optimization is convex.
* Dual function is always concave.
* Lagrange dual gives the lower bound of $p^∗$.

Dual problem (often easier to solve) is

$$
\begin{align}
  \max \quad &g(λ) \\\\
  \mathrm{s.t.} \quad &λ ⪰ 0.
\end{align}
$$

* Usually we have strong duality for convex problems.
* Slater's constraint for strong duality (problem must be strictly feasible).

# Lecture 12

* **Feature extraction** is a mapping of an input from $\mathcal{X}$ to $\real^D$.
* A **feature template** is a set of features that are computed in a similar way.
* A **one-hot encoding** is a feature template that always has _exactly_ one non-zero value.

* Extract everything that might be relevant.

##### Feature Vector Representations
* Array representation (dense features)
    * Assumed fixed ordering of features.
* Map representation (sparse features) - dict
    * Common for production software.


##### Nonlinearities that can cause problems.
1. Non-monotonicity
    * Ex. temperature, optimal at 37, $\phi(x) = \set{1, t(x), \set{t(x)^2}}$.
    * Features should be simple building block.
2. Saturation.
    * Smooth nonlinear transformation. $\set{1, \log(1+N(x))}$.
    * Discretization (quantiles), one-sided bucket (nested, good for defaults)?
3. Interactions.
    * Height vs Weight.
    * Include cross-terms
    * **Predicate** is a feature that is true/false. $P:\mathcal{X}→\set{0, 1}$.
    * Interaction can be made by multiplying predicates.


##### Expressivity of Hypothesis Space

$$
\begin{align}
  \mathcal{F} = \set{f(x)=w^\T\phi(x)}.
\end{align}
$$
By adding more features, we can make this linear space larger.

# Lecture 13

* To get expressive hypothesis spaces using linear models, we need high-dimensional feature spaces.
    * Leads to explosion in interaction terms. Flower pot problem.
    * Large feature spaces can lead to overfitting and resource exhaustion.

* A method is **kernalized** if inputs only appear inside inner products: $⟨ψ(x), ψ(y)⟩$ for $x,y∈\mathcal{X}$.
* The kernel function corresponding to $ψ$ and inner product $⟨⋅,⋅⟩$ is $k(x,y)=⟨ψ(x), ψ(y)⟩$.
    * We can evaluate $k(x,y)$ directly.
    * Could be think of as a similarity score.
    * Use **Mercer kernels**, corresponding to inner products in some feature spaces.

* The **kernel matrix** (Gram matrix) is the matrix of all possible inner products.

#### Benefits
1. Computational
2. Infinite-dimensional feature spaces.
3. Allows thinking in terms of similarity.


#### Linear Kernel
* Input space: $\mathcal{X} = \real^D$.
* Feature space: $\mathcal{H} = \real^D$ with standard inner product.
* Feature map: $\psi(x)=x$.
* Kernel: $k(x_1,x_2)=x_1^\T x_2$.

#### Polynomial Kernel
* Input space: $\mathcal{X} = \real^D$.
* Kernel: $k(w, x)=(1+⟨w,x⟩)^M$.
* Corresponds to a feature map with all monomials up to degree $M$.

#### Gaussian Kernel
* Corresponds to an infinite dimensional feature vector.

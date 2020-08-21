---
title: "Second-order Statistics"
date: 2020-08-01
tags: ["math", "ml"]
---

The normal distribution is fully specified by two moments.

The SVD is the best low-rank approximation of a real matrix (based on the spectral norm) (Eckart-Young Theorem).

$$
\begin{align}
    A_k = \sum_{i=1}^k \sigma_i (u_i v_i^\T)
\end{align}
$$

which is the dot product, which is equivalent to the variance in symmetric matrices.

The spectral norm for a matrix $\mb{A}$ is

$$
\begin{align}
    \sup_{\bx\in{\real^n}} \frac{\norm{\mb{Ax}}}{\norm{\bx}} = \sup_{\bx\in\real^n} \sum_{i=1}^n (\mb{Ax})_i
\end{align}
$$

for any $\norm{\bx} > 0$.

The MSE is also squared. The solution of least squares for a linear model is linear in the weights and analytic. Under the Gaussian assumption, this is also the maximum likelihood estimator.
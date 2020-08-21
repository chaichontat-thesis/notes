---
title: Latent Variable Models
date: 2020-07-25
tags: [statistics]
---

## Gaussian Mixture Models

$$
\begin{align}
  p(\bx \mid \bs{\theta}) = \sum_{c=1}^C \pi_c \ \normal{\bx\mid\bs{\mu}_c, \bs{\Sigma}_c}
\end{align}
$$

Define a latent variable $t$ that determines the assignment of observations to mixture.

$$
\begin{align}
  p(\bx, t \mid \bs{\theta}) &= p(\bx\mid t, \btheta) \ p(t\mid\bs\theta) \\
\end{align}
$$
Using one-hot encoding,
$$
\begin{align}
  p(\bx\mid t_c=1, \btheta) &= \normal{\bx\mid\bmu_c, \bSigma_c} \\
  p(t_c=1\mid\btheta) &= \pi_c
\end{align}
$$

Since we do not know the latent variable, the MLE is
$$
\begin{align}
  \btheta_\mathrm{MLE} &= \arg\max_\btheta \log p(\bX\mid\btheta) \\
  &= \arg\max_\btheta \log \sum_T p(\bX, \mb{T}\mid\btheta) 
\end{align}
$$


## Expectation-Maximization (EM) Algorithm

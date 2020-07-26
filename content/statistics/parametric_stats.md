---
title: Parametric Statistics
date: 2020-07-25
tags: [statistics]
---

> Why are Gaussians everywhere?  
> What links the arithmetic mean and the Gaussian?

<!--more-->

We have some sample of data. We assume that there exists some real parameter. Let $y_i$ be a random variable. Let $ϵ_i$ be the random variable specifying the

$$
\begin{align}
  y_i = α + ϵ_i
\end{align}
$$

Intuitively, we want to use the arithmetic mean as the location parameter $α$. What form of density for $p(y_i)$ and method of estimation to get the arithmetic mean as the estimator?

Let $\bx =(\xdots)$ Assuming that each draw is iid, we have
$$
\begin{align}
  p(\xdots∣θ) &= \prodd f(x_i∣θ) \\
  \log p(\xdots∣θ) &= \summ \log f(x_i∣θ).
\end{align}
$$

We want
$$
\begin{align}
  \summ \frac{∂}{∂θ}\, g(θ-x_i) = 0
\end{align}
$$
for $θ=\hat{θ}=\bar{x} = \summ \frac{x_i}{n}$.

Consider a sample with $x_1=nu$ and $x_2,\dots,x_n=0$. Then,
$$
\begin{align}
  \hat{θ} &= u \\
  \hat{θ} -x_1 &= - n(u).
\end{align}
$$

We have
$$
\begin{align}
  g^′(-nu) + ng^′(u)=0
\end{align}
$$

We also know that $g^′$ is odd, since
at $n=1$, $g^′(-u) = -g^′(u)$. Then,

$$
\begin{align}
  g^′(nu) = ng^′(u),
\end{align}
$$
which is the definition of a linear function.

Hence, the solution is
$$
\begin{align}
  g^′(u) &= au \\
  g(u) &= \inv{2}au^2+b.
\end{align}
$$

For the distribution to be normalizable, $a$ must be negative. Finally,
$$
\begin{align}
  f(x∣θ) &= b\expb{-\frac{α(x-θ)^2}{2}}
\end{align}
$$

Since we use a special sample, we only show that $MLE=mean$ implies this $f(x\mid\theta)$.

Conversely, if $f(x\mid\theta)$ is satisfied, we can show that the likelihood function always have a unique solution of mean.

Hence, this is sufficient and necessary.

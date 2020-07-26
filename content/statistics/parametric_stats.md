---
title: Parametric Statistics
date: 2020-07-25
tags: [statistics]
---

> Why is the normal distribution everywhere?  
> How does the arithmetic mean leads to the normal?

<!--more-->
This post follows Gauss's derivation of the normal distribution[^1]. Prior to this derivation, the method of least absolute deviation was used which results in the median.

There, he writes:

> It has been customary to regard as an axiom the hypothesis that if any quantity has been determined by several direct observations, made under the same circumstances and with equal care, the arithmetic mean of the observed values gives the most probable value, if not rigorously, yet very nearly, so that it is always most safe to hold on to it.

Hence, he wants a probability density $p(y_i)$ such that the arithmetic mean is the location parameter $\alpha$.

Let $f(x-\theta)$ be the probability distribution of the error and assume that $f(\cdot)$ is differentiable and diminishes to zero at infinity.

Let $\bx =(\xdots)$ Assuming that each draw is iid, we have

$$
\begin{align}
  p(\xdots∣\theta) &= \prodd f(x_i∣\theta) \\\\
  \log p(\xdots∣\theta) &= \summ \log f(x_i∣\theta).
\end{align}
$$

We want
$$
\begin{align}
  \summ \frac{\partial}{\partial\theta}\, g(\theta-x_i) = 0
\end{align}
$$
for $\theta=\hat{\theta}=\bar{x} = \summ \frac{x_i}{n}$.

Consider a sample with $x_1=nu$ and $x_2,\dots,x_n=0$. Then,
$$
\begin{align}
  \hat{\theta} &= u \\\\
  \hat{\theta} -x_1 &= - n(u).
\end{align}
$$

We have
$$
\begin{align}
  g^\prime(-nu) + ng^\prime(u)=0
\end{align}
$$

We also know that $g^\prime$ is odd, since
at $n=1$, $g^\prime(-u) = -g^\prime(u)$. Then,

$$
\begin{align}
  g^\prime(nu) = ng^\prime(u),
\end{align}
$$
which is the definition of a linear function.

Hence, the solution is
$$
\begin{align}
  g^\prime(u) &= au \\\\
  g(u) &= \inv{2}au^2+b.
\end{align}
$$

For the distribution to be normalizable, $\alpha$ must be negative. Finally,
$$
\begin{align}
  f(x∣\theta) &= b\expb{-\frac{\alpha(x-\theta)^2}{2}}
\end{align}
$$

The posterior mode is found by minimizing $\sum (x_i - \theta)^2$. Since,
$$
\begin{align}
  \sum (x_i - \theta)^2 &= \sum(x_i - \bar{x}^2 + n(\bar{x}-\theta)^2),
\end{align}
$$
$\theta$ is normally distributed with mean $\bar{x}$ and precision $\alpha \sqrt{n}$.


Since we use a special sample, we only show that when the MLE $f(x\mid\theta)$ is equal to the arithmetic mean, .

Conversely, if $f(x\mid\theta)$ is satisfied, we can show that the likelihood function always have a unique solution of mean.

Hence, this is sufficient and necessary.

[^1]: Gauss, C.F.: _Theoria motus corporum coelestium in sectionibus conicis solem ambientium. Perthes et Besser, Hamburg_. Werke, 7, 1—280 (1809). Translated by C.H. Davis as Theory of the Motion of the Heavenly Bodies Moving about the Sun in Conic Sections, Little, Brown and Co., Boston, 1857.
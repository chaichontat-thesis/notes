---
title: "Convex Optimization"
section: "Real Analysis"
author: "Chaichontat Sriworarat"
date: 2020-03-22
tags: ["real analysis"]
---

# Lecture 5 Gradient Descent

Choose initial $x^{(0)}\in \real^n$ and repeat:
$$
\begin{align}
  x^{(k)} &= x^{(k-1)} - t_k ∇f\pp{x^{(k-1)}}
\end{align}
$$

#### Interpretation

Consider the following quadratic approximation function,
$$
\begin{align}
  \hat f(y) &≈ f(x) + ∇f(x)^\T (y-x) + \inv{2t}\norm{y-x}^2_2
\end{align}
$$

Idea is to minimize $x$. Hence, gradient descent is
$$
\begin{align}
  x^+ &= \argmin{y} f(x) + ∇f(x)^\T (y-x) + \inv{2t}\norm{y-x}^2_2 \\\\
  ~\\\\
  ∇\hat f(y) &= ∇f(x) + \inv{t}(y-x) = 0 \\\\
  y &= x-t∇f(x).
\end{align}
$$

Here, $t$ is the step size.

### Step size

##### Backtracking line search
1. Fix parameters $0<β<1$ and $0<α≤1/2$
2. At each iteration, start with $t=1$ and while
  $$
  \begin{align}
    f(x-t∇f(x)) > f(x)-αt\norm{∇f(x)}_2^2,
  \end{align}
  $$
  shrink $t = βt$. Else perform gradient descent update.
  Reduces slope by $\alpha$ as gradient always underestimates.

##### Exact line search
$$
\begin{align}
  t = \argmin{s≥0} f(x-s∇f(x))
\end{align}
$$
This is convex. Usually not worth it.


### Convergence Analysis

If $f$ is convex and Lipschitz continuous $(L>0)$, then gradient descent with fixed step size $t≤1/L$ satisfies
$$
\begin{align}
  f\pp{x^{(k)}} - f^∗ ≤ \frac{\norm{x^{0}-x^∗}_2^2}{2tk}
\end{align}
$$

That is, gradient descent has convergence rate $O(1/k)$.
Lipschitz means that the function can be upper-bounded by a quadratic.

**Proof**
$$
\begin{align}
  f(y) &≤ f(x)+∇f(x)^\T (y-x) + \frac{L}{2}\norm{y-x}^2_2 \\\\
  f(x^+) &≤ f(x) - \pp{1- \frac{Lt}{2}} t \norm{∇f(x)}_2^2 & \text{Let $y=x-t∇f(x)$.} \\\\
  &≤f(x) - \frac{t}{2}\norm{∇f(x)}_2^2 &\text{Let $0<t≤1/L$} \\\\
  &≤ \bk{f(x^∗) + ∇f(x)^\T (x-x^∗)} - \frac{t}{2}\norm{∇f(x)}_2^2 &\text{By convexity of $f$.}\\\\
  &= f(x^∗) + \inv{2t}\pp{\norm{x-x^∗}^2_2 - \norm{x^∗-x^+}^2_2} &\text{Check by $x^+=x-t∇f(x)$} \\\\
  \summ \pp{f(x^{i})-f(x^∗)} &≤ \inv{2t}\pp{\norm{x^{(0)}-x^∗}^2_2 - \norm{x^∗-x^{(n)}}^2_2} & \\\\
  &≤ \inv{2t}\norm{x^{(0)}-x^∗}^2_2
\end{align}
$$

Then, since $f(x^{(k)})$ is non-increasing,
$$
\begin{align}
  f(x^{(n)}) - f(x^∗) ≤ \inv{k}\summ \pp{f(x^{(i)}-f(x^∗))}≤ \frac{\norm{x^{(0)}-x^∗}_2^2}{2tn}
\end{align}
$$

#### By backtracking

Convergence has the same rate for a step size chosen by backtracking search,
$$
\begin{align}
  f(x^{(k)}) - f^∗ ≤ \frac{\norm{x^{0}-x^∗}^2_2}{2t_\min n},
\end{align}
$$
where $t_\min = \min\set{1,β/L}$.

With strong convexity, we have $O(c^k)$.
* That is, to get $f(x^{(k)})-f(x^∗)≤ϵ$, we need $O(\log(1/ϵ))$ iterations.
* This is called linear convergence (linear on a semi-log plot).
* $c$ depends on condition number $L/m$.

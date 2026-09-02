---
title: Parallel Actor Framework
description: Distributed C++ and MPI runtime for scalable, message-driven computation.
period: February 2026 - March 2026
category: Distributed systems
tags: [C++, MPI, Distributed systems]
---

## Overview

Parallel Actor Framework is a distributed actor-model runtime written in C++ with MPI. It explores asynchronous, message-driven execution across multiple nodes for compute-intensive simulations.

## What I built

- A partitioned two-dimensional computation model with locality-aware actor placement to reduce inter-process communication.
- Message routing and actor lifecycle management designed to avoid identifier collisions and preserve correctness across distributed processes.
- A Lotka-Volterra predator-prey workload used to validate the runtime's behaviour and scaling characteristics.

## Engineering focus

I used systematic debugging and profiling to identify MPI memory leaks and communication bottlenecks, improving stability during long-running executions.
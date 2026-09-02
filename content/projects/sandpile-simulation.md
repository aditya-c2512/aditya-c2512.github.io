---
title: Sandpile Simulation
description: Distributed MPI simulation using two-dimensional domain decomposition on ARCHER2.
period: November 2025
category: High-performance computing
tags: [C++, MPI, ARCHER2]
---

## Overview

This project re-architects a sequential two-dimensional sandpile simulation as a distributed-memory system for high-performance computing infrastructure.

## What I built

- Two-dimensional domain decomposition to partition the simulation across MPI processes.
- Halo exchange for boundaries between neighbouring process regions.
- Validation against the serial implementation to confirm the distributed simulation remains correct.

## Results

The implementation achieved strong scaling up to 1024 processes on ARCHER2. Profiling identified communication overhead as the primary scaling constraint.
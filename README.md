# React 19 useEffect Infinite Loop Bug

This repository demonstrates a common error in React 19 involving the `useEffect` hook that can lead to an infinite loop. The bug arises from an incorrect usage of functional state updates and an improperly defined dependency array in `useEffect`.

## Bug Description
The `useEffect` hook is used to perform side effects based on changes to state variables. However, in this example, the functional state update function within the `useEffect` callback updates the `count` state, triggering a re-render and causing the `useEffect` to run again, resulting in an infinite loop. Furthermore, including `count` in the dependency array makes the effect run every time `count` changes, exacerbating the problem.

## Solution
The solution is to correctly manage the dependencies and ensure that the state update does not trigger the useEffect function again in the same render cycle.  We can use a flag to prevent unnecessary useEffect executions or restructuring of the logic to use the state update correctly.